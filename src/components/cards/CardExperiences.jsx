import React from "react";

const CardExperiences = ({ titulo, period, descripcion }) => {
  return (
    <div className="text-xs rounded-sm flex flex-col gap-2 ">
      <div className="flex flex-col mt-5">
        <h3 className="font-extrabold capitalize text-sm text-slate-700">{titulo}</h3>
        <p className="font-extrabold capitalize text-xs text-slate-700">{period}</p>
      </div>
      <p className="font-light text-justify">{descripcion}</p>
    </div>
  );
};

export default CardExperiences;
