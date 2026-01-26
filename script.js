/* ============================================
   MINIBODEGAS MANIZALES - JAVASCRIPT
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // CONFIGURACIÓN Y VARIABLES GLOBALES
  // ============================================
  
  const currentLang = localStorage.getItem('language') || 'es';
  const translations = {
    es: {},
    en: {}
  };

  // ============================================
  // SELECTOR DE IDIOMA
  // ============================================
  
  function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsWithData = document.querySelectorAll('[data-es], [data-en]');
    
    // Aplicar idioma guardado
    setLanguage(currentLang);
    
    // Event listeners para botones de idioma
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
        localStorage.setItem('language', lang);
      });
    });
    
    function setLanguage(lang) {
      // Actualizar botones activos
      langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Actualizar atributo lang del HTML
      document.documentElement.lang = lang;
      
      // Actualizar textos con data-es y data-en
      elementsWithData.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
          if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
          } else {
            element.textContent = text;
          }
        }
      });
    }
  }

  // ============================================
  // HEADER STICKY
  // ============================================
  
  function initStickyHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    function handleScroll() {
      const scrollY = window.scrollY;
      
      if (scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = scrollY;
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Ejecutar al cargar
  }

  // ============================================
  // MENÚ MÓVIL
  // ============================================
  
  function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');
    
    if (!mobileMenuToggle || !nav) return;
    
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });
    
    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Ignorar enlaces vacíos o solo #
        if (href === '#' || href === '') {
          e.preventDefault();
          return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const headerHeight = document.getElementById('header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // ANIMACIONES AL SCROLL (Intersection Observer)
  // ============================================
  
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  // ============================================
  // FORMULARIO DE CONTACTO
  // ============================================
  
  function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Validación básica
      if (!name || !phone || !message) {
        showFormMessage('Por favor completa todos los campos requeridos.', 'error');
        return;
      }
      
      // Validación de teléfono (solo números)
      if (!/^\d+$/.test(phone.replace(/\s/g, ''))) {
        showFormMessage('Por favor ingresa un número de teléfono válido.', 'error');
        return;
      }
      
      // Validación de email si se proporciona
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormMessage('Por favor ingresa un email válido.', 'error');
        return;
      }
      
      // Crear mensaje para WhatsApp
      const whatsappMessage = `Hola, mi nombre es ${name}.\nTeléfono: ${phone}${email ? `\nEmail: ${email}` : ''}\n\nMensaje: ${message}`;
      const whatsappUrl = `https://wa.me/573136408620?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Mostrar mensaje de éxito
      showFormMessage('¡Gracias! Te redirigiremos a WhatsApp para completar tu consulta.', 'success');
      
      // Limpiar formulario después de un momento
      setTimeout(() => {
        form.reset();
      }, 2000);
    });
    
    function showFormMessage(message, type) {
      // Remover mensajes anteriores
      const existingMessage = form.querySelector('.form__message');
      if (existingMessage) {
        existingMessage.remove();
      }
      
      // Crear nuevo mensaje
      const messageDiv = document.createElement('div');
      messageDiv.className = `form__message form__message--${type}`;
      messageDiv.textContent = message;
      
      // Insertar antes del botón de envío
      const submitButton = form.querySelector('button[type="submit"]');
      form.insertBefore(messageDiv, submitButton);
      
      // Remover después de 5 segundos
      setTimeout(() => {
        messageDiv.remove();
      }, 5000);
    }
  }

  // ============================================
  // CONTADOR ANIMADO (si se necesita)
  // ============================================
  
  function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.counter);
      const duration = 2000; // 2 segundos
      const increment = target / (duration / 16); // 60 FPS
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      // Iniciar cuando el elemento sea visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  }

  // ============================================
  // LAZY LOADING DE IMÁGENES
  // ============================================
  
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // OPTIMIZACIÓN DE PERFORMANCE
  // ============================================
  
  function initPerformanceOptimizations() {
    // Preload de recursos críticos
    const criticalResources = [
      'styles.css',
      'assets/images/hero-bg.jpg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      document.head.appendChild(link);
    });
  }

  // ============================================
  // MANEJO DEL LOGO
  // ============================================
  
  function initLogo() {
    const logoImg = document.querySelector('.header__logo-img');
    const logoText = document.querySelector('.header__logo-text');
    
    if (logoImg && logoText) {
      let triedPNG = false;
      
      // Función para mostrar el logo junto con el texto
      const showLogo = () => {
        logoImg.classList.add('loaded');
        // El texto siempre se mantiene visible
        logoText.style.display = 'block';
      };
      
      // Si la imagen carga correctamente (SVG o PNG)
      logoImg.addEventListener('load', () => {
        showLogo();
      });
      
      // Si la imagen no carga, intentar fallback
      logoImg.addEventListener('error', () => {
        // Si es SVG y falla, intentar PNG una sola vez
        if (logoImg.src.includes('.svg') && !triedPNG) {
          triedPNG = true;
          logoImg.src = 'assets/images/logo.png';
          return; // Esperar a que PNG cargue o falle
        }
        // Si PNG también falla, solo mostrar texto (sin logo)
        logoImg.classList.remove('loaded');
        logoText.style.display = 'block';
      });
      
      // Verificar si la imagen ya está cargada (cache del navegador)
      if (logoImg.complete) {
        // Para SVG, el naturalHeight puede ser 0 pero el SVG está cargado
        if (logoImg.src.includes('.svg')) {
          // Verificar si el SVG tiene contenido verificando el ancho
          if (logoImg.naturalWidth > 0 || logoImg.clientWidth > 0) {
            showLogo();
          } else {
            // Intentar PNG como fallback
            if (!triedPNG) {
              triedPNG = true;
              logoImg.src = 'assets/images/logo.png';
            } else {
              // No hay logo disponible, solo mostrar texto
              logoImg.classList.remove('loaded');
              logoText.style.display = 'block';
            }
          }
        } else {
          // Para PNG, verificar naturalHeight
          if (logoImg.naturalHeight !== 0) {
            showLogo();
          } else {
            // No hay logo disponible, solo mostrar texto
            logoImg.classList.remove('loaded');
            logoText.style.display = 'block';
          }
        }
      }
    }
  }

  // ============================================
  // INICIALIZACIÓN AL CARGAR LA PÁGINA
  // ============================================
  
  function init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    // Inicializar todas las funcionalidades
    initLanguageSelector();
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initCounterAnimation();
    initLazyLoading();
    initPerformanceOptimizations();
    initLogo();
    
    // Log de inicialización (solo en desarrollo)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('✅ Minibodegas Manizales - Sitio web inicializado correctamente');
    }
  }

  // Iniciar aplicación
  init();

  // ============================================
  // MANEJO DE ERRORES GLOBALES
  // ============================================
  
  window.addEventListener('error', (e) => {
    console.error('Error en la aplicación:', e.error);
    // En producción, podrías enviar esto a un servicio de logging
  });

  // ============================================
  // ESTILOS DINÁMICOS PARA MENSAJES DEL FORMULARIO
  // ============================================
  
  // Agregar estilos para mensajes del formulario si no existen
  if (!document.getElementById('dynamic-styles')) {
    const style = document.createElement('style');
    style.id = 'dynamic-styles';
    style.textContent = `
      .form__message {
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-weight: 600;
        animation: fadeInUp 0.3s ease;
      }
      .form__message--success {
        background: #D1FAE5;
        color: #065F46;
        border: 1px solid #10B981;
      }
      .form__message--error {
        background: #FEE2E2;
        color: #991B1B;
        border: 1px solid #EF4444;
      }
    `;
    document.head.appendChild(style);
  }

})();

