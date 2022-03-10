// function imprimirProductos = ()=> {
//     return new Promise ((resolve, reject)=>{

//         setTimeout(()=> {
//         let productos = [{nombre:"3090",precio:"1500USD",ganancia:"1000 USDT"},
//                         {nombre:"3080",precio:"1200USD",ganancia:"700 USDT"},
//                         {nombre:"3070",precio:"800USD",ganancia:"500 USDT"},
//       ]
//       if (productos.length === 0){
//         reject("sin productos disponibles")
//       } else {
//         resolve(productos)}
//       },3000)
//     })
//   }

//   imprimirProductos()
//   .then((productos) => {
//     console.log(productos)
//     return productos
//   })
//   .then((productos) => {
//       if (productos.length === 1){
//           throw new Error("te estas llevando el ultimo producto")
//       }
//   })

//   .catch((err) => {
//       console.log("no hay producto" +err)
//   })
