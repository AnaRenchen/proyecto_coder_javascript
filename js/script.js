const contenedorPinturas = document.getElementById("contenedor_pinturas");
const contenedorSouvenirs = document.getElementById("contenedor_souvenirs");
const modal = document.getElementById("ventana_modal");
const carrito = document.getElementById("carrito");
const totalCarrito = document.getElementById("total");
const botonClose = document.getElementsByClassName("close")[0];
const containerCart = document.querySelector(".modal_body");
const contenedorProductos = document.querySelector(".contenedor_carrito");
const cantidadProductos = document.querySelector(".contar_productos");
let productosCarrito =[];


 // Clase para los Productos 

 class Producto {

  constructor (imagen, nombre, precio, id) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 1;
    this.subtotal = 0;
  }

 obtenertotal () {
  this.subtotal = this.precio * this.cantidad;
 }

}

cargarEventos();

function cargarEventos() {

  document.addEventListener("DOMContentLoaded", () =>{
    renderizarProductosPinturas();
    renderizarProductosSouvenirs();
    cargarCarritoLS();
    mostrarProductosCarrito();

  });

  contenedorPinturas.addEventListener("click", agregarProducto);
  contenedorSouvenirs.addEventListener("click", agregarProducto);
  containerCart.addEventListener("click", eliminarProductos);

carrito.onclick = function () {
  modal.style.display ="block";
};

botonClose.onclick = function () {
  ocultarmodal();
};

window.onclick = function (event){
  if (event.target == modal){
    ocultarmodal();
  }
};
}

function eliminarProductos(event){
  if(event.target.classList.contains("eliminar_producto")){
    const productoID = parseInt(event.target.getAttribute("id"));

    productosCarrito = productosCarrito.filter((producto) => producto.id !== productoID);
    guardarLocalStorage();
    mostrarProductosCarrito();
  }

}

function cargarCarritoLS(){
  productosCarrito = JSON.parse(localStorage.getItem("productosLS")) || [];
}

function agregarProducto(event){
  event.preventDefault();
  if(event.target.classList.contains("boton_agregar")){
    const productoAgregado = event.target.parentElement;
    
    datosProductoAgregado(productoAgregado);
  }
}

function datosProductoAgregado (producto){
 const datosProducto = new Producto (
  producto.querySelector("img").src,
  producto.querySelector("p").textContent,
  Number(producto.querySelector("h6").textContent.replace("$","")),
  parseInt(producto.querySelector("a").getAttribute("id")));

  datosProducto.obtenertotal();
  
  agregarCarrito(datosProducto);

}

function agregarCarrito(productoAgregar){
 

  const productoExiste = productosCarrito.some((producto) => producto.id === productoAgregar.id);

  if(productoExiste){
     const productos = productosCarrito.map((producto) =>{
      if (producto.id === productoAgregar.id){
        producto.cantidad++;
        producto.subtotal = producto.precio * producto.cantidad;

        return producto;
      } else {
        return producto;
      }

     });

     productosCarrito = productos;
  } else {
    productosCarrito.push(productoAgregar);
  }
 console.log (productosCarrito);
 guardarLocalStorage();
 mostrarProductosCarrito();
}

function guardarLocalStorage(){
  localStorage.setItem("productosLS", JSON.stringify(productosCarrito));
}

function mostrarProductosCarrito(){
  limpiarHTML();

  productosCarrito.forEach((producto) =>{

    const {imagen, nombre, precio, cantidad, subtotal, id} = producto;

    const div = document.createElement("div");
    div.classList.add("contenedor_producto");
    div.innerHTML = `
    
    <img src="${imagen}" width="100">
    <p class="texto_imagen">${nombre}</p>
    <p class="texto_imagen">${precio}</p>
    <p class="texto_imagen">${cantidad}</p>
    <p class="texto_imagen">${subtotal}</p>
    <a href="#" class ="eliminar_producto" id="${id}"> X </a>
    `
containerCart.appendChild(div);
  });

  mostrarCantidadProductos();
  calculartotal();
}

function calculartotal(){
  let total = productosCarrito.reduce((sumaTotal, producto) => sumaTotal + producto.subtotal, 0);

  totalCarrito.innerHTML = `Total de la compra: $${total} `;
}

function mostrarCantidadProductos(){
  let contarProductos;

  if (productosCarrito.length >0){
    contenedorProductos.style.display ="flex";
    contenedorProductos.style.alignItems ="center";
    cantidadProductos.style.display = "flex";
    contarProductos = productosCarrito.reduce((cantidad, producto)=> cantidad + producto.cantidad,0);
    cantidadProductos.innerText = `${contarProductos}`;
  } else {
    contenedorProductos.style.display = "block";
    cantidadProductos.style.display = "none";
  }
}

function limpiarHTML(){
  while (containerCart.firstChild){
    containerCart.removeChild(containerCart.firstChild);
  }
}


function ocultarmodal(){
  modal.style.display = "none";
}


  const renderizarProductosPinturas = () => {
    productosPinturas.forEach((producto) => {
      const card = document.createElement ('div');
      card.classList.add ('responsive');
      card.innerHTML =
       `
      <div class="gallery">
      <img src="../Photos/${producto.img}"  alt="${producto.nombre}" width="600" height="400">
       <p class="texto_imagen"> ${producto.nombre} </p>
        <p class="texto_imagen"> ${producto.descripcion} </p>
         <h6 class="texto_imagen">$${producto.precio}</h6>
         <a id=${producto.id} class="boton_agregar" href="#">Agregar Producto</a>
         </div>
    
        
      `;
      contenedorPinturas.appendChild(card);
    
    });
  
    }

    const renderizarProductosSouvenirs = () => {
      productosSouvenirs.forEach((producto) => {
        const card = document.createElement ('div');
        card.classList.add ('responsive');
        card.innerHTML =
      `
      <div class="gallery">
        <img src="../Photos/${producto.img}"  alt="${producto.nombre}" width="600" height="400">
         <p class="texto_imagen"> ${producto.nombre} </p>
          <p class="texto_imagen"> ${producto.descripcion} </p>
           <h6 class="texto_imagen">$${producto.precio}</h6>
           <a id=${producto.id} class="boton_agregar" href="#">Agregar Producto</a>
           </div>
      
      `;
      contenedorSouvenirs.appendChild(card);
    
    });
    
      }
    
    












  



  

  






  

          
    
      

        
    
    

  

