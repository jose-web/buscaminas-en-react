import React from 'react';

class VisorDeDatos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            puntos: 0,
            restaPuntos: this.restaPuntos(),
            resultado: "Esperando",
            tiempo: new Date(0, 0, 0)
        }
    }

    restaPuntos = () => {
        let aux = false
        return setInterval(() => {
            if (this.state.puntos !== 0) {
                let resta = this.state.puntos - 1
                this.setState({
                    puntos: resta,
                    resultado: "Jugando",
                })
                aux = true
            }
            if (aux) {
                let tiempoAux = this.state.tiempo;
                tiempoAux.setSeconds(tiempoAux.getSeconds() + 1)
                this.setState({
                    tiempo: tiempoAux
                })
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
            <>
                <h1>Buscaminas</h1>
                <div className="w-100 d-flex justify-content-around">
                    <p className="bg-primary text-white p-3 rounded-pill">
                        Tiempo: {(this.state.tiempo.getMinutes() < 10 ? '0' : '') + this.state.tiempo.getMinutes()}:
                    {(this.state.tiempo.getSeconds() < 10 ? '0' : '') + this.state.tiempo.getSeconds()}
                    </p>
                    <p className="bg-primary text-white p-3 rounded-pill">Puntos {this.state.puntos}</p>
                    <p className="bg-primary text-white p-3 rounded-pill">{this.state.resultado}</p>
                </div>

            </>
        )
    }
}

export default VisorDeDatos