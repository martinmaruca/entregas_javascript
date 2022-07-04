
let coleccion = document.getElementById('coleccion');

let canasta = JSON.parse(localStorage.getItem("datos")) || [];

let tarjeta =()=>{
    return (coleccion.innerHTML = productoDatos.map((producto)=>{
        let {id,precio,nombre,descripcion,imagen} = producto;
        let buscar = canasta.find((item)=> item.id === id) || [];
        return`
        <div class="producto" id=producto-id-${id}>
            <img class="producto__imagen" src="${imagen}" alt="imagen guitarra">
    
            <div class="producto__contenido">
                <h3 class="producto__nombre">${nombre}</h3>
                <p class="producto__descripcion">${descripcion}</p>
                <a class="producto__enlace" href="#">Ver Producto</a>
            </div>
        </div>
        `;
    }).join("")); 
};
tarjeta()

