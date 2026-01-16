# ✅ CHECKLIST PASO A PASO

## 📍 ANTES DE EMPEZAR

```bash
# 1. Abre la terminal

# 2. Ve a la carpeta de OROMA
cd /ruta/a/tu/carpeta/oroma

# 3. Verifica que estás en el lugar correcto
pwd
# Debe decir algo como: /Users/tu-nombre/Proyectos/oroma
```

---

## 🔄 COMANDOS (Copia uno por uno)

### ✅ Paso 1: Inicializar Git

```bash
git init
```

**Espera ver:** `Initialized empty Git repository in...`

---

### ✅ Paso 2: Agregar archivos

```bash
git add .
```

**Sin mensajes = Éxito** ✅

---

### ✅ Paso 3: Hacer commit

```bash
git commit -m "Initial commit: OROMA luxury travel landing page"
```

**Espera ver:** Muchas líneas con archivos creados

---

### ✅ Paso 4: Crear rama main

```bash
git branch -M main
```

**Sin mensajes = Éxito** ✅

---

## 🌐 GITHUB (Ahora ve al navegador)

1. Ve a: https://github.com/new

2. Rellena:
   - **Repository name:** `oroma`
   - **Description:** (opcional) "OROMA luxury travel landing page"
   - **Public** o **Private** (tú decides)
   
3. **⚠️ IMPORTANTE - NO MARQUES:**
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license

4. Click: **"Create repository"**

5. **GitHub te mostrará comandos**, IGNÓRALOS y usa estos:

---

## 🔗 CONECTAR Y SUBIR

```bash
# Reemplaza TU_USUARIO con tu usuario real de GitHub
git remote add origin https://github.com/TU_USUARIO/oroma.git
```

```bash
# Sube el código
git push -u origin main
```

**Espera ver:** 
```
Enumerating objects...
Counting objects...
Writing objects: 100%
```

---

## 🎉 VERIFICACIÓN

1. Ve a: `https://github.com/TU_USUARIO/oroma`

2. **Deberías ver:**
   - ✅ Todos los archivos de OROMA
   - ✅ Carpetas: `src/`, `public/`
   - ✅ Archivos: `README.md`, `package.json`, etc.

---

## ⚠️ SI ALGO SALE MAL

### Error: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/oroma.git
git push -u origin main
```

### Error: "refusing to merge unrelated histories"

```bash
git push -u origin main --force
```

### ¿Nada funciona?

```bash
# Empieza de nuevo (seguro)
rm -rf .git
git init
git add .
git commit -m "Initial commit: OROMA luxury travel landing page"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/oroma.git
git push -u origin main
```

---

## 🎯 RESUMEN ULTRA SIMPLE

1. **Terminal:** 4 comandos de git
2. **GitHub:** Crear repositorio vacío
3. **Terminal:** 2 comandos para conectar y subir
4. **Navegador:** Verificar en GitHub

**TOTAL: 10 minutos máximo** ⏱️

---

## 🛡️ RECUERDA

- ✅ Tus otros proyectos están SEGUROS
- ✅ Cada proyecto es INDEPENDIENTE
- ✅ Git solo afecta esta carpeta
- ✅ No hay forma de dañar otros proyectos

**¡ADELANTE!** 🚀
