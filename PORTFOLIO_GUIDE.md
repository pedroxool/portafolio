# Guía de la Nueva Sección Portfolio

## Cambios Realizados

### 1. Reorganización del Menú
- **Services**: Nueva opción en el menú que redirige a la sección "My Services" (anteriormente confundida con Portfolio)
- **Portfolio**: Ahora redirige a la nueva sección de Portfolio dedicada a proyectos

### 2. Nueva Sección Portfolio
Se ha creado una sección moderna e innovadora para mostrar tus proyectos con las siguientes características:

#### Características Principales:
- **Filtros Interactivos**: Filtra proyectos por categoría (All, E-commerce, Web Apps, APIs & Backend, Full Stack)
- **Diseño de Tarjetas**: Cada proyecto se presenta en una tarjeta moderna con efecto hover
- **Proyectos Agrupados**: Soporte especial para "suites" o ecosistemas de proyectos (ej: E-commerce + API + Panel Admin + POS)
- **Badges de Estado**: Indicadores visuales para proyectos públicos (Live) o privados (Private)
- **Tecnologías Destacadas**: Badges coloridos que muestran las tecnologías usadas en cada proyecto
- **Modal de Detalles**: Click en "Details" para ver información completa del proyecto
- **Diseño Responsive**: Totalmente adaptable a dispositivos móviles

## Cómo Personalizar tus Proyectos

### Agregar un Nuevo Proyecto Individual

En `index.html`, agrega un nuevo bloque dentro de `<div class="portfolio-grid">`:

```html
<div class="portfolio-item" data-category="web fullstack">
    <div class="project-card">
        <div class="project-image">
            <img src="images/tu-imagen.jpg" alt="Nombre del Proyecto">
            <div class="project-overlay">
                <div class="project-badge public">Live</div>
                <!-- O usa: <div class="project-badge private">Private</div> -->
                <div class="project-links">
                    <a href="https://tu-sitio.com" target="_blank" class="btn-view">
                        <i class="fas fa-external-link-alt"></i> Visit
                    </a>
                    <button class="btn-detail" onclick="openProjectModal('id-proyecto')">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
        <div class="project-info">
            <h3 class="project-title">Nombre del Proyecto</h3>
            <p class="project-type">Tipo de Proyecto</p>
            <p class="project-description">Descripción breve del proyecto...</p>
            
            <div class="tech-stack">
                <span class="tech-badge">HTML5</span>
                <span class="tech-badge">CSS3</span>
                <span class="tech-badge">JavaScript</span>
            </div>
        </div>
    </div>
</div>
```

### Agregar un Proyecto Suite (Agrupado)

Para proyectos que incluyen múltiples componentes (E-commerce + API + POS, etc.):

```html
<div class="portfolio-item project-suite" data-category="ecommerce fullstack">
    <div class="project-card">
        <!-- ... (igual que arriba) ... -->
        <div class="project-info">
            <h3 class="project-title">Nombre de la Suite</h3>
            <p class="project-type">Multi-Project Ecosystem</p>
            <p class="project-description">Descripción de la suite completa...</p>
            
            <div class="project-components">
                <span class="component-tag"><i class="fas fa-shopping-cart"></i> E-commerce</span>
                <span class="component-tag"><i class="fas fa-cog"></i> Admin Panel</span>
                <span class="component-tag"><i class="fas fa-server"></i> API REST</span>
                <span class="component-tag"><i class="fas fa-cash-register"></i> POS</span>
            </div>
            
            <div class="tech-stack">
                <!-- tecnologías -->
            </div>
        </div>
    </div>
</div>
```

### Agregar Información Detallada en el Modal

En `script.js`, agrega tu proyecto al objeto `projectData`:

```javascript
const projectData = {
    'id-proyecto': {
        title: 'Nombre del Proyecto',
        type: 'Tipo de Proyecto',
        description: 'Descripción corta',
        longDescription: 'Descripción detallada del proyecto, contexto, tu rol, etc.',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Vue.js'],
        features: [
            'Característica 1',
            'Característica 2',
            'Característica 3'
        ],
        url: 'https://tu-sitio.com', // Opcional - solo para proyectos públicos
        status: 'Live & Public', // o 'Private - Security Restricted'
        role: 'Full Stack Developer',
        year: '2024'
    }
};
```

### Categorías Disponibles

Puedes usar estas categorías en `data-category` (puedes combinar varias separadas por espacios):
- `all` - Todos los proyectos
- `ecommerce` - Proyectos de e-commerce
- `web` - Aplicaciones web
- `api` - APIs y backend
- `fullstack` - Proyectos full stack

## Personalización de Estilos

Los colores principales se definen en `style.css` usando variables CSS:

```css
:root{
    --Azul: #003087;
    --Azul-claro: #00a3e0
}
```

Puedes cambiar estos valores para adaptar los colores a tu marca personal.

## Reemplazar Imágenes

### Imágenes de Proyectos
1. Agrega tus screenshots a la carpeta `images/`
2. Actualiza la ruta en el HTML: `<img src="images/tu-screenshot.jpg" alt="...">`

### Tamaño Recomendado
- Ancho: 600-800px
- Alto: 400-500px
- Formato: JPG o PNG
- Peso: Optimizado (< 200KB por imagen)

## Proyectos Privados

Para proyectos que no puedes mostrar públicamente:
1. Usa `<div class="project-badge private">Private</div>`
2. No incluyas el botón "Visit" (solo "Details")
3. Puedes usar imágenes genéricas o mockups en lugar de screenshots reales
4. En el modal, indica claramente el motivo: "Private - Client Confidential" o "Private - Security Restricted"

## Testing

Después de agregar o modificar proyectos:
1. Verifica que todos los filtros funcionen correctamente
2. Prueba que el modal se abra con el contenido correcto
3. Revisa el diseño en dispositivos móviles
4. Valida que todos los enlaces funcionen

## Próximas Mejoras Sugeridas

- Agregar un lightbox para ver screenshots en tamaño completo
- Implementar animaciones más avanzadas al cargar la página
- Agregar testimonios o feedback de clientes
- Incluir métricas de los proyectos (usuarios, rendimiento, etc.)
- Agregar integración con GitHub para mostrar repositorios públicos

---

**Nota**: Recuerda actualizar regularmente tu portfolio con nuevos proyectos y mantener la información de contacto actualizada.
