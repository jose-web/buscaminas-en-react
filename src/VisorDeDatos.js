import React from 'react';

class VisorDeDatos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            puntos: 0
        }
        this.props.sumaPuntosCasilla.push(() => {
            this.props.sumaPuntosCasilla[1] += 10;
            this.setState({ puntos: this.props.sumaPuntosCasilla[1] })
        })
        this.props.sumaPuntosCasilla.push(0)
    }

    render() {

        return (
            <div>
                <h1>Buscaminas</h1>
                <p>Puntos {this.state.puntos}</p>
            </div>
        )
    }
}

export default VisorDeDatos