import React from "react";
import { Tecnologias } from "../cors/copys_es";
const { BACK_END, FRONT_END, OTRAS, TITULO } = Tecnologias;
import CardSkil from "../components/cards/CardSkil";
import Paginate from "../components/Paginate";

const PageTecnologias = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold mt-2">{FRONT_END.TITULO}</h3>
        <div className="flex flex-wrap gap-4">
          {FRONT_END.TECNOLOGIAS.map((item) => (
            <CardSkil titulo={item.nombre} icono={item.icono} key={item.nombre} />
          ))}
        </div>
        <h3 className="font-bold mt-2">{BACK_END.TITULO}</h3>
        <div className="flex flex-wrap gap-4">
          {BACK_END.TECNOLOGIAS.map((item) => (
            <CardSkil titulo={item.nombre} key={item.nombre} icono={item.icono} />
          ))}
        </div>

        <h3 className="font-bold mt-2">{OTRAS.TITULO}</h3>
        <div className="flex flex-wrap gap-4">
          {OTRAS.TECNOLOGIAS.map((item) => (
            <CardSkil titulo={item.nombre} key={item.nombre} icono={item.icono} />
          ))}
        </div>

        <Paginate currentPage={5} />
      </div>
    </div>
  );
};

export default PageTecnologias;
