import React from "react";
import CardProyecto from "../components/cards/CardProyecto";
import { Experiencia } from "../cors/copys_es";
const { AÑO, CARGO, DESCRIPCION, EMPRESA, TITULO } = Experiencia;
import Paginate from "../components/Paginate";
import ContainerExperiencia from "../ContainerExperiencia";

const PageExperiencia = () => {
  return (
    <div className="p-8 mt-10 flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      {/**<div className="gap-3 flex flex-col border-l-2 border-blue-500 pl-5 mt-2 text-sm">
        <CardProyecto año={AÑO} descripcion={DESCRIPCION} titulo={CARGO + " - "+ EMPRESA}  />
      </div> */}
      <ContainerExperiencia />
      <Paginate currentPage={2} />
    </div>
  );
};

export default PageExperiencia;
