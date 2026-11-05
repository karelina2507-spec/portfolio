# Karelina Fabra · Portfolio

Portafolio profesional completo en español e inglés. Presenta proyectos empresariales, procesos, automatización y análisis de transacciones con Elasticsearch/Kibana. Incluye seis fichas de proyectos y tres casos interactivos con datos ficticios.

## Vista previa local

Solo requiere Python 3; no hay paquetes que instalar:

```sh
python3 scripts/serve.py
```

Abrir [http://127.0.0.1:5173](http://127.0.0.1:5173). Si el puerto está ocupado: `python3 scripts/serve.py --port 5174`.

- Español: `http://127.0.0.1:5173/?lang=es`
- English: `http://127.0.0.1:5173/?lang=en`
- Ficha enlazable: `http://127.0.0.1:5173/?lang=es&project=ticketera`

El selector conserva la preferencia de idioma en el navegador. El parámetro `lang` tiene prioridad. Las fichas tienen navegación por teclado, cierre con Escape y retorno del foco. Los gráficos incluyen una tabla alternativa.

## Publicar en Vercel

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

Editar `src/content.js`, que contiene:

- `profile`: correo, GitHub, LinkedIn y rutas al CV por idioma.
- `copy.es` / `copy.en`: todo el texto general.
- `projects`: fichas bilingües, alcance suministrado, tecnologías confirmadas y campos pendientes.
- `cases.es` / `cases.en`: pregunta, análisis y decisión de los casos de datos.

Un valor `null` significa **no disponible o no verificado**. La interfaz oculta ese campo y cualquier enlace sin destino válido; nunca se debe reemplazar por una función, resultado o tecnología supuesta. `role` y `result` aceptan `{ es: '...', en: '...' }` cuando se confirme el aporte o resultado.

Para incorporar un CV, guardar el PDF aprobado en `assets/` y completar `profile.cv.es` y/o `profile.cv.en` con su ruta, por ejemplo `/assets/cv-es.pdf`. El botón aparece solo en el idioma que tenga un archivo disponible.

Para incorporar capturas, añadir a `screenshots` objetos de este formato:

```js
{ src: '/assets/ticketera.webp', alt: { es: 'Descripción de la captura', en: 'Screenshot description' } }
```

Los campos `repository`, `demo` y `video` aceptan URLs HTTPS verificadas. Las vistas actuales están rotuladas **conceptuales** y no reproducen interfaces reales. Se pueden sustituir en el componente `projectVisual` de `src/ui.js`.

Los detalles por completar están en [PENDIENTES.md](PENDIENTES.md) y en `pending` dentro de cada proyecto. No incluir información confidencial en esos campos: el código del repositorio es público. El portal del colaborador permanece anónimo.

## Componentes y datos

```text
index.html             Documento y metadatos
assets/styles.css      Diseño responsive, impresión y movimiento reducido
assets/fonts/          Manrope alojada localmente y su licencia OFL
src/content.js         Contenido bilingüe y registro de faltantes
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

This is Karelina Fabra’s bilingual professional portfolio. Run `python3 scripts/serve.py` for a local preview. Deploy on Vercel with the **Other** preset; `vercel.json` defines the build and `dist` output. No dependencies, credentials or environment variables are required.

All content lives in `src/content.js`. Maintain both languages together. A `null` field is unavailable or unverified and is omitted from the public interface. The six project illustrations are explicitly conceptual. All analytics data is fictional, generated locally, and never connected to live systems. Project-specific contributions, technical stacks, outcomes and agent capabilities must be supported by source material before publication.

Font: [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope), licensed under the SIL Open Font License in `assets/fonts/OFL.txt`.
