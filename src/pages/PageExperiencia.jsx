import React from "react";
import CardExperiences from "../components/cards/CardExperiences";
import Paginate from "../components/Paginate";
import { Experiencia } from "../cors/copys_es";
const { EXPERIENCIAS, TITULO } = Experiencia;

const PageExperiencia = () => {
  return (
    <div className="p-8 flex flex-col  mt-5">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      {EXPERIENCIAS.map((exp, index) => (
          <CardExperiences
            key={index}
            descripcion={exp.DESCRIPCION}
            period={exp.PERIODO}
            titulo={`${exp.CARGO} - ${exp.EMPRESA}`}
          />
        ))}
      <Paginate currentPage={2} />
    </div>
  );
};

export default PageExperiencia;
