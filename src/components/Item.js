import React from "react";
import img from "../assets/statics/rig.jpg";
import ItemCounter from "./ItemCounter";

function Item({ titulo, precio, ganancia, stock, i }) {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <div className="card-body">
              <h4 className="card-title">Modelo del equipo {titulo}</h4>
              <img src={img} alt="" />
              <p className="card-text text-secondary">Precio:{precio}</p>
              <p className="card-text text-secondary">
                Ganancias estimadas mensual: {ganancia}
              </p>
            </div>
            <ItemCounter key={i} initial={0} stock={8} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Item;
