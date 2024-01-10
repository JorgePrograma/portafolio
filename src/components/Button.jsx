import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const Button = ({ nombre, colorInvertido, onClickHandler }) => {
  const [cargando, setCargando] = useState(false);

  const handleClick = async (e) => {
    try {
      setCargando(true);
      await onClickHandler(e);
    } finally {
      setCargando(false);
    }
  };

  return (
    <button
      className={`h-10 border-2 border-sky-400 p-2 min-w-32 flex items-center justify-center rounded-md
       cursor-pointer transition duration-200 text-sm gap-2
      ${
        colorInvertido === true
          ? "bg-white text-blue-400  hover:text-white hover:bg-sky-400"
          : "bg-sky-400  text-white hover:text-blue-400 hover:bg-white "
      }
      `}
      onClick={handleClick}
      disabled={cargando}
      type="button"
    >
      {nombre}
      {cargando && <FaSpinner className="animate-spin" />}
    </button>
  );
};

export default Button;
