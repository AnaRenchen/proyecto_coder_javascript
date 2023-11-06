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

const pintura1 = new Producto ("kiku", 200, 1);
const pintura2 = new Producto ("dakki no ohyaku", 380, 1);
const pintura3 = new Producto ("mongaku shonin", 108, 1);
const pintura4 = new Producto ("kiyo hime", 450, 1);
const pintura5 = new Producto ("unryu", 280, 1);
const pintura6 = new Producto ("hou-oo", 350, 1);
const pintura7 = new Producto ("kasha", 190, 1);
const pintura8 = new Producto ("nio guardians ", 299, 1);
const pintura9 = new Producto ("jiraya", 300, 1);
const pintura10 = new Producto ("karajishi", 230, 1);
const pintura11 = new Producto ("kingyo", 290, 1);
const pintura12 = new Producto ("yamauba to kintaro", 400, 1);
const pintura13 = new Producto ("kintaro to koi", 450, 1);
const pintura14 = new Producto ("kitsune", 250, 1);
const pintura15 = new Producto ("kiyohime", 380, 1);
const pintura16 = new Producto ("orochimaru", 300, 1);
const pintura17 = new Producto ("tsuru", 200, 1);
const pintura18 = new Producto ("botan", 250, 1);
const pintura19 = new Producto ("danshichi kurobei", 500, 1);
const pintura20 = new Producto ("suimon yaburi", 450, 1);
const pintura21 = new Producto ("oniwakamaru ", 500, 1);
const pintura22 = new Producto ("tsunade", 300, 1);
const pintura23 = new Producto ("tennin", 300, 1);
const pintura24 = new Producto ("tora", 300, 1);
const pintura25 = new Producto ("flash", 270, 1);



// Crear un array con el stock de productos y un array de carrito de compras
const stockProductos = [pintura1, pintura2, pintura3, pintura4, pintura5, pintura6, pintura7, pintura8, pintura9, pintura10, pintura11, pintura12, pintura13, pintura14, pintura15, pintura16, pintura17, pintura18,pintura19, pintura20, pintura21, pintura22, pintura23, pintura24, pintura25];
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
      alert ("Procederemos a cerrar su compra.");
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
   mensajeCarrito += "- Total: " + total;
  
   alert (mensajeCarrito);
   console.log (mensajeCarrito);
  } 

   
  elegirProducto();
    

   localStorage.setItem ("productos",JSON.stringify(stockProductos));

   localStorage.setItem ("carrito", JSON.stringify(carrito));

   localStorage.removeItem("pintura");

    


  

          
    
      

        
    
    

  

