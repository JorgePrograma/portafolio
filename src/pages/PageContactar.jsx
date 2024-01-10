import React, { useState } from "react";
import Paginate from "../components/Paginate";
import { Contactar } from "../cors/copys_es";
import Button from "../components/Button";

const { BUTTON_MENSAJE, EMAIL, NOMBRE, SU_MENSAJE, TITULO } = Contactar;
const PageContactar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const limpiarCampos = () => {
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  const handleSendData = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("mensaje enviado", formData);
        limpiarCampos();
      }, 2000);
    });
  };

  return (
    <div className="p-8 h-full">
      <h1 className="text-2xl font-bold text-center">{TITULO}</h1>
      <div className="h-full mt-10 ">
        <form className="flex flex-col gap-5">
          <input
            className="p-2 rounded-md border-sky-400 border-2"
            required
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            placeholder={NOMBRE}
          />
          <input
            className="p-2 rounded-md border-sky-400 border-2"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={EMAIL}
          />
          <textarea
            className="p-2 rounded-md border-sky-400 border-2"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            cols="20"
            rows="8"
            placeholder={SU_MENSAJE}
          ></textarea>
          <div className="flex items-center justify-center">
            <Button nombre={BUTTON_MENSAJE} onClickHandler={handleSendData} />
          </div>
        </form>
      </div>
      <Paginate currentPage={6} />
    </div>
  );
};

export default PageContactar;
