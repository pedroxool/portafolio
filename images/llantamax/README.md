# Capturas de Pantalla - Sistema de Gestión e Inventario Llantamax

Esta carpeta contiene las capturas de pantalla del Sistema POS y Control de Inventario Llantamax para cadena de llanteras.

## Capturas Requeridas

Por favor, agrega las siguientes capturas de pantalla con los nombres exactos:

### Autenticación y Dashboard
1. **login.png** - Pantalla de inicio de sesión
2. **dashboard.png** - Dashboard principal con métricas de ventas e inventario

### POS de Mostrador
3. **pos-venta.png** - Interfaz de punto de venta con carrito de compras
4. **busqueda-productos.png** - Sistema de búsqueda y escaneo de productos

### Control de Inventario
5. **inventario.png** - Control de inventario multi-sucursal en tiempo real
6. **ajustes-inventario.png** - Pantalla de ajustes (entradas/salidas/movimientos/mermas)
7. **historial-ajustes.png** - Historial detallado de ajustes de inventario
8. **productos.png** - Gestión de productos con atributos (tamaño, lona, grupo, sección)

### Módulo de Caja
9. **caja-apertura.png** - Apertura de caja/turno con monto inicial
10. **caja-cierre.png** - Cierre de caja con resumen de operaciones

### Ventas y Reportes
11. **ticket-venta.png** - Ticket de venta generado (con opción de reimpresión)
12. **reportes-ventas.png** - Reportería de ventas con filtros avanzados

### Administración
13. **clientes.png** - Gestión de clientes y público general
14. **usuarios-roles.png** - Administración de usuarios, roles y organizaciones

## Especificaciones de las Imágenes

- **Formato:** PNG o JPG
- **Resolución recomendada:** 1280x720px mínimo (1920x1080px ideal)
- **Peso máximo:** 500KB por imagen (optimizar para web)
- **Proporción:** 16:9 o similar

## Áreas Importantes a Capturar

### POS de Mostrador
- Interfaz de venta con búsqueda de productos
- Escaneo de código de barras
- Carrito de compras con productos de llantas
- Atributos específicos de productos (tamaño, lona, etc.)
- Proceso de cobro

### Inventario Multi-Sucursal
- Vista de stock por sucursal
- Estado en tiempo real de inventario
- Productos con diferentes atributos
- Niveles de stock mínimos

### Ajustes de Inventario
- Formulario de ajustes (entradas, salidas, movimientos, mermas)
- Historial con trazabilidad
- Justificaciones y observaciones
- Filtros de búsqueda por tipo de ajuste

### Módulo de Caja
- Apertura de turno con monto inicial
- Control de efectivo durante el día
- Cierre con arqueo de caja
- Resumen de ventas del turno

### Reportería
- Filtros por fecha, sucursal, producto
- Gráficos de ventas
- Reportes diarios y mensuales
- Análisis de productos más vendidos

## Notas de Seguridad

⚠️ **IMPORTANTE: Proteger información sensible**

- Ocultar nombres reales de clientes
- Difuminar montos reales de ventas
- No mostrar información de proveedores
- Usar datos de prueba o demo
- Evitar mostrar configuraciones de precios
- Ocultar datos de empleados reales

## Sugerencias para Capturas de Calidad

1. **Dashboard**: Muestra métricas clave (ventas del día, inventario bajo, sucursales)
2. **POS**: Captura con varios productos en carrito mostrando atributos
3. **Inventario**: Incluye vista de múltiples sucursales
4. **Ajustes**: Muestra diferentes tipos de movimientos
5. **Reportes**: Incluye gráficos y tablas con datos

## Características Destacadas en las Capturas

Asegúrate de mostrar:
- ✅ Interfaz Material Design con Quasar
- ✅ Diseño responsive
- ✅ Búsqueda y escaneo de productos
- ✅ Multi-sucursal
- ✅ Atributos específicos de llantas
- ✅ Historial de ajustes
- ✅ Sistema de roles y permisos
- ✅ Tickets de venta
- ✅ Filtros avanzados

## Agregar Capturas Adicionales

Para agregar más capturas:

1. Guarda las imágenes en esta carpeta
2. Actualiza el array `images` en `script.js`:

```javascript
'llantamax': {
    // ...
    images: [
        'images/llantamax/login.png',
        // ... capturas existentes
        'images/llantamax/nueva-captura.png'  // Agregar aquí
    ],
    // ...
}
```

## Tips de Captura

- Usa navegador en modo pantalla completa para capturas limpias
- Asegúrate de tener buen contraste y legibilidad
- Captura diferentes estados de las funcionalidades
- Muestra productos reales de llantas con sus atributos
- Incluye el sistema de búsqueda en acción
- Captura ejemplos de ajustes de inventario
- Muestra tickets de venta generados

## Contexto del Sistema

Sistema especializado para cadena de llanteras que incluye:
- Gestión de productos con atributos específicos (tamaño, lona, grupo, sección)
- Control de inventario en tiempo real por sucursal
- Trazabilidad completa de movimientos
- Ventas a crédito y diferido
- Control de costos de envío
- Productos de demostración
- Base de datos de clientes

---

**Última actualización**: Febrero 2026
