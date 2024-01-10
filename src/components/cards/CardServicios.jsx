import React from "react";

const CardServicios = ({ titulo, descripcion, icono }) => {
  return (
    <div className="border sm:h-56 h-full border-sky-400 bg-sky-100 from-slate-300 bg-gradient-to-bl 
    rounded-lg text-sm p-2 flex flex-col items-center justify-center space-y-2 shadow-md shadow-sky-300 ">
      <h3 className="font-bold text-center">{titulo}</h3>
      <p className="font-light text-justify text-xs">{descripcion}</p>
    </div>
  );
};

export default CardServicios;
