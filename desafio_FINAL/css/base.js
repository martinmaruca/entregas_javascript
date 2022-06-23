



  // const botones = document.querySelectorAll('.boton');
  let descripcion = document.getElementById("descripcion");

   console.log(descripcion);


   

    productos.forEach(producto => {
    descripcion.querySelector('#descripcion img').src = producto.thumbnailUrl;
    descripcion.querySelector('h3').textContent = producto.title;
    descripcion.querySelector('p').textContent = producto.descripcion;
    descripcion.querySelector('.producto__precio').textContent = `$ ${producto.precio}`;
    });

  
  
  // console.log(botones);

/*   boton.addEventListener('click', () => {
    console.log('click');
  });
 */





























descripcion.querySelector('#descripcion img').src = producto.thumbnailUrl;
descripcion.querySelector('h3').textContent = producto.title;
descripcion.querySelector('p').textContent = producto.descripcion;
descripcion.querySelector('.producto__precio').textContent = `$ ${producto.precio}`;


const mostrarDescripcion = {};


botones.forEach((boton) => { 
  boton.addEventListener("click", (e) => { 
    
 });  
 
}); 





   botones.forEach(boton => { 
   boton.addEventListener("click", producto) 
     console.log(boton);
   
 })

  const producto = productos.forEach(producto => {

 if (producto.id === botones.id) {
   descripcion.querySelector('#descripcion img').src = producto.thumbnailUrl;
   descripcion.querySelector('h3').textContent = producto.title;
   descripcion.querySelector('p').textContent = producto.descripcion;
   descripcion.querySelector('.producto__precio').textContent = `$ ${producto.precio}`;
   descripcion.querySelector('.producto__precio').textContent = `$ ${producto.precio}`;
  }

});



productos.find(producto => producto.id === productos.id);
