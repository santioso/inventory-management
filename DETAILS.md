# Decisiones de Diseño y Mejoras Futuras

## Decisiones Clave de Diseño

### 1. Stack Tecnológico
- **Frontend**: Se eligió Angular para el frontend debido a su robustez, modularidad y su idoneidad para aplicaciones de una sola página (SPA). El Angular CLI facilita la generación de componentes y la configuración del proyecto.
- **Backend**: Se seleccionó NestJS para el backend debido a su arquitectura modular y basada en controladores, que se asemeja a Angular. Esta similitud hace que la integración y el mantenimiento del código sean más fáciles.
- **Base de Datos**: Se utilizó TypeORM como ORM para interactuar con la base de datos, lo que permite una manipulación de datos y migraciones de esquema sencillas.

### 2. Arquitectura Basada en Componentes
- **Separación de Responsabilidades**: La aplicación está diseñada con una arquitectura basada en componentes, que separa claramente las responsabilidades. Esto hace que el mantenimiento y la escalabilidad sean más manejables.
- **Componentes Reutilizables**: Se crearon componentes reutilizables para la creación, búsqueda y listado de productos. Estos componentes pueden ser fácilmente reutilizados o ampliados en el futuro, ahorrando tiempo y esfuerzo.

### 3. Diseño de API
- **API RESTful**: El backend fue construido utilizando principios RESTful, lo que facilita la interacción con el frontend. Las rutas están claramente definidas para todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
- **Manejo de Errores**: Se implementó un manejo de errores robusto en el backend con excepciones HTTP para proporcionar mensajes de error claros y consistentes.

### 4. Gestión del Estado
- **Estado Local**: Se utilizó el estado local en los componentes de Angular para gestionar datos específicos del componente. Esto mantiene la gestión del estado simple y reduce la complejidad.
- **Emisores de Eventos**: Se utilizaron emisores de eventos (`EventEmitter`) para comunicar cambios de estado entre componentes, permitiendo actualizaciones en tiempo real en la interfaz de usuario.

## Sugerencias para Mejoras Futuras y Escalabilidad

### 1. Gestión del Estado
- **NgRx**: Considerar la implementación de NgRx para la gestión del estado global en la aplicación, lo que podría ayudar a simplificar el flujo de datos.

### 2. Autenticación y Autorización
- **JWT**: Implementar autenticación y autorización utilizando JSON Web Tokens (JWT) para mejorar la seguridad de la aplicación y permitir el control de acceso basado en roles.
- **Guards**: Utilizar guards tanto en Angular como en NestJS para proteger rutas y recursos sensibles.

### 3. Pruebas
- **Pruebas Unitarias**: Crear pruebas unitarias utilizando frameworks como Jasmine y Karma para Angular, y Jest para NestJS, para asegurar que los componentes funcionen como se espera.
- **Pruebas End-to-End**: Implementar pruebas end-to-end con herramientas como Cypress o Protractor para confirmar que todas las partes de la aplicación funcionen juntas sin problemas.

### 4. Optimización del Rendimiento
- **Carga Diferida (Lazy Loading)**: Considerar la implementación de la carga diferida en Angular para cargar módulos bajo demanda, mejorando así el rendimiento de la aplicación.
- **Cacheo**: Utilizar técnicas de cacheo en el backend para reducir la carga en la base de datos y mejorar los tiempos de respuesta.

### 5. Integración y Despliegue Continuo (CI/CD)
- **Pipelines de CI/CD**: Configurar pipelines de CI/CD para automatizar los procesos de construcción, prueba y despliegue, haciendo el flujo de trabajo más eficiente.
- **Contenerización**: Utilizar contenedores para simplificar el despliegue y mejorar la escalabilidad.

### 6. Escalabilidad
- **Microservicios**: Adoptar una arquitectura de microservicios para dividir la aplicación en servicios más pequeños y manejables.
- **Balanceo de Carga**: Implementar un balanceo de carga para distribuir el tráfico entre múltiples instancias del servidor, mejorando la disponibilidad y escalabilidad.

## Conclusión

Las decisiones de diseño tomadas para esta aplicación se centraron en la modularidad, la reutilización de componentes y la facilidad de mantenimiento. Las sugerencias para futuras mejoras y escalabilidad ayudarán a garantizar que la aplicación pueda crecer y adaptarse a las necesidades cambiantes del negocio.
