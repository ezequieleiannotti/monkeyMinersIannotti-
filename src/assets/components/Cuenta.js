import React from "react";

export default function Cuenta(props) {
  let { cuenta } = props;
  return (
    <div>
      {cuenta > 1 ? (
        <h1>Estas comprando {cuenta} Rigs</h1>
      ) : (
        <h1>Compraste {cuenta} Rig</h1>
      )}
      {cuenta && <h4> Gracias por tu Compra! a Minar Ethereum</h4>}
    </div>
  );
}
