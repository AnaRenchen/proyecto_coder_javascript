  
  class Producto {

  static id = 0;

  constructor (nombre, precio, cantidad, vendido, subtotal) {
    this.id = ++Producto.id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.vendido = false;
    this.subtotal = 0;
  }
 infoProducto () {
  console.log ("Nombre: " + this.nombre + "\nPrecio: " + this.precio + "\nCantidad: " + this.cantidad + "\nVendido: " + this.vendido);
 }

 calcularSubtotal () {
  this.total = (this.precio * this.cantidad);
 }

}

const pintura1 = new Producto ("Karajishi", 250, 1);
const pintura2 = new Producto ("Samurai", 250, 1);
const pintura3 = new Producto ("Koi", 250, 1);

pintura1.infoProducto();
pintura2.infoProducto();
pintura3.infoProducto();

const stockProductos = [pintura1, pintura2, pintura3];
let carrito = [];


function mostrarProductos() {
  let mostrarProductos = "";
  for (let i = 0; i < stockProductos.length; i++) {
    mostrarProductos += ("Nombre: " + stockProductos[i].nombre + "\nPrecio: " + stockProductos[i].precio + "\n\n");
  }
  alert("Nuestra lista de Productos:\n" + mostrarProductos);
  console.log("Nuestra lista de Productos:\n" + mostrarProductos);
}


function elegirProducto() {
  mostrarProductos();
  let productoElegido = prompt("Por favor escriba el nombre de la pintura que le gustaría comprar.");

  if (productoElegido === null) {
    alert("La compra ha sido cancelada.");
    return;
  }
      
      productoElegido = stockProductos.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());

      if (productoElegido) {
        let cantidadCompra = parseInt(prompt ("Por favor ingrese la cantidad de productos que desea comprar."));

        if (isNaN(cantidadCompra) || cantidadCompra === null){
          alert ("Por favor ingrese un número válido.");
          return;
        }
      }
    }
      elegirProducto();

          /*if (cantidadCompra <= productoElegido.cantidad) {
            productoElegido.cantidad -= cantidadCompra;
            productoElegido.calcularSubtotal();


          let productoEncarrito = carrito.find(item => item.nombre === productoElegido.nombre);

          if (productoEncarrito) {
            productoEncarrito.cantidad += cantidadCompra;
            productoEncarrito.calcularSubtotal();
          } else {
            productoEncarrito = new Producto(productoElegido.nombre, productoElegido.precio, cantidadCompra);
            carrito.push(productoEncarrito);
          }
    
          alert("Producto agregado al carrito.");
        } else {
          alert("No hay suficiente stock para esa cantidad.");
        }
      } else {
        alert("Producto no válido, por favor ingrese un producto de la lista.");
      }
    }

    elegirProducto();
    
    
    
      

        
    
    
      /*function agregarProducto (productoElegido) {
        if (carrito.includes(productoElegido)) {
          alert("Error al agregar el producto " + productoElegido.nombre + " porque ya está en su carrito.");
          console.log(carrito);
        } else {
          carrito.push(producto.productoElegido);
          alert("Se agrego el producto " + productoElegido.nombre + " al carrito.");
          console.log(carrito);
        }
      }
  
    function agregarNuevoProducto (){
      const producto = elegirProducto();
      if (productoElegido === null) {
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
  

/*let producto;
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
}*/

