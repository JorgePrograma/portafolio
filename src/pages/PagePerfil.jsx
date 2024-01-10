import React from "react";
import fotoPerfil from "../assets/photo.jpg";
import { Perfil } from "../cors/copys_es";
import Button from "../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const {
  AUTOR,
  BUTTON_CONTACT,
  BUTTON_DOWNLOAD,
  DESCRIPCION,
  ESPECIALIDAD,
  CORREO,
  TITULO_REDES,
} = Perfil;

const PagePerfil = () => {
  const descargarPDF = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    const urlPDF = "/pdf/Curriculum_Jorge_Martelo.pdf";
    window.location.href = urlPDF;
  };

  const handleClickDescargarCV = async () => {
    await descargarPDF();
  };

  const handleClickContacto = () => {
    console.log("Operación de contacto");
  };

  return (
    <div className="p-8 flex flex-col h-full items-center justify-center">
      <img
        src={fotoPerfil}
        alt=""
        className="w-[180px] border-4 rounded-full mb-8 border-sky-400"
      />
      <h1 className="text-2xl line-clamp-1 font-extrabold capitalize">
        {AUTOR}
      </h1>
      <h3 className="text-xl text-sky-400 font-bold capitalize">
        {ESPECIALIDAD}
      </h3>

      <div className="flex gap-5 mt-5">
        <Button
          nombre={BUTTON_DOWNLOAD}
          onClickHandler={handleClickDescargarCV}
        />
      </div>

      <h4 className="mt-10 text-sky-400 font-semibold pb-3">{TITULO_REDES}</h4>
      <div className="flex  gap-5">
        <a
          href="https://github.com/JorgePrograma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-500"
          title="Github"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-eliecer-martelo-suarez-4656ab1aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-500"
          title="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default PagePerfil;
