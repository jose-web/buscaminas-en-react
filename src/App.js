import React from 'react';
import './App.css';

function App() {
  return (
    <Tablero />
  );
}
class Tablero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tamanio: 10,
      nivel: 0,
      minas: 10
    };
  }
  //⬛
  tablero = []

  generaTablero = () => {
    this.tablero = new Array(this.state.tamanio);
    for (let i = 0; i < this.tablero.length; i++) {
      this.tablero[i] = new Array(this.state.tamanio);
    }

    this.rellenarTablero()
  }

  rellenarTablero = () => {
    let minas = this.state.minas
    while (minas !== 0) {

      let vertical = Math.trunc(Math.random() * this.state.tamanio)
      let horizontal = Math.trunc(Math.random() * this.state.tamanio)

      if (this.tablero[vertical][horizontal] !== "💣") {
        this.tablero[vertical][horizontal] = "💣"
        minas--
      }
    }
    this.rellenaPosicionMina()
  }

  rellenaPosicionMina = () => {
    for (let i = 0; i < this.tablero.length; i++) {
      for (let o = 0; o < this.tablero[i].length; o++) {
        if (this.tablero[i][o] !== "💣") {
          let minas = 0

          if (this.tablero[i][o - 1] === "💣")
            minas++

          if (this.tablero[i][o + 1] === "💣")
            minas++

          if (typeof this.tablero[i - 1] != "undefined") {
            if (this.tablero[i - 1][o] === "💣")
              minas++
            if (this.tablero[i - 1][o - 1] === "💣")
              minas++
            if (this.tablero[i - 1][o + 1] === "💣")
              minas++
          }

          if (typeof this.tablero[i + 1] != "undefined") {
            if (this.tablero[i + 1][o] === "💣")
              minas++
            if (this.tablero[i + 1][o - 1] === "💣")
              minas++
            if (this.tablero[i + 1][o + 1] === "💣")
              minas++
          }

          if (minas !== 0)
            this.tablero[i][o] = minas
        }
      }
    }
  }

  muestraTablero = () => {
    let tabla = [];
    this.generaTablero()
    for (let i = 0; i < this.tablero.length; i++) {
      let casillas = []
      for (let o = 0; o < this.tablero[i].length; o++) {
        casillas.push(<td key={o}>{this.tablero[i][o]}</td>)
      }
      tabla.push(<tr key={i}>{casillas}</tr>)
    }
    return tabla
  }

  render() {
    return (
      <table id="tablero">
        <tbody>
          {this.muestraTablero()}
        </tbody>
      </table>

    )
  }
}

export default App;
