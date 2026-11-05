# Karelina Fabra · Portfolio

Portafolio profesional completo en español e inglés. Presenta proyectos empresariales, procesos, automatización y análisis de transacciones con Elasticsearch/Kibana. Incluye seis fichas de proyectos y tres casos interactivos con datos ficticios.

La identidad visual combina fondo oscuro, acentos violeta y cian, tipografía Space Grotesk y Manrope, un diagrama SVG animado y apariciones discretas al recorrer las secciones. Las animaciones respetan `prefers-reduced-motion`. No se utilizan videos, librerías de animación ni recursos remotos en ejecución.

## Vista previa local

Solo requiere Python 3; no hay paquetes que instalar:

```sh
python3 scripts/serve.py
```

Abrir [http://127.0.0.1:5173](http://127.0.0.1:5173). Si el puerto está ocupado: `python3 scripts/serve.py --port 5174`.

- Español: `http://127.0.0.1:5173/?lang=es`
- English: `http://127.0.0.1:5173/?lang=en`
- Ficha enlazable: `http://127.0.0.1:5173/?lang=es&project=ticketera`

El idioma inicial es inglés. El selector conserva la elección en la URL (`?lang=es` o `?lang=en`); sin parámetro, o con uno no reconocido, se muestra inglés. Los metadatos iniciales también están en inglés. Las fichas tienen navegación por teclado, cierre con Escape y retorno del foco. Los gráficos incluyen una tabla alternativa.

## Publicar en Sites

Sitio público: [Karelina Fabra · Portfolio](https://karelina-fabra-portfolio.karelina2507.chatgpt.site/). Abre en inglés por defecto; español sigue disponible en el selector.

El proyecto está vinculado a Sites mediante `.openai/hosting.json`. Ese archivo contiene el identificador del sitio y la carpeta estática `dist`, sin credenciales. Al actualizar, conservar ese identificador y reutilizar el sitio existente.

1. Ejecutar las comprobaciones y generar `dist` con los comandos de la sección Comprobaciones.
2. Desde Codex con el plugin Sites, solicitar que publique este proyecto en su sitio existente. El flujo de Sites sincroniza el código, guarda una versión del mismo commit y publica su artefacto.
3. Mantener la audiencia configurada. La visibilidad se gestiona en Sites y no depende de que el repositorio de GitHub sea público.

La web usa archivos estáticos y no requiere Vercel, claves, base de datos ni servicios externos. GitHub conserva el código; Sites proporciona el alojamiento. La carpeta `.qa/sites/` es una copia local aislada para sincronizar con el repositorio de Sites sin cambiar el remoto `origin` de GitHub; está excluida de Git.

## Publicar en Vercel (alternativa)

1. En Vercel, elegir **Add New → Project** e importar `karelina2507-spec/portfolio`.
2. Seleccionar **Framework Preset: Other** y mantener la raíz del repositorio.
3. Vercel toma la configuración de `vercel.json`:
   - Install Command: `echo 'No dependencies to install'`
   - Build Command: `python3 scripts/check.py && python3 scripts/build.py`
   - Output Directory: `dist`
4. No hacen falta variables de entorno, claves ni servicios externos. Elegir **Deploy**.

La publicación sirve únicamente los archivos de `dist`; no incluye Git, pruebas ni documentación. No hay API, base de datos, seguimiento analítico ni conexión a operaciones reales. El sitio no envía alertas, mensajes ni tickets.

Referencia oficial: [Configuración de Vercel](https://vercel.com/docs/project-configuration/vercel-json), [entorno de build](https://vercel.com/docs/builds/build-image).

## Actualizar contenido

Editar `src/content.js` para el perfil y los textos generales, `src/project-stories.js` para los seis casos y `src/career.js` para trayectoria y formación:

- `profile`: correo, GitHub, LinkedIn y rutas al CV por idioma.
- `copy.es` / `copy.en`: todo el texto general.
- `projectStories`: casos bilingües con contexto, usuarios, aporte propio, funcionalidades, módulos, recorrido, criterios, uso de IA, tecnologías y límites de la revisión.
- `cases.es` / `cases.en`: pregunta, análisis y decisión de los casos de datos.

Un valor `null` significa **no disponible o no verificado**. La interfaz oculta ese campo y cualquier enlace sin destino válido; nunca se debe reemplazar por una función, resultado o tecnología supuesta. `role` y `result` aceptan `{ es: '...', en: '...' }` cuando se confirme el aporte o resultado.

Para incorporar un CV, guardar el PDF aprobado en `assets/` y completar `profile.cv.es` y/o `profile.cv.en` con su ruta, por ejemplo `/assets/cv-es.pdf`. El botón aparece solo en el idioma que tenga un archivo disponible.

La versión actual incluye el CV original aportado por Karelina en `assets/karelina-fabra-cv-2026.pdf`: cuatro páginas, español e inglés en el mismo documento, sin modificaciones. Ambas versiones del sitio descargan ese archivo. Las cifras de perfil (10+ años, equipos de ocho personas y cuarto año de Ingeniería en IA en curso), los cinco cargos de la trayectoria y la formación proceden de ese CV.

Para incorporar capturas, añadir a `screenshots` objetos de este formato:

```js
{ src: '/assets/ticketera.webp', alt: { es: 'Descripción de la captura', en: 'Screenshot description' } }
```

Los campos `repository`, `demo` y `video` aceptan URLs HTTPS verificadas. Las vistas actuales están rotuladas **conceptuales** y no reproducen interfaces reales. Se pueden sustituir en el componente `projectVisual` de `src/ui.js`.

Los proyectos se presentan como casos desarrollados en la página principal. Las fichas amplían el aporte, los módulos, los criterios de diseño y el uso de IA. El rol de punta a punta fue confirmado por Karelina; las capacidades y tecnologías se contrastaron con código y documentación mediante acceso de lectura. No se consultaron datos productivos y no se publican URLs de repositorios privados.

Los detalles por completar están en [PENDIENTES.md](PENDIENTES.md) y en `pending` dentro de cada caso. No incluir información confidencial en esos campos: el código del repositorio es público. El portal del colaborador permanece anónimo.

## Componentes y datos

```text
index.html             Documento y metadatos
assets/styles.css      Diseño responsive, impresión y movimiento reducido
assets/fonts/          Manrope, Space Grotesk y sus licencias OFL, alojadas localmente
src/content.js         Contenido bilingüe y registro de faltantes
src/project-stories.js  Seis casos bilingües contrastados con código y documentación
src/project-case.js     Presentación de casos y fichas completas reutilizables
src/career.js           Trayectoria y formación extraídas del CV, en ambos idiomas
src/hero-scene.js       Composición SVG animada de procesos, datos e IA
src/ui.js              Componentes visuales, iconos y validación de enlaces
src/app.js             Navegación, idioma, categorías y fichas
src/demo.js            Datos sintéticos, filtros y agregaciones
src/dashboard.js       Casos, gráficos SVG, indicadores y tabla accesible
scripts/               Vista previa, comprobación y empaquetado sin dependencias
tests/                 Validación de cálculos, traducciones y contenido
vercel.json            Build, salida y cabeceras de producción
```

La demostración genera 768 agregados sintéticos para 24 horas, dos adquirentes, dos infraestructuras, dos terminales, dos comercios y dos redes. Los totales, tasas y comentarios se recalculan con cada selección. La comparación local/AWS describe únicamente esos datos ficticios y no atribuye causalidad.

## Comprobaciones

```sh
python3 scripts/check.py
python3 scripts/build.py
```

Con Node.js disponible, también se pueden ejecutar las pruebas de lógica sin instalar dependencias:

```sh
node --test tests/portfolio.test.js
```

Las pruebas revisan reconciliación de estados, 162 combinaciones de filtros, agrupaciones horarias, comparación de infraestructura, selecciones vacías, paridad de idiomas, enlaces y ausencia de afirmaciones sin confirmar. Consultar [VERIFICACION.md](VERIFICACION.md) para la revisión del navegador.

## English

This is Karelina Fabra’s bilingual professional portfolio. English is the default language; use the selector or `?lang=es` for Spanish. Run `python3 scripts/serve.py` for a local preview. The project is linked to Sites through `.openai/hosting.json`; reuse that Site when publishing updates. Vercel remains an alternative with the **Other** preset; `vercel.json` defines the build and `dist` output. No dependencies, credentials or environment variables are required.

General content lives in `src/content.js`; project case studies live in `src/project-stories.js` and are rendered by `src/project-case.js`. Maintain both languages together. Ownership was confirmed by Karelina and capabilities were checked against the original code and documentation through read-only access. A `null` field is unavailable or unverified and is omitted from the public interface. Illustrations are explicitly conceptual. Analytics data is fictional and never connected to live systems. Measured outcomes, real payment processing and email deliveries require separate evidence.

Fonts: [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope) and [Space Grotesk](https://github.com/google/fonts/tree/main/ofl/spacegrotesk), licensed under the SIL Open Font License in `assets/fonts/OFL.txt` and `assets/fonts/SPACE-GROTESK-OFL.txt`.
