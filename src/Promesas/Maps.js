const rigs = [
  { modelo: "3090", precio: "1500USD", potencia: "715MHZ" },
  { modelo: "3080", precio: "1200USD", potencia: "590MHZ" },
  { modelo: "3070", precio: "800USD", potencia: "600MHZ" },
];

console.log(rigs.map((rigs) => rigs.nombre));
console.log(rigs.map((rigs) => rigs.nombre).join("-"));
