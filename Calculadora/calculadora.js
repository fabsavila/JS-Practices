/* 
4) Realiza una calculadora que permita realizar las operaciones basicas 
(suma, resta, multiplicacion y division) con dos numeros, 
debe preguntarte el numero1, el numero2 y la operacion que deseas realizar.
*/

var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var operacion = prompt("Ingresa la operación que deseas realizar: (+, -, *, /)")
var operaciones = ["+", "-", "*", "/"];
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

var resultado;
if (operacion === "+") {
  resultado = numero1 + numero2;
} else if (operacion === "-") {
  resultado = numero1 - numero2;
} else if (operacion === "*") {
  resultado = numero1 * numero2;
} else if (operacion === "/") {
  resultado = numero1 / numero2;
} else {
  alert("Error: La operación no es válida.");
}

alert(`${numero1} ${operacion} ${numero2} es: ${resultado}`);