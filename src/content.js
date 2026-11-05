// All visitor-facing copy lives here. Maintain both languages together.
// null means unverified or unavailable: components omit those sections and links.
// Source for project scope: the owner's brief, 5 November 2026. No repositories inspected.
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
    projectsEyebrow: '01 / PROYECTOS SELECCIONADOS', projectsTitle: 'Del problema a la solución.', projectsBody: 'Sistemas, portales y experiencias digitales pensados alrededor de las personas y sus procesos.',
    filters: ['Todos', 'Gestión & procesos', 'Comercio digital', 'IA aplicada'], details: 'Explorar proyecto', concept: 'Vista conceptual · no es una captura real', scopeShared: 'Alcance compartido', scopePending: 'Documentación pendiente',
    projectLabels: { context: 'Contexto y necesidad', users: 'Para quién', role: 'Mi rol y aporte', solution: 'La solución', features: 'Funcionalidades documentadas', technologies: 'Tecnologías confirmadas', ai: 'IA y Codex', result: 'Resultado documentado', media: 'Material del proyecto', purpose: 'Propósito' },
    close: 'Cerrar ficha', projectNote: 'Ficha basada en el alcance compartido. Las tecnologías, aportes y resultados adicionales se incorporarán con documentación del proyecto.', independentNote: 'Este proyecto tiene su propia ficha. Su alcance se completará a partir del material o repositorio original.',
    repo: 'Repositorio', demo: 'Ver demo', video: 'Ver video', screenshot: 'Captura del proyecto', nextProject: 'Siguiente proyecto',
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
    projectsEyebrow: '01 / SELECTED PROJECTS', projectsTitle: 'From problem to solution.', projectsBody: 'Systems, portals and digital experiences built around people and their processes.',
    filters: ['All', 'Management & processes', 'Digital commerce', 'Applied AI'], details: 'Explore project', concept: 'Conceptual view · not an actual screenshot', scopeShared: 'Shared scope', scopePending: 'Documentation pending',
    projectLabels: { context: 'Context and need', users: 'Who it serves', role: 'My role and contribution', solution: 'The solution', features: 'Documented capabilities', technologies: 'Confirmed technologies', ai: 'AI and Codex', result: 'Documented outcome', media: 'Project materials', purpose: 'Purpose' },
    close: 'Close project', projectNote: 'Based on the shared project scope. Additional technologies, contributions and outcomes will be added when supported by project documentation.', independentNote: 'This project has its own case study. Its scope will be completed using the original materials or repository.',
    repo: 'Repository', demo: 'View demo', video: 'Watch video', screenshot: 'Project screenshot', nextProject: 'Next project',
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

// Evidence is explicit; a null field must never be turned into a public claim.
const shared = { role: null, result: null, screenshots: [], demo: null, repository: null, video: null };
export const projects = [
  {
    ...shared, id: 'ticketera', category: 'process', visual: 'tickets', technologies: ['Jira'], evidence: 'owner-brief',
    es: { title: 'Gestión de tickets', category: 'OPERACIONES & TRAZABILIDAD', summary: 'Un punto de encuentro para incidentes, requerimientos y seguimiento operativo.', context: 'Dar seguimiento a incidentes y requerimientos con una visión organizada del trabajo.', users: 'Personas que registran, atienden y supervisan incidentes y requerimientos.', solution: 'Un sistema de gestión con roles, métricas y trazabilidad, integrado con Jira.', features: ['Seguimiento de incidentes y requerimientos', 'Roles y permisos', 'Métricas y trazabilidad', 'Integración con Jira'], ai: null, purpose: 'Organizar el seguimiento operativo y la información de cada caso.' },
    en: { title: 'Ticket management', category: 'OPERATIONS & TRACEABILITY', summary: 'A shared space for incidents, requests and operational follow-up.', context: 'Track incidents and requests with an organized view of the work.', users: 'People who log, handle and oversee incidents and requests.', solution: 'A management system with roles, metrics and traceability, integrated with Jira.', features: ['Incident and request tracking', 'Roles and permissions', 'Metrics and traceability', 'Jira integration'], ai: null, purpose: 'Organize operational follow-up and the information associated with each case.' },
    pending: ['Rol y aportes específicos', 'Stack técnico', 'Uso concreto de IA/Codex', 'Estado de implementación de cada función en el repositorio', 'Resultados verificables', 'Capturas y enlaces autorizados'],
  },
  {
    ...shared, id: 'ags-comercial', category: 'process', visual: 'commercial', technologies: [], evidence: 'owner-brief',
    es: { title: 'Gestión comercial', category: 'AGS URUGUAY · GESTIÓN', summary: 'Pedidos, precios y comisiones conectados con el seguimiento comercial.', context: 'Reunir la gestión de pedidos, precios y comisiones en un flujo comercial.', users: 'Personas involucradas en la gestión y el seguimiento comercial de AGS Uruguay.', solution: 'Un sistema de gestión comercial centrado en pedidos, precios, comisiones y seguimiento.', features: ['Gestión de pedidos', 'Gestión de precios', 'Comisiones', 'Seguimiento comercial'], ai: null, purpose: 'Acompañar el proceso comercial con información organizada.' },
    en: { title: 'Commercial management', category: 'AGS URUGUAY · MANAGEMENT', summary: 'Orders, pricing and commissions connected with commercial follow-up.', context: 'Bring order, pricing and commission management into a commercial workflow.', users: 'People involved in commercial management and follow-up at AGS Uruguay.', solution: 'A commercial management system focused on orders, pricing, commissions and follow-up.', features: ['Order management', 'Pricing management', 'Commissions', 'Commercial follow-up'], ai: null, purpose: 'Support the commercial process with organized information.' },
    pending: ['Rol y aportes específicos', 'Stack técnico', 'Uso concreto de IA/Codex', 'Evidencia de implementación', 'Resultados verificables', 'Capturas y enlaces autorizados'],
  },
  {
    ...shared, id: 'ags-tienda', category: 'commerce', visual: 'store', technologies: [], evidence: 'owner-brief',
    es: { title: 'Tienda digital', category: 'AGS URUGUAY · E-COMMERCE', summary: 'Una presentación de productos que abre un canal de ventas digital.', context: 'Llevar la presentación de productos de AGS Uruguay a un canal digital.', users: 'Personas interesadas en conocer los productos de AGS Uruguay.', solution: 'Una tienda y experiencia de comercio electrónico para la presentación de productos y el canal de ventas digital.', features: ['Presentación de productos', 'Canal de ventas digital'], ai: null, purpose: 'Acercar la oferta de productos a través de una experiencia digital.' },
    en: { title: 'Digital storefront', category: 'AGS URUGUAY · E-COMMERCE', summary: 'A product showcase that opens a digital sales channel.', context: 'Bring AGS Uruguay’s product presentation to a digital channel.', users: 'People interested in discovering AGS Uruguay’s products.', solution: 'A storefront and e-commerce experience for product presentation and digital sales.', features: ['Product presentation', 'Digital sales channel'], ai: null, purpose: 'Make the product offering accessible through a digital experience.' },
    pending: ['Productos y material visual autorizado', 'Flujo de compra verificado; no asumir carrito, checkout ni pagos', 'Rol y stack técnico', 'Uso concreto de IA/Codex', 'Resultados y enlaces'],
  },
  {
    ...shared, id: 'portal-colaborador', category: 'process', visual: 'portal', technologies: [], evidence: 'owner-brief',
    es: { title: 'Portal del colaborador', category: 'PERSONAS & PROCESOS', summary: 'Solicitudes, licencias y aprobaciones con visibilidad para cada perfil.', context: 'Organizar solicitudes y licencias, con seguimiento de estados y aprobaciones.', users: 'Colaboradores y personas que participan en los circuitos de aprobación.', solution: 'Un portal con solicitudes, licencias, aprobaciones, consulta de estados y permisos por perfil.', features: ['Solicitudes y licencias', 'Circuitos de aprobación', 'Consulta de estados', 'Permisos por perfil'], ai: null, purpose: 'Dar visibilidad a los procesos internos desde un espacio compartido.' },
    en: { title: 'Employee portal', category: 'PEOPLE & PROCESSES', summary: 'Requests, leave and approvals with visibility for each role.', context: 'Organize requests and leave, with status tracking and approvals.', users: 'Employees and people involved in approval workflows.', solution: 'A portal with requests, leave, approvals, status queries and profile-based permissions.', features: ['Requests and leave', 'Approval workflows', 'Status queries', 'Profile-based permissions'], ai: null, purpose: 'Provide visibility into internal processes through a shared space.' },
    pending: ['Mantener anonimato de la empresa en texto, capturas y archivos', 'Rol y aportes específicos', 'Stack técnico y uso de IA/Codex', 'Resultados y material visual sanitizado'],
  },
  {
    ...shared, id: 'portal-agh', category: 'process', visual: 'agh', technologies: [], evidence: 'pending-material',
    es: { title: 'Portal de AGH', category: 'PROYECTO INDEPENDIENTE', summary: 'Un proyecto con identidad propia. Su alcance se documentará a partir del material original.', context: null, users: null, solution: null, features: [], ai: null, purpose: null },
    en: { title: 'AGH portal', category: 'INDEPENDENT PROJECT', summary: 'A project with its own identity. Its scope will be documented using the original materials.', context: null, users: null, solution: null, features: [], ai: null, purpose: null },
    pending: ['Repositorio o documentación original', 'Contexto, usuarios y funcionalidades', 'Rol y aportes', 'Stack técnico y uso de IA/Codex', 'Resultados verificables', 'Capturas y enlaces autorizados'],
  },
  {
    ...shared, id: 'agentes', category: 'ai', visual: 'agents', technologies: ['Codex'], evidence: 'partial-owner-brief',
    es: { title: 'Agentes virtuales con Codex', category: 'IA APLICADA', summary: 'Agentes desarrollados para la ticketera y el portal empresarial.', context: 'Aplicar agentes virtuales en el contexto de la ticketera y el portal empresarial.', users: null, solution: 'Agentes virtuales desarrollados con Codex para estos dos entornos.', features: [], ai: 'Codex se utilizó para desarrollar los agentes. Sus consultas, acciones, permisos e integraciones se detallarán cuando se verifique la implementación.', purpose: null },
    en: { title: 'Virtual agents with Codex', category: 'APPLIED AI', summary: 'Agents developed for the ticketing system and enterprise portal.', context: 'Apply virtual agents within the ticketing system and enterprise portal.', users: null, solution: 'Virtual agents developed with Codex for these two environments.', features: [], ai: 'Codex was used to develop the agents. Their queries, actions, permissions and integrations will be detailed once the implementation has been verified.', purpose: null },
    pending: ['Verificar propósito y usuarios de cada agente', 'Consultas y acciones realmente disponibles', 'Integraciones, permisos y límites', 'Evidencia del repositorio y flujo real', 'Aporte específico y resultados', 'Demostraciones sanitizadas'],
  },
];

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
