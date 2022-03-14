import React from "react";
import Item from "./Item";

function ItemList({ lista }) {
  return (
    <div>
      {lista.map((item, index) => (
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <Item
                key={index}
                titulo={item.nombre}
                precio={item.precio}
                ganancia={item.ganancia}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
