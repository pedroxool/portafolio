# Capturas de Pantalla - FitLife Sistema de Gestión de Gimnasios

Esta carpeta contiene las capturas de pantalla del Sistema Integral de Gestión de Gimnasios FitLife.

## Capturas Requeridas

Por favor, agrega las siguientes capturas de pantalla con los nombres exactos:

### Autenticación
1. **login.png** - Pantalla de inicio de sesión (JWT Authentication)

### Portal de Clientes
2. **portal-cliente.png** - Dashboard del cliente con información personal
3. **suscripciones-cliente.png** - Vista de suscripciones activas e historial
4. **pagos-openpay.png** - Interfaz de procesamiento de pagos con OpenPay
5. **historial-pagos.png** - Historial de transacciones y pagos del cliente

### Panel Administrativo
6. **dashboard-admin.png** - Dashboard con métricas, estadísticas y KPIs
7. **gestion-clientes.png** - CRUD de clientes con filtros avanzados y búsqueda
8. **admin-suscripciones.png** - Gestión de suscripciones y planes
9. **transacciones.png** - Historial completo de transacciones con auditoría

### Funcionalidades en Tiempo Real
10. **notificaciones.png** - Sistema de notificaciones push en tiempo real (WebSockets)
11. **webhooks.png** - Gestión de webhooks de OpenPay
12. **correos-template.png** - Plantillas de correos transaccionales

## Especificaciones de las Imágenes

- **Formato:** PNG o JPG
- **Resolución recomendada:** 1280x720px mínimo (1920x1080px ideal)
- **Peso máximo:** 500KB por imagen (optimizar para web)
- **Proporción:** 16:9 o similar

## Áreas Importantes a Capturar

### Portal de Clientes
- Dashboard con información de suscripción actual
- Estado de pagos y próximo vencimiento
- Botones de acción para renovación/pago
- Perfil con datos personales editables
- Historial de pagos con detalles

### Procesamiento de Pagos (OpenPay)
- Formulario de pago con tarjeta
- Validación 3D Secure en acción
- Confirmación de pago exitoso
- Respuesta de webhook recibido

### Panel Administrativo
- Dashboard con gráficos de métricas (ingresos, clientes activos, vencimientos)
- Tabla de clientes con filtros dinámicos
- Búsqueda en tiempo real
- Vista de detalles de cliente con historial completo
- Gestión de planes y suscripciones

### Notificaciones en Tiempo Real
- Toast notifications con Vue Sonner
- Notificaciones push recibidas
- Indicadores de WebSocket activo
- Alertas de status en tiempo real

### Sistema de Correos
- Templates de correos (bienvenida, confirmación, recordatorios)
- Correos con diseño responsive
- Contenido dinámico personalizado

## Características Técnicas a Destacar

### Interfaz (Tailwind CSS v4 + Shadcn/UI)
- Diseño moderno y limpio
- Componentes accesibles y elegantes
- Responsive design mobile-first
- Dark mode (si está implementado)
- Lucide Icons integrados

### Funcionalidades en Tiempo Real
- Indicadores de conexión WebSocket
- Notificaciones instantáneas
- Actualización automática de datos
- Estado de sincronización

### Integración OpenPay
- Formulario de pago seguro
- Logos de métodos de pago aceptados
- Indicadores de transacción procesando
- Confirmaciones visuales

## Notas de Seguridad

⚠️ **IMPORTANTE: Proteger información sensible**

- Ocultar nombres reales de clientes
- Difuminar números de tarjetas reales
- No mostrar tokens o API keys
- Ocultar montos reales de transacciones
- Difuminar correos electrónicos reales
- Usar datos de prueba o ambiente sandbox
- No mostrar configuraciones de OpenPay

## Sugerencias para Mejores Capturas

1. **Portal Cliente**: Muestra una suscripción activa con próximo vencimiento
2. **Pagos**: Captura el flujo completo (formulario → procesamiento → confirmación)
3. **Dashboard Admin**: Incluye gráficos de métricas con datos realistas
4. **Notificaciones**: Captura en el momento de recibir notificación en tiempo real
5. **Webhooks**: Muestra log de webhooks recibidos con tipos de evento
6. **Correos**: Captura templates en cliente de correo (no solo código)

## Elementos UI a Destacar

### Shadcn/UI Components
- ✅ Buttons con variants
- ✅ Cards elegantes
- ✅ Tables con sorting y paginación
- ✅ Forms con validación
- ✅ Modals/Dialogs
- ✅ Toast notifications (Vue Sonner)
- ✅ Badges de status
- ✅ Dropdowns y selects

### Tailwind CSS v4
- ✅ Utility classes modernas
- ✅ Responsive breakpoints
- ✅ Gradientes y efectos
- ✅ Animaciones y transiciones

## Flujos Importantes

### Flujo de Pago
1. Cliente selecciona plan/renovación
2. Formulario de pago OpenPay
3. Validación 3D Secure
4. Confirmación de pago
5. Webhook recibido en backend
6. Notificación al cliente
7. Correo de confirmación enviado

### Flujo de Notificaciones
1. Evento ocurre en backend
2. WebSocket emite notificación
3. Cliente recibe notificación en tiempo real
4. Toast notification se muestra
5. Estado se actualiza automáticamente

## Agregar Capturas Adicionales

Para agregar más capturas:

1. Guarda las imágenes en esta carpeta
2. Actualiza el array `images` en `script.js`:

```javascript
'fitlife': {
    // ...
    images: [
        'images/fitlife/login.png',
        // ... capturas existentes
        'images/fitlife/nueva-captura.png'  // Agregar aquí
    ],
    // ...
}
```

## Contexto del Sistema

Sistema especializado para gimnasios que incluye:
- Gestión completa de clientes y suscripciones
- Procesamiento de pagos automatizado con OpenPay
- Comunicación en tiempo real mediante WebSockets
- Correos transaccionales automatizados
- Panel administrativo con métricas de negocio
- Portal personalizado para cada cliente
- Arquitectura moderna y escalable

## Stack Destacado

**Frontend:** Vue 3, Vite, Tailwind CSS v4, Pinia, Shadcn/UI  
**Backend:** Laravel, WebSockets, JWT, OpenPay  
**Características:** Real-time, Pagos 3D Secure, Webhooks, Mail automático

---

**Última actualización**: Febrero 2026
