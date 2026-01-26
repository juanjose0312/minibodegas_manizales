# 📦 Minibodegas Manizales - Sitio Web

Sitio web profesional para Minibodegas Manizales, empresa especializada en almacenamiento seguro con 10 años de experiencia en Manizales, Colombia.

## 🎯 Características Principales

- ✅ Diseño responsive (Mobile-first)
- ✅ Bilingüe (Español/Inglés) con selector de idioma
- ✅ Optimizado para SEO
- ✅ Integración con WhatsApp
- ✅ Formulario de contacto funcional
- ✅ Animaciones suaves al hacer scroll
- ✅ Google Maps integrado
- ✅ Carga rápida (< 2 segundos)

## 🛠️ Tecnologías Utilizadas

- **HTML5** semántico
- **CSS3** puro (sin frameworks)
- **JavaScript** vanilla (sin dependencias)
- **Google Fonts** (Montserrat + Open Sans)
- **Google Maps API** (embebido)

## 📁 Estructura del Proyecto

```
minibodegas-manizales/
│
├── index.html              # Página principal
├── styles.css              # Estilos globales
├── script.js               # JavaScript interactivo
├── README.md               # Este archivo
│
└── assets/
    ├── images/
    │   ├── hero-bg.jpg     # Imagen hero (agregar)
    │   └── favicon.ico     # Favicon (agregar)
    │
    └── icons/              # Íconos SVG (opcional)
```

## 🚀 Instalación y Uso

### Opción 1: Abrir directamente

Simplemente abre `index.html` en tu navegador web.

### Opción 2: Servidor local

Para desarrollo, puedes usar un servidor local:

**Con Python:**
```bash
python -m http.server 8000
```

**Con Node.js (http-server):**
```bash
npx http-server -p 8000
```

Luego visita: `http://localhost:8000`

## 📝 Configuración

### 1. Agregar Imágenes

Coloca las siguientes imágenes en `assets/images/`:

- `logo.svg` o `logo.png` - Logo de la empresa (recomendado: altura 50px, formato SVG o PNG con fondo transparente)
- `hero-bg.jpg` - Imagen de fondo para la sección hero (recomendado: 1920x1080px)
- `favicon.svg` o `favicon.ico` - Favicon del sitio (SVG recomendado para mejor calidad)

**Nota:** 
- El logo busca primero `logo.svg` y si no existe, intenta `logo.png`. Si ninguno existe, se mostrará el texto "Minibodegas Manizales" automáticamente.
- El favicon busca primero `favicon.svg` y si no existe, usa `favicon.ico` como fallback.

### 2. Personalizar Google Maps

El iframe de Google Maps está configurado con coordenadas aproximadas. Para obtener el código exacto:

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca: "Carrera 23 #51-62, Manizales, Caldas, Colombia"
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código iframe y reemplázalo en la sección de ubicación

### 3. Configurar Formulario de Contacto

El formulario actualmente redirige a WhatsApp. Si deseas usar un servicio de formularios:

**Opción A: FormSubmit (gratis)**
```html
<form action="https://formsubmit.co/tu-email@ejemplo.com" method="POST">
```

**Opción B: EmailJS**
1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Configura el servicio
3. Actualiza el código en `script.js`

## 🎨 Personalización

### Colores

Los colores principales están definidos en `styles.css` como variables CSS:

```css
:root {
  --primary-orange: #E85B10;
  --primary-orange-dark: #C44D0D;
  --primary-orange-light: #FF7A2F;
  /* ... más colores */
}
```

### Tipografía

Las fuentes se cargan desde Google Fonts. Para cambiarlas, edita:

1. El `@import` en `styles.css`
2. Las variables `--font-heading` y `--font-body`

### Contenido

Todo el contenido está en `index.html` con atributos `data-es` y `data-en` para traducción. Edita directamente en el HTML.

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Wide:** 1440px+

## 🔧 Funcionalidades JavaScript

### Selector de Idioma
- Guarda la preferencia en `localStorage`
- Cambio instantáneo sin recargar

### Smooth Scroll
- Navegación suave entre secciones
- Offset automático para header fijo

### Animaciones
- Fade in + slide up al hacer scroll
- Usa Intersection Observer API

### Formulario
- Validación client-side
- Redirección a WhatsApp con mensaje pre-llenado

## 📞 Información de Contacto

- **WhatsApp:** +57 313 640 8620
- **Email:** inversionesjjj@gmail.com
- **Dirección:** Carrera 23 #51-62, Manizales, Caldas, Colombia
- **Horario:** Lunes a Sábado, 8:00 AM - 5:00 PM

## 🌐 SEO

El sitio incluye:

- Meta tags optimizados
- Open Graph tags para redes sociales
- Estructura semántica HTML5
- Atributos alt en imágenes (agregar cuando subas imágenes)
- Schema markup (opcional, agregar si es necesario)

## ⚡ Optimización de Performance

- CSS crítico inline (considerar para producción)
- Lazy loading de imágenes
- Preload de recursos críticos
- Sin dependencias externas pesadas

## 📄 Licencia

© 2025 Minibodegas Manizales. Todos los derechos reservados.

## 🤝 Soporte

Para preguntas o soporte técnico, contacta a través de:
- Email: inversionesjjj@gmail.com
- WhatsApp: +57 313 640 8620

---

**Desarrollado con ❤️ para Minibodegas Manizales**

