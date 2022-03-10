import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

function Producto() {
  const [arrayItem, setArrayItem] = useState([
    { titulo: "3090", precio: "15000USD", ganancia: "1000 USDT" },
    { titulo: "3080", precio: "10000USD", ganancia: "700 USDT" },
    { titulo: "3070", precio: "8000USD", ganancia: "500 USDT" },
  ]);

  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-green-50 px-3 pt-4">
        <div className="border-2 border mt-12 p-4">
          <label className=" block text-lg font-bold mb-6">
            Crear un Post-it
          </label>
          <label className=" block text-sm font-medium text-left">Titulo</label>
          <input className=" block p-1 m-1 w-full" name="titulo" />
          <label className=" block text-sm font-medium text-left">Fecha</label>
          <input className=" block p-1 m-1 w-full" type="date" name="fecha" />
          <label className="block text-sm font-medium text-left">
            Descripcion
          </label>
          <textarea
            className="block m-1 p-1 w-full"
            name="descripcion"
          ></textarea>
          <label className="block text-sm font-medium mb-2 text-left">
            Color
          </label>
          <div className="grid grid-cols-3 mb-2 text-white ">
            <label className="radio cursor-pointer flex mt-1 ml-3 ">
              <input
                type="radio"
                className="my-auto cursor-pointer transform scale-200 "
              />
              <span className="bg-red-300 ml-1 pt-3  h-12 rounded-md cursor-pointer px-3">
                01
              </span>
            </label>
            <label className="radio cursor-pointer flex mt-1 ml-3 ">
              <input
                type="radio"
                className="my-auto cursor-pointer transform scale-200 "
              />
              <span className="bg-green-300 ml-1 pt-3 h-12 rounded-md cursor-pointer px-3">
                02
              </span>
            </label>
            <label className="radio cursor-pointer flex mt-1 ml-3 ">
              <input
                type="radio"
                className="my-auto cursor-pointer transform scale-200 "
              />
              <span className="bg-lime-300 ml-1 pt-3 h-12 rounded-md cursor-pointer px-3">
                03
              </span>
            </label>
          </div>
          <button className="bg-red-600 w-2/3 rounded-md p-2 mt-5 text-white font-semibold text-lg">
            Crear
          </button>
        </div>
      </div>
      {/* Fin de Form */}
      <div className="w-4/5">
        <ItemList lista={arrayItem} />
      </div>
    </div>
  );
}

export default ItemList;
