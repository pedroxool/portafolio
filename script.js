$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Teacher", "Developer", "Leader", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Teacher", "Developer", "Leader", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 3,
                nav: false
            },
            1000:{
                items: 4,
                nav: false
            }
        }
    });

    // Portfolio filter functionality
    $('.filter-btn').click(function(){
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        var filterValue = $(this).attr('data-filter');
        
        if(filterValue === 'all') {
            $('.portfolio-item').removeClass('hide');
        } else {
            $('.portfolio-item').each(function(){
                var categories = $(this).attr('data-category');
                if(categories.includes(filterValue)) {
                    $(this).removeClass('hide');
                } else {
                    $(this).addClass('hide');
                }
            });
        }
    });
});

// Portfolio Modal functionality
const projectData = {
    'isi-suite': {
        title: 'ISI SURESTE - E-commerce Suite',
        type: 'Multi-Project Ecosystem',
        description: 'Comprehensive e-commerce solution developed for ISI SURESTE, including multiple online stores, centralized administration, API infrastructure, and point of sale system.',
        longDescription: 'As Web Master at ISI SURESTE, I was responsible for managing and administering a VPS Hosting environment running on CentOS Linux, overseeing 11 websites including 5 complete e-commerce platforms. This ecosystem was built from scratch to provide a unified solution for product management, inventory control, sales processing, and customer relationship management across multiple channels. My role included server administration, requirements gathering with stakeholders, and continuous platform optimization.',
        components: [
            'E-commerce Platform #1: Medical equipment and supplies',
            'E-commerce Platform #2: Industrial tools and machinery',
            'E-commerce Platform #3: Office supplies and furniture',
            'E-commerce Platform #4: Technology and electronics',
            'E-commerce Platform #5: Educational materials and resources',
            'Centralized Administrative Panel: Multi-store management',
            'RESTful API: Integration and data synchronization',
            'POS System: In-store sales processing',
            'Inventory Management: Real-time stock control',
            'Customer Management: CRM and loyalty programs',
            'VPS Server Administration: CentOS Linux environment',
            'Requirements Analysis: Stakeholder meetings and documentation'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Websockets', 'CentOS Linux', 'VPS'],
        features: [
            'Multi-store product synchronization',
            'Centralized inventory management',
            'Real-time sales tracking and reporting',
            'Integrated payment gateway (PayPal, credit cards)',
            'Responsive design for mobile shopping',
            'SEO optimization for each store',
            'Customer account management',
            'Order tracking and fulfillment',
            'Admin dashboard with analytics',
            'API for third-party integrations',
            'VPS hosting management on CentOS Linux',
            'Server security and optimization',
            'Requirements gathering and analysis',
            'System documentation and training'
        ],
        status: 'Private - Security Restricted',
        role: 'Web Master & Full Stack Developer',
        year: '2019 - 2021'
    },
    'logar': {
        title: 'Constructores Logar S.A. de C.V.',
        type: 'Corporate Website & Internal Systems',
        description: 'Professional corporate website and comprehensive internal management system for a leading construction company in Yucatán, Mexico.',
        longDescription: 'During my time as IT Department Leader at Constructores Logar, I designed and developed their corporate website from scratch, along with a complete internal project management system for prospecting and tracking construction projects. Additionally, I managed the company\'s IT infrastructure, including network administration, computer equipment maintenance, and technical support for all departments.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
        components: [
            'Corporate Website: Responsive design and portfolio showcase',
            'Internal Management System: Prospect and project tracking',
            'Client Database: CRM and contact management',
            'Network Infrastructure: LAN/WAN administration',
            'IT Support: Hardware maintenance and troubleshooting',
            'Technical Documentation: System guides and training materials'
        ],
        features: [
            'Fully responsive corporate website',
            'Project portfolio showcase',
            'Contact form with email integration',
            'SEO optimized',
            'Internal prospect management system',
            'Project tracking and follow-up tools',
            'Client database management',
            'Network infrastructure administration',
            'Computer equipment maintenance',
            'IT technical support',
            'Modern and clean UI/UX',
            'Mobile-first approach',
            'Cross-browser compatibility'
        ],
        url: 'https://www.constructoreslogar.com',
        status: 'Live & Public',
        role: 'IT Department Leader & Web Developer',
        year: '2020'
    },
    'softrek': {
        title: 'SOFTREK Tourism & Telecommunications Platform',
        type: 'Web Application & Real-Time Systems',
        description: 'Comprehensive platform for tourism industry including Call In VoIP system and worldwide airport search engine.',
        longDescription: 'As a Full Stack Developer at SOFTREK, I developed multiple sophisticated systems including a tourism booking platform, Call In - a real-time VoIP telecommunications system using Websockets, SIP, and FreePBX integration, and a highly optimized worldwide airport search engine. The Call In project enables real-time telephony management with VoIP technology, while the airport search engine provides comprehensive search capabilities by IATA code, country, city, and airport name, optimized for speed and accuracy.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js', 'Express.js', 'Websockets', 'Node.js', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'Bootstrap', 'VoIP', 'SIP', 'FreePBX'],
        components: [
            'Tourism Platform: Booking system and tour management',
            'Call In System: Real-time VoIP telephony with Websockets',
            'Airport Search Engine: Worldwide IATA database search',
            'FreePBX Integration: SIP and VoIP infrastructure',
            'Real-Time Communications: Websockets implementation',
            'Payment Gateway: Secure transaction processing'
        ],
        features: [
            'Tour booking and reservation system',
            'Real-time availability calendar',
            'Call In - VoIP telephony system',
            'Websockets for real-time communication',
            'SIP and FreePBX integration',
            'Worldwide airport search engine',
            'Search by IATA code, country, city, name',
            'Optimized database queries',
            'Customer account management',
            'Payment gateway integration',
            'Email notification system',
            'Admin panel for tour operators',
            'Reporting and analytics',
            'Multi-language support',
            'Mobile responsive interface',
            'Integration with third-party APIs'
        ],
        status: 'Private - Client Confidential',
        role: 'Full Stack Web Developer',
        year: '2021 - 2022'
    },
    'volksureste': {
        title: 'Volksureste E-commerce System',
        type: 'Full-Stack Multi-Platform Ecosystem',
        description: 'Complete automotive parts e-commerce platform with multi-branch management, shopping cart, payment processing, and automated shipping calculations.',
        longDescription: 'Full-stack e-commerce system for Volksureste, specializing in automotive parts sales. Built as a multi-repository ecosystem consisting of Frontend (Nuxt.js), Laravel API, Admin Panel (Vue.js), and POS System (Vue.js with Ant Design). Features comprehensive multi-branch inventory management, real-time stock tracking, advanced shopping cart with discount coupons, multiple payment gateway integration (PayPal, OpenPay), and automated shipping calculations with major carriers including in-store pickup options. Implements robust authentication with granular role-based permissions (profiles, menus, actions), user panel with order history, shipping/billing addresses, and order tracking. The catalog is organized by categories, brands, sections, and groups with powerful search capabilities.',
        technologies: ['Laravel', 'Nuxt.js 2.15.3', 'Vue.js 2', 'PHP', 'MySQL', 'Vuex', 'Vue Router', 'Bootstrap 4', 'Laravel Mix', 'Laravel Passport (OAuth2)', 'API RESTful', 'PayPal API', 'OpenPay', 'Google Maps API', 'reCAPTCHA', 'Ant Design', 'SweetAlert2'],
        components: [
            'E-commerce Frontend: Nuxt.js 2.15.3 SPA with server-side rendering',
            'Laravel API: RESTful backend with Laravel Passport OAuth2',
            'Admin Panel: Vue.js dashboard with comprehensive management tools',
            'POS System: Vue.js point of sale with Ant Design',
            'Multi-Branch Management: Real-time inventory across locations',
            'Payment Gateway Integration: PayPal, OpenPay, credit cards',
            'Shipping System: DIDI Envíos and multiple carrier integration'
        ],
        features: [
            'Shopping cart with discount coupons and local persistence',
            'Multi-branch inventory management with real-time stock',
            'Multiple payment methods (PayPal, OpenPay, credit cards)',
            'Automated shipping calculation and in-store pickup',
            'Granular authentication system with roles and permissions',
            'User panel with order history and address management',
            'Order tracking and delivery status',
            'Organized catalog (categories, brands, sections, groups)',
            'Advanced search and filtering system',
            'Notification system with SweetAlert2',
            'Google Maps integration for store locations',
            'reCAPTCHA security integration',
            'Responsive design across all platforms',
            'SEO optimized pages'
        ],
        images: [
            'images/volksureste/home.jpg',
            'images/volksureste/catalog.jpg',
            'images/volksureste/product-detail.jpg',
            'images/volksureste/cart.jpg',
            'images/volksureste/checkout.jpg',
            'images/volksureste/checkout2.jpg',
            'images/volksureste/payment.jpg',
            'images/volksureste/admin-dashboard.jpg',
            'images/volksureste/admin-inventory.jpg',
            'images/volksureste/pos-system.jpg',
            'images/volksureste/pos2.jpg',
            'images/volksureste/ticket.jpg',
        ],
        url: 'https://volksureste.com',
        status: 'Live & Public',
        role: 'Full Stack Developer',
        year: '2023 - 2024'
    },
    'violetera': {
        title: 'Sistema POS para Restaurantes - Violetera',
        type: 'Multi-Device Restaurant Management System',
        description: 'Sistema de punto de venta completo para gestión de restaurantes desarrollado como aplicación web responsiva. Incluye módulos de comandera digital con asignación de mesas, gestión de órdenes en tiempo real, control de caja, catálogo de productos, sistema de usuarios con roles, y dashboard analítico con métricas de ventas.',
        longDescription: 'Sistema POS integral diseñado específicamente para la industria restaurantera, implementado como una aplicación web responsiva multi-dispositivo. El sistema permite la gestión completa de un restaurante desde diferentes interfaces optimizadas por rol: comandera digital para meseros con asignación de mesas en tiempo real, módulo de caja para control de apertura/cierre de turno y procesamiento de pagos, panel de cocina para visualización de comandas en proceso, y dashboard administrativo con métricas avanzadas. Implementa actualización automática mediante polling para sincronización en tiempo real de órdenes, autenticación segura basada en tokens con Laravel Sanctum, gestión completa de catálogo de productos/bebidas/complementos con manejo de imágenes, sistema de roles granular (meseros, cajeros, cocina, administradores), generación de reportes de ventas por período, y visualización de datos con gráficos interactivos usando ApexCharts. La interfaz está construida con Quasar Framework sobre Vue 3 Composition API, ofreciendo una experiencia de usuario fluida y moderna adaptada a tablets y dispositivos móviles.',
        components: [
            'Comandera Digital para Meseros: Asignación dinámica de mesas, creación de órdenes, división de cuentas',
            'Módulo de Caja: Apertura/cierre de turno, procesamiento de pagos, cortede caja',
            'Panel de Cocina: Visualización de comandas en tiempo real, marcado de platillos completados',
            'Dashboard Administrativo: Métricas de ventas, reportes, gestión de usuarios, catálogo de productos',
            'Sistema de Autenticación: Laravel Sanctum con roles y permisos',
            'Gestión de Catálogo: Productos, bebidas, complementos con imágenes',
            'Sistema de Reportes: Ventas por período, productos más vendidos, desempeño de meseros',
            'Actualización en Tiempo Real: Polling automático para sincronización de órdenes',
            'Gestión de Mesas: Estado en tiempo real (disponible, ocupada, reservada)',
            'Manejo de Pagos: Efectivo, tarjeta, división de cuenta'
        ],
        technologies: [
            'Vue 3 (Composition API)',
            'Quasar Framework v2',
            'Pinia',
            'Pinia Persist',
            'Vue Router 4',
            'Vite',
            'Laravel',
            'Laravel Sanctum',
            'PHP',
            'MySQL',
            'Axios',
            'ApexCharts',
            'Vue3-ApexCharts',
            'Material Design',
            'SweetAlert2',
            'VueUse',
            'API REST',
            'JWT Tokens'
        ],
        features: [
            'Interfaz multi-dispositivo optimizada (tablets, móviles, desktop)',
            'Actualización automática en tiempo real mediante polling',
            'Gestión de mesas con asignación dinámica',
            'Sistema de órdenes con seguimiento completo',
            'División de cuentas entre comensales',
            'Catálogo completo de productos con imágenes',
            'Roles granulares: mesero, cajero, cocina, administrador',
            'Dashboard analítico con ApexCharts',
            'Reportes de ventas por período personalizable',
            'Control de apertura y cierre de caja',
            'Autenticación segura con Laravel Sanctum',
            'Persistencia de estado offline con Pinia Persist',
            'Notificaciones en tiempo real',
            'Gestión de turno y empleados',
            'Historial de órdenes y comandas',
            'Sistema de complementos y modificadores de productos',
            'Interfaz drag & drop para gestión de mesas',
            'Responsive design con Quasar Framework',
            'Theme Material Design adaptativo',
            'Componentes auto-importados'
        ],
        images: [
            'images/violetera/home.jpg',
            'images/violetera/admin-dashboard.jpg',
            'images/violetera/admin-dashboard2.jpg',
            'images/violetera/products.jpg',
            'images/violetera/reports.jpg',
            'images/violetera/comanda-cocina.jpg',
            'images/violetera/cocina.jpg',
            'images/violetera/caja-apertura.jpg',
            'images/violetera/caja-corte.jpeg',
            'images/violetera/ticket.jpg',
        ],
        status: 'Private - In Production',
        role: 'Full Stack Developer',
        year: '2024 - 2025'
    },
    'smartelife': {
        title: 'Smart-e Life | Sistema MLM/POS para Suplementos Alimenticios',
        type: 'Multi-Level Marketing & Point of Sale Platform',
        description: 'Plataforma integral de Marketing Multinivel (MLM) y Punto de Venta para empresa de suplementos alimenticios por suscripción. Sistema de red piramidal de 6 niveles con cálculo automático de comisiones y portal personalizado para socios.',
        longDescription: 'Plataforma completa para gestión de red de Marketing Multinivel combinada con sistema POS para ventas directas. El sistema administra una estructura piramidal de 6 niveles con cálculo automático de comisiones basado en calificaciones mensuales. Incluye portal personalizado para socios donde pueden visualizar su árbol genealógico completo mediante visualización interactiva D3.js, comisiones desglosadas por nivel, red de referidos (upline/downline), y estado de calificación mensual. Integra módulo POS robusto para ventas directas con gestión de inventario de suplementos, control multi-caja con apertura/cierre de turno, procesamiento de múltiples métodos de pago (efectivo, tarjetas de crédito, cheques posdatados), sistema inteligente de promociones mensuales con asignación automática de regalos por volumen de compra, y reportes detallados de comisiones diarias/mensuales. Maneja diferentes tipos de suscripción (Plus y Básica) con esquemas de precios diferenciados y validación automática de calificaciones para activar pagos de comisiones. La arquitectura está construida con Vue 3 Composition API y Quasar Framework, implementando estado global con Pinia y persistencia offline, componentes auto-importados, y diseño Material Design responsivo.',
        components: [
            'Sistema MLM: Estructura multinivel de 6 niveles con comisiones automáticas',
            'Visualización de Red: Árbol genealógico interactivo con Vue3-D3-Tree',
            'Portal de Socio: Dashboard personalizado con métricas de red y comisiones',
            'Sistema de Calificaciones: Validación mensual para activar pagos de comisiones',
            'Gestión de Suscripciones: Planes Plus y Básico con precios diferenciados',
            'POS Multicaja: Apertura/cierre de caja, múltiples métodos de pago',
            'Gestión de Inventario: CRUD completo de productos (suplementos)',
            'Promociones Inteligentes: Validación automática y asignación de regalos por volumen',
            'Reportes Avanzados: Análisis de comisiones diarias/mensuales y rendimiento de red',
            'Panel Administrativo: Gestión de usuarios, roles, organizaciones y permisos',
            'Sistema de Comisiones: Cálculo automático basado en niveles de red (upline/downline)',
            'Gestión de Pagos: Soporte para efectivo, crédito, débito, cheques posdatados'
        ],
        technologies: [
            'Vue.js 3 (Composition API)',
            'Quasar Framework',
            'Pinia',
            'Pinia Persist',
            'Vue3-D3-Tree',
            'Axios',
            'Material Design',
            'Line Awesome Icons',
            'SweetAlert2',
            'VueUse',
            'Vite',
            'SCSS',
            'PostCSS',
            'Auto-imports (unplugin)',
            'API REST',
            'JWT Authentication'
        ],
        features: [
            'Red MLM multinivel de 6 niveles con comisiones automáticas',
            'Árbol genealógico interactivo con visualización D3.js',
            'Portal personalizado para cada socio',
            'Visualización de upline y downline completo',
            'Dashboard con métricas de red en tiempo real',
            'Sistema de calificación mensual automatizado',
            'Cálculo automático de comisiones por nivel',
            'Reportes detallados de comisiones diarias y mensuales',
            'Sistema de suscripción (Plus vs Básica)',
            'POS para ventas directas de suplementos',
            'Control multi-caja con apertura/cierre de turno',
            'Múltiples métodos de pago (efectivo, crédito, cheques)',
            'Gestión completa de inventario de productos',
            'Sistema de promociones mensuales automáticas',
            'Validación automática de regalos por volumen',
            'Panel administrativo para gestión de red',
            'Sistema de roles y permisos granular',
            'Gestión de organizaciones y equipos',
            'Estado global persistente offline (Pinia Persist)',
            'Interfaz Material Design responsive',
            'Componentes auto-importados',
            'Notificaciones con SweetAlert2'
        ],
        images: [
            'images/smartelife/home.jpg',
            'images/smartelife/products.jpg',
            'images/smartelife/product-stock.jpg',
            'images/smartelife/arbol.jpg',
            'images/smartelife/pos.jpg',
            'images/smartelife/pos2.jpg',
            'images/smartelife/pos3.jpg',
            'images/smartelife/comisiones.jpg',
            'images/smartelife/comision-pagar.jpg',
            'images/smartelife/ticket.jpg',
        ],
        status: 'Private - In Production',
        role: 'Full Stack Developer',
        year: '2025'
    },
    'llantamax': {
        title: 'Sistema de Gestión e Inventario - Llantamax',
        type: 'Multi-Branch POS & Inventory Management System',
        description: 'Sistema web de punto de venta (POS) y control de inventario desarrollado a la medida para cadena de llanteras con gestión multi-sucursal. Incluye control de stock en tiempo real, ajustes de inventario con historial, gestión de órdenes de venta, módulo de caja, y administración de usuarios con roles.',
        longDescription: 'Sistema POS completo desarrollado específicamente para la gestión de cadena de llanteras con múltiples sucursales. Implementa punto de venta de mostrador con búsqueda y escaneo de productos especializados (llantas con atributos como tamaño, lona, grupo, sección). Control de inventario en tiempo real multi-sucursal con sistema robusto de ajustes (entradas, salidas, movimientos, mermas) con historial detallado y trazabilidad completa. Módulo de caja con apertura/cierre de turno y control de efectivo, sistema de ventas tanto para clientes registrados como público general con gestión de pagos múltiples (contado, crédito, diferido). Reportería completa de ventas por día y mes con filtros avanzados, tickets de venta con opción de reimpresión, control de costos de envío y productos de demostración. Administración de usuarios con roles y permisos por organización, formularios dinámicos con validaciones, tablas con paginación y filtros avanzados. Arquitectura basada en Vue 3 Composition API con Quasar Framework, gestión de estado centralizada con Pinia y persistencia offline, composables personalizados para lógica de negocio reutilizable, guards de navegación para rutas protegidas, y manejo de errores centralizado.',
        components: [
            'POS de Mostrador: Búsqueda y escaneo de productos, ventas rápidas',
            'Control de Inventario: Sistema multi-sucursal en tiempo real',
            'Ajustes de Inventario: Entradas/salidas/movimientos/mermas con historial',
            'Gestión de Productos: Atributos específicos (tamaño, lona, grupo, sección)',
            'Módulo de Caja: Apertura/cierre de turno y control de efectivo',
            'Sistema de Ventas: Clientes registrados y público general',
            'Gestión de Pagos: Contado, crédito, diferido',
            'Reportería: Ventas por día/mes con filtros avanzados',
            'Tickets de Venta: Impresión y reimpresión',
            'Administración: Usuarios, roles y organizaciones con permisos',
            'Control de Costos: Envío y productos de demostración',
            'Sistema de Clientes: Base de datos y historial de compras'
        ],
        technologies: [
            'Vue 3 (Composition API)',
            'Quasar Framework 2',
            'Pinia (State Management)',
            'Pinia Persisted State',
            'Vue Router 4',
            'Vite',
            'Axios',
            'VueUse',
            'SweetAlert2',
            'Quasar Notify',
            'Unplugin Auto Import',
            'ESLint',
            'Prettier',
            'PostCSS',
            'Autoprefixer',
            'SCSS',
            'Material Design',
            'API REST'
        ],
        features: [
            'POS de mostrador con búsqueda y escaneo de productos',
            'Control de inventario multi-sucursal en tiempo real',
            'Ajustes de inventario con historial detallado (entradas/salidas/movimientos/mermas)',
            'Gestión de productos con atributos específicos para llantas',
            'Módulo de caja con apertura/cierre de turno',
            'Sistema de ventas para clientes y público general',
            'Gestión de pagos múltiples (contado, crédito, diferido)',
            'Reportería de ventas por día y mes con filtros avanzados',
            'Tickets de venta con opción de reimpresión',
            'Administración de usuarios, roles y organizaciones',
            'Control de costos de envío y productos de demostración',
            'Formularios dinámicos con validaciones',
            'Tablas con paginación, búsqueda y filtros',
            'Modales y diálogos interactivos',
            'Sistema de carga y feedback visual',
            'Responsive design para múltiples dispositivos',
            'Manejo de imágenes y archivos estáticos',
            'SPA (Single Page Application)',
            'Arquitectura modular basada en componentes',
            'Comunicación con API REST mediante Axios con interceptors',
            'Gestión de estado centralizada con Pinia',
            'Persistencia de estado con Pinia Persisted State',
            'Composables personalizados para lógica de negocio',
            'Guards de navegación para rutas protegidas',
            'Manejo de errores centralizado',
            'Sistema de permisos por roles',
            'Auto-imports optimizados con Unplugin',
            'Code quality con ESLint y Prettier',
            'Material Design con Quasar Framework',
            'Notificaciones con SweetAlert2 y Quasar Notify',
            'VueUse para composables utilities'
        ],
        images: [
            'images/llantamax/home.jpg',
            'images/llantamax/users.jpg',
            'images/llantamax/products.jpg',
            'images/llantamax/product-history.jpg',
            'images/llantamax/pos.jpg',
            'images/llantamax/pos2.jpg',
            'images/llantamax/pos3.jpg',
            'images/llantamax/stock.jpg',
        ],
        status: 'Private - In Production',
        role: 'Full Stack Developer',
        year: '2025'
    },
    'fitlife': {
        title: 'FitLife - Sistema Integral de Gestión de Gimnasios',
        type: 'Full-Stack Gym Management Platform',
        description: 'Sistema web full-stack de gestión administrativa y operativa para gimnasios, que incluye un portal para clientes y un panel administrativo completo. Desarrollado con arquitectura moderna y escalable, integrando procesamiento de pagos en línea, notificaciones en tiempo real y comunicación bidireccional mediante WebSockets.',
        longDescription: 'Plataforma completa para la administración integral de gimnasios con portal personalizado para clientes donde pueden gestionar su perfil, visualizar suscripciones activas e historial, procesar pagos y renovaciones mediante OpenPay, consultar estado de transacciones, y recibir notificaciones en tiempo real de cambios de status. El panel administrativo incluye dashboard con estadísticas y métricas del negocio, gestión completa de clientes con filtros avanzados y búsqueda, administración de suscripciones y planes, historial de pagos y transacciones por cliente, sistema de notificaciones push en tiempo real, y gestión de webhooks para procesamiento automático de pagos. El sistema implementa autenticación JWT segura con refresh tokens, correos automáticos transaccionales (bienvenida, cambios de status, confirmaciones, recordatorios de vencimiento), procesamiento de pagos con validación 3D Secure mediante OpenPay, webhooks para sincronización automática, y comunicación bidireccional en tiempo real mediante WebSockets (Laravel Reverb/Pusher). Arquitectura moderna con Vue 3 Composition API, Vite como build tool, Tailwind CSS v4 para diseño responsivo, Pinia para estado global con persistencia, Shadcn/UI + Reka UI como sistema de componentes accesibles, y Laravel como backend con API REST, gestor de correos transaccionales, y sistema de notificaciones multicanal.',
        components: [
            'Portal del Cliente: Perfil, suscripciones, pagos y notificaciones',
            'Panel Administrativo: Dashboard con métricas y estadísticas',
            'Gestión de Clientes: CRUD completo con filtros avanzados',
            'Administración de Suscripciones: Planes, renovaciones automáticas',
            'Sistema de Pagos: Integración OpenPay con 3D Secure',
            'Webhooks: Procesamiento automático de eventos de pago',
            'WebSockets: Notificaciones en tiempo real (Laravel Reverb/Pusher)',
            'Sistema de Correos: Laravel Mail con plantillas transaccionales',
            'Autenticación JWT: Login seguro con refresh tokens',
            'Historial de Transacciones: Auditoría completa de pagos',
            'Dashboard de Métricas: Visualización de KPIs del negocio',
            'Sistema de Notificaciones: Push notifications multicanal'
        ],
        technologies: [
            'Vue 3 (Composition API)',
            'Vite',
            'Tailwind CSS v4',
            'Pinia',
            'Pinia Persist',
            'Vue Router',
            'Shadcn/UI',
            'Reka UI',
            'Axios',
            'Vue Sonner',
            'Lucide Icons',
            'Class Variance Authority',
            'Laravel',
            'Laravel Reverb/Pusher',
            'Laravel Notifications',
            'Laravel Mail',
            'Eloquent ORM',
            'OpenPay',
            'WebSockets',
            'JWT Authentication',
            'API REST',
            'Webhooks'
        ],
        features: [
            'Portal personalizado para clientes con gestión de perfil',
            'Visualización de suscripciones activas e historial',
            'Procesamiento de pagos en línea con OpenPay',
            'Validación 3D Secure para transacciones',
            'Consulta de estado de pagos y transacciones',
            'Notificaciones en tiempo real mediante WebSockets',
            'Autenticación JWT con refresh tokens',
            'Dashboard administrativo con métricas en tiempo real',
            'Gestión completa de clientes (CRUD, filtros, búsqueda)',
            'Administración de suscripciones y planes',
            'Historial de pagos y transacciones por cliente',
            'Sistema de notificaciones push en tiempo real',
            'Gestión de webhooks para procesamiento automático',
            'Correos de bienvenida automatizados',
            'Notificaciones de cambios de status por email',
            'Confirmaciones de suscripción y pagos',
            'Recordatorios de vencimiento automáticos',
            'Webhooks de OpenPay para sincronización',
            'SPA con enrutamiento del lado del cliente',
            'Componentes reutilizables con Shadcn/UI',
            'Estado centralizado con Pinia y persistencia',
            'Composables para lógica compartida',
            'Sistema de layouts para diferentes contextos',
            'Manejo de errores centralizado',
            'Interceptores HTTP con Axios',
            'Diseño responsivo mobile-first',
            'Filtros avanzados y búsqueda en tiempo real',
            'Auditoría completa de transacciones',
            'Renovación automática de suscripciones',
            'Middleware personalizado para validación',
            'Arquitectura cliente-servidor escalable'
        ],
        images: [
            'images/fitlife/home.jpg',
            'images/fitlife/instalaciones.jpg',
            'images/fitlife/planes.jpg',
            'images/fitlife/login.jpg',
            'images/fitlife/portal-cliente.jpg',
            'images/fitlife/suscripciones-cliente.jpg',
            'images/fitlife/suscripcion.jpg',
            'images/fitlife/pagos-openpay.jpg',
            'images/fitlife/pagos-openpay2.jpg',
            'images/fitlife/history-payments.jpg',
            'images/fitlife/admin.jpg',

        ],
        url: 'https://www.fitlife.mx/',
        status: 'Live & Public',
        role: 'Full Stack Developer',
        year: '2025 - 2026'
    },
    'hosting-services': {
        title: 'Servicios de Hosting y Administración de Servidores',
        type: 'Web Hosting & Infrastructure Services',
        description: 'Servicios profesionales de hosting web, renta de servidores VPS, registro y administración de dominios, configuración de correos corporativos, mantenimiento de servidores, y soporte técnico especializado.',
        longDescription: 'Ofrezco servicios integrales de infraestructura web para empresas y desarrolladores. Incluye hosting web compartido y VPS con alta disponibilidad, registro y administración completa de dominios (.com, .mx, .net, etc.), configuración y administración de correos corporativos profesionales con protección antispam y antivirus, administración y mantenimiento de servidores Linux (CentOS, Ubuntu), instalación y configuración de paneles de control (cPanel/WHM, Plesk), implementación de certificados SSL/TLS para seguridad, configuración de servidores web (Apache, Nginx), administración de bases de datos (MySQL, PostgreSQL), configuración de DNS y registros, sistemas de backup automatizados, monitoreo y optimización de rendimiento, migración de sitios web entre servidores, instalación de aplicaciones web (WordPress, Laravel, etc.), configuración de firewalls y seguridad del servidor, soporte técnico 24/7, y consultoría para arquitectura de infraestructura web. Experiencia administrando múltiples servidores VPS con CentOS Linux, gestión de más de 11 sitios web incluyendo tiendas online, configuración de entornos de desarrollo y producción, y migraciones de hosting sin tiempo de inactividad.',
        components: [
            'Hosting Web: Planes compartidos y VPS con alta disponibilidad',
            'Renta de Servidores: VPS con administración completa o autogestión',
            'Registro de Dominios: .com, .mx, .net, y más extensiones',
            'Administración de Dominios: DNS, registros, transferencias',
            'Correos Corporativos: Configuración profesional con protección antispam',
            'Certificados SSL/TLS: Instalación y renovación automática',
            'Paneles de Control: cPanel/WHM, Plesk, DirectAdmin',
            'Administración de Servidores: Linux (CentOS, Ubuntu, Debian)',
            'Bases de Datos: MySQL, PostgreSQL, MariaDB',
            'Servidores Web: Apache, Nginx, LiteSpeed',
            'Backups Automatizados: Respaldos diarios y recuperación',
            'Migración de Sitios: Transferencia sin tiempo de inactividad',
            'Monitoreo: Supervisión 24/7 de disponibilidad y rendimiento',
            'Soporte Técnico: Asistencia especializada 24/7',
            'Optimización: Mejora de rendimiento y velocidad',
            'Seguridad: Firewalls, protección DDoS, hardening'
        ],
        technologies: [
            'cPanel/WHM',
            'Plesk',
            'Linux (CentOS, Ubuntu, Debian)',
            'Apache HTTP Server',
            'Nginx',
            'MySQL',
            'PostgreSQL',
            'MariaDB',
            'PHP',
            'Node.js',
            'Python',
            'DNS Management',
            'SSL/TLS',
            'Let\'s Encrypt',
            'Postfix',
            'Dovecot',
            'SpamAssassin',
            'ClamAV',
            'FTP/SFTP',
            'SSH',
            'Firewall (iptables, UFW)',
            'ModSecurity',
            'Fail2Ban',
            'Git',
            'Composer',
            'NPM',
            'PM2',
            'Backup Solutions'
        ],
        features: [
            'Hosting web compartido con recursos garantizados',
            'Servidores VPS con administración completa',
            'Registro de dominios nacionales e internacionales',
            'Administración completa de DNS y registros',
            'Configuración de correos corporativos profesionales',
            'Protección antispam y antivirus en correos',
            'Certificados SSL/TLS gratuitos (Let\'s Encrypt)',
            'Instalación y configuración de cPanel/WHM',
            'Optimización de servidores para WordPress, Laravel, etc.',
            'Configuración de servidores web (Apache, Nginx)',
            'Administración de bases de datos relacionales',
            'Backups automatizados diarios con retención configurable',
            'Migración de sitios web sin downtime',
            'Monitoreo proactivo de servicios 24/7',
            'Configuración de entornos de desarrollo y producción',
            'Instalación de aplicaciones web (WordPress, Joomla, etc.)',
            'Implementación de medidas de seguridad (firewall, fail2ban)',
            'Actualizaciones de software y parches de seguridad',
            'Optimización de rendimiento y caching',
            'Configuración de FTP/SFTP y acceso SSH',
            'Instalación de Node.js, Python, y otros entornos',
            'Configuración de subdominios y dominios adicionales',
            'Protección contra ataques DDoS',
            'Soporte técnico especializado vía email, WhatsApp o remoto',
            'Consultoría en arquitectura de infraestructura web',
            'Documentación de configuraciones',
            'Capacitación en uso de paneles de control',
            'Gestión de múltiples sitios en un solo servidor',
            'Configuración de certificados SSL wildcard',
            'Auditorías de seguridad y hardening de servidores'
        ],
        images: [],
        status: 'Active Services',
        role: 'System Administrator & DevOps',
        year: '2019 - Presente'
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    let scrollContent = `
        <div class="modal-section">
            <h3>Project Overview</h3>
            <p>${project.longDescription}</p>
        </div>
    `;
    
    // Add screenshots section if images exist
    if (project.images && project.images.length > 0) {
        scrollContent += `
            <div class="modal-section">
                <h3>Screenshots</h3>
                <div class="modal-images">
                    ${project.images.map(img => `<img src="${img}" alt="${project.title} screenshot" onclick="viewImageFullscreen('${img}')">`).join('')}
                </div>
            </div>
        `;
    }
    
    scrollContent += `
        <div class="modal-section">
            <h3>Technologies Used</h3>
            <div class="tech-stack">
                ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>${project.components ? 'Project Components' : 'Key Features'}</h3>
            <ul>
                ${(project.components || project.features).map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    if (project.url) {
        scrollContent += `
            <div class="modal-section" style="text-align: center;">
                <a href="${project.url}" target="_blank" class="btn-view" style="display: inline-block; margin-top: 10px;">
                    <i class="fas fa-external-link-alt"></i> Visit Website
                </a>
            </div>
        `;
    }
    
    let modalContent = `
        <div class="modal-project-header">
            <h2>${project.title}</h2>
            <p class="project-type">${project.type}</p>
            <p class="project-meta"><strong>Role:</strong> ${project.role} | <strong>Year:</strong> ${project.year}</p>
            <p class="project-status"><strong>Status:</strong> ${project.status}</p>
        </div>
        <div class="modal-content-scroll">
            ${scrollContent}
        </div>
    `;
    
    document.getElementById('modalBody').innerHTML = modalContent;
    document.getElementById('projectModal').style.display = 'block';
}

// Function to view image in fullscreen
function viewImageFullscreen(imageSrc) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: zoom-out;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 95%;
        max-height: 95%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(0, 163, 224, 0.5);
    `;
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    overlay.onclick = function() {
        document.body.removeChild(overlay);
    };
}

// Close modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementsByClassName('close-modal')[0];
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

// WhatsApp contact form function
function sendWhatsAppMessage(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email-address').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Build WhatsApp message
    const whatsappMessage = `*Nuevo mensaje del portafolio*%0A%0A` +
        `*Nombre:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Asunto:* ${subject}%0A%0A` +
        `*Mensaje:*%0A${message}`;
    
    // WhatsApp phone number (include country code, e.g., 52 for Mexico)
    const phoneNumber = '529999700581';
    
    // Build WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage.replace(/%0A/g, '\n'))}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Reset form after sending
    // document.getElementById('contact-form').reset();
}