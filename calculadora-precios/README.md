# 💰 Calculadora de Precios

Aplicación web simple para calcular precios de productos con descuentos por cliente.

## 🚀 Características

✅ **100% Offline** - Funciona sin conexión a internet
✅ **Instalable** - Se puede instalar en Android como una app nativa
✅ **Fácil de usar** - Interfaz simple e intuitiva
✅ **Datos locales** - Toda la información se guarda en el dispositivo

## 📱 Cómo instalar en Android

### Método 1: Servidor local (Recomendado para desarrollo)

1. **En tu computadora**, abre una terminal en la carpeta `calculadora-precios`

2. **Inicia un servidor web simple:**

   Con Python 3:
   ```bash
   python -m http.server 8000
   ```

   O con Node.js (si tienes instalado):
   ```bash
   npx serve
   ```

3. **Encuentra la IP de tu computadora:**
   - Windows: `ipconfig` (busca "Dirección IPv4")
   - La IP será algo como: `192.168.1.100`

4. **En tu celular Android:**
   - Asegúrate de estar en la misma red WiFi
   - Abre Chrome
   - Ve a: `http://TU-IP:8000` (ejemplo: `http://192.168.1.100:8000`)

5. **Instalar la app:**
   - Toca el menú (⋮) en Chrome
   - Selecciona "Agregar a pantalla de inicio" o "Instalar app"
   - ¡Listo! La app aparecerá en tu pantalla de inicio

### Método 2: Hosting web gratuito (Para uso permanente)

1. Sube todos los archivos a un servicio gratuito como:
   - **GitHub Pages** (recomendado)
   - **Netlify**
   - **Vercel**

2. Accede desde tu Android y sigue el paso 5 anterior

### Método 3: Usar archivos locales directamente

1. Copia toda la carpeta `calculadora-precios` a tu celular
2. Abre `index.html` con Chrome
3. Instala como en el paso 5 del Método 1

**Nota:** Con este método, la funcionalidad offline puede ser limitada.

## 📖 Cómo usar la aplicación

### 1️⃣ Configurar Productos

1. Ve a la pestaña **"Productos"**
2. Agrega cada tipo de esponja con:
   - Color (Ej: Azul, Rojo, Verde)
   - Densidad (Ej: Alta, Media, Baja, 30kg/m³)
   - Costo por centímetro (Ej: 2.50)
3. Toca "Agregar Producto"

### 2️⃣ Configurar Clientes

1. Ve a la pestaña **"Clientes"**
2. Agrega cada cliente con:
   - Nombre del cliente
   - Porcentaje de descuento (0 si no tiene)
3. Toca "Agregar Cliente"

### 3️⃣ Calcular Precios

1. Ve a la pestaña **"Calculadora"**
2. Selecciona el producto (color/densidad)
3. Selecciona el cliente
4. Ingresa el ancho en centímetros
5. Toca "Calcular Precio"
6. ¡Verás el precio final con el desglose completo!

## 🧮 Fórmula de Cálculo

```
Precio Base = Ancho (cm) × Costo por cm
Descuento = Precio Base × (Descuento% / 100)
Precio Final = Precio Base - Descuento
```

## 💾 Almacenamiento de Datos

- Todos los datos se guardan automáticamente en el navegador
- Los datos persisten incluso si cierras la app
- Para **respaldar** tus datos: No borres los datos del navegador/app
- Para **limpiar** todos los datos: Borra los datos de la app desde Configuración de Android

## 🛠️ Personalización

### Cambiar colores

Edita el archivo `styles.css`:
- Color principal: Busca `#2196F3` y reemplaza por tu color
- Gradiente de fondo: Busca `background: linear-gradient` en `body`

### Modificar cálculo

Edita la función `calcularPrecio()` en `index.html` (línea ~95)

## 🔧 Solución de Problemas

**La app no se instala:**
- Asegúrate de usar Chrome o navegador basado en Chromium
- Verifica que la página se cargue correctamente primero

**Los datos desaparecieron:**
- No borres los datos de navegación de Chrome
- Los datos se guardan localmente, si reinstalas la app se pierden

**No funciona offline:**
- Abre la app al menos una vez con internet
- Asegúrate de que el Service Worker se haya registrado

## 📄 Archivos del Proyecto

- `index.html` - Calculadora principal
- `productos.html` - Gestión de productos
- `clientes.html` - Gestión de clientes
- `app.js` - Lógica de almacenamiento
- `styles.css` - Estilos y diseño
- `manifest.json` - Configuración de la PWA
- `service-worker.js` - Funcionamiento offline

## 📞 Soporte

Esta es una aplicación simple y autónoma. Puedes modificar el código según tus necesidades.

## 📝 Licencia

Libre para uso personal y comercial.
