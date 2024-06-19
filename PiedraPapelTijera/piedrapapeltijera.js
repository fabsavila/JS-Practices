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

class PiedraPapelTijera {
  constructor() {
      this.victoriasJugador = 0;
      this.victoriasComputadora = 0;
  }

  elegirOpcion() {
      let eleccion = prompt("Elige una opción:");
      const opciones = ["Piedra", "Papel", "Tijera"];
      while (!opciones.includes(eleccion)) {
          eleccion = prompt("Opción inválida. Elige una opción:");
      }
      return eleccion;
  }

  determinarGanador(eleccionJugador, eleccionComputadora) {
      const combinacionesGanadoras = {
          Piedra: ["Tijera"],
          Papel: ["Piedra"],
          Tijera: ["Papel"],
      };

      if (eleccionJugador === eleccionComputadora) return alert("Empate");

      if (combinacionesGanadoras[eleccionJugador].includes(eleccionMaquina)) {
          return "Ganaste";
      } else {
          return "Perdiste";
      }
  }

  mostrarResultado() {
      const eleccionJugador = this.elegirOpcion();
      const eleccionComputadora = this.eleccionOpcion();
      const resultado = this.determinarGanador(eleccionJugador, eleccionComputadora);

      console.log(`La máquina eligió: ${eleccionMaquina}`);
      console.log(`Resultado: ${resultado}`);

      const historialJugador = new Historial(this.victoriasJugador, this.victoriasComputadora);
      historialJugador.mostrar();
  }

  jugar() {
      console.log(this.mostrarResultado());
  }
}

class Historial {
  constructor(victorias, derrotas) {
      this.victorias = victorias;
      this.derrotas = derrotas;
  }

  mostrar() {
      console.log(`Victorias: ${this.victorias}`);
      console.log(`Derrotas: ${this.derrotas}`);
  }
}
