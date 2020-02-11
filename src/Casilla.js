import React from 'react';

class Casilla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: this.props.valor,
            visual: "🔎",
        };
    }
    bandera = () => {
        if (this.state.visual !== this.state.valor)
            this.setState({ visual: "🚩" })
    }

    compruebaPerder = () => {
        if (this.state.valor === "💣") {
            this.props.compruebaPerder()
        }
        if (this.props.muestraPerder()) {

            for (let i = 0; i < this.props.arrayCasillas.length; i++) {
                for (let o = 0; o < this.props.arrayCasillas[i].length; o++) {
                    this.props.arrayCasillas[i][o].muestraMina()
                }
            }
            this.props.puntos[0].final("Has perdido")

            return true
        }
        return false
    }

    muestraMina = () => {
        if (this.state.valor === "💣") {
            this.setState({ visual: this.state.valor })
        }
    }

    mostrar = () => {
        if (this.state.visual !== this.state.valor && !this.compruebaPerder()) {
            this.setState({ visual: this.state.valor });
            if (this.props.addListaComprobados() && !this.props.compruebaGanar()) {
                this.props.puntos[1]()
                if (this.state.valor === "" && this.state.visual !== "") {
                    let casillas = this.props.arrayCasillas;
                    let y = this.props.y
                    let x = this.props.x

                    if (typeof casillas[y][x - 1] != "undefined")
                        casillas[y][x - 1].mostrar()

                    if (typeof casillas[y][x + 1] != "undefined")
                        casillas[y][x + 1].mostrar()

                    if (y - 1 !== -1 && typeof casillas[y - 1][x] != "undefined")
                        casillas[y - 1][x].mostrar()

                    if (y - 1 !== -1 && typeof casillas[y - 1][x - 1] != "undefined")
                        casillas[y - 1][x - 1].mostrar()

                    if (y - 1 !== -1 && typeof casillas[y - 1][x + 1] != "undefined")
                        casillas[y - 1][x + 1].mostrar()

                    if (y + 1 !== casillas.length && typeof casillas[y + 1][x] != "undefined")
                        casillas[y + 1][x].mostrar()

                    if (y + 1 !== casillas.length && typeof casillas[y + 1][x - 1] != "undefined")
                        casillas[y + 1][x - 1].mostrar()

                    if (y + 1 !== casillas.length && typeof casillas[y + 1][x + 1] != "undefined")
                        casillas[y + 1][x + 1].mostrar()
                }
            }
        }
    }

    render() {
        this.props.arrayCasillas[this.props.y][this.props.x] = this
        return (
            <button onClick={this.mostrar} onContextMenu={this.bandera}>{this.state.visual}</button>
        )
    }
}

export default Casilla