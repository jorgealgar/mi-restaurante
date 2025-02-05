# Proyecto de Reservas y Restaurantes

Este es un proyecto web creado para gestionar reservas y proporcionar información sobre varios restaurantes. Permite a los usuarios realizar reservas en línea, ver los menús de los restaurantes, obtener información sobre la localización de los mismos y más.

## Tecnologías utilizadas

- **React**: Se utiliza React para la creación de componentes reutilizables y la gestión del estado en el frontend.
- **React Bootstrap**: Para facilitar el diseño responsivo y mejorar la estructura del formulario, se utiliza React Bootstrap.
- **Formspree**: Se ha integrado para manejar el envío de formularios y reservas.
- **CSS**: Estilos personalizados para hacer que la interfaz sea más atractiva y amigable.
- **Mapas**: Se utiliza una biblioteca personalizada para mostrar la localización de los restaurantes.

## Estructura del Proyecto

El proyecto está organizado en componentes independientes que hacen que el código sea modular y fácil de mantener. Los componentes clave incluyen:

- **Header**: Un componente de encabezado común para todas las páginas.
- **Footer**: Un pie de página que se muestra en todas las páginas.
- **RestauranteItem1 y RestauranteItem2**: Componentes que representan las tarjetas de restaurantes con información sobre menús y detalles.
- **Mapa**: Componente que muestra la ubicación de los restaurantes en un mapa interactivo.
- **Cookies**: Componente que gestiona el consentimiento de cookies.
- **Formulario de Reservas**: Permite a los usuarios hacer una reserva, donde se recogen datos como nombre, apellidos, email, fecha, hora y restaurante seleccionado.

## Procedimiento de Desarrollo

1. **Planificación**: Inicialmente, se definió la estructura del proyecto y los componentes necesarios para la funcionalidad. La idea principal era crear una plataforma de reservas para dos restaurantes ficticios con menús, reservas y localización.

2. **Creación de componentes**: Se crearon los siguientes componentes:

   - **Header** y **Footer** para la navegación global.
   - **RestauranteItem** para mostrar los detalles de los restaurantes.
   - **Formulario** para capturar la información de la reserva del usuario.
   - **Mapa** para mostrar la ubicación geográfica de los restaurantes.

3. **Formularios de Reservas**: El formulario se construyó utilizando React Bootstrap para el diseño y validación. El envío del formulario es gestionado por la integración con **Formspree**, un servicio de backend que maneja el envío de correos y almacenamiento de los datos del formulario.

4. **Estilización**: Se utilizó CSS personalizado para dar estilo a los componentes y asegurar que la página fuera responsiva. Además, se aplicaron clases de Bootstrap para mejorar la accesibilidad y la apariencia.

5. **Validación de Formularios**: Se implementó un sistema de validación de campos en el formulario para asegurar que los datos fueran correctos antes de ser enviados.

## Instalación

Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/proyecto-restaurantes.git
```
