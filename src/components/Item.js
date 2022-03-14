import React from "react";
import imagen1 from "../assets/statics/rig.jpg";
import ItemCounter from "./ItemCounter";

function Item({ initial, stock, titulo, precio, ganancia }) {
  return (
    <div className="row">
      <div className="container">
        <h1 className="card-title">Modelo del RiG {titulo}</h1>{" "}
        <img src={imagen1} alt="rig" />
        <h3 className="card-text text-secondary">El precio es de {precio}</h3>
        <p>Ganacia por mes {ganancia}</p>
        <ItemCounter initial={initial} stock={stock} />
      </div>
    </div>
  );
}

export default Item;
