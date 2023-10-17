

function sumar () {
let numero1 = 2;
let numero2 = 3;
let resultado = (numero1 + numero2);
return resultado;
}

alert (sumar());


/*let suma = 0;

do{
let numero = prompt("Ingrese un número o escriba 'esc' para salir:");

  if (numero === "esc" || numero === null) {
    alert ("fin del juego")
    break;
  } else {
    numero = parseInt(numero);
    suma += numero;
    console.log("El total es: " + suma);
  } 
} while (true);*/



/*let suma = 0;

while (true) {
  let numero = parseInt(prompt("Ingrese un número:"));

  if (numero === null || isNaN(numero)) {
    break; 
  }

  suma += numero;
  console.log("El total es: " + suma);
}

alert("Se terminó el juego!");*/



/*let cantidad = parseInt (prompt ("Ingrese un numero: "));
let mensaje = "Hola, people!";


for (let contador = 1; contador <= cantidad; contador++){
  alert (mensaje);
}*/


/*let numero = parseInt(prompt("Ingrese un numero"));
let suma = 0;

for (i=0; i <5; i++){
suma += numero;
alert (suma);
}*/

/*let texto = prompt ("Ingrese un texto: ");
let mensaje = "";

while (texto != "esc"){
  mensaje += texto + " ";
  alert (mensaje);

  texto = prompt ("Ingrese un nuevo texto: ");
}

alert ("Saliste del programa!");*/

/*function sumar(){
  let numero1 = 5;
  let resultado = numero1 + 5;
  return resultado;
}

alert (sumar());*/

/*const sumar = (numero1, numero2) => numero1 + numero2;

alert (sumar(5,5));*/


 
 
 
 /*function saludar(nombre){
  alert ("Hola, " + nombre + "!");
 }

 saludar("Tesoro");
 
 const saludar = nombre => alert ("Hola, " + nombre + "!")
 saludar("Ana")*/
 
 
 /*let saludos = prompt("cuantas veces te saludo?");
 let contador = 1;
 const saludo = "hola, que tal?";

 while (contador <= saludos) {
   contador++;
   alert(saludo);
 }


 let dinero = prompt("Cuánto dinero tenes para comprar figuritas?");

 if (dinero <= 20) {
   alert("te puedo ofrecer dos caramelos");
 } else if (dinero >= 21 && dinero <= 49) {
   alert("estas cerca, pero no puedo fiarte. Volve mañana.");
 } else if (dinero >= 50) {
   alert("aca estan tus figuritas");
 } else {
   alert("no podes ingresar un valor negativo o no valido");
 }*/




 // Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

 /*let number = parseInt(prompt("Ingrese un numero."));
 let totalPares = 0;
 let totalImpares = 0;
 let salir = " ";

 while (salir !== "salir") {
   if (number % 2 === 0) {
     totalPares++;
   } else {
     totalImpares++;
   }

   salir = prompt('Ingrese la palabra "salir" y presione el botón aceptar si desea salir del programa. En caso contrario presione cancelar');

   if (salir !== 'salir') {
     number = parseInt(prompt('Ingrese un nuevo numero'));
   }
 }

 if (totalPares !== 0) {
   alert("El numero total de pares es " + totalPares);
 }

 if (totalImpares !== 0) {
   alert("El numero total de impares es " + totalImpares);
 }



 //Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

 let numero = parseInt(prompt("Ingrese un número"));

 if (numero % 2 === 0) {
   alert("El numero " + numero + " es par.");
 } else {
   alert("El numero " + numero + " es impar.");
 }



 let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
 for (let index = 1; index <= lados; index++) {
   if (index > 3) {

     alert("La figura geometrica tiene mas de 3 lados y no es un triangulo");
     break;
   }
   alert("lado" + index);
 }



 //Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo. --//

 let añoActual = 2023;
 let añoNacimiento = prompt("En que año naciste?");
 let mundiales = parseInt((añoActual - añoNacimiento) / 4);


 if (añoNacimiento <= 1939) {
   alert("Viviste 21 mundiales");
 } else {
   alert("Viviste " + mundiales + " mundiales en tu vida hasta ahora.");
 }*/