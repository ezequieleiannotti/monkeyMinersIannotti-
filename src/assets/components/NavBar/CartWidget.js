import React from "react";

import image from "../../statics/CartWidget.png";

const CartWidget = () => {
  return (
    <div className="nav-cartWidget">
      <img
        id="carrito"
        src={image}
        alt="carrito de compras"
        style={{ width: "50px", margin: "10px" }}
      />
    </div>
  );
};

export default CartWidget;
