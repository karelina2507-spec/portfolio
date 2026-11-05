import { projectStories } from './project-stories.js';

// All visitor-facing copy lives here. Maintain both languages together.
// null means unverified or unavailable: components omit those sections and links.
// Project scope combines owner confirmation and read-only source review; see project-stories.js.
export const profile = {
  name: 'Karelina Fabra',
  github: 'https://github.com/karelina2507-spec',
  email: 'karelina2507@gmail.com', // Public address authorized by the owner.
  linkedin: 'https://www.linkedin.com/in/karelina-fabra-059b60147',
  cv: { es: null, en: null }, // PENDING: approved PDF file paths, e.g. /assets/cv-es.pdf.
};

export const copy = {
  es: {
    title: 'Karelina Fabra · Innovación, automatización & datos',
    description: 'Karelina Fabra — Innovación, automatización y datos. Soluciones empresariales que conectan procesos, tecnología e inteligencia artificial.',
    skip: 'Ir al contenido', nav: ['Proyectos', 'Datos & análisis', 'Sobre mí'], contact: 'Conectemos', menu: 'Abrir navegación', closeMenu: 'Cerrar navegación', language: 'Idioma',
    eyebrow: 'INNOVACIÓN · AUTOMATIZACIÓN · DATOS', heroLead: 'Conecto procesos,', heroAccent: 'datos e ideas.', heroEnd: 'Construyo soluciones.',
    heroBody: 'Transformo necesidades de negocio en soluciones digitales, combinando análisis, automatización y desarrollo asistido por IA.',
    viewProjects: 'Explorar proyectos', viewData: 'Explorar análisis de datos', heroNote: 'Tecnología con contexto. Soluciones con propósito.',
    systemLabel: 'DE LA NECESIDAD A LA SOLUCIÓN', systemTitle: 'Conectar. Entender. Resolver.', systemTags: ['Procesos', 'Datos', 'IA aplicada'], diagramInput: 'Una necesidad de negocio', diagramOutput: 'Una solución que conecta', diagramCaption: 'Una mirada que une negocio y tecnología.',
    ribbon: ['Procesos de negocio', 'Soluciones empresariales', 'Inteligencia artificial', 'Análisis de datos'],
    projectsEyebrow: '01 / PROYECTOS SELECCIONADOS', projectsTitle: 'Del problema a la solución.', projectsBody: 'Proyectos que desarrollé de punta a punta: desde entender la necesidad y definir el proceso hasta construir, integrar y validar la solución.',
    filters: ['Todos', 'Gestión & procesos', 'Comercio digital', 'IA aplicada'], details: 'Leer el caso completo', concept: 'Vista conceptual · no es una captura real', scopeShared: 'Funciones contrastadas con el código', scopePending: 'Documentación pendiente',
    projectLabels: { context: 'Contexto y necesidad', users: 'Para quién', role: 'Mi rol y aporte', solution: 'La solución', features: 'Funcionalidades documentadas', technologies: 'Tecnologías confirmadas', ai: 'IA y Codex', result: 'Resultado documentado', media: 'Material del proyecto', purpose: 'Propósito' },
    close: 'Cerrar ficha', projectNote: 'Funciones contrastadas con código y documentación. Las vistas son conceptuales y no contienen datos productivos.', independentNote: 'Este proyecto tiene su propia ficha. Su alcance se completará a partir del material o repositorio original.',
    repo: 'Repositorio', demo: 'Ver demo', video: 'Ver video', screenshot: 'Captura del proyecto', nextProject: 'Siguiente proyecto',
    ownership: 'RESPONSABILIDAD INTEGRAL', ownershipTitle: 'De la necesidad a la validación.', ownershipBody: 'En estos proyectos asumí la definición de requerimientos, el diseño de procesos y de la solución, el desarrollo asistido por IA/Codex, las integraciones y la validación.', roleStages: ['Requerimientos', 'Procesos', 'Desarrollo con IA', 'Integraciones', 'Validación'], challenge: 'La necesidad', whatBuilt: 'Qué construí', value: 'Valor de la solución', workflowLabel: 'El recorrido', caseModules: 'Cómo se organiza la solución', contribution: 'Mi aporte en este caso', decisions: 'Decisiones y criterios', scope: 'Alcance de la revisión', technologies: 'Tecnologías',
    dataEyebrow: '02 / DATOS QUE AYUDAN A DECIDIR', dataTitle: 'Entender lo que pasa.', dataAccent: 'Encontrar el siguiente paso.',
    dataBody: 'Mi trabajo con Elasticsearch y Kibana conecta el comportamiento transaccional con las preguntas de operación: qué cambió, a quién afecta y dónde investigar.',
    dataTags: ['Elasticsearch', 'Kibana', 'Plataformas de pago', 'AWS'], dataCases: ['Rechazos & reversos', 'Infraestructura local vs. AWS', 'Desvíos & alertas'],
    caseQuestion: 'LA PREGUNTA', caseAnalysis: 'EL ANÁLISIS', caseDecision: 'LA DECISIÓN QUE PERMITE',
    demoLabel: 'DEMOSTRACIÓN INTERACTIVA', demoDisclaimer: 'Datos ficticios. No representan operaciones, resultados ni métricas reales.',
    dashboardTitle: 'Pulso transaccional', dashboardSubtitle: 'Explorá los datos del ejemplo', timeFilter: 'Período', acquirerFilter: 'Adquirente', terminalFilter: 'Terminal', merchantFilter: 'Comercio', networkFilter: 'Red', all: 'Todos', last12: 'Últimas 12 horas', last24: 'Últimas 24 horas',
    transactionCount: 'Transacciones', approvedRate: 'Aprobación', rejectedRate: 'Rechazo', noResponse: 'Sin respuesta', reversals: 'Reversos',
    chartVolume: 'Volumen y rechazos por hora', chartInfrastructure: 'Tasa de aprobación por infraestructura', chartAlerts: 'Rechazos y operaciones sin respuesta por hora', chartVolumeA11y: 'Datos horarios del ejemplo transaccional', local: 'Local', aws: 'AWS', approved: 'Aprobadas', rejected: 'Rechazadas', hours: 'Hora', total: 'Total', approval: 'Aprobación', viewTable: 'Ver tabla de datos', hideTable: 'Ocultar tabla', resultCount: 'Resultados de la selección', resetFilters: 'Restablecer filtros',
    syntheticInsight: 'LECTURA DEL EJEMPLO', methodsLink: 'Cómo trabajo',
    aboutEyebrow: '03 / SOBRE MÍ', aboutTitle: 'Una mirada de negocio.', aboutAccent: 'Una forma de hacer tecnológica.',
    aboutP1: 'Soy Karelina Fabra. Mi perfil conecta tecnología, plataformas de pago, operaciones y procesos de negocio con análisis de datos e inteligencia artificial aplicada.',
    aboutP2: 'Me interesa entender qué necesita una organización y convertirlo en una solución clara: un proceso más ordenado, información útil para decidir o una herramienta que acompañe el trabajo cotidiano.',
    aboutP3: 'El desarrollo asistido por IA forma parte de esa práctica, junto con la definición de requerimientos, el diseño de procesos, las integraciones y la validación.',
    aboutCaption: 'NEGOCIO + TECNOLOGÍA + CRITERIO', aboutCallout: 'Entender primero.\nConstruir con propósito.',
    methodEyebrow: '04 / FORMA DE TRABAJO', methodTitle: 'Del contexto a la validación.',
    steps: [
      { title: 'Entender', text: 'Escuchar la necesidad, reconocer a los usuarios y definir el problema de negocio.' },
      { title: 'Diseñar', text: 'Traducir requerimientos en procesos, flujos y una solución que tenga sentido.' },
      { title: 'Construir', text: 'Desarrollar con asistencia de IA y conectar las piezas mediante integraciones.' },
      { title: 'Validar', text: 'Revisar el comportamiento, contrastar con la necesidad y ajustar con criterio.' },
    ],
    toolbox: 'Herramientas en mi práctica', tools: [['Elasticsearch & Kibana', 'Consultas, agregaciones y dashboards'], ['Codex & IA', 'Desarrollo asistido y agentes virtuales'], ['Jira & Microsoft Teams', 'Seguimiento, integraciones y alertas'], ['AWS', 'Análisis comparativo de infraestructura']],
    contactEyebrow: '05 / CONECTEMOS', contactTitle: 'Tu próximo desafío,', contactAccent: 'una nueva solución.', contactBody: 'Para oportunidades laborales y proyectos freelance que conecten negocio, datos y tecnología.', githubCta: 'Encontrame en GitHub', emailCta: 'Escribime', linkedinCta: 'LinkedIn', cvCta: 'Descargar CV', copied: 'Correo copiado',
    footer: 'Pensado con criterio. Construido con IA.', backTop: 'Volver al inicio', diagramLabels: ['NECESIDAD', 'PROCESO', 'SOLUCIÓN'], emptyProjects: 'No hay proyectos en esta categoría.',
  },
  en: {
    title: 'Karelina Fabra · Innovation, automation & data',
    description: 'Karelina Fabra — Innovation, automation and data. Business solutions connecting processes, technology and artificial intelligence.',
    skip: 'Skip to content', nav: ['Projects', 'Data & analytics', 'About me'], contact: 'Let’s connect', menu: 'Open navigation', closeMenu: 'Close navigation', language: 'Language',
    eyebrow: 'INNOVATION · AUTOMATION · DATA', heroLead: 'Connecting processes,', heroAccent: 'data and ideas.', heroEnd: 'Building solutions.',
    heroBody: 'I turn business needs into digital solutions, bringing together analysis, automation and AI-assisted development.',
    viewProjects: 'Explore projects', viewData: 'Explore data analytics', heroNote: 'Technology with context. Solutions with purpose.',
    systemLabel: 'FROM BUSINESS NEED TO SOLUTION', systemTitle: 'Connect. Understand. Solve.', systemTags: ['Processes', 'Data', 'Applied AI'], diagramInput: 'A business need', diagramOutput: 'A connected solution', diagramCaption: 'A perspective that brings business and technology together.',
    ribbon: ['Business processes', 'Enterprise solutions', 'Artificial intelligence', 'Data analytics'],
    projectsEyebrow: '01 / SELECTED PROJECTS', projectsTitle: 'From problem to solution.', projectsBody: 'Projects I developed end to end: from understanding the need and defining the process to building, integrating and validating the solution.',
    filters: ['All', 'Management & processes', 'Digital commerce', 'Applied AI'], details: 'Read the full case study', concept: 'Conceptual view · not an actual screenshot', scopeShared: 'Capabilities checked against source', scopePending: 'Documentation pending',
    projectLabels: { context: 'Context and need', users: 'Who it serves', role: 'My role and contribution', solution: 'The solution', features: 'Documented capabilities', technologies: 'Confirmed technologies', ai: 'AI and Codex', result: 'Documented outcome', media: 'Project materials', purpose: 'Purpose' },
    close: 'Close project', projectNote: 'Capabilities checked against source code and documentation. Views are conceptual and contain no production data.', independentNote: 'This project has its own case study. Its scope will be completed using the original materials or repository.',
    repo: 'Repository', demo: 'View demo', video: 'Watch video', screenshot: 'Project screenshot', nextProject: 'Next project',
    ownership: 'END-TO-END OWNERSHIP', ownershipTitle: 'From need to validation.', ownershipBody: 'In these projects I took responsibility for requirements, process and solution design, AI/Codex-assisted development, integrations and validation.', roleStages: ['Requirements', 'Processes', 'AI-assisted development', 'Integrations', 'Validation'], challenge: 'The need', whatBuilt: 'What I built', value: 'The solution’s value', workflowLabel: 'The journey', caseModules: 'How the solution is organized', contribution: 'My contribution in this case', decisions: 'Decisions and rationale', scope: 'Review scope', technologies: 'Technologies',
    dataEyebrow: '02 / DATA THAT INFORMS DECISIONS', dataTitle: 'Understand what’s happening.', dataAccent: 'Find the next step.',
    dataBody: 'My work with Elasticsearch and Kibana connects transaction patterns with operational questions: what changed, who is affected and where to investigate.',
    dataTags: ['Elasticsearch', 'Kibana', 'Payment platforms', 'AWS'], dataCases: ['Declines & reversals', 'On-premises vs. AWS', 'Anomalies & alerts'],
    caseQuestion: 'THE QUESTION', caseAnalysis: 'THE ANALYSIS', caseDecision: 'THE DECISION IT SUPPORTS',
    demoLabel: 'INTERACTIVE DEMONSTRATION', demoDisclaimer: 'Fictional data. These are not real transactions, outcomes or performance metrics.',
    dashboardTitle: 'Transaction pulse', dashboardSubtitle: 'Explore the sample data', timeFilter: 'Period', acquirerFilter: 'Acquirer', terminalFilter: 'Terminal', merchantFilter: 'Merchant', networkFilter: 'Network', all: 'All', last12: 'Last 12 hours', last24: 'Last 24 hours',
    transactionCount: 'Transactions', approvedRate: 'Approval', rejectedRate: 'Declines', noResponse: 'No response', reversals: 'Reversals',
    chartVolume: 'Hourly volume and declines', chartInfrastructure: 'Approval rate by infrastructure', chartAlerts: 'Hourly declines and no-response transactions', chartVolumeA11y: 'Hourly sample transaction data', local: 'On-premises', aws: 'AWS', approved: 'Approved', rejected: 'Declined', hours: 'Hour', total: 'Total', approval: 'Approval', viewTable: 'View data table', hideTable: 'Hide table', resultCount: 'Selection results', resetFilters: 'Reset filters',
    syntheticInsight: 'READING THE EXAMPLE', methodsLink: 'How I work',
    aboutEyebrow: '03 / ABOUT ME', aboutTitle: 'A business perspective.', aboutAccent: 'A technology-driven approach.',
    aboutP1: 'I’m Karelina Fabra. My background connects technology, payment platforms, operations and business processes with data analysis and applied artificial intelligence.',
    aboutP2: 'I focus on understanding what an organization needs and translating it into a clear solution: a more organized process, useful information for decisions or a tool that supports everyday work.',
    aboutP3: 'AI-assisted development is part of that practice, alongside requirements definition, process design, integrations and validation.',
    aboutCaption: 'BUSINESS + TECHNOLOGY + JUDGMENT', aboutCallout: 'Understand first.\nBuild with purpose.',
    methodEyebrow: '04 / HOW I WORK', methodTitle: 'From context to validation.',
    steps: [
      { title: 'Understand', text: 'Listen to the need, identify the users and define the business problem.' },
      { title: 'Design', text: 'Turn requirements into processes, workflows and a solution that makes sense.' },
      { title: 'Build', text: 'Develop with AI assistance and connect the pieces through integrations.' },
      { title: 'Validate', text: 'Review behavior, check it against the original need and refine with judgment.' },
    ],
    toolbox: 'Tools in my practice', tools: [['Elasticsearch & Kibana', 'Queries, aggregations and dashboards'], ['Codex & AI', 'Assisted development and virtual agents'], ['Jira & Microsoft Teams', 'Tracking, integrations and alerts'], ['AWS', 'Infrastructure comparison and analysis']],
    contactEyebrow: '05 / LET’S CONNECT', contactTitle: 'Your next challenge,', contactAccent: 'a new solution.', contactBody: 'For career opportunities and freelance projects that bring business, data and technology together.', githubCta: 'Find me on GitHub', emailCta: 'Get in touch', linkedinCta: 'LinkedIn', cvCta: 'Download CV', copied: 'Email copied',
    footer: 'Designed with judgment. Built with AI.', backTop: 'Back to top', diagramLabels: ['NEED', 'PROCESS', 'SOLUTION'], emptyProjects: 'No projects in this category.',
  },
};

export const projects = projectStories;

export const cases = {
  es: [
    { question: '¿Dónde se concentran los rechazos y las operaciones sin respuesta?', analysis: 'Segmentación por adquirente, terminal, comercio, red y período. Consultas y agregaciones para distinguir aprobaciones, rechazos, reversos y operaciones sin respuesta.', decision: 'Acotar el alcance de un desvío y orientar la investigación hacia el segmento afectado.' },
    { question: '¿Se comportan igual las transacciones en infraestructura local y en AWS?', analysis: 'Comparación de volumen y tasas por infraestructura, usando el mismo período y filtros para mantener el contexto del análisis.', decision: 'Reconocer diferencias que requieren investigación; comparar tasas junto al volumen antes de atribuir una causa.' },
    { question: '¿Qué señales operativas requieren seguimiento?', analysis: 'Identificación de desvíos, análisis de impacto y seguimiento de incidentes. Automatización de alertas e integración con la ticketera y Microsoft Teams.', decision: 'Priorizar la revisión operativa y dar seguimiento al incidente. Esta demostración visualiza señales ficticias; no envía alertas ni crea tickets.' },
  ],
  en: [
    { question: 'Where are declines and no-response transactions concentrated?', analysis: 'Segmentation by acquirer, terminal, merchant, network and period. Queries and aggregations to distinguish approvals, declines, reversals and no-response transactions.', decision: 'Narrow the scope of an anomaly and guide investigation toward the affected segment.' },
    { question: 'Do on-premises and AWS transactions behave the same way?', analysis: 'Compare volumes and rates by infrastructure using the same period and filters to preserve the analytical context.', decision: 'Identify differences that warrant investigation; compare rates alongside volume before attributing a cause.' },
    { question: 'Which operational signals need follow-up?', analysis: 'Anomaly identification, impact analysis and incident follow-up. Alert automation and integration with the ticketing system and Microsoft Teams.', decision: 'Prioritize operational review and incident follow-up. This demo visualizes fictional signals; it does not send alerts or create tickets.' },
  ],
};
