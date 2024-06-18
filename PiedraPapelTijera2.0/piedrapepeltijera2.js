/*2.2) Crea un programa que te permita jugar piedra, papel o tijera contra la computadora
  en programación orientada a objetos, guardar un historial de victorias y derrotas*/

class PiedraPapelTijera {
    constructor() {
        this.victoriasJugador = 0;
        this.victoriasComputadora = 0;
    }

    elegirOpcion() {
        const opciones = ["Piedra", "Papel", "Tijera"];
        let eleccion = prompt("Elige una opción:");
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
  