import React from "react";
import Item from "./Item";

// const ItemList = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4">
//           <Item initial={1} stock={8} />
//         </div>
//         <div className="col-md-4">
//           <Item initial={1} stock={4} />
//         </div>
//         <div className="col-md-4">
//           <Item initial={1} stock={3} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemList;

function ItemList({ lista }) {
  return (
    <div className="col-md-4">
      {lista.map((item, i) => (
        <div className="card">
          <Item
            key={i}
            titulo={item.nombre}
            precio={item.precio}
            ganancia={item.ganancia}
            initial={0}
            stock={8}
          />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
