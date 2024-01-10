import React from "react";
import Paginate from "../components/Paginate";
import CardEducacion from "../components/cards/CardEducacion";
import { Educacion } from "../cors/copys_es";
const { TITULO, ENCABEZADO_RELEVANTES, RELEVANTES, ENCABEZADO_CERTIFICACIONES, CERTIFICACION } = Educacion;

const PageEducacion = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      <h2 className="font-extrabold text-balance capitalize text-black/70 mt-10">
        {ENCABEZADO_RELEVANTES}
      </h2>
      <div className="gap-3 flex flex-col border-l-2 border-blue-500 pl-5 mt-2 text-sm">
        {RELEVANTES.map((item) => (
          <CardEducacion
            año={item.AÑO}
            titulo={item.TITULO}
            entidad={item.ENTIDAD + " - " + item.PAIS}
            key={item.TITULO}
          />
        ))}
      </div>
      <h2 className="font-extrabold text-balance capitalize text-black/70 mt-10">
        {ENCABEZADO_CERTIFICACIONES}
      </h2>
      <div className="gap-3 flex flex-col border-l-2 border-blue-500 pl-5 mt-2 text-sm">
        {CERTIFICACION.map((item) => (
          <CardEducacion
            año={item.AÑO}
            titulo={item.TITULO}
            entidad={item.ENTIDAD + " - " + item.PAIS}
            key={item.TITULO}
          />
        ))}
      </div>
      <Paginate currentPage={3} />
    </div>
  );
};

export default PageEducacion;
