import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setListaProductos, listaApi, setApiProd] = useState(
    []
  );
  const productos = [
    { nombre: "3090", precio: "1500USD", ganancia: "1000 USDT" },
    { nombre: "3080", precio: "1200USD", ganancia: "700 USDT" },
    { nombre: "3070", precio: "800USD", ganancia: "500 USDT" },
  ];

  // const productosApi = async () => {
  //   const res = await axios.get(
  //     "https://fakerapi.it/api/v1/products?_quantity=3&_taxes=12&_categories_type=uuid"
  //   );

  //   console.log(res.data.data);
  // };

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

  // const imprimirProductosApi = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (productosApi.length === 0) {
  //         reject("sin productos disponibles");
  //       } else {
  //         resolve(productosApi);
  //       }
  //     }, 5000);
  //   });
  // };

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => setListaProductos(respuesta))
      .catch((error) => console.error(error));
    // productosApi()
    //   .then((respuesta) => setApiProd(respuesta))
    //   .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList lista={listaProductos} />
      <h2>Estos son Productos de API</h2>
    </div>
  );
};

export default ItemListContainer;
