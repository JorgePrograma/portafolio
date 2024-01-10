import React from "react";
import CardProyectos from "../components/cards/CardProyectos";
import { Proyectos } from "../cors/copys_es";
import Paginate from "../components/Paginate";
const { DESCRIPCION_LABEL, PROYECTOS, TITULO } = Proyectos;
const PageProyectos = () => {
  return (
    <div className="p-8 ">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      <div className="flex flex-col gap-3 pt-10 ">
        {PROYECTOS.map((item) => (
          <CardProyectos
            titulo={item.NOMBRE}
            imagenPath={item.IMAGEN}
            descripcion={item.DESCRIPCION}
            rutaPagina={item.URL}
            key={item.NOMBRE}
          />
        ))}
        <Paginate currentPage={6} />
      </div>
    </div>
  );
};

export default PageProyectos;
