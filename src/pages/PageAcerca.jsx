import React from "react";
import { AcercaDeMi } from "../cors/copys_es";
import Paginate from "../components/Paginate";

const { DESCRIPCION, TITULO, MENSAJE } = AcercaDeMi;

const PageAcerca = () => {
  return (
    <div className="p-8 mt-24">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      <div className="pt-10 flex  text-sm flex-col items-center">
        <p className="text-justify text-slate-700/100">{DESCRIPCION}</p>
        <div className="bg-sky-300 text-slate-50 font-semibold from-sky-600 bg-gradient-to-l shadow-xl border-2 border-b-8 border-sky-600 rounded-full w-52 mt-10 py-10 px-3 flex items-center justify-center flex-col">
          <p className="text-center">{MENSAJE}</p>
        </div>
      </div>
      <Paginate currentPage={1} />
    </div>
  );
};

export default PageAcerca;
