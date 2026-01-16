# 🚀 OROMA Deployment Guide

## 📋 Pre-requisitos

1. Git instalado
2. Cuenta en GitHub
3. Cuenta en Vercel

---

## 🔄 PASO 1: Commit Inicial

Copia y pega estos comandos en tu terminal:

```bash
# 1. Inicializar repositorio Git
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el commit inicial
git commit -m "Initial commit: OROMA luxury travel landing page"

# 4. Crear rama main
git branch -M main
```

---

## 🔗 PASO 2: Conectar con GitHub

### A. Crear repositorio en GitHub

1. Ve a https://github.com
2. Click en **"New repository"**
3. Nombre: `oroma` (o el que prefieras)
4. **NO marques**: "Add a README" ni "Add .gitignore"
5. Click **"Create repository"**

### B. Conectar tu proyecto local

```bash
# Reemplaza TU_USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/oroma.git

# Subir el código
git push -u origin main
```

---

## ☁️ PASO 3: Deploy en Vercel

### Opción A: Desde GitHub (Recomendado)

1. Ve a https://vercel.com
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Selecciona tu repositorio `oroma`
5. Vercel detectará automáticamente:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**
7. Espera 1-2 minutos ✨

### Opción B: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## ✅ Verificación

Una vez deployado:

- [ ] URL de producción funcionando
- [ ] Cambio de idiomas funciona
- [ ] Navegación entre secciones funciona
- [ ] Diseño responsive en móvil
- [ ] Formulario de aplicación funciona

---

## 🔄 Futuros Deploys

Después del setup inicial, cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

**Vercel hará deploy automáticamente** 🎉

---

## 📝 Estructura del Proyecto

```
oroma/
├── src/
│   ├── app/
│   │   ├── App.tsx                   # Entry point
│   │   └── components/
│   │       ├── OromaLanding.tsx      # Main landing page
│   │       ├── LanguageSelector.tsx  # Language switcher
│   │       └── ui/                   # UI components
│   ├── i18n/
│   │   ├── config.ts                 # i18n setup
│   │   └── locales/                  # Translations (6 languages)
│   └── styles/                       # Global styles
├── public/                           # Static assets
├── .gitignore                        # Files to ignore
├── package.json                      # Dependencies
└── README.md                         # Documentation
```

---

## 🌐 Idiomas Soportados

- 🇬🇧 English
- 🇪🇸 Español
- 🇩🇪 Deutsch
- 🇳🇴 Norsk
- 🇳🇱 Nederlands
- 🇫🇷 Français

---

## 🎨 Paleta de Colores

- **Terracotta Coral**: `#D4735E`
- **Rose Gold**: `#C9A78A`
- **Warm Cream**: `#FAF8F5`
- **Sage Green**: `#8FA88F`
- **Deep Brown**: `#2D2520`

---

## 📞 Soporte

¿Problemas con el deployment?
- GitHub: https://docs.github.com
- Vercel: https://vercel.com/docs
