import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardSkil = ({ titulo, icono }) => {
  return (
    <div
      className="border border-sky-400 rounded-md sm:h-20 h-12 w-20 sm:w-20 flex flex-col
     items-center justify-center text-sky-500 space-y-2"
    >
      <FontAwesomeIcon icon={icono} className=" h-4 sm:h-7 w-4 sm:w-7" />
      <h3 className="text-xs text-center font-semibold">{titulo}</h3>
    </div>
  );
};

export default CardSkil;
