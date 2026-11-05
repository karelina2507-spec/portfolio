# Verificación

Revisión realizada el 5 de noviembre de 2026 sobre la vista previa local. Sin servicios externos, APIs ni datos reales.

## Comprobaciones ejecutadas

- Referencias del HTML, módulos JavaScript, fuente local y hoja de estilos: correctas.
- Build estático generado en `dist`: correcto.
- Documento, JavaScript, CSS y fuente: respuestas HTTP 200 con tipos de contenido correspondientes. Acceso a `/.git/config`: HTTP 404.
- Ocho comprobaciones de lógica ejecutadas en el entorno Node integrado: correctas. Incluyen las 162 combinaciones de filtros, la reconciliación de estados y las sumas por hora e infraestructura.

## Navegador

- Traducción completa al inglés: navegación, proyectos, fichas, casos, filtros, indicadores y contacto. Cambian también el título y los metadatos.
- Filtros combinados de período, adquirente, terminal, comercio y red: indicadores y lectura del ejemplo actualizados. La selección probada produjo 2.098 transacciones, coincidentes con el cálculo independiente.
- Comparación local/AWS y gráfico de desvíos: actualizados con los mismos filtros.
- Tabla accesible: 12 filas horarias al seleccionar 12 horas.
- Restablecimiento de filtros: retorno al total del ejemplo, 61.766 transacciones ficticias.
- Navegación entre pestañas con flechas del teclado: correcta.
- Ficha de tickets, siguiente proyecto, cierre con Escape y restitución del foco: correctos.
- Categorías de comercio e IA: muestran el proyecto correspondiente; la categoría «Todos» restaura las seis fichas.
- Menú móvil: abre, navega a la sección y se cierra.
- Sin enlaces vacíos ni botones de CV, repositorio de proyecto o demo sin destino.
- Anchos revisados: 320, 375, 768 y 1366 píxeles, sin desbordamiento horizontal de la página.
- Consola del navegador: sin errores ni advertencias durante la revisión funcional.

## Alcance de la revisión

Las ilustraciones de proyectos son conceptuales. Las funciones de los proyectos originales proceden del brief y no se contrastaron con sus repositorios. AGH y las acciones de agentes quedan pendientes de documentación. No se probó un despliegue remoto en Vercel: se deja la configuración y el procedimiento en `README.md`.
