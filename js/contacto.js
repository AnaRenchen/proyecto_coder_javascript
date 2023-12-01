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

    // Verifica si los campos están completos
    if (nombre === "" || email === "" || numeroCelular == "" || mensaje == "") {
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

    clientes.push(nuevoCliente);

    miFormulario.reset();

    Swal.fire({
        imageUrl: "../Photos/gato_negro.png",
        title: '¡Formulario enviado!',
        text: 'En breve enviaremos una respuesta.',
        color: "black",
        background: "#D3A625",
        confirmButtonColor: "#740001",
        timer: 5000,
    });
}
  });