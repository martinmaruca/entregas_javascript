
let tienda = document.getElementById('tienda');
let canasta = JSON.parse(localStorage.getItem("datos")) || [];

// Productos Tienda

let tarjeta =()=>{
    return (tienda.innerHTML = productoDatos.map((producto)=>{
        let {id,precio,nombre,descripcion,imagen} = producto;
        let buscar = canasta.find((item)=> item.id === id) || [];
        return`
        <div class="producto" id=producto-id-${id}>
            <img class="producto__imagen" src="${imagen}" alt="imagen guitarra">
    
            <div class="producto__contenido">
                <h3 class="producto__nombre">${nombre}</h3>
                <p class="producto__descripcion">${descripcion}</p>
                <p class="producto__precio">$ ${precio}</p>
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
    
    actualizar(selecProducto.id);
    localStorage.setItem("datos", JSON.stringify(canasta));
};


let actualizar = (id) =>{
    let buscar = canasta.find((item) => item.id === id);
    calcular();
};

let calcular = () =>{
    let carroIcono = document.getElementById('carroCantidad');
    carroIcono.innerHTML = canasta.map((item)=>item.producto).reduce((a,b)=>a+b,0);
};

calcular();


