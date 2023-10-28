let producto;
let productoSeleccionado;

const productos = ["pintura1", "pintura2", "pintura3", "pintura4", "pintura5", "pintura6", "pintura7", "pintura8", "pintura9", "pintura10"];

let listaProductos = "";

for (let i=0; i < productos.length; i++){
listaProductos+= productos[i] + "\n";
}

alert("Nuestra lista de Productos:\n" + listaProductos);
console.log ("Nuestra lista de Productos:\n" + listaProductos);

const carritoCompras =[];

console.log (carritoCompras);

function elegirProducto() {
  while (true) {
    productoSeleccionado = prompt('¿Qué pintura le gustaría comprar?');

    if (productoSeleccionado === null) {
      return null;
    } else {
      producto = productoSeleccionado.toLowerCase();
      if (productos.includes(producto)) {
        return producto;
      } else {
        alert("Por favor ingrese un producto de la lista.");
      }
    }
  }
}
  

    function agregarProducto (producto) {
      if (carritoCompras.includes(producto)) {
        alert("Error al agregar el producto " + producto + " porque ya está en su carrito.");
        console.log(carritoCompras);
      } else {
        carritoCompras.push(producto);
        alert("Se agrego el producto " + producto + " al carrito.");
        console.log(carritoCompras);
      }
    }

  function agregarNuevoProducto (){
    producto = elegirProducto();
    if (producto === null) {
      alert ("La compra ha sido cancelada.");
    } else{
    agregarProducto(producto);

		let confirmar = confirm('¿Desea agregar un nuevo producto?');
    if (confirmar){
      agregarNuevoProducto();
    } else{
      alert ("Finalizaremos la compra y en seguida usted será dirigido al sistema de envío y pago.");
    }
  }
}

agregarNuevoProducto();


let resultado;
let cantidadProductos = carritoCompras.length;
const precio = 200;
const envio = (50 * cantidadProductos);

const precioTotal = (cantidadProductos, precio, envio) => (cantidadProductos * precio) + envio;

function mostrarPrecioTotal (mostrarTotal){
  alert ("El total de su compra con envío es: " + mostrarTotal);
  console.log ("El total de su compra con envío es: " + mostrarTotal);
}

resultado = precioTotal (cantidadProductos, precio, envio);

if (carritoCompras.length > 0){
mostrarPrecioTotal(resultado);
}

