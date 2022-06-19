const listaProductos = [
  {
    precio: 500,
    id: 1,
    nombre: "Lukather",
  },
  {
    precio: 300,
    id: 2,
    nombre: "SRV",
  },
  {
    precio: 600,
    id: 3,
    nombre: "Borland",
  },
  {
    precio: 1000,
    id: 4,
    nombre: "VAI",
  },
  {
    precio: 1400,
    id: 5,
    nombre: "Thompson",
  },
  {
    precio: 1500,
    id: 6,
    nombre: "White",
  },
  {
    precio: 500,
    id: 7,
    nombre: "Cobain",
  },
  {
    precio: 300,
    id: 8,
    nombre: "Dale",
  },
  {
    precio: 1000,
    id: 9,
    nombre: "Krieger",
  },
  {
    precio: 5000,
    id: 10,
    nombre: "Campbell",
  },
  {
    precio: 1000,
    id: 11,
    nombre: "Reed",
  },
  {
    precio: 1500,
    id: 12,
    nombre: "Hazel",
  },
];

producto1 = +prompt(
  "elija un producto del 1 al 12 1) Lukather  2) SRV  3) Borland  4) VAI  5) Thompson  6) White  7) Cobain  8) Dale  9) Krieger  10) Campbell  11) Reed  12) Hazel"
);
producto2 = +prompt(
  "elija un producto del 1 al 12 1) Lukather  2) SRV  3) Borland  4) VAI  5) Thompson  6) White  7) Cobain  8) Dale  9) Krieger  10) Campbell  11) Reed  12) Hazel"
);
producto3 = +prompt(
  "elija un producto del 1 al 12 1) Lukather  2) SRV  3) Borland  4) VAI  5) Thompson  6) White  7) Cobain  8) Dale  9) Krieger  10) Campbell  11) Reed  12) Hazel"
);

let valor = 0
let valor2 = 0
let valor3 = 0

listaProductos.find((Object) => {
  if (Object.id === producto1) {
    nombre = Object.nombre;
    valor =  Object.precio;
    return console.log(`${nombre} $${valor}`);
  } else if (Object.id === producto2) {
    nombre = Object.nombre;
    valor2 = Object.precio;
    return console.log(`${nombre} $${valor2}`);
  } else if (Object.id === producto3) {
    nombre = Object.nombre;
    valor3 = Object.precio;
    return console.log(`${nombre} $${valor3}`);
  }
  let total = valor + valor2 + valor3;
  console.log(`"total a pagar" $${total}`);
});




/* const eleccion = listaProductos.forEach((Object) => {
  if (Object.id === producto1) {
    let valor = Object.precio;
    console.log(valor);
  }
});

const eleccion1 = listaProductos.forEach((Object) => {
  if (Object.id === producto2) {
    let valor = Object.precio;
    return console.log(valor);
  }
});

const eleccion2 = listaProductos.forEach((Object) => {
  if (Object.id === producto3) {
    let valor = Object.precio;
    console.log(valor);
  }
}); */
