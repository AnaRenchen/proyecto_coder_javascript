const filePinturas = '../data/productos_pinturas.json';
const fileSouvenirs = '../data/productos_souvenirs.json';
const contenedorPinturas = document.getElementById("contenedor_pinturas");
const contenedorSouvenirs = document.getElementById("contenedor_souvenirs");
const modal = document.getElementById("ventana_modal");
const carrito = document.getElementById("carrito");
const totalCarrito = document.getElementById("total");
const botonClose = document.getElementsByClassName("close")[0];
const containerCart = document.querySelector(".modal_body");
const contenedorProductos = document.querySelector(".contenedor_carrito");
const cantidadProductos = document.querySelector(".contar_productos");
const cerrarBtn = document.getElementById('cerrarBtn');
const vaciarCarrito = document.getElementById("vaciar_carrito")
const finalizarCompra = document.querySelector('#finalizar_compra');
const formFinCompra = document.getElementById('formfinalizar_compra');
const closeCompra = document.getElementById ("close_fincompra");
const totalPago = document.getElementById("totalPago");
let productosCarrito =[];
let productosPinturas = [];
let productosSouvenirs = [];


 // Clase para los productos 

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
    agregarTotal();
    
  });

  contenedorPinturas.addEventListener("click", agregarProducto);
  contenedorSouvenirs.addEventListener("click", agregarProducto);
  containerCart.addEventListener("click", eliminarProductos);
  formFinCompra.addEventListener('submit', compraRealizada);
  vaciarCarrito.addEventListener('click', limpiarCarrito);

carrito.onclick = function () {
  modal.style.display ="block";
};

botonClose.onclick = function () {
  ocultarModal();
};


window.onclick = function (event){
  if (event.target == modal){
    ocultarModal();
  } else if (event.target == formFinCompra) {
    ocultarFormFinCompra();
};

finalizarCompra.onclick = function (){
  if (productosCarrito.length > 0){
  formFinCompra.style.display = 'block';
  modal.style.display = 'none';
 
  } else {
    Swal.fire({
      text: "Primero tiene que elegir productos! :)",
      color: 'white',
            toast: "true",
            background: "#740001",
            confirmButtonText: "Ahora mismo!",
            confirmButtonColor: "#D3A625",
            timer: 3000,
  });
}
};

closeCompra.onclick = function (){
  ocultarFormFinCompra();
  };

}
}

function limpiarCarrito() {

  if (productosCarrito.length > 0){

  Swal.fire({
      title: 'Vaciar Carrito de Compras',
      text: '¿Está seguro que desea vaciar el carrito de compras?',
      color: "black",
      imageUrl: "../Photos/cat.png",
      iconColor: "black",
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      background: "#D3A625",
  }).then((btnResponse) => {
      if (btnResponse.isConfirmed) {
          Swal.fire({
              title: 'Carrito vacío',
              color: "black",
              icon: 'success',
              iconColor: "black",
              background: "#D3A625",
              text: 'Ya no hay productos en su carrito de compras.',
              confirmButtonColor: "#740001",
              confirmButtonText: "Ok",
              timer: 5000,
          });
          eliminarLocalStorage();
          cargarCarritoLS();
          mostrarProductosCarrito();
          ocultarModal();
      } else {
          Swal.fire({
              title: 'Operación cancelada',
              icon: 'info',
              iconColor:"black",
              text: 'La operación de vaciar el carrito de compras fue cancelada.',
              color: "black",
              background: "#D3A625",
              confirmButtonColor: "#740001",
              confirmButtonText: "Ok",
              timer: 5000,
          });
      }
  });
} else {
  Swal.fire({
    text: "Su carrito ya está vacío :)",
    color: 'white',
          toast: "true",
          background: "#740001",
          confirmButtonText: "Es verdad!",
          confirmButtonColor: "#D3A625",
          timer: 3000,
  });
}
}

function eliminarProductos(event){
  if(event.target.classList.contains("eliminar_producto")){
    const productoID = parseInt(event.target.getAttribute("id"));

    productosCarrito = productosCarrito.filter((producto) => {
      if (producto.id === productoID) {
        if (producto.cantidad > 1) {
          producto.cantidad -= 1;
          producto.obtenertotal();
          return true;
        } else {
          return false;
        }
      }  else{
      return true;
      }
    });
  }
    guardarLocalStorage();
    mostrarProductosCarrito();
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

  const esPintura = productosPinturas.some((pintura) => pintura.id === productoAgregar.id);

  if (esPintura) {
    const yaEnCarrito = productosCarrito.some((producto) => producto.id === productoAgregar.id);

    if (yaEnCarrito) {
     
     alertaPinturasCarrito()
      return;
    }
  }
 
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
 guardarLocalStorage();
 mostrarProductosCarrito();
}

function guardarLocalStorage(){
  localStorage.setItem("productosLS", JSON.stringify(productosCarrito));
}

function eliminarLocalStorage() {
  localStorage.removeItem('productosLS');
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
    <p class="texto_imagen">$${precio}</p>
    <p class="texto_imagen">${cantidad}</p>
    <p class="texto_imagen">$${subtotal}</p>
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
  return total;
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

function ocultarModal(){
  modal.style.display = "none";
}

 async function renderizarProductosPinturas () {

 productosPinturas = await (realizarPeticion(filePinturas));

      productosPinturas.forEach((producto) => {
      const card = document.createElement ('div');
      card.classList.add ('card');
      card.innerHTML =
       `
      <img src="../Photos/${producto.img}" alt="${producto.nombre}">
       <p class="texto_imagen"> ${producto.nombre} </p>
        <p class="texto_imagen"> ${producto.descripcion} </p>
         <h6 class="texto_imagen">$${producto.precio}</h6>
         <a id=${producto.id} class="boton_agregar" href="#">Agregar Producto</a>
      `;
      contenedorPinturas.appendChild(card);
    
    });
    }

    async function renderizarProductosSouvenirs () {

       productosSouvenirs = await (realizarPeticion(fileSouvenirs));

        productosSouvenirs.forEach((producto) => {
        const card = document.createElement ('div');
        card.classList.add ('card');
        card.innerHTML =
      `
        <img src="../Photos/${producto.img}"  alt="${producto.nombre}">
         <p class="texto_imagen"> ${producto.nombre} </p>
          <p class="texto_imagen"> ${producto.descripcion} </p>
           <h6 class="texto_imagen">$${producto.precio}</h6>
           <a id=${producto.id} class="boton_agregar" href="#">Agregar Producto</a>
      `;
      contenedorSouvenirs.appendChild(card);
    });
      }

      async function realizarPeticion(datos) {
        try {
            const response = await fetch(datos);
    
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
    
            return data;
        } catch (error) {
            
            console.error(error);
        }
    }

      function alertaPinturasCarrito(){
        Swal.fire({
          title: "¡Oops, esta pintura ya fue agregada al carrito!",
          color: 'white',
          toast: "true",
          background: "#740001",
          confirmButtonText: "Entendido",
          confirmButtonColor: "#D3A625",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
    }

    function ocultarFormFinCompra () {
      formFinCompra.style.display = 'none';
    }

   function compraRealizada (e){
    e.preventDefault();
     
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const domicilio = document.getElementById("domicilio").value;
      const ciudad = document.getElementById("ciudad").value;
      const pais = document.getElementById("pais").value;
      const postal = document.getElementById("postal").value;
      const opcionesPago = document.getElementsByName("formaPago");

      
  let opcionSeleccionada = false;
  for (let i = 0; i < opcionesPago.length; i++) {
    if (opcionesPago[i].checked) {
      opcionSeleccionada = true;
      break;
    }
  }
      
    // Verifica si los campos están completos
    if (nombre === "" || email === "" || domicilio == "" || ciudad == "" || pais == "" || postal == "" || !opcionSeleccionada) {
      Swal.fire({
        text: "Por favor complete todos los campos del formulario",
        color: 'white',
              toast: "true",
              background: "#740001",
              confirmButtonText: "Ok",
              confirmButtonColor: "#D3A625",
              timer: 3000,
      });
    } else {
      formFinCompra.reset();
      Swal.fire({
          imageUrl: "../Photos/gueixa.png",
          title: '¡Muchas gracias por su compra!',
          text: 'Entraremos en contacto en los próximos días para coordinar el envío.',
          color: "black",
          background: "#D3A625",
          confirmButtonColor: "#740001",
      });
      totalPago.innerHTML = ''; 
      eliminarLocalStorage();
      cargarCarritoLS();
      mostrarProductosCarrito();
      ocultarFormFinCompra();
      agregarTotal(); 
    }
  };
   
  function agregarTotal() {
    const total = calculartotal(); 
    const totalPago = document.getElementById("totalPago");
    const span = document.createElement("span");
    span.classList.add("importe_totalapagar");
    span.textContent = `$${total}`;
  
    totalPago.appendChild(span);
  }
  
 
 
 
   

    

  
    
