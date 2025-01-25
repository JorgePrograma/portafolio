import React from "react";
import { AcercaDeMi } from "../cors/copys_es";
import Paginate from "../components/Paginate";

const { DESCRIPCION, TITULO, MENSAJE } = AcercaDeMi;

const PageAcerca = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      <div className="pt-10 flex text-sm flex-col items-center">
        <p className="text-justify text-slate-700/100">{DESCRIPCION}</p>
        <p className="text-xl font-bold mt-5 text-start w-full">Habilidades</p>
       <div className="grid grid-cols-2 gap-5 mt-5">  
       {MENSAJE.map((item, index) => (
          <div key={index} className="bg-sky-300 text-slate-50 font-semibold from-sky-600 bg-gradient-to-l shadow-xl border-2 border-b-8
           border-sky-600 rounded-full w-40 p-3 px-3 flex items-center justify-center flex-col">
            <p className="text-center">{item}</p>
          </div>
        ))}
       </div>
      </div>
      <Paginate currentPage={1} />
    </div>
  );
};

export default PageAcerca;
