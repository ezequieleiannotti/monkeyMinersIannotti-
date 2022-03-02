import { useState, useEffect } from "react";
import Cuenta from "./Cuenta";

export default function Hooks() {
  const [cuenta, setCuenta] = useState(0);
  //   const [restar, setRestar] = useState(0);
  const handleClick = (e) => {
    const sumarCarrito = e.target.getAttribute("name");
    if (sumarCarrito == "comprar") {
      setCuenta(cuenta + 1);
    } else {
      setCuenta(cuenta - 1);
    }
  };
  useEffect(() => {
    console.log("me ejecuto");
  }, []);
  return (
    <div>
      {cuenta == 0 ? <h1>Compranos un Equipo!</h1> : <Cuenta cuenta={cuenta} />}

      <button onClick={handleClick} class="btn btn-success" name="comprar">
        Comprar RIG
      </button>
      <button onClick={handleClick} class="btn btn-danger" name="restar">
        Restar RIG
      </button>
    </div>
  );
}
