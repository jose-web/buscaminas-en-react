import React from 'react';
import './App.css';
import Casilla from './Casilla.js'

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
      minas: 10,
    };
  }

  tablero = []
  arrayCasillas = []
  listaComprobados = []

  addListaComprobados = (y, x) => {
    if (this.listaComprobados.indexOf(y + " " + x) === -1) {
      this.listaComprobados.push(y + " " + x)
      return true
    }
    return false
  }

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
      this.arrayCasillas.push([])
      for (let o = 0; o < this.tablero[i].length; o++) {
        casillas.push(
          <td key={o}>
            <Casilla
              y={i}
              x={o}
              arrayCasillas={this.arrayCasillas}
              tablero={tabla}
              valor={typeof this.tablero[i][o] == "undefined" ? "" : this.tablero[i][o]}
              addListaComprobados={this.addListaComprobados.bind(this, i, o)}
            />
          </td>
        )
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
