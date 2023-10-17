# proyecto_coder_javascript
mi proyecto para el curso de coderhouse: javascript

//Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

let number;
let numberPar = 0;
let numberImpar = 0;

do{
    number = parseInt(prompt("Ingrese un número (o escriba salir para finalizar el juego):"));
  
  if (!isNaN(number)) {
    if (number % 2 === 0) {
      numberPar++;
    } else {
      numberImpar++;
    }
  } else {
    console.log("El juego terminó.");
  }
} while (!isNaN(number))

  console.log("Números pares ingresados: " + numberPar);
  console.log("Números impares ingresados: " + numberImpar);

let number;
let numberPar = 0;
let numberImpar = 0;

do{
    number = parseInt(prompt("Ingrese un número (o escriba salir para finalizar el juego):"));
  
  if (!isNaN(number)) {
    if (number % 2 === 0) {
      numberPar++;
    } else {
      numberImpar++;
    }
  } else {
    console.log("El juego terminó.");
  }
} while (!isNaN(number))

  console.log("Números pares ingresados: " + numberPar);
  console.log("Números impares ingresados: " + numberImpar);

//Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

//let numero = parseInt (prompt("Ingrese un número"));

/*if (!isNaN(numero)){
if (numero % 2 === 0){
    console.log("par");
} else{
    console.log("impar");
}
}*/




/*let lados = prompt('INGRESE CANTIDAD DE LADOS');

for (let index = 0; index < lados; index++) {
if (index > 3) {
    
}
alert("lado");
}

// el codigo asi esta indicando alert (lado) la cantidad de veces del index. Para que pueda alertar lado si index>3 tiene que estar dentro de la condicion if.




/*let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index++) {
console.log(texto);
}
 //El codigo tiene que hacer que el texto se repida el numero de veces indicada por el usuario.  Pero falta index++ que es lo que hace que el codigo no se ejecute de manera infinita

Te recomendamos realizar el siguiente desafío en Visual Studio Code: 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo. --//


const año = parseInt (prompt ("En que año naciste?"));
let añoActual = 2023;
let idade = añoActual - año;
let mundial = idade / 4;

console.log (mundial);

let edad = parseInt (prompt ("Ingrese su edad"));
const intervalo = 4;
let totalMundiales = 21;
let mundiales = edad / 4;

if (edad >= (intervalo * totalMundiales)) {
    console.log (totalMundiales);
} else if ((edad>= 1) && (edad<=4)) {
    console.log ("1 mundial");
} else if ((edad > 4) && (edad < (intervalo * totalMundiales))) {
    console.log (mundiales);
}
else{
    console.log ("ninguno");
}

for (let i=0; i<=10; i++) {
    if (i == 5) {
        console.warn ("iteracion interrumpida en el ciclo", i, "por la clausula break");
        break;
    }
    alert (i);
}

let i;

do {
  i = prompt("Ingrese un número");

  // Utiliza isNaN para comprobar si la entrada no es un número válido
  if (!isNaN(i)) {
    // Muestra el número solo si es válido
    console.log(i);
  } else {
    // Si no es válido, muestra un mensaje de error y continúa pidiendo entrada
    console.log("Entrada no válida. Por favor, ingrese un número.");
  }
} while (!isNaN(i));*/
