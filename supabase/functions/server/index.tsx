import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "apikey"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-ae3a00e9/health", (c) => {
  return c.json({ status: "ok" });
});

// ============================================
// GESTIÓN DE USUARIOS (AUTH)
// ============================================

// Endpoint especial para CREAR la cuenta del Owner desde cero
app.post("/make-server-ae3a00e9/create-owner", async (c) => {
  try {
    const { nombre, email, password } = await c.req.json();

    if (!nombre || !email || !password) {
      return c.json({ error: "Nombre, email y password son requeridos" }, 400);
    }

    if (password.length < 6) {
      return c.json({ error: "La contraseña debe tener al menos 6 caracteres" }, 400);
    }

    console.log("🔧 Creando cuenta de Owner:", email);

    // Usar SERVICE_ROLE_KEY para crear el usuario
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Crear el usuario en Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Confirmar automáticamente porque no hay servidor de email
      user_metadata: { 
        nombre,
        role: 'owner' 
      }
    });

    if (authError) {
      console.error("❌ Error creando usuario en Auth:", authError);
      return c.json({ error: authError.message }, 400);
    }

    if (!authData.user) {
      return c.json({ error: "No se pudo crear el usuario" }, 500);
    }

    console.log("✅ Usuario creado en Auth:", authData.user.id);

    // Crear el registro del owner en KV
    const nuevoOwner = {
      id: authData.user.id,
      email,
      nombre,
      role: "owner",
      fechaCreacion: new Date().toISOString(),
      activo: true
    };

    await kv.set(`usuario:${authData.user.id}`, nuevoOwner);

    console.log("✅ Owner registrado en KV:", nuevoOwner);

    return c.json({ 
      success: true, 
      message: "Cuenta de Owner creada correctamente",
      usuario: nuevoOwner 
    }, 201);
  } catch (error: any) {
    console.error("❌ Error creando Owner:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Endpoint especial para inicializar el Owner automáticamente
app.post("/make-server-ae3a00e9/init-owner", async (c) => {
  try {
    const { userId, email, nombre } = await c.req.json();

    if (!userId || !email) {
      return c.json({ error: "userId y email son requeridos" }, 400);
    }

    // Validar que el usuario está autenticado en Supabase
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Token de autorización requerido" }, 401);
    }

    // Validar el token con Supabase
    const supabaseAnon = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const { data: { user }, error: authError } = await supabaseAnon.auth.getUser(accessToken);
    
    if (authError || !user) {
      console.error("❌ Error validando token:", authError);
      return c.json({ error: "Token inválido o expirado" }, 401);
    }

    // Verificar que el userId coincide con el usuario autenticado
    if (user.id !== userId) {
      return c.json({ error: "El userId no coincide con el usuario autenticado" }, 403);
    }

    console.log("✅ Usuario validado:", user.id, user.email);

    // Verificar si el usuario ya está registrado en KV
    const usuarioExistente = await kv.get(`usuario:${userId}`);
    
    if (usuarioExistente) {
      console.log("ℹ️ Usuario ya existe en KV:", usuarioExistente);
      return c.json({ 
        message: "Usuario ya inicializado",
        usuario: usuarioExistente 
      });
    }

    // Crear el registro del owner en KV
    const nuevoOwner = {
      id: userId,
      email,
      nombre: nombre || "Owner", // Usar nombre proporcionado o "Owner" por defecto
      role: "owner",
      fechaCreacion: new Date().toISOString(),
      activo: true
    };

    await kv.set(`usuario:${userId}`, nuevoOwner);

    console.log("✅ Owner creado en KV:", nuevoOwner);

    return c.json({ 
      success: true, 
      message: "Owner inicializado correctamente",
      usuario: nuevoOwner 
    }, 201);
  } catch (error: any) {
    console.error("❌ Error inicializando owner:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Crear un nuevo usuario
app.post("/make-server-ae3a00e9/usuarios", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { email, password, role, nombre } = await c.req.json();

    console.log('📝 Intentando crear usuario:', { email, role, nombre });

    // Validaciones
    if (!email || !password || !role || !nombre) {
      console.error('❌ Faltan campos requeridos');
      return c.json({ error: "Email, password, role y nombre son requeridos" }, 400);
    }

    // IMPORTANTE: Crear cliente con ANON_KEY para validar el token del usuario
    const supabaseAnon = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    // Verificar permisos del usuario actual usando el token
    const { data: { user }, error: authError } = await supabaseAnon.auth.getUser(accessToken);
    
    if (authError || !user) {
      console.error('❌ Error de autenticación:', authError);
      return c.json({ error: "No autorizado" }, 401);
    }

    console.log('✅ Usuario autenticado:', user.id);

    // Obtener rol del usuario actual
    const usuarioActual = await kv.get(`usuario:${user.id}`);
    
    if (!usuarioActual) {
      console.error('❌ Usuario actual no encontrado en KV');
      return c.json({ error: "Usuario no encontrado en el sistema" }, 404);
    }

    console.log('✅ Usuario actual encontrado:', usuarioActual.role);

    // Verificar permisos según rol
    if (usuarioActual.role === 'owner' && role !== 'admin') {
      console.error('❌ Owner intentando crear rol:', role);
      return c.json({ error: "Owner solo puede crear Admins" }, 403);
    }

    if (usuarioActual.role === 'admin' && role !== 'programador') {
      console.error('❌ Admin intentando crear rol:', role);
      return c.json({ error: "Admin solo puede crear Programadores" }, 403);
    }

    if (usuarioActual.role !== 'owner' && usuarioActual.role !== 'admin') {
      console.error('❌ Usuario sin permisos:', usuarioActual.role);
      return c.json({ error: "No tienes permisos para crear usuarios" }, 403);
    }

    console.log('✅ Permisos validados. Creando usuario en Supabase Auth...');

    // Crear usuario en Supabase Auth
    const { data, error } = await supabaseAnon.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirmar email
      user_metadata: { nombre, role }
    });

    if (error) {
      console.error("❌ Error creando usuario en Supabase Auth:", error.message);
      return c.json({ error: `Error al crear usuario: ${error.message}` }, 500);
    }

    console.log('✅ Usuario creado en Supabase Auth:', data.user.id);

    // Guardar información del usuario en KV
    const nuevoUsuario = {
      id: data.user.id,
      email,
      nombre,
      role,
      creadoPor: user.id,
      fechaCreacion: new Date().toISOString(),
      activo: true
    };

    await kv.set(`usuario:${data.user.id}`, nuevoUsuario);
    console.log('✅ Usuario guardado en KV');

    return c.json({ success: true, usuario: nuevoUsuario }, 201);
  } catch (error: any) {
    console.error("❌ Error en endpoint de crear usuario:", error.message, error.stack);
    return c.json({ error: `Error del servidor: ${error.message}` }, 500);
  }
});

// Obtener usuarios (filtrados según rol)
app.get("/make-server-ae3a00e9/usuarios", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];

    // IMPORTANTE: Usar ANON_KEY para validar el token del usuario
    const supabaseAnon = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const { data: { user }, error: authError } = await supabaseAnon.auth.getUser(accessToken);
    
    if (authError || !user) {
      return c.json({ error: "No autorizado" }, 401);
    }

    const usuarioActual = await kv.get(`usuario:${user.id}`);
    
    if (!usuarioActual) {
      return c.json({ error: "Usuario no encontrado" }, 404);
    }

    // Obtener todos los usuarios
    const usuarios = await kv.getByPrefix("usuario:");
    const usuariosValidos = usuarios
      .filter(item => item && item.value)
      .map(item => item.value);

    // Filtrar según rol del usuario actual
    let usuariosFiltrados = usuariosValidos;

    if (usuarioActual.role === 'owner') {
      // Owner ve solo admins
      usuariosFiltrados = usuariosValidos.filter(u => u.role === 'admin');
    } else if (usuarioActual.role === 'admin') {
      // Admin ve solo programadores
      usuariosFiltrados = usuariosValidos.filter(u => u.role === 'programador');
    } else {
      return c.json({ error: "No tienes permisos para ver usuarios" }, 403);
    }

    return c.json(usuariosFiltrados);
  } catch (error: any) {
    console.error("Error obteniendo usuarios:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Eliminar usuario
app.delete("/make-server-ae3a00e9/usuarios/:id", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const userId = c.req.param("id");

    // IMPORTANTE: Usar ANON_KEY para validar el token, SERVICE_ROLE solo para eliminar
    const supabaseAnon = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const { data: { user }, error: authError } = await supabaseAnon.auth.getUser(accessToken);
    
    if (authError || !user) {
      return c.json({ error: "No autorizado" }, 401);
    }

    const usuarioActual = await kv.get(`usuario:${user.id}`);
    const usuarioAEliminar = await kv.get(`usuario:${userId}`);
    
    if (!usuarioActual || !usuarioAEliminar) {
      return c.json({ error: "Usuario no encontrado" }, 404);
    }

    // Verificar permisos
    if (usuarioActual.role === 'owner' && usuarioAEliminar.role !== 'admin') {
      return c.json({ error: "Owner solo puede eliminar Admins" }, 403);
    }

    if (usuarioActual.role === 'admin' && usuarioAEliminar.role !== 'programador') {
      return c.json({ error: "Admin solo puede eliminar Programadores" }, 403);
    }

    if (usuarioActual.role !== 'owner' && usuarioActual.role !== 'admin') {
      return c.json({ error: "No tienes permisos para eliminar usuarios" }, 403);
    }

    // AHORA SÍ: Usar SERVICE_ROLE solo para la operación de eliminación
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Eliminar de Supabase Auth
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (deleteError) {
      console.error("Error eliminando usuario de Supabase:", deleteError);
      return c.json({ error: deleteError.message }, 500);
    }

    // Eliminar de KV
    await kv.del(`usuario:${userId}`);

    return c.json({ success: true, message: "Usuario eliminado correctamente" });
  } catch (error: any) {
    console.error("Error eliminando usuario:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Obtener un usuario por ID
app.get("/make-server-ae3a00e9/usuarios/:id", async (c) => {
  try {
    const userId = c.req.param("id");
    const usuario = await kv.get(`usuario:${userId}`);
    
    if (!usuario) {
      return c.json({ error: "Usuario no encontrado" }, 404);
    }
    
    return c.json(usuario);
  } catch (error: any) {
    console.error("Error obteniendo usuario:", error);
    return c.json({ error: error.message }, 500);
  }
});

// ============================================
// CLIENTES ENDPOINTS
// ============================================

// Obtener todos los clientes
app.get("/make-server-ae3a00e9/clientes", async (c) => {
  try {
    const clientes = await kv.getByPrefix("cliente:");
    // Filtrar valores null o inválidos
    const clientesValidos = clientes
      .filter(item => item && item.value && item.value.fechaRegistro && item.value.telefono)
      .map(item => item.value);
    return c.json(clientesValidos);
  } catch (error: any) {
    console.error("Error obteniendo clientes:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Obtener cliente por ID
app.get("/make-server-ae3a00e9/clientes/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const cliente = await kv.get(`cliente:${id}`);
    
    if (!cliente) {
      return c.json({ error: "Cliente no encontrado" }, 404);
    }
    
    return c.json(cliente);
  } catch (error: any) {
    console.error("Error obteniendo cliente:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Crear nuevo cliente
app.post("/make-server-ae3a00e9/clientes", async (c) => {
  try {
    const clienteData = await c.req.json();
    
    // Validar teléfono requerido
    if (!clienteData.telefono || !clienteData.nombre) {
      return c.json({ error: "Teléfono y nombre son requeridos" }, 400);
    }

    // Verificar si ya existe un cliente con ese teléfono
    const clientesExistentes = await kv.getByPrefix("cliente:");
    const clienteExistente = clientesExistentes.find(
      (item: any) => item?.value?.telefono === clienteData.telefono
    );

    if (clienteExistente) {
      return c.json({ error: "Ya existe un cliente con ese teléfono" }, 409);
    }

    const nuevoCliente = {
      id: crypto.randomUUID(),
      ...clienteData,
      fechaRegistro: new Date().toISOString(),
      totalServicios: 0,
      totalGastado: 0,
      historialServicios: [],
    };

    await kv.set(`cliente:${nuevoCliente.id}`, nuevoCliente);
    return c.json(nuevoCliente, 201);
  } catch (error: any) {
    console.error("Error creando cliente:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Actualizar cliente
app.put("/make-server-ae3a00e9/clientes/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const updateData = await c.req.json();
    
    const clienteExistente = await kv.get(`cliente:${id}`);
    if (!clienteExistente) {
      return c.json({ error: "Cliente no encontrado" }, 404);
    }

    const clienteActualizado = {
      ...clienteExistente,
      ...updateData,
      id, // Asegurar que el ID no cambie
    };

    await kv.set(`cliente:${id}`, clienteActualizado);
    return c.json(clienteActualizado);
  } catch (error: any) {
    console.error("Error actualizando cliente:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Buscar cliente por teléfono
app.get("/make-server-ae3a00e9/clientes/buscar/:telefono", async (c) => {
  try {
    const telefono = c.req.param("telefono");
    const clientes = await kv.getByPrefix("cliente:");
    const cliente = clientes.find(
      (item: any) => item.value.telefono === telefono
    );

    if (!cliente) {
      return c.json(null);
    }

    return c.json(cliente.value);
  } catch (error: any) {
    console.error("Error buscando cliente por teléfono:", error);
    return c.json({ error: error.message }, 500);
  }
});

// ============================================
// GESTIÓN DE STREAMS DE VIDEO (OBS)
// ============================================

// Inicializar streams por defecto
const initDefaultStreams = async () => {
  const sedes = [
    { id: 'sede-1', name: 'Sede Zona Norte' },
    { id: 'sede-2', name: 'Sede Centro' },
    { id: 'sede-3', name: 'Sede Zona Rosa' },
    { id: 'sede-4', name: 'Sede Elite Spa' },
    { id: 'sede-5', name: 'Sede Penthouse' },
  ];

  for (const sede of sedes) {
    const existing = await kv.get(`stream:${sede.id}`);
    if (!existing) {
      await kv.set(`stream:${sede.id}`, {
        sedeId: sede.id,
        sedeName: sede.name,
        streamUrl: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
        streamKey: '',
        rtmpUrl: '',
        isLive: true,
        lastUpdated: new Date().toISOString(),
      });
    }
  }
};

// Obtener todos los streams
app.get("/make-server-ae3a00e9/streams", async (c) => {
  try {
    // Inicializar streams si no existen
    await initDefaultStreams();

    const streams = await kv.getByPrefix("stream:");
    // getByPrefix ya devuelve solo los valores, filtrar nulls y ordenar
    const validStreams = streams
      .filter((stream: any) => stream && stream.sedeId)
      .sort((a: any, b: any) => a.sedeId.localeCompare(b.sedeId));
    
    return c.json({ 
      streams: validStreams
    });
  } catch (error: any) {
    console.error("Error obteniendo streams:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Obtener stream de una sede específica
app.get("/make-server-ae3a00e9/streams/:sedeId", async (c) => {
  try {
    const sedeId = c.req.param("sedeId");
    const stream = await kv.get(`stream:${sedeId}`);

    if (!stream) {
      return c.json({ error: "Stream no encontrado" }, 404);
    }

    return c.json(stream);
  } catch (error: any) {
    console.error("Error obteniendo stream:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Actualizar URL del stream
app.put("/make-server-ae3a00e9/streams/:sedeId", async (c) => {
  try {
    const sedeId = c.req.param("sedeId");
    const { streamUrl, streamKey, rtmpUrl } = await c.req.json();

    const existing = await kv.get(`stream:${sedeId}`);
    if (!existing) {
      return c.json({ error: "Stream no encontrado" }, 404);
    }

    const updated = {
      ...existing,
      ...(streamUrl !== undefined && { streamUrl }),
      ...(streamKey !== undefined && { streamKey }),
      ...(rtmpUrl !== undefined && { rtmpUrl }),
      lastUpdated: new Date().toISOString(),
    };

    await kv.set(`stream:${sedeId}`, updated);
    return c.json(updated);
  } catch (error: any) {
    console.error("Error actualizando stream:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Actualizar estado en vivo
app.put("/make-server-ae3a00e9/streams/:sedeId/live", async (c) => {
  try {
    const sedeId = c.req.param("sedeId");
    const { isLive } = await c.req.json();

    const existing = await kv.get(`stream:${sedeId}`);
    if (!existing) {
      return c.json({ error: "Stream no encontrado" }, 404);
    }

    const updated = {
      ...existing,
      isLive,
      lastUpdated: new Date().toISOString(),
    };

    await kv.set(`stream:${sedeId}`, updated);
    return c.json(updated);
  } catch (error: any) {
    console.error("Error actualizando estado en vivo:", error);
    return c.json({ error: error.message }, 500);
  }
});

Deno.serve(app.fetch);