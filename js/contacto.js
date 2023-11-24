 //Formulario de Contacto

 class Cliente {

    static id = 1;
    
    constructor (nombre, email, numeroCelular, mensaje){
        this.id = Cliente.id++;
        this.nombre = nombre;
        this.email = email;
        this.numeroCelular =numeroCelular;
        this.mensaje = mensaje;

    }
}

 const miFormulario = document.getElementById("miFormulario");
 const clientes = [];

 miFormulario.addEventListener ("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre_completo").value;
    const email = document.getElementById("email").value;
    const numeroCelular = document.getElementById("numero_celular").value;
    const mensaje = document.getElementById("mensaje").value;
    

    const nuevoCliente = new Cliente (nombre, email, numeroCelular, mensaje);


    clientes.push(nuevoCliente);

    console.log(nuevoCliente);

    console.log (clientes);

    miFormulario.reset();

    console.log('Evento submit.');

  });