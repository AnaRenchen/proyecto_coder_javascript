  // Clase para los productos

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
  console.log ("Nombre: " + this.nombre + "\nPrecio: " + this.precio + "\nCantidad: " + this.cantidad + "\nVendido: " + this.vendido + "\n\n");
 }

 calcularSubtotal () {
  this.total = (this.precio * this.cantidad);
 }

}

// Instanciar productos

const pintura1 = new Producto ("Karajishi", 250, 1);
const pintura2 = new Producto ("Samurai", 250, 1);
const pintura3 = new Producto ("Koi", 250, 1);


// Mostrar productos en consola

pintura1.infoProducto();
pintura2.infoProducto();
pintura3.infoProducto();

// Crear un array con el stock de productos y un array de carrito de compras
const stockProductos = [pintura1, pintura2, pintura3];
let carrito = [];

// Funcion para mostrar los productos y precios para que el usuario pueda elegir

function mostrarProductos() {
  let mostrarProductos = "";
  for (let i = 0; i < stockProductos.length; i++) {
    mostrarProductos += ("Nombre: " + stockProductos[i].nombre + "\nPrecio: " + stockProductos[i].precio + "\n\n");
  }
  alert("Nuestra lista de Productos:\n" + mostrarProductos);
  console.log("Nuestra lista de Productos:\n" + mostrarProductos);
}

// Funcion para que el usuario pueda elegir los productos a partir de la lista

function elegirProducto() {
  mostrarProductos();
  let productoElegido = prompt("Por favor escriba el nombre de la pintura que le gustaría comprar.");

  if (productoElegido === null) {
    alert("La compra ha sido cancelada.");
    return;
  }
      // Verificar si el producto elegido esta en el array de stock y si está preguntar por la cantidad

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

          
    
      

        
    
    

  

