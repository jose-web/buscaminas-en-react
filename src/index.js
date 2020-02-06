import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.oncontextmenu = function () {
    // Deshabilita el menú contextual al pulsar botón derecho
    return false;
}

ReactDOM.render(<App />, document.getElementById('root'));