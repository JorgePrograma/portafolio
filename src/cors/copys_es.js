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
  static PERIODO = "2022 - 2023";
  static CARGO = "Desarrollador Full Stack"
  static EMPRESA = "Freelance";
  static DESCRIPCION =
    "Durante este periodo, he dirigido mi enfoque hacia proyectos personales, desempeñando el rol de desarrollador full stack. Este entorno ha sido esencial para fortalecer mis habilidades en tecnologías avanzadas, permitiéndome abordar desafíos complejos en el desarrollo tanto del frontend como del backend.";
}

export class AcercaDeMi {
  static TITULO = "Quién Soy";
  static DESCRIPCION =
    "Soy un ingeniero de sistemas, apasionado por la tecnología y la resolución creativa de problemas. Busco nuevos retos que me impulsen a crecer tanto personal como profesionalmente. Mi enfoque se centra en el desarrollo de aplicaciones versátiles para la web y dispositivos móviles. Me encantaría enfrentar nuevos desafíos que me permitan seguir mejorando como desarrollador, abordándolos de manera positiva y eficiente.";
  static MENSAJE = "Apasionado por la innovación, dedicado a crear experiencias digitales memorables.";
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
