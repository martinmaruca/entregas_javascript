// uniendo entre el js y el html

let carroItem = document.getElementById('items');
let carroBtn = document.getElementById('botones');

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
            return `
            <div class="item">
                <div class="item__imagen">
                <img src=${buscar.imagen} alt="imagen guitarra">
                </div>
                <div class="item__contenido">
                    <p class="item__nombre item">${buscar.nombre}</p>
                    <div class="botones">
                        <i onclick="decremento(${id})" class="fas fa-minus icon item"></i>
                        <div id=${id} class="cantidad item">${producto}</div>
                        <i onclick="incremento(${id})" class="fas fa-plus icon item"></i> 
                    </div>
                    <p class="item__precio item">$ ${buscar.precio}</p>
                    <h3 class= "subtotal item">$ ${producto * buscar.precio}</h3>
                    <i onclick="removerItem(${id})" class="fas fa-times item"></i>
                </div>
            </div>
            `;
        }).join(""));
    }
    else{
        carroItem.innerHTML = `
        <h2 class="noHay">No hay productos en el carrito</h2>
        `;
        carroBtn.innerHTML = ``;
    }
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
};

// removiendo el item del carrito

let removerItem =(id)=>{
    let selectItem = id;
    canasta = canasta.filter((item)=> item.id !== selectItem);
    generarItem();
    localStorage.setItem("datos", JSON.stringify(canasta)); 
} 

removerItem();

//Calcula el total a pagar

let totalAPagar = () =>{
    if (canasta.length !== 0){
        let total = canasta.map((item) => {
            let { id, producto } = item;
            let buscar = productoDatos.find((info)=> info.id === id) || [];
            return  producto * buscar.precio;
    }).reduce((a,b)=>a+b,0); 
    carroItem.innerHTML = `
     <h2 class="item__contenido carro__item">Total a pagar: $ ${total}</h2>
     `;
}else return;
}

