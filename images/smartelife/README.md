# Capturas de Pantalla - Sistema MLM/POS Smart-e Life

Esta carpeta contiene las capturas de pantalla del Sistema MLM/POS Smart-e Life para suplementos alimenticios.

## Capturas Requeridas

Por favor, agrega las siguientes capturas de pantalla con los nombres exactos:

### Portal de Socio
1. **login.png** - Pantalla de inicio de sesión
2. **dashboard-socio.png** - Dashboard personalizado del socio con métricas
3. **arbol-genealogico.png** - Visualización interactiva del árbol genealógico (D3.js)
4. **comisiones.png** - Desglose de comisiones por nivel
5. **red-upline-downline.png** - Vista de red upline/downline

### Sistema POS
6. **pos-venta.png** - Interfaz de punto de venta
7. **pos-multicaja.png** - Control de apertura/cierre de caja
8. **inventario.png** - Gestión de inventario de suplementos

### Administración
9. **promociones.png** - Sistema de promociones y regalos automáticos
10. **reportes-admin.png** - Reportes de comisiones y ventas
11. **gestion-usuarios.png** - Panel de gestión de usuarios y roles
12. **suscripciones.png** - Gestión de planes Plus y Básico

## Especificaciones de las Imágenes

- **Formato:** PNG o JPG
- **Resolución recomendada:** Mínimo 1280x720px (1920x1080px para mejor calidad)
- **Peso máximo:** 500KB por imagen (optimizar para web)
- **Proporción:** 16:9 o similar para mejor visualización

## Áreas Clave a Capturar

### Árbol Genealógico (Muy Importante)
- Captura mostrando la estructura de red multinivel
- Visualización interactiva con nodos expandibles
- Indicadores de nivel (1-6) claramente visibles

### Dashboard de Socio
- Métricas principales (comisiones totales, red activa, calificación)
- Gráficos de rendimiento
- Estado de calificación mensual

### Sistema de Comisiones
- Desglose por nivel (nivel 1, nivel 2, ..., nivel 6)
- Historial de pagos
- Comisiones pendientes vs pagadas

### POS
- Interfaz de venta con productos
- Métodos de pago múltiples
- Ticket de venta generado

## Notas de Seguridad

- **IMPORTANTE:** Oculta información sensible:
  - Nombres reales de socios
  - Montos reales de comisiones
  - Números de cuenta o tarjetas
  - Direcciones y teléfonos reales
  - IDs de referencia únicos

- Usa datos de prueba o ambiente de desarrollo
- Difumina información personal si es necesario
- Evita mostrar datos de producción

## Sugerencias para Mejores Capturas

1. **Árbol Genealógico:** Captura con varios niveles expandidos mostrando la jerarquía
2. **Dashboard:** Asegúrate de que los gráficos se vean claramente
3. **POS:** Muestra el flujo completo de una venta
4. **Reportes:** Incluye gráficos y tablas con datos

## Agregar Más Capturas

Para agregar capturas adicionales:

1. Guarda las imágenes en esta carpeta con nombres descriptivos
2. Actualiza el array `images` en `script.js`:

```javascript
'smartelife': {
    // ...
    images: [
        'images/smartelife/login.png',
        // ... capturas existentes
        'images/smartelife/nueva-captura.png'  // Agregar aquí
    ],
    // ...
}
```

## Visualización

- Las imágenes se mostrarán en el modal de detalles del proyecto
- Se pueden hacer clic para ver en pantalla completa con efecto zoom
- El orden en el array determina el orden de visualización
