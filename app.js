/**
 * CHISPA ETERNA - LÓGICA DE NAVEGACIÓN, FILTRADO Y RESERVAS
 * Autores: Shu Vedanta & Hadiya Meraya
 */

// ==========================================
// BASE DE DATOS DE SERVICIOS (18 SERVICIOS)
// ==========================================
const SERVICES_DATA = {
  "tarot": {
    title: "Tarot Evolutivo e Intuitivo",
    category: "Lecturas y Oráculo",
    description: `El tarot es una herramienta sagrada de autoconocimiento diseñada para revelar las dinámicas invisibles que influyen en tu realidad actual. Más allá de un enfoque predictivo clásico, nuestras lecturas evolutivas actúan como un espejo translúcido del alma. Te ayudan a comprender el origen profundo de tus circunstancias presentes, descifrar patrones repetitivos y vislumbrar los senderos futuros que puedes co-crear libremente.

    Durante la sesión, analizaremos los bloqueos, las potencialidades y las decisiones conscientes que puedes tomar para alinearte con tu mayor bienestar en áreas clave como el amor, el trabajo, el dinero y la salud. Hadiya Meraya te guiará con lecturas certeras y sin rodeos, aportando la claridad que necesitas para transformar tu vida.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`
  },
  "flores": {
    title: "Flores de Bach",
    category: "Terapias y Sanación",
    description: `Las Flores de Bach son esencias vibracionales extraídas de flores silvestres y plantas específicas que actúan directamente sobre los estados emocionales disonantes del ser. Este sistema terapéutico natural, desarrollado por el Dr. Edward Bach, es ideal para disolver de forma suave y progresiva la ansiedad, el miedo, la tristeza, la inseguridad, la impaciencia o el estrés acumulado.

    Cada fórmula floral se prepara de manera rigurosamente personalizada tras un diálogo consciente sobre tus vivencias y sentir actual. Las gotas te acompañarán en tus procesos cotidianos, favoreciendo la autocuración emocional, el equilibrio psicológico y una profunda sensación de serenidad interior.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>`
  },
  "shundalini": {
    title: "Shundalini",
    category: "Terapias y Sanación",
    description: `Shundalini es una terapia energética de alta frecuencia canalizada para despertar, desbloquear y armonizar la corriente vital que fluye a lo largo de tu columna vertebral y tus centros energéticos (chakras). A través de la imposición de manos, la respiración guiada y la modulación del campo áurico, se remueven tensiones somáticas y memorias de dolor enquistadas.

    Esta sesión propicia una profunda catarsis y liberación emocional, restableciendo la libre circulación del prana o chi. Quienes la reciben suelen experimentar una profunda sensación de ligereza, claridad mental, reconexión con su instinto creador y una vibrante renovación de su fuerza vital.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`
  },
  "canalizaciones": {
    title: "Canalizaciones Espirituales",
    category: "Lecturas y Oráculo",
    description: `Las canalizaciones son un espacio de comunión íntima y sagrada con planos superiores de conciencia, guías espirituales y maestros ascendidos. En estas sesiones, Shu Vedanta actúa como puente sutil para recibir transmisiones de sabiduría destinadas a tu momento evolutivo presente.

    No se trata de adivinación, sino de una guía amorosa y trascendente que te permite comprender las lecciones espirituales ocultas tras tus dificultades actuales, ayudándote a tomar decisiones desde tu ser superior. Los mensajes recibidos traen consigo una energía de gran paz, contención y dirección existencial.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`
  },
  "runas": {
    title: "Runas Ancestrales",
    category: "Lecturas y Oráculo",
    description: `Las runas son un antiguo alfabeto nórdico consagrado a los dioses de la mitología nórdica, cargado de un inmenso poder simbólico y sagrado. En esta consulta oracular, cada glifo tallado en piedra o madera actúa como un arquetipo cósmico que revela las fuerzas del destino y los consejos de la naturaleza que operan en tu vida.

    Es una lectura ideal para explorar encrucijadas complejas, clarificar relaciones afectivas y proyectar nuevos emprendimientos. Las runas no determinan tu futuro, sino que te proveen de la sabiduría y la templanza necesarias para forjarlo con valentía e integridad espiritual.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M4 5a1 1 0 01.3-.7l7-7a1 1 0 011.4 0l7 7a1 1 0 01.3.7v14a1 1 0 01-.3.7l-7 7a1 1 0 01-1.4 0l-7-7A1 1 0 014 19V5z" /></svg>`
  },
  "magia-gitana": {
    title: "Magia Gitana tradicional",
    category: "Rituales y Espacios",
    description: `La rica tradición del pueblo gitano ha preservado durante siglos un legado inestimable de rituales mágicos, oraciones consagradas y limpiezas protectoras. Este servicio se realiza desde el absoluto respeto y reverencia hacia el poder de la intención pura y las fuerzas de la Madre Tierra.

    Trabajamos en la apertura de caminos obstaculizados, la disolución de energías densas (mal de ojo, envidias) y la atracción de la buena ventura y armonía familiar. Cada trabajo se realiza con elementos naturales (flores, velas consagradas, esencias) y se ajusta a tu intención amorosa y evolutiva.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707" /></svg>`
  },
  "ecstatic-dance": {
    title: "Ecstatic Dance",
    category: "Rituales y Espacios",
    description: `El Ecstatic Dance es un ritual de movimiento libre y meditación activa que te invita a entrar en un estado de trance consciente y liberación a través de la música. En esta sesión de libre expresión corporal no existen coreografías, juicios ni estructuras rígidas; tu cuerpo es el que habla y se libera de forma espontánea.

    Facilitado por Shu Vedanta, la sesión te sumerge en una atmósfera sonora que transita desde ritmos tribales profundos hasta melodías celestiales. Es una experiencia sumamente liberadora, ideal para desbloquear emociones reprimidas, transmutar el estrés y reconectar con el gozo innato de estar vivo.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>`
  },
  "limpiezas-casas": {
    title: "Limpiezas Energéticas de Casas y Espacios",
    category: "Rituales y Espacios",
    description: `Los espacios físicos que habitamos y donde trabajamos actúan como contenedores energéticos, acumulando vibraciones residuales de las discusiones, las enfermedades, las preocupaciones o las personas que transitan por ellos. Si sientes tu casa pesada, fría, o sufres de insomnio y bloqueos recurrentes, una limpieza profunda es necesaria.

    Utilizando técnicas ancestrales de sahumado (con resinas sagradas como copal, mirra y salvia), consagración con aguas alquímicas y modulación sonora, purificamos tus espacios de influencias parasitarias. Esto restaura el flujo armonioso de la prosperidad, la ligereza, la paz y la protección en tu hogar o negocio.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`
  },
  "limpieza-huevo": {
    title: "Limpieza con Huevo",
    category: "Rituales y Espacios",
    description: `La limpieza con huevo es una de las prácticas de purificación y diagnóstico energético más antiguas del chamanismo y la medicina popular iberoamericana. Funciona mediante el principio de absorción vibracional, donde el huevo actúa como una célula orgánica receptora que extrae del campo áurico las energías densas, bloqueos y malestares somáticos.

    Tras realizar el barrido energético por todo el cuerpo, el huevo se rompe en un vaso de agua pura para realizar una lectura diagnóstica del estado de tus chakras, la presencia de envidias o el cansancio mental acumulado. Es una sesión sumamente reconfortante que te devolverá el equilibrio y la calma inmediata.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /></svg>`
  },
  "sanaciones": {
    title: "Sanaciones Energéticas",
    category: "Terapias y Sanación",
    description: `Esta sesión es una terapia integral destinada a restaurar la coherencia electromagnética y espiritual de la persona en sus cuatro planos: físico, emocional, mental y etérico. A través de la canalización de luz de alta frecuencia, la reprogramación áurica y la eliminación de lazos energéticos debilitantes, devolvemos a tus cuerpos sutiles su estado óptimo.

    Cada sanación es una experiencia única y personalizada que responde a las necesidades específicas de tu momento evolutivo. Se recomienda para personas que atraviesan rupturas amorosas, duelos, transiciones difíciles de vida o periodos de agotamiento existencial inexplicable.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`
  },
  "limpieza-plus": {
    title: "Limpieza Plus",
    category: "Rituales y Espacios",
    description: `La Limpieza Plus es nuestra terapia de purificación áurica más profunda y sofisticada. Combina la transmutación chamánica tradicional con la sonoterapia de alta frecuencia (cuencos de cuarzo, gongs y frecuencias solfeggio vibracionales) para realizar una limpieza celular y etérica exhaustiva.

    Esta sinergia disuelve las adherencias energéticas más persistentes y eleva drásticamente tu frecuencia vibratoria. Es una sesión de renovación total que deja una sensación de expansión de consciencia, paz inquebrantable, optimismo cósmico y ligereza corporal absoluta.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`
  },
  "rituales-personalizados": {
    title: "Rituales Personalizados",
    category: "Rituales y Espacios",
    description: `Cada alma recorre un sendero único y sus necesidades rituales difieren según su mapa astral y vivencial. Diseñamos ceremonias y rituales personalizados con base en tus intenciones específicas: consagrar un nuevo proyecto, propiciar la abundancia consciente, invocar protección espiritual, liberar pactos obsoletos o sintonizar con el amor.

    Shu Vedanta elaborará el altar ceremonial utilizando correspondencias astrológicas, hierbas sagradas, gemas nobles y velas intencionadas. Se te entregará una guía del trabajo realizado y pautas para sostener la vibración del ritual en tu vida cotidiana.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.243.577 1.824l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.58-.38-1.824.577-1.824h4.908a1 1 0 00.95-.69l1.519-4.674z" /></svg>`
  },
  "reiki": {
    title: "Reiki Alquímico",
    category: "Terapias y Sanación",
    description: `El Reiki es un sistema de armonización y canalización energética de origen japonés (redescubierto por el maestro Mikao Usui) que utiliza la imposición de manos sobre los principales centros de energía y órganos del cuerpo físico. A través de este toque sutil y amoroso, se transmite la Energía Vital Universal para disolver nudos de tensión.

    Es un poderoso coadyuvante para aliviar dolores físicos, pacificar el sistema nervioso, acelerar la curación natural del organismo y propiciar una meditación espontánea. Cada sesión brinda un espacio de descanso y cobijo espiritual idóneo para reconectar con tu paz y claridad intrínsecas.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11a13.916 13.916 0 00-2.139-7.44l-.054-.09M21 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09a13.916 13.916 0 002.139-9.571 13.916 13.916 0 00-2.139-7.44l-.054-.09M12 22V11m0 0V2" /></svg>`
  },
  "constelaciones": {
    title: "Constelaciones Familiares",
    category: "Terapias y Sanación",
    description: `Las Constelaciones Familiares son una herramienta terapéutica transgeneracional de increíble profundidad, desarrollada por Bert Hellinger. Permite mapear y revelar las dinámicas de lealtad invisible, exclusión o desorden sistémico dentro de tu linaje familiar que se manifiestan hoy en tu vida como problemas afectivos, dificultades con el dinero o enfermedades.

    Durante la sesión (que puede ser individual con plantillas u objetos, o grupal), se ordenan las jerarquías de amor del clan para liberar los destinos ajenos que has estado cargando de forma inconsciente. Este trabajo abre una puerta a la reconciliación existencial, la libertad de tu destino personal y la bendición de tus ancestros.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
  },
  "mediumnidad": {
    title: "Mediumnidad Sagrada",
    category: "Lecturas y Oráculo",
    description: `La mediumnidad es una práctica espiritual sagrada y respetuosa orientada a sintonizar nuestra frecuencia con la de aquellos seres queridos que ya han trascendido el plano físico terrestre. A través de este enlace mediúmnico canalizado por Eva, se abre un espacio de comunicación sanadora para el alma.

    Estas sesiones están impregnadas de una profunda compasión y solemnidad, y buscan aportar paz y consuelo al proceso de duelo, confirmando la supervivencia de la conciencia y la continuidad de los lazos afectivos. Los mensajes transmitidos proveen guía espiritual y sanación afectiva profunda.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`
  },
  "biomagnetismo": {
    title: "Biomagnetismo",
    category: "Terapias y Sanación",
    description: `El Biomagnetismo es una terapia complementaria no invasiva basada en el uso de imanes de mediana intensidad colocados en puntos anatómicos clave del cuerpo para evaluar y corregir distorsiones del pH celular. Este método ayuda a armonizar las condiciones electromagnéticas del organismo.

    Al restaurar el equilibrio bioenergético de los órganos y tejidos, favorece la desinflamación, reduce la fatiga y asiste a los mecanismos naturales de autolimpieza y autocuración corporal. Es una terapia ideal para complementar cualquier tratamiento médico convencional potenciando el bienestar vital.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`
  },
  "registros": {
    title: "Registros Akáshicos",
    category: "Lecturas y Oráculo",
    description: `Los Registros Akáshicos representan la biblioteca etérica y memoria cósmica donde se encuentra registrada la historia completa y el propósito de cada alma a lo largo de su existencia cósmica. La apertura de tus registros (Akasha) es una experiencia sagrada de profunda sintonía con el Espíritu.

    A través de esta lectura, guiada por Shu Vedanta, podrás realizar preguntas de gran calado existencial: ¿cuáles son mis dones latentes?, ¿qué pactos áuricos debo resolver en mis relaciones?, ¿cuál es mi verdadera vocación actual? La información canalizada brinda una dirección sumamente nítida, sanación y paz profunda.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`
  },
  "auriculoterapia": {
    title: "Auriculoterapia",
    category: "Terapias y Sanación",
    description: `La Auriculoterapia es una vertiente terapéutica de la Medicina Tradicional China fundamentada en la estimulación de micro-puntos reflejos distribuidos en el pabellón auricular. Al presionar o colocar pequeñas semillas de acupuntura en estas zonas, se envían impulsos reguladores al sistema nervioso central.

    Es un tratamiento natural de gran eficacia y rapidez para calmar el estrés severo, controlar los antojos emocionales de comida o tabaco, disolver la ansiedad cotidiana y promover un sueño reparador y profundo. Es una maravillosa herramienta para complementar tus metas de salud física y bienestar emocional.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`
  }
};

// ==========================================
// CONTROLADORES DE EVENTOS DEL DOM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setupHeaderScroll();
  setupMobileMenu();
  setupFilterSystem();
  setupModalSystem();
  setupFormSystem();
});

// 1. Efecto Scroll en la Cabecera
function setupHeaderScroll() {
  const header = document.getElementById("main-header");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section, header");

  window.addEventListener("scroll", () => {
    // Clases del header
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Resaltado de enlaces según la sección activa
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// 2. Menú de Navegación Móvil
function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksList = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinksList.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinksList.classList.remove("active");
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!navLinksList.contains(e.target) && e.target !== menuToggle) {
      navLinksList.classList.remove("active");
    }
  });
}

// 3. Sistema de Filtrado de Servicios
function setupFilterSystem() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Activar botón seleccionado
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      // Filtrar tarjetas
      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// Función global para filtrar desde el footer
window.filterServicesCategory = function(categoryName) {
  const filterBtn = document.querySelector(`.filter-btn[data-filter="${categoryName}"]`);
  if (filterBtn) {
    filterBtn.click();
  }
};

// 4. Sistema de Modal Dinámico
function setupModalSystem() {
  const modal = document.getElementById("service-modal");
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");
  const cancelBtn = document.getElementById("modal-cancel-btn");
  const bookBtn = document.getElementById("modal-book-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  let currentSelectedService = "";

  // Abrir Modal al hacer clic en tarjeta
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const serviceId = card.getAttribute("data-id");
      const service = SERVICES_DATA[serviceId];

      if (service) {
        currentSelectedService = service.title;
        
        // Cargar contenidos dinámicamente
        document.getElementById("modal-title").innerText = service.title;
        document.getElementById("modal-category").innerText = service.category;
        document.getElementById("modal-description").innerText = service.description;
        document.getElementById("modal-icon").innerHTML = service.icon;

        // Mostrar modal
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Desactivar scroll de fondo
      }
    });
  });

  // Cerrar Modal
  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Reactivar scroll de fondo
  };

  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);

  // Botón "Reservar" dentro del Modal
  bookBtn.addEventListener("click", () => {
    closeModal();
    preselectService(currentSelectedService);
  });
}

// Función global para preseleccionar servicio en el formulario y desplazarse
window.preselectService = function(serviceName) {
  const select = document.getElementById("service-select");
  if (select) {
    // Buscar opción con el valor de texto correspondiente
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === serviceName) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  
  // Desplazarse al formulario
  const contactSection = document.getElementById("contacto");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

// 5. Sistema de Formulario y Enlace a WhatsApp
function setupFormSystem() {
  const form = document.getElementById("booking-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service-select").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    // Número de WhatsApp del negocio (ejemplo ficticio del plan)
    const phoneNumber = "34600000000";

    // Codificación del mensaje para URL de WhatsApp
    const introText = `Hola, mi nombre es *${name}* (${email}). me gustaría reservar una sesión de *${service}*.\n\n`;
    const messageText = `*Consulta:* ${message}`;
    const fullText = encodeURIComponent(introText + messageText);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${fullText}`;

    // Abrir enlace en pestaña nueva
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Limpiar formulario opcionalmente
    form.reset();
  });
}
