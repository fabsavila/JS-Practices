/* 3) Realiza un programa que funcione como un semaforo, en donde se pueda ingresar un color 
y se muestre un mensaje dependiendo del color, si es verde imprima "Continua", amarillo imprima "despacio" 
o rojo "detente", sino es ninguno imprima "error"
*/

var semaforoColor = prompt("Elige un color: verde, amarillo o rojo");
var colores = ["verde", "amarillo", "rojo"];

if (semaforoColor === colores[0]) {
  alert("Continua");
} else if (semaforoColor === colores[1]) {
  alert("Despacio");
} else if (semaforoColor === colores[2]) {
  alert("Detente");
} else {
  alert("Error")
}