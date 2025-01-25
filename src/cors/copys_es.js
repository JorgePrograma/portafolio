export class Perfil {
  static AUTOR = "Jorge Martelo";
  static ESPECIALIDAD = "Desarrollador Full Stack";
  static BUTTON_DOWNLOAD = "Descargar CV";
  static BUTTON_CONTACT = "Contáctame";
  static CORREO = "jemartelo07@gmail.com";
  static TITULO_REDES="Sigueme en mis redes"
}
export class Experiencia {
  static TITULO = "Experiencia";
  static EXPERIENCIAS = [
    {
      PERIODO: "Julio 2024 - Enero 2025",
      CARGO: "Desarrollador Full Stack (Senior)",
      EMPRESA: "Parking International",
      DESCRIPCION: "Lideré un equipo en la creación de un sistema de estacionamientos, desarrollando aplicaciones en Kotlin, Flutter y React Native. Optimicé bases de datos y implementé prácticas ágiles para mejorar la eficiencia del equipo."
    },
    {
      PERIODO: "Febrero 2024 - Mayo 2024",
      CARGO: "Desarrollador Full Stack",
      EMPRESA: "No Country Simulation (Freelance)",
      DESCRIPCION: "Desarrollé una aplicación móvil integral para administración de restaurantes, utilizando Laravel para el backend y Flutter para el frontend, optimizando significativamente los procesos operativos."
    },
    {
      PERIODO: "Septiembre 2023 - Diciembre 2023",
      CARGO: "Desarrollador de Aplicaciones Móviles",
      EMPRESA: "Freelance",
      DESCRIPCION: "Creé una aplicación en Kotlin para una distribuidora de agua, implementando un sistema de monitoreo en tiempo real con Arduino, logrando un 60% de mejora en la eficiencia operativa."
    },
    {
      PERIODO: "Noviembre 2022 - Abril 2024",
      CARGO: "Ingeniero de Sistemas",
      EMPRESA: "Consorcio Mejoramiento Los Córdobas",
      DESCRIPCION: "Administré bases de datos, desarrollé funcionalidades web y optimicé procesos empresariales, colaborando eficazmente en equipos multidisciplinarios para alcanzar los objetivos del proyecto."
    }
  ];
  
}


export class AcercaDeMi {
  static TITULO = "Quién Soy";
  static DESCRIPCION =
"Desarrollador senior especializado en aplicaciones móviles multiplataforma, apasionado por crear soluciones innovadoras y de alto impacto. Enfocado en desarrollar productos mantenibles, escalables y de excelente rendimiento, priorizando la experiencia del usuario. Destaco por mi colaboración efectiva en equipos multidisciplinarios, trabajando estrechamente con clientes para transformar visiones en realidades tecnológicas, siempre comprometido con la excelencia técnica y la innovación en el desarrollo móvil."
  static MENSAJE = [
    "Adaptabilidad",
    "Creatividad",
    "Gestion del tiempo",
    "Trabajo en equiopo",
    "Atencion al detalle",
    "Pensamiento critico",
  ];
}

export class Educacion {
  static TITULO = "Educación";
  static ENCABEZADO_RELEVANTES = "Títulos Obtenidos";
  static ENCABEZADO_CERTIFICACIONES = "Certificaciones Obtenidas";

  static RELEVANTES = [
    {
      TITULO: "Ingeniero de Sistemas",
      ENTIDAD: "Universidad de Córdoba",
      PAIS: "Colombia",
      AÑO: "2017 - 2022",
    },
    {
      TITULO: "Técnico en Sistemas",
      ENTIDAD: "SENA",
      PAIS: "Colombia",
      AÑO: "2016 - 2017",
    },
  ];

  static CERTIFICACION = [
    {
      TITULO: "Diplomado en Desarrollo de Software",
      ENTIDAD: "Mintic",
      PAIS: "Colombia",
      AÑO: "09 - Noviembre - 2022",
    },
    {
      TITULO: "Diplomado en Fundamentos de Programación",
      ENTIDAD: "Mintic",
      PAIS: "Colombia",
      AÑO: "11 - Junio - 2022",
    },
  ];
}

export class Servicios {
  static TITULO = "Servicios";
  static SERVICIOS = [
    {
      NOMBRE: "Desarrollo Web Full Stack",
      DESCRIPCION:
        "Construcción de aplicaciones web completas y robustas utilizando tecnologías como Laravel en el backend y React en el frontend. Desde la concepción hasta la implementación, garantizo soluciones escalables y eficientes.",
    },
    {
      NOMBRE: "Desarrollo de Aplicaciones Móviles Nativas",
      DESCRIPCION:
        "Creación de aplicaciones móviles nativas con React Native y Flutter. Experiencia en el desarrollo de interfaces intuitivas y funcionales que ofrecen una experiencia de usuario excepcional en iOS y Android.",
    },
    {
      NOMBRE: "Desarrollo de API y Servicios Web",
      DESCRIPCION:
        "Diseño e implementación de APIs robustas utilizando Laravel (PHP) y Express (Node.js). Integración de servicios externos para potenciar la funcionalidad y la conectividad de las aplicaciones.",
    },
    {
      NOMBRE: "Desarrollo Frontend con React",
      DESCRIPCION:
        "Construcción de interfaces de usuario modernas y atractivas utilizando React. Enfoque en la creación de experiencias de usuario responsivas y optimizadas para diversos dispositivos.",
    },
  ];
}

import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faGithub,
  faPhp,
  faNodeJs,
  faLaravel,
  faJava,
  faCodepen,
  faBity,
} from "@fortawesome/free-brands-svg-icons";

export class Tecnologias {
  static TITULO = "Tecnologías";
  static FRONT_END = {
    TITULO: "Front-End",
    TECNOLOGIAS: [
      { nombre: "HTML", icono: faHtml5 },
      { nombre: "CSS", icono: faCss3 },
      { nombre: "JavaScript", icono: faJs },
      { nombre: "React", icono: faReact },
      { nombre: "Tailwind", icono: faCss3 },
      { nombre: "Flutter", icono: faCodepen },
      { nombre: "React Native", icono: faReact },
    ],
  };
  static BACK_END = {
    TITULO: "Back-End",
    TECNOLOGIAS: [
      { nombre: "PHP", icono: faPhp },
      { nombre: "Node.js", icono: faNodeJs },
      { nombre: "Laravel", icono: faLaravel },
    ],
  };
  static OTRAS = {
    TITULO: "Otras Tecnologías",
    TECNOLOGIAS: [
      { nombre: "GitHub", icono: faGithub },
      { nombre: "Scrum", icono: faReact },
      { nombre: "Insomnia", icono: faBity },
    ],
  };
}

export class Proyectos {
  static TITULO = "Proyectos";
  static DESCRIPCION_LABEL = "Descripción";
  static PROYECTOS = [
    {
      IMAGEN: "../../assets/portafolio.",
      NOMBRE: "Taller Mecánico",
      URL: "",
      DESCRIPCION:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni, ipsum dolor sit amet consectetur, adipisicing elit. Hic magni,ipsum dolor sit amet consectetur, adipisicing elit. Hic magni,ipsum dolor sit amet consectetur, adipisicing elit. Hic magni.",
    },
  ];
}

export class Contactar {
  static TITULO = "Contáctame";
  static NOMBRE = "Nombre Completo";
  static EMAIL = "Email";
  static SU_MENSAJE = "Mensaje";
  static BUTTON_MENSAJE = "Enviar Mensaje";
}
