/* 2) Realiza un piedra papel o tijera en donde dos 
jugadores ingresen su opcion y se determine quien gana.
*/

var jugador1 = prompt("Jugador 1, elige una opción: piedra, papel o tijera");
var jugador2 = prompt("Jugador 2, elige una opción: piedra, papel o tijera");
var opciones = ["piedra", "papel", "tijera"];

if (jugador1 === jugador2) {
  alert("Empate");
} else if (jugador1 === "piedra" && jugador2 === "tijera" || jugador1 === "papel" && jugador2 === "piedra" || jugador1 === "tijera" && jugador2 === "papel") {
  alert("Jugador 2 - Has perdido. Ha ganado el jugador 1.");
} else {
  alert("Jugador 1 - Has perdido. Ha ganado el jugador 2.");
}