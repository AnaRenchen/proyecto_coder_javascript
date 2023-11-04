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

const pintura1 = new Producto ("karajishi", 250, 1);
const pintura2 = new Producto ("samurai", 250, 1);
const pintura3 = new Producto ("koi", 250, 1);


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

  stockProductos.forEach ((producto) => {
    mostrarProductos += ("Nombre: " + producto.nombre + "\nPrecio: " + producto.precio + "\n\n")});
  alert("Nuestra lista de Productos:\n" + mostrarProductos);
  console.log("Nuestra lista de Productos:\n" + mostrarProductos);
}

// Funcion para que el usuario pueda elegir los productos a partir de la lista, la cantidad deseada y agregar al carrito

function elegirProducto() {

  mostrarProductos();

  while (true){

  let productoExiste;
  let productoElegido = prompt("Por favor escriba el nombre de la pintura que le gustaría comprar.");

  if (productoElegido === null) {
    alert("La compra ha sido cancelada.");
    break;
  } else{
      // Verificar si el producto elegido esta en el array de stock 

      productoExiste = stockProductos.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase())

     if (productoExiste){

      let cantidadCompra = parseInt (prompt("¿Qué cantidad de producto desea comprar?"));

      // Asegurarse de que la cantidad sea válida y que se actualice el stock y el subtotal

      if (isNaN(cantidadCompra) || cantidadCompra === ""){
        alert ("Por favor ingrese una cantidad válida");
      } else if (cantidadCompra <= productoExiste.cantidad){
        productoExiste.cantidad -= cantidadCompra;
        productoExiste.calcularSubtotal();
        carrito.push(productoExiste);
    alert("Se agregó el producto " + productoExiste.nombre + " al carrito.");

    const continuar = prompt ("¿Desea seguir agregando producto? Por favor escriba si o no y haga click en aceptar."). toLowerCase();
    if (continuar === "no"){
      break;
    }
      } else {
        alert ("No hay cantidad suficiente del producto en stock.")
      }
    } else {
      alert ("Por favor ingrese un producto de la lista.")
    }
  }
}
mostrarCarrito();
}

// Funcion para mostrar el carrito de compras con el total de la compra

function mostrarCarrito () {
   
  let mensajeCarrito = "Este es el detalle de su carrito de compras:\n";
  
   carrito.forEach ((producto) => {mensajeCarrito+= ("- Producto: " + producto.nombre + "\n- Cantidad: " + producto.cantidad + "\n- Subtotal: " + producto.subtotal + "\n\n")});
  
   const total = carrito.reduce ((suma, producto) => suma + producto.subtotal, 0);
   mensajeCarrito += "- Total: " + total + "\n ¡Excelente elección! Ahora usted será dirigido al sistema de envío y pago.";
  
   alert (mensajeCarrito);
  } 
    elegirProducto();
    

   

      

    


  

          
    
      

        
    
    

  

