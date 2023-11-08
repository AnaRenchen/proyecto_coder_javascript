  // Clase para los Productos en general

  class Productos {

  static id = 0;

  constructor (nombre, precio, cantidad, vendido, subtotal) {
    this.id = ++Productos.id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.vendido = false;
    this.subtotal = 0;
  }
 infoProductos () {
  console.log ("Nombre: " + this.nombre + "\nPrecio: " + this.precio + "\nCantidad: " + this.cantidad + "\nVendido: " + this.vendido + "\n\n");
 }

 calcularSubtotal () {
  this.stotaltotal = (this.precio * this.cantidad);
 }

}

// Clase para representar remeras: distinta de los demás productos porque tiene talles
class Remera extends Productos {
  constructor(nombre, precio, cantidad, vendido, subtotal, talle) {
    super(nombre, precio, cantidad, vendido, subtotal);
    this.talle = talle;
  }
}

// Instanciar productos

const pintura1 = new Productos ("kiku", 200, 1);
const pintura2 = new Productos ("dakki no ohyaku", 380, 1);
const pintura3 = new Productos ("mongaku shonin", 108, 1);
const pintura4 = new Productos ("kiyo hime", 450, 1);
const pintura5 = new Productos ("unryu", 280, 1);
const pintura6 = new Productos ("hou-oo", 350, 1);
const pintura7 = new Productos ("kasha", 190, 1);
const pintura8 = new Productos ("nio guardians ", 299, 1);
const pintura9 = new Productos ("jiraya", 300, 1);
const pintura10 = new Productos ("karajishi", 230, 1);
const pintura11 = new Productos ("kingyo", 290, 1);
const pintura12 = new Productos ("yamauba to kintaro", 400, 1);
const pintura13 = new Productos ("kintaro to koi", 450, 1);
const pintura14 = new Productos ("kitsune", 250, 1);
const pintura15 = new Productos ("kiyohime", 380, 1);
const pintura16 = new Productos ("orochimaru", 300, 1);
const pintura17 = new Productos ("tsuru", 200, 1);
const pintura18 = new Productos ("botan", 250, 1);
const pintura19 = new Productos ("danshichi kurobei", 500, 1);
const pintura20 = new Productos ("suimon yaburi", 450, 1);
const pintura21 = new Productos ("oniwakamaru ", 500, 1);
const pintura22 = new Productos ("tsunade", 300, 1);
const pintura23 = new Productos ("tennin", 300, 1);
const pintura24 = new Productos ("tora", 300, 1);
const pintura25 = new Productos ("flash", 270, 1);
const incienso = new Productos ("incienso", 2, 10);
const mate = new Productos ("mate", 10, 10);
const pulsera = new Productos ("pulsera", 10, 10);
const remera_fudoshin = new Remera ("remera fudoshin", 20, 10, ["s","m", "l"]);
const remera_trai = new Remera ("remera trailokyavijaya", 20, 10, ["s","m", "l"])



// Crear un array con el stock de productos y un array de carrito de compras
const stockProductos = [pintura1, pintura2, pintura3, pintura4, pintura5, pintura6, pintura7, pintura8, pintura9, pintura10, pintura11, pintura12, pintura13, pintura14, pintura15, pintura16, pintura17, pintura18,pintura19, pintura20, pintura21, pintura22, pintura23, pintura24, pintura25, incienso, mate, pulsera, remera_fudoshin, remera_trai];
let carrito = [];

//Funcion que filtra los productos por nombre (ejemplo de uso de una funcion filter):

const filtro = stockProductos.filter (producto => producto.nombre.includes ("kintaro"));
console.log (filtro);

//Funcion que actualiza el precio: ejemplo de una funcion map:

const actualizarPrecio = stockProductos.map (producto => ({ 
nombre: producto.nombre,
precio: producto.precio * 1.25}));
console.log (actualizarPrecio);

// Funcion para mostrar los productos y precios para que el usuario pueda elegir

function mostrarProductos() {
  let mostrarProductos = "";

  stockProductos.forEach ((productos) => {
    mostrarProductos += ("Nombre: " + productos.nombre + "\nPrecio: " + productos.precio + "\n\n")});
  alert("Nuestra lista de Productoss:\n" + mostrarProductos);
  console.log("Nuestra lista de Productoss:\n" + mostrarProductos);
}

// Funcion para que el usuario pueda elegir los productos a partir de la lista, la cantidad deseada, el talle de la remera si quiere remera y agregar al carrito

function elegirProductos() {

  mostrarProductos();

  while (true){

  let productoExiste;
  let productoElegido = prompt("Por favor escriba el nombre del producto que le gustaría comprar.");

  if (productoElegido === null) {
    alert("La compra ha sido cancelada. ¡Agradecemos la visita!");
    break;
  } else{
      // Verificar si el producto elegido esta en el array de stock 

      productoExiste = stockProductos.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());

      if (productoExiste){

        if (productoExiste instanceof Remera) {
         let talle = prompt ("Qué talle de remera quiere comprar? Elija s, m o l.").toLocaleLowerCase();
         talle = talle.toLowerCase();
         while (true){
          if (talle === "" || (talle !== "s" && talle !== "m" && talle !== "l")){
            alert ("Por favor ingrese un talle válido.");
            talle = prompt ("Qué talle de remera quiere comprar? Elija s, m o l.").toLocaleLowerCase();
          } else {
            break;
          }
        }
      } 
  
        let cantidadCompra = parseInt (prompt("¿Qué cantidad de " + productoElegido + " desea comprar?"));
  
        // Asegurarse de que la cantidad sea válida y que se actualice el stock y el subtotal
  
        if (isNaN(cantidadCompra) || cantidadCompra === ""){
          alert ("Por favor ingrese una cantidad válida");
        } else if (cantidadCompra > productoExiste.cantidad) {
          alert ("No hay cantidad suficiente de " + productoExiste.nombre + " en stock.")
        } else {
          productoExiste.cantidad -= cantidadCompra;
          productoExiste.calcularSubtotal();
          productoExiste.cantidadCompra = cantidadCompra;
          carrito.push(productoExiste);
      alert("Se agregó " + productoExiste.nombre + " al carrito.");
      
  
      const continuar = prompt ("¿Desea seguir agregando productos? Por favor escriba si o no y haga click en aceptar."). toLowerCase();
  
      if (continuar === "no") {
        alert("Procederemos a cerrar su compra. ¡Gracias por su elección!");
        break;
      }
    }
    } else {
      alert("Por favor ingrese un producto de la lista.");
    }
  }
  }
  mostrarCarrito();
  }

// Funcion para mostrar el carrito de compras con el total de la compra

function mostrarCarrito () {
   
  let mensajeCarrito = "Este es el detalle de su carrito de compras:\n";
  
   carrito.forEach ((producto) => {mensajeCarrito+= ("- Productos: " + producto.nombre + "\n- Cantidad: " + producto.cantidadCompra + "\n- Subtotal: " + producto.subtotal + "\n\n")});
  
   const total = carrito.reduce ((suma, producto) => suma + producto.subtotal, 0);
   mensajeCarrito += "- Total: " + total;
  
   alert (mensajeCarrito);
   console.log (mensajeCarrito);
  } 

   
  elegirProductos();
    

   localStorage.setItem ("productos",JSON.stringify(stockProductos));

   localStorage.setItem ("carrito", JSON.stringify(carrito));

   localStorage.removeItem("pintura");
   localStorage.removeItem("Productoss");
   localStorage.removeItem("Pinturass");
   localStorage.removeItem("Productos");

    


  

          
    
      

        
    
    

  

