import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const FooterPage = ({ currentPage, onPageChange }) => {
  const regresarPagina = () => {
    onPageChange(currentPage - 1);
  };

  const pasarPagina = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="absolute bottom-0 right-0 left-0 pb-2 flex items-center justify-center  w-full">
      {currentPage > 1 && (
        <button
          className="absolute left-5 bottom-3 text-3xl hover:animate-bounce"
          onClick={regresarPagina}
        >
          <IoMdArrowBack />
        </button>
      )}

      {currentPage < 6 && (
        <button
          className="absolute right-5 bottom-3 text-3xl hover:animate-bounce"
          onClick={pasarPagina}
        >
          <IoMdArrowForward />
        </button>
      )}
    </div>
  );
};

export default FooterPage;
