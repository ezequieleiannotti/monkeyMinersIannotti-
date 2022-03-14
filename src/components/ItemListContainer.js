import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const productos = [
    { nombre: "3090", precio: "1500USD", ganancia: "1000 USDT" },
    { nombre: "3080", precio: "1200USD", ganancia: "700 USDT" },
    { nombre: "3070", precio: "800USD", ganancia: "500 USDT" },
  ];

  const imprimirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productos.length === 0) {
          reject("sin productos disponibles");
        } else {
          resolve(productos);
        }
      }, 3000);
    });
  };
  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => setListaProductos(respuesta))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>;
      <ItemList lista={listaProductos} />
    </div>
  );
};

export default ItemListContainer;
