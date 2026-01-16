# 🎯 COMANDOS FINALES - Copiar y Pegar

## ⚡ PASO 1: Commit del cambio en package.json

Acabo de agregar los scripts necesarios para Vercel. Haz un commit:

```bash
git add package.json
```

```bash
git commit -m "Add dev and preview scripts for Vercel"
```

---

## 🌐 PASO 2: Crear repositorio en GitHub

1. Abre: https://github.com/new

2. Configura:
   - **Repository name:** `oroma`
   - **Public** o **Private** (tu decides)
   - ❌ NO marques "Add README"
   - ❌ NO marques "Add .gitignore"

3. Click: **"Create repository"**

---

## 🔗 PASO 3: Conectar y subir

**REEMPLAZA `tu-usuario` con tu usuario real de GitHub:**

```bash
git remote add origin https://github.com/tu-usuario/oroma.git
```

**Ejemplo:**
```bash
# Si tu usuario de GitHub es "juliansanchez"
git remote add origin https://github.com/juliansanchez/oroma.git
```

Luego sube el código:

```bash
git push -u origin main
```

---

## ✅ PASO 4: Verificar en GitHub

Ve a: `https://github.com/tu-usuario/oroma`

Deberías ver todos los archivos ✅

---

## ☁️ PASO 5: Deploy en Vercel

### Opción A: Desde el navegador (RECOMENDADO)

1. Ve a: https://vercel.com/login
2. Login con GitHub
3. Click: **"Add New..." → "Project"**
4. Busca: **"oroma"**
5. Click: **"Import"**
6. Vercel detecta Vite automáticamente
7. Click: **"Deploy"**
8. Espera 1-2 minutos 🚀
9. ¡Listo! Copia tu URL

### Opción B: Desde la terminal (ALTERNATIVA)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 🎉 ¡TERMINADO!

Tu sitio estará en vivo en:
`https://oroma-xxxxx.vercel.app`

---

## 🔄 Para futuros cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Vercel redeploya automáticamente ✨

---

## 📱 Prueba tu sitio:

- [ ] Abre la URL de Vercel
- [ ] Cambia de idioma
- [ ] Navega por las secciones
- [ ] Prueba en móvil
- [ ] Revisa que todo funcione

**¡Éxito!** 🚀
