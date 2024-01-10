import React from "react";
import { Servicios } from "../cors/copys_es";
const { TITULO, SERVICIOS } = Servicios;

import CardServicios from "../components/cards/CardServicios";
import Paginate from "../components/Paginate";

const PageServicios = () => {
  return (
    <div className="p-4 sm:p-8 h-full">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-5 h-full py-5 overflow-hidden
      flex flex-col space-y-2 sm:space-y-0">
        {SERVICIOS.map((item) => (
          <CardServicios
            titulo={item.NOMBRE}
            descripcion={item.DESCRIPCION}
            key={item.NOMBRE}
          />
        ))}

        <Paginate currentPage={4} />
      </div>
    </div>
  );
};

export default PageServicios;
