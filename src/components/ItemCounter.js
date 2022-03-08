import { useState, useEffect } from "react";
import Cuenta from "./Cuenta";

export default function ItemCounter({ initial, stock }) {
  const [cuenta, setCuenta] = useState(initial);

  const handleClick = (e) => {
    const sumarCarrito = e.target.getAttribute("name");
    if (sumarCarrito === "comprar") {
      if (stock > cuenta) setCuenta(cuenta + 1);
    } else {
      alert("Sin stock");
    }
  };
  const handleDrecrement = (e) => {
    if (cuenta > 0) {
      setCuenta(cuenta - 1);
    } else {
      alert("Tenes que tener algo en el carrito");
    }
  };
  useEffect(() => {}, []);
  return (
    <div>
      {cuenta === 0 ? (
        <h1>Compranos un Equipo!</h1>
      ) : (
        <Cuenta cuenta={cuenta} />
      )}

      <button onClick={handleClick} className="btn btn-success" name="comprar">
        +
      </button>
      <button
        onClick={handleDrecrement}
        className="btn btn-danger"
        name="restar"
      >
        -{" "}
      </button>
    </div>
  );
}
