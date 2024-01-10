import React from "react";
import imagen from "../../assets/portafolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLine, faPage4, faStackpath } from "@fortawesome/free-brands-svg-icons";

const CardProyectos = ({ titulo, imagenPath, rutaPagina, descripcion }) => {
  return (
    <div className="text-xs rounded-sm flex flex-col">
      <img
        src={imagen}
        alt=""
        className="w-full h-52 border-sky-400 border-2 rounded-md"
      />
      <div className="flex mt-5 mb-3 justify-between items-center">
        <h3 className="font-extrabold capitalize text-sm">{titulo}</h3>
        <FontAwesomeIcon icon={faLine} className=" h-7 w-7" />
      </div>
      <span>Descripcion</span>
      <p className="font-light text-justify">{descripcion}</p>
    </div>
  );
};

export default CardProyectos;
