# 🚀 Instalación Rápida - 3 Pasos

## Para empezar AHORA MISMO:

### 1️⃣ Generar los iconos (30 segundos)

Opción A - **Usando el generador automático:**
```bash
# Abre el archivo crear-iconos.html en tu navegador
# Haz clic en cada imagen para descargarla
# Guárdalas como icon-192.png e icon-512.png en esta carpeta
```

Opción B - **Iconos temporales (más rápido):**
- Usa cualquier imagen de 192x192 y 512x512 pixeles
- Renómbralas como `icon-192.png` e `icon-512.png`
- O descárgalas de internet: busca "calculator icon png"

### 2️⃣ Iniciar servidor web (10 segundos)

**Con Python (Windows/Mac/Linux):**
```bash
python -m http.server 8000
```

**O con Node.js:**
```bash
npx serve
```

### 3️⃣ Abrir en tu celular

1. Conecta tu celular a la misma red WiFi
2. En la terminal, busca tu IP:
   - Windows: aparece al iniciar Python server
   - O ejecuta: `ipconfig` (busca IPv4)
3. En Chrome de tu Android: `http://TU-IP:8000`
4. ¡Instala la app desde el menú de Chrome!

---

## 🎯 Prueba SUPER RÁPIDA (sin celular)

Prueba la app en tu computadora:

1. Abre `index.html` con tu navegador
2. Agrega productos y clientes de prueba
3. Calcula precios

---

## ✅ Listo para producción

Una vez que funcione, súbela a internet gratis:

### GitHub Pages (Recomendado)
```bash
# 1. Crea un repositorio en GitHub
# 2. Sube estos archivos
# 3. Activa GitHub Pages en Settings
# 4. Tu app estará en: https://tu-usuario.github.io/calculadora-precios
```

### O usa Netlify
1. Arrastra la carpeta completa a netlify.com/drop
2. ¡Tu app estará online en segundos!

---

## 🆘 ¿Problemas?

**No tengo Python ni Node.js:**
- Descarga Python: https://www.python.org/downloads/
- O simplemente abre `index.html` directamente (funcionalidad limitada)

**No encuentro mi IP:**
- Windows: `ipconfig` en CMD
- Tu IP local empieza con 192.168.x.x

**La app no funciona offline:**
- Necesitas servidor web (Python/Node) al menos la primera vez
- Después de instalar, funcionará offline
