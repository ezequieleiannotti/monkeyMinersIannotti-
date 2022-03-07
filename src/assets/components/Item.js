import React from "react";
import imagen1 from "../statics/rig.jpg";
import ItemCounter from "./ItemCounter";

const Item = () => {
  return (
    <div className="card">
      <img src={imagen1} alt="" />
      <div className="card-body">
        <h4 className="card-title">RIG</h4>
        <p className="card-text text-secondary">
          Los mineros de criptomonedas hacen este proceso con los rigs. Estos
          equipos de minería realizan las transacciones a través de cálculos
          matemáticos. Ellos son quienes ejecutan los nodos de la red, allí
          recopilan las transacciones a medida que ocurren, las ordenan en
          bloques, agregan a la cadena y la validan
        </p>
        <ItemCounter />
      </div>
    </div>
  );
};

export default Item;
