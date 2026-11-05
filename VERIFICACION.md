# Verificación del portafolio

Revisión realizada el 5 de noviembre de 2026 sobre la vista previa local. La web es estática y no consulta servicios externos ni datos productivos.

## Diseño y comportamiento

- Identidad oscura con acentos violeta, cian y rosa; sin los tonos verdes de la versión inicial.
- Tipografías Manrope y Space Grotesk alojadas localmente; respuestas HTTP 200 con tipos de contenido correctos.
- Portada con composición SVG, órbitas y flujos animados, más transiciones al recorrer secciones. Se comprobó que las animaciones están activas y que la regla `prefers-reduced-motion` desactiva animaciones y transiciones y conserva el contenido visible.
- Tokens principales de texto revisados sobre las tres superficies oscuras: contraste mínimo 5,76:1; esto no equivale a una auditoría exhaustiva de accesibilidad.
- Escritorio y móvil en español: 320, 375, 768, 1100 y 1366 píxeles. Inglés: 320, 375, 768 y 1366. Sin desbordamiento horizontal de la página.
- Navegación, cambio de idioma, filtros del dashboard y comparación local/AWS revisados. Las fichas mantienen el tema oscuro; ficha del portal probada a 375 píxeles sin desbordamiento interno y cierre con Escape correcto.
- Consola sin errores ni advertencias durante la revisión.

## CV, trayectoria y formación

- CV original aportado por Karelina: cuatro páginas, español e inglés en el mismo PDF.
- El archivo de descarga coincide byte por byte con el original, comprobado con SHA-256. No se editó el documento.
- Respuesta HTTP 200 `application/pdf` y descarga efectiva comprobada desde el botón de la portada.
- Descarga disponible desde portada, perfil y contacto en ambos idiomas.
- Cinco cargos de la trayectoria, formación, nivel de idioma y cifras del perfil proceden del CV. Ingeniería en IA figura como cuarto año en curso; AWS y Azure, como conocimientos básicos.

## Contenido de proyectos

Las cinco implementaciones originales se revisaron exclusivamente mediante lectura de código y documentación. Karelina confirmó su responsabilidad de punta a punta. Los seis casos muestran contexto, aporte, funcionalidades y valor en la página principal; las fichas amplían módulos, recorrido, criterios, tecnologías, uso de IA y alcance.

No se modificaron los proyectos originales ni se consultaron sus datos productivos. No se publican URLs de repositorios privados, nombres de personas, precios, porcentajes de comisión ni datos internos. El portal del colaborador permanece anónimo.

Las ilustraciones son conceptuales. Los resultados de uso, capturas reales, cobros de la tienda y entregas de correo de AGH requieren evidencia adicional. Las cifras 10+, ocho personas y cuarto año corresponden al perfil profesional documentado en el CV, no a resultados de los proyectos.

## Comprobaciones ejecutadas

- `python3 scripts/check.py`: referencias de HTML, módulos, fuentes y CSS, scripts Python y JSON correctos.
- `python3 scripts/build.py`: artefacto estático generado en `dist`.
- `node --test tests/portfolio.test.js`: ocho comprobaciones de datos, traducciones, contenido, enlaces y CV aprobadas.
- Sintaxis de todos los módulos JavaScript comprobada con `node --check`.
- La demostración conserva reconciliación de estados, 162 combinaciones de filtros y sumas por hora e infraestructura. Todos sus datos son ficticios.
- Sin enlaces vacíos; repositorios y demos de proyectos sin destino permanecen ocultos.

No se probó un despliegue remoto en Vercel. La configuración y el procedimiento de publicación están en `README.md`.
