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
            this.setState({ visual: "🚩" });
    }

    mostrar = () => {
        if (this.state.visual !== this.state.valor) {
            this.setState({ visual: this.state.valor });
            if (this.state.valor === "" && this.state.visual !== "" && this.props.addListaComprobados()) {

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

    render() {
        this.props.arrayCasillas[this.props.y][this.props.x] = this
        return (
            <button onClick={this.mostrar} onContextMenu={this.bandera}>{this.state.visual}</button>
        )
    }
}

export default Casilla