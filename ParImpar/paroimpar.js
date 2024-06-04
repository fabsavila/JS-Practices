// 1) Realizar un programa que permita determinar si un numero es par o impar.

var numeroParImpar = prompt("Ingrese un número:");
var numeroEntero = parseInt(numeroParImpar);
var residuo = numeroEntero % 2;

if (residuo === 0) {
   alert("Es un número par");
}  else {
   alert("Es un número impar");
}