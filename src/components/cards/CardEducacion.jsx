import React from "react";

const CardEducacion = ({ titulo, año, entidad }) => {
  return (
    <div>
      <span className="font-semibold text-blue-400 flex items-center relative">
        <div className="h-5 w-5 bg-blue-600 absolute -left-[1.95rem] rounded-full"></div>
        {año}
      </span>
      <h3 className="font-bold">{titulo}</h3>
      <p className="text-justify text-sm font-light">{entidad}</p>
    </div>
  );
};

export default CardEducacion;
