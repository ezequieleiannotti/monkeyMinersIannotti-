import React from "react";
import imagen1 from "../assets/statics/rig.jpg";
import ItemCounter from "./ItemCounter";

function Item({ titulo, precio, ganancia }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{precio}</h3>
      <h6>{ganancia}</h6>
      {/* <img href={img} /> */}
    </div>
  );
}

export default Item;

// const productos = [
//   { nombre: "3090", precio: "1500USD", ganancia: "1000 USDT" },
//   { nombre: "3080", precio: "1200USD", ganancia: "700 USDT" },
//   { nombre: "3070", precio: "800USD", ganancia: "500 USDT" },
// ];

// const Item = ({ initial, stock }) => {
//   return (
//     <div className="card">
//       <img src={imagen1} alt="" />
//       <div className="card-body">
//         <h4 className="card-title">RIG</h4>
//         <p className="card-text text-secondary"></p>
//         <ItemCounter initial={initial} stock={stock} />
//       </div>
//     </div>
//   );
// };
