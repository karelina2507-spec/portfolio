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

## Ampliación de los casos de proyecto

Después de la primera versión se revisaron, exclusivamente mediante lectura, el código y la documentación de las cinco implementaciones originales. Karelina confirmó su responsabilidad de punta a punta en todos los proyectos. Las seis historias ahora incluyen necesidad, usuarios, aporte propio, funcionalidades, tres módulos, recorrido, criterios, tecnologías y uso de IA.

- Ticketera: flujos de tickets, SLA, historial, Jira, Teams y alertas Elastic.
- Sistema comercial: pedidos y ventas, precios B2B, comisiones, filtros y reportes.
- Tienda: catálogo, variantes, carrito y flujo de checkout. Las llamadas del frontend a pagos no se consideran prueba de cobros reales.
- Portal del colaborador: solicitudes, licencias, aprobaciones, perfiles y onboarding, con presentación anónima.
- AGH: directorio, planillas, campañas, plantillas y reportes. Se identifica el modo de demostración de correo y no se afirma entrega real.
- Agentes: consultas y preparación de acciones de soporte y gestión humana, con confirmación y validación del backend.

No se modificaron esos repositorios, no se ejecutaron consultas de negocio y no se transfirieron al portafolio fuentes, URLs privadas, nombres de personas, precios, porcentajes de comisión ni datos internos. El portafolio publica únicamente descripciones funcionales.

Las comprobaciones de contenido ahora verifican el rol confirmado, el alcance revisado, la paridad de idiomas y la ausencia de resultados medidos y destinos no autorizados. La presentación principal muestra la necesidad, aporte, funcionalidades y valor de cada caso; las fichas amplían el contenido.

Revisión de navegador de esta ampliación: los seis casos muestran aporte y seis funcionalidades en la página principal, y las seis fichas muestran responsabilidad integral, tres módulos y alcance de la revisión. Se probaron las dos traducciones; anchos 320, 375, 768 y 1366 para español y 320, 768 y 1366 para inglés, sin desbordamiento de página. La ficha de agentes se probó a 375 píxeles, sin desbordamiento interno. Filtros de categoría y cierre con Escape correctos. Consola sin errores ni advertencias.

## Alcance de la revisión

Las ilustraciones son conceptuales. Las capacidades descritas se contrastaron con código y documentación, sin verificar el funcionamiento actual de los entornos productivos. Los resultados de uso, capturas reales, cobros de la tienda y entregas de correo requieren evidencia adicional. No se probó un despliegue remoto en Vercel: se deja la configuración y el procedimiento en `README.md`.
