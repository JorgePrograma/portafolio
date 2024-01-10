import React from "react";
import "boxicons";
let pagina;

const Paginate = ({ currentPage }) => {
  return (
    <div className="absolute bottom-0 right-0 left-0 pb-2 flex items-center justify-center  w-full">
      <span className="relative h-8 w-8 font-bold text-white bg-sky-500 flex items-center justify-center rounded-full">
        {currentPage}
      </span>
    </div>
  );
};

export default Paginate;
