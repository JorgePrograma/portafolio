import React, { useState } from "react";
import "./App.css";
import FooterPage from "./components/FooterPage";

import PageContactar from "./pages/PageContactar";
import PageEducacion from "./pages/PageEducacion";
import PageExperiencia from "./pages/PageExperiencia";
import PagePerfil from "./pages/PagePerfil";
import PageProyectos from "./pages/PageProyectos";
import PageServicios from "./pages/PageServicios";
import PageTecnologias from "./pages/PageTecnologias";
import LayoutPage from "./components/layouts/LayoutPage";
import PageAcerca from "./pages/PageAcerca";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [
    <PageAcerca />,
    <PageExperiencia />,
    <PageEducacion />,
    <PageServicios />,
    <PageTecnologias />,
  ];

  const navigateToPage = (newPage) => {
    if (validarPagina(newPage)) {
      setCurrentPage(newPage);
    }
  };

  const validarPagina = (newPage) => newPage >= 1 && newPage <= 6;
  return (
    <div className="relative sm:w-[60rem]  h-[40rem] flex items-center justify-center [perspective:1000px]">
      <div
        className="absolute left-0 h-full sm:w-1/2 bg-slate-300 from-white bg-gradient-to-br shadow-xl rounded-xl transition
      w-full"
      ></div>
      <div
        className="absolute right-0 h-full w-full sm:w-1/2 bg-white from-slate-200 bg-gradient-to-bl shadow-xl rounded-xl transition transform rotate-180
      hidden sm:block
      "
      ></div>
      <div
        className={`sm:w-1/2 relative sm:absolute h-full w-full ${
          currentPage === 1 ? " sm:left-0" : "sm:hidden -z-50"
        }`}
      >
        <PagePerfil />
      </div>
      <LayoutPage
        currentPage={currentPage}
        pages={pages}
        onPageChange={navigateToPage}
      />
      <FooterPage currentPage={currentPage} onPageChange={navigateToPage} />
    </div>
  );
}

export default App;
