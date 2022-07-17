// uniendo entre el js y el html

let carroItem = document.getElementById('items');
let carroBtn = document.getElementById('botones');
let carrototal = document.getElementById('total');

// conectando con el Local storage

let canasta = JSON.parse(localStorage.getItem("datos")) || [];

// funcion que muestra el numero de items en el carito de navegacion

let calcular = () =>{
    let carroIcono = document.getElementById('carroCantidad');
    carroIcono.innerHTML = canasta.map((item)=>item.producto).reduce((a,b)=>a+b,0);
};

calcular(); 

// genera el contenido del html

let generarItem = () => {
    if(canasta.length !==0){
        return (carroItem.innerHTML = canasta.map((item)=>{
             let { id, producto } = item;
             let buscar = productoDatos.find((info)=> info.id === id) || [];
             let {imagen, nombre, precio} = buscar;
            return `
            <div class="item">
                <div class="item__imagen">
                <img src=${imagen} alt="imagen guitarra">
                </div>
                <div class="item__contenido">
                    <p class="item__nombre item">${nombre}</p>
                    <div class="botones">
                        <i onclick="decremento(${id})" class="fas fa-minus icon item"></i>
                        <div id=${id} class="cantidad item">${producto}</div>
                        <i onclick="incremento(${id})" class="fas fa-plus icon item"></i> 
                    </div>
                    <p class="item__precio item">$ ${precio}</p>
                    <h3 class= "subtotal item">$ ${producto * precio}</h3>
                    <i onclick="removerItem(${id})" class="fas fa-times item"></i>
                </div>
            </div>
            `;
        }).join(""));
    }if(canasta.length ==0){
        const vacio = () =>{
            swal({
                title: 'Carrito vacio',
                text: 'No hay productos en el carrito',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
        })};

        let notificacion = document.getElementById('btn');
        btn.addEventListener('click', vacio);
       };
    };    


 generarItem(); 

// incrementando el carrito

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
    generarItem();
    localStorage.setItem("datos", JSON.stringify(canasta));
};
   
// decrementando el carrito

let decremento = (id) =>{
    let selecProducto = id;
    let buscar = canasta.find((item)=> item.id === selecProducto);
    
    if (buscar === undefined) return;
    else if (buscar.producto === 0) return;
    else {
        buscar.producto--;
    }
    actualizar(selecProducto);
    canasta = canasta.filter((item)=> item.producto !== 0);
    generarItem();
    localStorage.setItem('datos', JSON.stringify(canasta));
}; 

// actualizando el carrito

let actualizar = (id) =>{
    let buscar = canasta.find((item)=> item.id === id);
    document.getElementById(id).innerHTML = buscar.producto;
    calcular();
    totalAPagar();
    localStorage.setItem("datos", JSON.stringify(canasta));
};

// removiendo el item del carrito

let removerItem =(id)=>{
    let selectItem = id;
    canasta = canasta.filter((item)=> item.id !== selectItem);
    generarItem();
    totalAPagar();
    calcular();
    localStorage.setItem("datos", JSON.stringify(canasta)); 
} 

// vaciar el carrito

let vaciarCarrito = () =>{
    canasta = [];
    generarItem();
    calcular();
    localStorage.setItem("datos", JSON.stringify(canasta));
};

//Calcula el total a pagar

let totalAPagar = () =>{
    if (canasta.length !== 0){
        let total = canasta.map((item) => {
            let { id, producto } = item;
            let buscar = productoDatos.find((info)=> info.id === id) || [];
            return  producto * buscar.precio;
        })
        .reduce((a,b)=> a + b, 0); 
        carrototal.innerHTML = `
        <div class="carro__total">
        <div>
        <a onclick="vaciarCarrito()" class="vaciar__btn" href="#">Vaciar Carro</a>
        </div>
        <div>
        <h2>Total a pagar: $ ${total}</h2>
        </div>
        </div>
         `; 
}else return;
};
totalAPagar();

