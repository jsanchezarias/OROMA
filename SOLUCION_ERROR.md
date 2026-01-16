# 🔧 SOLUCIÓN - Error "No such file or directory"

## ❌ Error que tienes:

```
fatal: Unable to read current working directory: No such file or directory
```

## ✅ SOLUCIÓN RÁPIDA

### Opción 1: Cierra y abre la terminal (MÁS FÁCIL)

```bash
# 1. Cierra la ventana de la terminal completamente (⌘ + Q)

# 2. Abre una terminal nueva

# 3. Ve a la carpeta de OROMA
cd /ruta/completa/a/OROMA

# Por ejemplo:
cd ~/Desktop/OROMA
# o
cd ~/Documents/OROMA
# o
cd ~/Proyectos/OROMA
```

### Opción 2: Sin cerrar la terminal

```bash
# 1. Ve a tu carpeta home primero
cd ~

# 2. Ahora ve a OROMA (ajusta la ruta según donde esté)
cd Desktop/OROMA
# o
cd Documents/OROMA
```

---

## 🔍 ¿DÓNDE ESTÁ TU CARPETA OROMA?

Si no sabes dónde está la carpeta, busca así:

```bash
# Buscar la carpeta OROMA
find ~ -name "OROMA" -type d 2>/dev/null
```

Esto te mostrará la ruta completa, por ejemplo:
```
/Users/juliansanchez/Desktop/OROMA
```

---

## 📍 PASO A PASO DESDE CERO

### 1. Cierra la terminal

Presiona `⌘ + Q` o cierra todas las ventanas

### 2. Abre Terminal nueva

Busca "Terminal" en Spotlight (⌘ + Espacio)

### 3. Navega a OROMA

```bash
# Si está en Desktop:
cd ~/Desktop/OROMA

# Si está en Documents:
cd ~/Documents/OROMA

# Si está en otra parte:
cd /ruta/completa/donde/está/OROMA
```

### 4. Verifica que estás en el lugar correcto

```bash
pwd
```

Deberías ver algo como:
```
/Users/juliansanchez/Desktop/OROMA
```

### 5. Verifica que los archivos están ahí

```bash
ls
```

Deberías ver:
```
README.md
package.json
src/
public/
...
```

---

## 🔄 AHORA SÍ - COMANDOS COMPLETOS

Una vez que estés en la carpeta correcta:

```bash
# 1. Inicializa Git
git init
```

```bash
# 2. Agrega archivos
git add .
```

```bash
# 3. Commit
git commit -m "Initial commit: OROMA luxury travel landing page"
```

```bash
# 4. Crea rama main
git branch -M main
```

---

## ⚠️ ALTERNATIVA: TODO EN UNO

Si prefieres hacer todo de una vez (después de estar en la carpeta correcta):

```bash
git init && git add . && git commit -m "Initial commit: OROMA luxury travel landing page" && git branch -M main
```

---

## 💡 ¿POR QUÉ PASÓ ESTO?

Esto puede pasar si:
- La carpeta se movió mientras la terminal estaba abierta
- Se cambió el nombre de la carpeta
- Hay permisos especiales en la carpeta
- La terminal perdió la referencia

**Solución simple: Terminal fresca** 🔄

---

## ✅ DESPUÉS DE ARREGLARLO

Una vez que funcione todo, continúa con:

```bash
# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/oroma.git

# Subir
git push -u origin main
```

---

## 🆘 SI SIGUE SIN FUNCIONAR

Verifica permisos de la carpeta:

```bash
ls -ld .
```

Deberías ver algo como:
```
drwxr-xr-x  10 juliansanchez  staff  320 Jan 16 10:00 .
```

Si ves errores, puede ser un problema de permisos. En ese caso:

```bash
# Da permisos completos a la carpeta
chmod -R 755 .
```

---

## 📞 RECUERDA

- ✅ Este error es COMÚN y FÁCIL de arreglar
- ✅ Solo necesitas una terminal fresca
- ✅ Tus archivos están SEGUROS
- ✅ No perdiste nada

**¡Vuelve a intentarlo!** 🚀
