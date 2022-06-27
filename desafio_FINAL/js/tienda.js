
// Lista  y descripcion de poductos de la tienda

const productoDatos = [
    {
      "precio": 500,
      "id": 1,
      "nombre": "Lukather",
      "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      "imagen": "../img/guitarra_01.jpg"
    },
    {
      "precio": 600,
      "id": 2,
      "nombre": "SRV",
      "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      "imagen": "../img/guitarra_02.jpg"
    },
    {
      "precio": 750,
      "id": 3,
      "nombre": "Borland",
      "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      "imagen": "../img/guitarra_03.jpg"
    },
    {
      "precio": 399,
      "id": 4,
      "nombre": "VAI",
      "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      "imagen": "../img/guitarra_04.jpg"
    },
    {
      "precio": 1400,
      "id": 5,
      "nombre": "Thompson",
      "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      "imagen": "../img/guitarra_05.jpg"
    },
    {
      "precio": 1500,
      "id": 6,
      "nombre": "White",
      "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      "imagen": "../img/guitarra_06.jpg"
    },
    {
        "precio": 800,
        "id": 7,
        "nombre": "Cobain",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
        "imagen": "../img/guitarra_07.jpg"
      },
      {
        "precio": 1200,
        "id": 8,
        "nombre": "Dale",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
        "imagen": "../img/guitarra_08.jpg"
      },
      {
        "precio": 950,
        "id": 9,
        "nombre": "Krieger",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
        "imagen": "../img/guitarra_09.jpg"
      },
      {
        "precio": 1650,
        "id": 10,
        "nombre": "Campbell",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
        "imagen": "../img/guitarra_10.jpg"
      },
      {
        "precio": 2000,
        "id": 11,
        "nombre": "Reed",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
        "imagen": "../img/guitarra_11.jpg"
      },
      {
        "precio": 1500,
        "id": 12,
        "nombre": "Hazel",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
        "imagen": "../img/guitarra_12.jpg"
      },
  ]

let tienda = document.getElementById('tienda');

const canasta = [];

let tarjeta =()=>{
    return (tienda.innerHTML = productoDatos.map((producto)=>{
        let {id,precio,nombre,descripcion,imagen} = producto;
        return`
        <div class="producto" id=producto-id-${id}>
            <img class="producto__imagen" src="${imagen}" alt="imagen guitarra">
    
            <div class="producto__contenido">
                <h3 class="producto__nombre">${nombre}</h3>
                <p class="producto__descripcion">${descripcion}</p>
                <p class="producto__precio">${precio}</p>
                <a onclick="incremento(${id})" class="producto__btn" id=${id} href="#">Agregar al Carrito</a>
            </div>
        </div>
        `;
    }).join("")); 
};
tarjeta()

let incremento = (id) =>{
    let selecProducto = id;
    let buscar = canasta.find((item)=> item.id === selecProducto);
    if(buscar === undefined){
        canasta.push({
            id: selecProducto,
            producto: 1,  
          });
    }else {
        buscar.producto++;
    }

    actualizar(selecProducto);
};
let actualizar = (id) =>{
    let buscar = canasta.find((item)=> item.id === id);
    calcular();
};

let calcular = () =>{
    let carroIcono = document.getElementById('carroCantidad');
    carroIcono.innerHTML = canasta.map((item)=>item.producto).reduce((a,b)=>a+b,0);
};
