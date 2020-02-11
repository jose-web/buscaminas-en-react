import React from 'react';

class VisorDeDatos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            puntos: 0,
            restaPuntos: this.restaPuntos(),
            resultado: ""
        }
    }

    restaPuntos = () => {
        return setInterval(() => {
            if (this.state.puntos !== 0) {
                let resta = this.state.puntos - 1
                this.setState({ puntos: resta })
            }
        }, 1000)
    }

    final = (nuevoResultado) => {
        clearInterval(this.state.restaPuntos)
        this.setState({ resultado: nuevoResultado })
    }

    render() {
        this.props.puntos[0] = this

        this.props.puntos.push(() => {
            this.props.puntos[2] += 10;
            this.setState({ puntos: this.props.puntos[2] })
        })

        this.props.puntos.push(0)

        return (
            <div>
                <h1>Buscaminas</h1>
                <p>Puntos {this.state.puntos}</p>
                <p>{this.state.resultado}</p>
            </div>
        )
    }
}

export default VisorDeDatos