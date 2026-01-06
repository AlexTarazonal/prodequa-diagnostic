
import { Question, ServiceCategory, ResultProfile } from './types';

export const COLORS = {
  bg: '#F2F7FF',
  title: '#212d40',
  accent: '#486BF5',
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: '¿Cómo describirías tu nave ecommerce hoy?',
    type: 'single',
    options: [
      { id: 'A', icon: '🧱', label: 'Transbordador en construcción', description: 'Aún no tenemos ecommerce robusto / estamos por despegar.' },
      { id: 'B', icon: '🚀', label: 'Cohete funcional con mejoras pendientes', description: 'Vendemos online, pero sentimos límites para escalar.' },
      { id: 'C', icon: '🧯', label: 'Nave averiada en órbita', description: 'Incidencias, caídas, lentitud o mucho "apagar fuegos".' },
      { id: 'D', icon: '🛰️', label: 'Estación avanzada pero aislada', description: 'La tienda va bien, pero los sistemas no conversan entre sí.' },
    ]
  },
  {
    id: 2,
    title: '¿Qué "anomalía" te frena más en la misión?',
    type: 'single',
    options: [
      { id: 'A', icon: '☄️', label: 'Meteoritos de datos', description: 'Stock/precios/pedidos no están sincronizados; hay reprocesos.' },
      { id: 'B', icon: '⛽', label: 'Combustible bajo', description: 'Tráfico hay, pero la conversión / ticket / recompra no despega.' },
      { id: 'C', icon: '🧑‍🚒', label: 'Tripulación sobrecargada', description: 'El equipo vive resolviendo incidencias y tareas repetitivas.' },
      { id: 'D', icon: '🧩', label: 'Faltan módulos clave', description: 'Necesitamos features puntuales para acelerar ventas o UX.' },
    ]
  },
  {
    id: 3,
    title: '¿Qué sistemas ya están dentro de tu nave?',
    subtitle: 'Elige todos los que apliquen',
    type: 'multiple',
    options: [
      { id: 'erp', icon: '⚙️', label: 'ERP', description: 'SAP / Odoo / Oracle / Softland / otro' },
      { id: 'crm', icon: '👤', label: 'CRM', description: 'HubSpot / Salesforce / Zoho / otro' },
      { id: 'platform', icon: '📦', label: 'Plataforma ecommerce', description: 'VTEX / Shopify / Magento / WooCommerce' },
      { id: 'mkt', icon: '🏪', label: 'Marketplaces', description: 'Mercado Libre / Falabella / Linio' },
      { id: 'vtex', icon: 'V', label: 'Usamos VTEX', description: 'Plataforma nativa en la nube' },
      { id: 'nothing', icon: '🌑', label: 'Nada / muy básico', description: 'Sin sistemas integrados aún' },
    ]
  },
  {
    id: 4,
    title: '¿Cuándo necesitas que la nave mejore?',
    type: 'single',
    options: [
      { id: 'A', icon: '⚡', label: 'Inmediato', description: '0–4 semanas' },
      { id: 'B', icon: '🗓️', label: 'Pronto', description: '1–3 meses' },
      { id: 'C', icon: '🧭', label: 'Planificado', description: '3–6 meses' },
      { id: 'D', icon: '🌌', label: 'Largo plazo', description: '6+ meses' },
    ]
  }
];

export const RESULTS: Record<ServiceCategory, ResultProfile> = {
  [ServiceCategory.Integracion]: {
    id: ServiceCategory.Integracion,
    serviceName: 'Integración ecommerce',
    captainName: 'Arquitecto de Enlace',
    title: 'Diagnóstico: Sistemas desconectados',
    icon: '🔗',
    narrative:
      'Conectar ERP/CRM con el ecommerce para sincronizar inventario, precios y pedidos.',
    businessBenefit:
      'Menos errores, menos reprocesos y menos carga manual para tu equipo.',
    cta: 'Agendar auditoría de integración',
    serviceUrl: 'https://prodequa.com/integraciones-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Desarrollo]: {
    id: ServiceCategory.Desarrollo,
    serviceName: 'Desarrollo ecommerce',
    captainName: 'Ingeniero de Propulsión Digital',
    title: 'Diagnóstico: Plataforma con límite de crecimiento',
    icon: '🏗️',
    narrative:
      'Implementar o migrar tu ecommerce a una plataforma más robusta y escalable.',
    businessBenefit: 'Un canal digital preparado para crecer y soportar más demanda.',
    cta: 'Consultar plan de desarrollo',
    serviceUrl: 'https://prodequa.com/desarrollo-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Soporte]: {
    id: ServiceCategory.Soporte,
    serviceName: 'Soporte ecommerce',
    captainName: 'Jefe de Estabilidad',
    title: 'Diagnóstico: Riesgo operativo alto',
    icon: '🛡️',
    narrative:
      'Estabilizar y mantener tu ecommerce con soporte continuo, monitoreo y mejoras técnicas.',
    businessBenefit:
      'Menos incidencias, menos caídas y una mejor operación diaria para tu equipo.',
    cta: 'Activar soporte estratégico',
    serviceUrl: 'https://prodequa.com/soporte-y-mantenimiento-vtex',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Soluciones]: {
    id: ServiceCategory.Soluciones,
    serviceName: 'Soluciones ecommerce',
    captainName: 'Estratega de Aceleración',
    title: 'Diagnóstico: Potencial de conversión no explotado',
    icon: '🚀',
    narrative:
      'Agregar funcionalidades como DNI/RUC, factura ERP, módulos B2B, Cyber Timer, mejoras UX y automatizaciones clave.',
    businessBenefit:
      'Nuevas capacidades comerciales sin reconstruir tu arquitectura desde cero.',
    cta: 'Ver catálogo de soluciones',
    serviceUrl: 'https://prodequa.com/soluciones-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
};
