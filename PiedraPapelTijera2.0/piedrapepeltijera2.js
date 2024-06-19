/*2.2) Crea un programa que te permita jugar piedra, papel o tijera contra la computadora
  en programación orientada a objetos, guardar un historial de victorias y derrotas*/

class PiedraPapelTijera {
    constructor() {
        this.victoriasJugador = 0;
        this.victoriasComputadora = 0;
        this.opciones = ["piedra", "papel", "tijera"];
    }

    eleccionJugador() {
        let eleccion = prompt("Elige una opción: Piedra, Papel o Tijera");
        while (!this.opciones.includes(eleccion)) {
          eleccion = prompt("Opción inválida. Elige una opción: Piedra, Papel o Tijera");
        }
        return eleccion;
    }
    
    eleccionComputadora() {
        const eleccionAleatoria = Math.floor(Math.random() * 3);
        return this.opciones[eleccionAleatoria];
    }
  
    determinarGanador(eleccionJugador, eleccionComputadora) {
        const combinacionesGanadoras = {
            Piedra: ["tijera"],
            Papel: ["piedra"],
            Tijera: ["papel"],
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

let juego = new PiedraPapelTijera();
juego.eleccionJugador();
  