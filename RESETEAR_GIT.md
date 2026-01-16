# 🔄 RESETEAR GIT - Empezar de Cero

## ⚡ OPCIÓN 1: Reset Rápido (RECOMENDADO)

Copia y pega estos comandos **uno por uno**:

```bash
# 1. Eliminar el repositorio Git actual
rm -rf .git
```

```bash
# 2. Verificar que se eliminó (no debería mostrar nada)
ls -la | grep .git
```

**¡Listo!** Ya reseteaste Git completamente ✅

---

## 🚀 Ahora empieza de cero:

```bash
# 1. Inicializar Git nuevo
git init
```

```bash
# 2. Agregar archivos
git add .
```

```bash
# 3. Primer commit
git commit -m "Initial commit: OROMA luxury travel landing page"
```

```bash
# 4. Crear rama main
git branch -M main
```

---

## 📊 VERIFICACIÓN

Para confirmar que todo está limpio:

```bash
# Ver estado de Git
git status
```

Deberías ver:
```
On branch main
nothing to commit, working tree clean
```

```bash
# Ver que no hay remotes
git remote -v
```

No debería mostrar nada (está limpio) ✅

---

## 🎯 SIGUIENTE PASO

Ahora sí, crea el repositorio en GitHub:

1. Ve a: https://github.com/new
2. Nombre: `oroma`
3. NO marques nada
4. Click "Create repository"

Luego conecta:

```bash
# Reemplaza tu-usuario con tu usuario de GitHub
git remote add origin https://github.com/tu-usuario/oroma.git
```

```bash
# Sube el código
git push -u origin main
```

---

## ⚠️ SI EL COMANDO rm -rf .git DA MIEDO

Es normal, pero es **seguro** porque:

- ✅ Solo elimina la carpeta `.git` (el historial de Git)
- ✅ **NO** elimina tus archivos de código
- ✅ **NO** elimina nada en OROMA
- ✅ Solo resetea Git para empezar limpio

Tus archivos `App.tsx`, `package.json`, etc. **quedan intactos** 🛡️

---

## 🔍 ALTERNATIVA: Verificar primero qué se va a eliminar

Si quieres ver qué hay en `.git` antes de eliminar:

```bash
# Ver el tamaño de .git
du -sh .git
```

```bash
# Ver qué contiene
ls -la .git
```

Luego elimínala con confianza:

```bash
rm -rf .git
```

---

## ✅ RESUMEN

1. `rm -rf .git` → Elimina Git
2. `git init` → Empieza de cero
3. `git add .` → Agrega archivos
4. `git commit -m "..."` → Commit inicial
5. Conecta con GitHub
6. `git push` → Sube código

**TIEMPO: 2 minutos** ⏱️

---

## 💡 TIP

Si en el futuro quieres resetear solo el último commit (sin borrar todo):

```bash
# Deshacer el último commit (mantiene los cambios)
git reset --soft HEAD~1
```

Pero para ahora, **reset completo** es lo mejor 🔄

¡Listo para empezar limpio! 🚀
