import React from "react";

const TarjetaGiratoria = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-100">
      <div className="group h-96 w-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full rounded-xl object-cover shadow-xl shadow-black/40"
              src=""
              alt=""
            />
          </div>

          <div
            className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-lime-200
[transform:rotateY(180deg)] [baskface_visibility:hidden]"
          >
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">jane</h1>

              <p className="text-lg">programador</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore, sit.
              </p>
              <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                read mores
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaGiratoria;
