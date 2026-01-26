# 🚀 Guía Rápida - Minibodegas Manizales

## ✅ Checklist de Configuración Inicial

### 1. Imágenes Requeridas
- [ ] Agregar `logo.svg` o `logo.png` en `assets/images/` (recomendado: altura 50px, SVG preferido)
- [ ] Agregar `hero-bg.jpg` en `assets/images/` (recomendado: 1920x1080px)
- [ ] Agregar `favicon.svg` o `favicon.ico` en `assets/images/` (SVG recomendado)

**Nota:** 
- El logo busca primero `logo.svg` y si no existe, intenta `logo.png`. Si ninguno existe, se mostrará el texto "Minibodegas Manizales" automáticamente.
- El favicon busca primero `favicon.svg` y si no existe, usa `favicon.ico` como fallback.

### 2. Google Maps
- [ ] Ir a [Google Maps](https://www.google.com/maps)
- [ ] Buscar: "Carrera 23 #51-62, Manizales, Caldas, Colombia"
- [ ] Clic en "Compartir" → "Insertar un mapa"
- [ ] Copiar código iframe y reemplazar en `index.html` (línea ~302)

### 3. Verificar Información de Contacto
- [x] WhatsApp: +57 313 640 8620 ✅
- [x] Email: inversionesjjj@gmail.com ✅
- [x] Dirección: Carrera 23 #51-62, Manizales ✅
- [x] Horario: Lunes a Sábado, 8:00 AM - 5:00 PM ✅

## 🎨 Personalización Rápida

### Cambiar Colores
Editar variables en `styles.css` (líneas 7-10):
```css
--primary-orange: #E85B10;
--primary-orange-dark: #C44D0D;
```

### Cambiar Textos
Todos los textos están en `index.html` con atributos `data-es` y `data-en`.

### Cambiar Fuentes
Editar `@import` en `styles.css` (línea 50) y variables de fuente.

## 🧪 Probar el Sitio

1. Abrir `index.html` en el navegador
2. O usar servidor local:
   ```bash
   python -m http.server 8000
   ```
3. Visitar: `http://localhost:8000`

## 📱 Funcionalidades a Probar

- [ ] Selector de idioma (ES/EN) - esquina superior derecha
- [ ] Menú móvil - botón hamburguesa en mobile
- [ ] Smooth scroll - clic en enlaces del menú
- [ ] Animaciones - hacer scroll por la página
- [ ] Formulario - enviar mensaje (redirige a WhatsApp)
- [ ] Botón flotante WhatsApp - esquina inferior derecha

## 🐛 Solución de Problemas

### El mapa no se muestra
- Obtener código embed desde Google Maps (ver sección 2 arriba)

### Las imágenes no cargan
- Verificar que los archivos estén en `assets/images/`
- Verificar nombres de archivos (case-sensitive)

### El selector de idioma no funciona
- Verificar que `script.js` esté cargado
- Abrir consola del navegador (F12) para ver errores

## 📞 Soporte

Para ayuda técnica: inversionesjjj@gmail.com

---

**¡Listo para usar!** 🎉

