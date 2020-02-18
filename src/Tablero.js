import React from 'react';
import Casilla from './Casilla.js'
import VisorDeDatos from './VisorDeDatos.js'
import { Navbar, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tablero extends React.Component {
    constructor(props) {
        super(props);
        if (window.location.search !== "") {
            let parametros = window.location.search.substring(1)
            let arrayParametros = parametros.split('&&')
            for (let i = 0; i < arrayParametros.length; i++) {
                let aux = arrayParametros[i].split("=")
                arrayParametros[aux[0]] = aux[1]
            }

            if (typeof arrayParametros["nivel"] == "undefined") {
                this.state = {
                    tamanio: Number(arrayParametros["casillas"]),
                    nivel: 0,
                    minas: Number(arrayParametros["minas"]),
                }
            } else {
                let tamanioNivel
                let minasNivel

                switch (Number(arrayParametros["nivel"])) {
                    case 0:
                        tamanioNivel = 10
                        minasNivel = 10
                        break;

                    case 1:
                        tamanioNivel = 10
                        minasNivel = 15
                        break;

                    case 2:
                        tamanioNivel = 15
                        minasNivel = 20
                        break;

                    case 3:
                        tamanioNivel = 15
                        minasNivel = 25
                        break;

                    default:
                        tamanioNivel = 10
                        minasNivel = 10
                }

                this.state = {
                    tamanio: tamanioNivel,
                    nivel: Number(arrayParametros["nivel"]),
                    minas: minasNivel,
                    muestraModal: false
                }

            }

        } else {
            this.state = {
                tamanio: 10,
                nivel: 0,
                minas: 10,
                muestraModal: false
            }
        }
    }

    tablero = []
    arrayCasillas = []
    listaComprobados = []
    perder = false
    ganar = false
    puntos = []

    addListaComprobados = (y, x) => {
        if (this.listaComprobados.indexOf(y + " " + x) === -1) {
            this.listaComprobados.push(y + " " + x)
            return true
        }
        return false
    }

    compruebaGanar = () => {
        let tamanio = this.state.tamanio
        let minas = this.state.minas
        let casillas = tamanio * tamanio
        let casillasSinMinas = casillas - minas

        if (this.listaComprobados.length === casillasSinMinas) {
            this.puntos[0].final("Has ganado")
            this.ganar = true
            for (let i = 0; i < this.arrayCasillas.length; i++) {
                for (let o = 0; o < this.arrayCasillas[i].length; o++) {
                    if (this.arrayCasillas[i][o].props.valor === "💣") {
                        this.arrayCasillas[i][o].bandera()
                    }
                }
            }
            return true
        }
        return false
    }

    compruebaPerder = () => {
        this.perder = true
    }

    muestraPerder = () => {
        return this.perder
    }

    muestraGanar = () => {
        return this.ganar
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
        let tabla = []
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
                            compruebaGanar={this.compruebaGanar}
                            muestraPerder={this.muestraPerder}
                            compruebaPerder={this.compruebaPerder}
                            muestraGanar={this.muestraGanar}
                            puntos={this.puntos}
                        />
                    </td>
                )
            }
            tabla.push(<tr key={i}>{casillas}</tr>)
        }
        return tabla
    }

    irNivelPersonalizado = (event) => {
        event.preventDefault()

        window.location.search = "casillas=" + event.target.casillas.value +
            "&&minas=" + event.target.minas.value
    }

    modalCambiaEstado = () => {
        this.setState({
            muestraModal: !this.state.muestraModal
        })
    }

    nivelPersonalizado = () => {
        return (
            <>
                <Button color="warning" className="col-12" onClick={this.modalCambiaEstado}>Crear uno personalizado</Button>

                <Modal isOpen={this.state.muestraModal} toggle={this.modalCambiaEstado}>
                    <ModalHeader toggle={this.modalCambiaEstado}>Creación de un mapa personalizado</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.irNivelPersonalizado}>
                            <table className="w-100">
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="casillas" className="form-check-label">Casillas:</label></td>
                                        <td><input type="text" id="casillas" name="casillas" className="form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="minas" className="form-check-label mt-3">Minas:</label></td>
                                        <td><input type="text" id="minas" name="minas" className="form-control mt-3" /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><input type="submit" value="Crear" className="btn btn-primary w-100 mt-3" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </ModalBody>
                </Modal>
            </>
        )
    }

    selectorDeNiveles = () => {

        let NivelesDisponibles = 4
        let arrayBotones = [];
        for (let i = 0; i < NivelesDisponibles; i++) {
            arrayBotones.push(<Button color="danger" className="botonNivel m-1" key={i} value={i} onClick={this.irNivel}>Nivel {i}</Button>)
        }

        return (arrayBotones)
    }

    irNivel = (event) => {
        window.location.search = "nivel=" + event.target.value
    }

    render() {
        return (
            <>
                <Navbar color="warning">
                    <VisorDeDatos puntos={this.puntos} />
                </Navbar>

                <table id="tablero">
                    <tbody>
                        {this.muestraTablero()}
                    </tbody>
                </table>

                <footer className="bg-primary p-2 d-flex justify-content-between flex-wrap">
                    {this.selectorDeNiveles()}
                    {this.nivelPersonalizado()}
                </footer>
            </>
        )
    }
}

export default Tablero