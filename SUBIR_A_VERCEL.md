# 🚀 SUBIR OROMA A VERCEL - Paso a Paso

## 📍 PARTE 1: SUBIR A GITHUB (5 minutos)

### Paso 1: Crear repositorio en GitHub

1. **Abre tu navegador** y ve a: https://github.com/new

2. **Rellena el formulario:**
   - **Repository name:** `oroma` (o el nombre que quieras)
   - **Description:** (opcional) `OROMA - Luxury travel experiences in Colombia`
   - Selecciona: **Public** o **Private** (tu eliges)

3. **⚠️ MUY IMPORTANTE - NO MARQUES NADA MÁS:**
   - ❌ **NO marques** "Add a README file"
   - ❌ **NO marques** "Add .gitignore"
   - ❌ **NO marques** "Choose a license"

4. **Click:** Botón verde **"Create repository"**

---

### Paso 2: Conectar tu proyecto local con GitHub

GitHub te mostrará una página con comandos. **IGNÓRALOS** y usa estos:

**En tu terminal** (donde ya hiciste el commit), copia estos comandos:

```bash
# Conectar con GitHub (REEMPLAZA tu-usuario con TU usuario de GitHub)
git remote add origin https://github.com/tu-usuario/oroma.git
```

**Ejemplo real:**
```bash
# Si tu usuario es "juliansanchez"
git remote add origin https://github.com/juliansanchez/oroma.git
```

---

### Paso 3: Subir el código

```bash
git push -u origin main
```

**Espera ver:**
```
Enumerating objects: 100, done.
Counting objects: 100% (100/100), done.
Writing objects: 100% (100/100), 50.00 KiB | 5.00 MiB/s, done.
Total 100 (delta 20), reused 0 (delta 0)
To https://github.com/tu-usuario/oroma.git
 * [new branch]      main -> main
```

---

### Paso 4: Verificar en GitHub

1. Ve a: `https://github.com/tu-usuario/oroma`
2. **Deberías ver** todos los archivos de OROMA 🎉

---

## ☁️ PARTE 2: DEPLOY EN VERCEL (3 minutos)

### Opción A: Desde el navegador (MÁS FÁCIL) ⭐ RECOMENDADO

#### 1. Entra a Vercel

Ve a: https://vercel.com/login

**Opciones de login:**
- Login con GitHub (recomendado)
- Login con email
- Login con GitLab/Bitbucket

**Elige GitHub** para más fácil integración

---

#### 2. Importar proyecto

Una vez dentro de Vercel:

1. Click en **"Add New..."** (arriba a la derecha)
2. Click en **"Project"**
3. Vercel te preguntará permisos de GitHub (acepta)

---

#### 3. Seleccionar repositorio

1. Busca **"oroma"** en la lista de repositorios
2. Click en **"Import"** al lado de oroma

---

#### 4. Configurar proyecto

Vercel detecta automáticamente que es Vite. Verifica que veas:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**¿Todo bien?** → Click **"Deploy"** (botón azul)

---

#### 5. Esperar (1-2 minutos)

Verás una animación de cohete 🚀

Cuando termine:
- ✅ **"Congratulations!"**
- Verás tu URL: `https://oroma-xxxxx.vercel.app`

---

#### 6. ¡LISTO! 🎉

Click en **"Visit"** o en la URL para ver tu sitio en vivo.

---

## 🎯 VERIFICACIÓN FINAL

Abre tu sitio y verifica:

- [ ] ✅ Landing page se ve correctamente
- [ ] ✅ Cambio de idiomas funciona (selector arriba a la derecha)
- [ ] ✅ Navegación funciona (click en secciones)
- [ ] ✅ Imágenes cargan
- [ ] ✅ Responsive en móvil (abre desde tu teléfono)
- [ ] ✅ Formulario funciona

---

## 🔄 PARA FUTUROS CAMBIOS

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

**Vercel hace deploy automáticamente** 🎉

---

## ⚠️ ERRORES COMUNES

### Error 1: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/tu-usuario/oroma.git
git push -u origin main
```

### Error 2: "refusing to merge unrelated histories"

```bash
git push -u origin main --force
```

### Error 3: Build falla en Vercel

**Causa:** Falta el script de dev en package.json

**Solución:** Agrega esto a package.json:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Luego:
```bash
git add package.json
git commit -m "Add dev script"
git push
```

Vercel hará redeploy automáticamente.

---

## 🌐 TU SITIO WEB

Después del deploy, tendrás:

- **URL temporal:** `https://oroma-xxxxx.vercel.app`
- Puedes cambiarla en: Vercel → Project Settings → Domains
- O conectar tu propio dominio (ejemplo: `oroma.com`)

---

## 📊 DASHBOARD DE VERCEL

En Vercel puedes ver:

- 📈 **Analytics:** Visitas, performance
- 🌍 **Deployments:** Historial de deploys
- ⚙️ **Settings:** Configuración
- 🔗 **Domains:** Agregar dominios custom

---

## 💡 TIPS PRO

1. **Preview deployments:** Vercel crea URLs preview automáticamente para cada commit
2. **Variables de entorno:** Si necesitas API keys, agrégalas en Settings → Environment Variables
3. **Custom domain:** En Settings → Domains puedes agregar tu dominio (ejemplo: oroma.com)
4. **Analytics:** Activa Vercel Analytics para ver estadísticas

---

## 🎉 RESUMEN

1. ✅ Git commit local (YA LO HICISTE)
2. ✅ Crear repo en GitHub
3. ✅ Subir código: `git push`
4. ✅ Import en Vercel
5. ✅ Deploy automático
6. ✅ ¡Sitio en vivo!

**TIEMPO TOTAL: ~10 minutos** ⏱️

---

## 📞 ¿NECESITAS AYUDA?

Si algo no funciona:
1. Verifica que el código está en GitHub
2. Revisa los logs en Vercel (muestra errores claros)
3. Asegúrate que package.json tiene el script "build"

**¡Éxito!** 🚀✨
