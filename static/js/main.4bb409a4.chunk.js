(this.webpackJsonpbuscaminas=this.webpackJsonpbuscaminas||[]).push([[0],{20:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),s=t(7),o=t.n(s),l=(t(25),t(8)),i=t(9),u=t(13),m=t(11),c=t(12),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).bandera=function(e){r.state.visual!==r.state.valor&&"Jugando"===r.props.puntos[0].state.resultado&&(e&&"\ud83d\udea9"===r.state.visual?r.setState({visual:" "}):r.setState({visual:"\ud83d\udea9"}))},r.compruebaPerder=function(){if("\ud83d\udca3"===r.state.valor&&r.props.compruebaPerder(),r.props.muestraPerder()){for(var e=0;e<r.props.arrayCasillas.length;e++)for(var a=0;a<r.props.arrayCasillas[e].length;a++)r.props.arrayCasillas[e][a].muestraMina();return r.props.puntos[0].final("Has perdido"),!0}return!1},r.muestraMina=function(){"\ud83d\udca3"===r.state.valor&&r.setState({visual:r.state.valor})},r.mostrar=function(){if(!r.props.muestraGanar()&&r.state.visual!==r.state.valor&&!r.compruebaPerder()&&(r.setState({visual:r.state.valor}),r.props.addListaComprobados()&&!r.props.compruebaGanar()&&(r.props.puntos[1](),""===r.state.valor&&""!==r.state.visual))){var e=r.props.arrayCasillas,a=r.props.y,t=r.props.x;"undefined"!=typeof e[a][t-1]&&e[a][t-1].mostrar(),"undefined"!=typeof e[a][t+1]&&e[a][t+1].mostrar(),a-1!==-1&&"undefined"!=typeof e[a-1][t]&&e[a-1][t].mostrar(),a-1!==-1&&"undefined"!=typeof e[a-1][t-1]&&e[a-1][t-1].mostrar(),a-1!==-1&&"undefined"!=typeof e[a-1][t+1]&&e[a-1][t+1].mostrar(),a+1!==e.length&&"undefined"!=typeof e[a+1][t]&&e[a+1][t].mostrar(),a+1!==e.length&&"undefined"!=typeof e[a+1][t-1]&&e[a+1][t-1].mostrar(),a+1!==e.length&&"undefined"!=typeof e[a+1][t+1]&&e[a+1][t+1].mostrar()}},r.state={valor:r.props.valor,visual:" "},r}return Object(i.a)(t,[{key:"render",value:function(){return this.props.arrayCasillas[this.props.y][this.props.x]=this,n.a.createElement("button",{onClick:this.mostrar,onContextMenu:this.bandera,className:" "===this.state.visual?"oscuro":""},this.state.visual)}}]),t}(n.a.Component),d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).restaPuntos=function(){var e=!1;return setInterval((function(){if(0!==r.state.puntos){var a=r.state.puntos-1;r.setState({puntos:a,resultado:"Jugando"}),e=!0}if(e){var t=r.state.tiempo;t.setSeconds(t.getSeconds()+1),r.setState({tiempo:t})}}),1e3)},r.final=function(e){clearInterval(r.state.restaPuntos),r.setState({resultado:e})},r.state={puntos:0,restaPuntos:r.restaPuntos(),resultado:"Esperando",tiempo:new Date(0,0,0)},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.puntos[0]=this,this.props.puntos.push((function(){e.props.puntos[2]+=10,e.setState({puntos:e.props.puntos[2]})})),this.props.puntos.push(0),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Buscaminas"),n.a.createElement("div",{className:"w-100 d-flex justify-content-around"},n.a.createElement("p",{className:"bg-primary text-white p-3 rounded-pill"},"Tiempo: ",(this.state.tiempo.getMinutes()<10?"0":"")+this.state.tiempo.getMinutes(),":",(this.state.tiempo.getSeconds()<10?"0":"")+this.state.tiempo.getSeconds()),n.a.createElement("p",{className:"bg-primary text-white p-3 rounded-pill"},"Puntos ",this.state.puntos),n.a.createElement("p",{className:"bg-primary text-white p-3 rounded-pill"},this.state.resultado)))}}]),t}(n.a.Component),b=t(38),f=t(42),v=t(39),h=t(40),y=t(41),g=(t(26),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;if(Object(l.a)(this,t),(r=a.call(this,e)).tablero=[],r.arrayCasillas=[],r.listaComprobados=[],r.perder=!1,r.ganar=!1,r.puntos=[],r.addListaComprobados=function(e,a){return-1===r.listaComprobados.indexOf(e+" "+a)&&(r.listaComprobados.push(e+" "+a),!0)},r.compruebaGanar=function(){var e=r.state.tamanio,a=e*e-r.state.minas;if(r.listaComprobados.length===a){r.puntos[0].final("Has ganado"),r.ganar=!0;for(var t=0;t<r.arrayCasillas.length;t++)for(var n=0;n<r.arrayCasillas[t].length;n++)"\ud83d\udca3"===r.arrayCasillas[t][n].props.valor&&r.arrayCasillas[t][n].bandera(!1);return!0}return!1},r.compruebaPerder=function(){r.perder=!0},r.muestraPerder=function(){return r.perder},r.muestraGanar=function(){return r.ganar},r.generaTablero=function(){r.tablero=new Array(r.state.tamanio);for(var e=0;e<r.tablero.length;e++)r.tablero[e]=new Array(r.state.tamanio);r.rellenarTablero()},r.rellenarTablero=function(){for(var e=r.state.minas;0!==e;){var a=Math.trunc(Math.random()*r.state.tamanio),t=Math.trunc(Math.random()*r.state.tamanio);"\ud83d\udca3"!==r.tablero[a][t]&&(r.tablero[a][t]="\ud83d\udca3",e--)}r.rellenaPosicionMina()},r.rellenaPosicionMina=function(){for(var e=0;e<r.tablero.length;e++)for(var a=0;a<r.tablero[e].length;a++)if("\ud83d\udca3"!==r.tablero[e][a]){var t=0;"\ud83d\udca3"===r.tablero[e][a-1]&&t++,"\ud83d\udca3"===r.tablero[e][a+1]&&t++,"undefined"!=typeof r.tablero[e-1]&&("\ud83d\udca3"===r.tablero[e-1][a]&&t++,"\ud83d\udca3"===r.tablero[e-1][a-1]&&t++,"\ud83d\udca3"===r.tablero[e-1][a+1]&&t++),"undefined"!=typeof r.tablero[e+1]&&("\ud83d\udca3"===r.tablero[e+1][a]&&t++,"\ud83d\udca3"===r.tablero[e+1][a-1]&&t++,"\ud83d\udca3"===r.tablero[e+1][a+1]&&t++),0!==t&&(r.tablero[e][a]=t)}},r.muestraTablero=function(){var e=[];r.generaTablero();for(var a=0;a<r.tablero.length;a++){var t=[];r.arrayCasillas.push([]);for(var s=0;s<r.tablero[a].length;s++)t.push(n.a.createElement("td",{key:s},n.a.createElement(p,{y:a,x:s,arrayCasillas:r.arrayCasillas,tablero:e,valor:"undefined"==typeof r.tablero[a][s]?"":r.tablero[a][s],addListaComprobados:r.addListaComprobados.bind(Object(u.a)(r),a,s),compruebaGanar:r.compruebaGanar,muestraPerder:r.muestraPerder,compruebaPerder:r.compruebaPerder,muestraGanar:r.muestraGanar,puntos:r.puntos})));e.push(n.a.createElement("tr",{key:a},t))}return e},r.irNivelPersonalizado=function(e){e.preventDefault(),window.location.search="casillas="+e.target.casillas.value+"&&minas="+e.target.minas.value},r.modalCambiaEstado=function(){r.setState({muestraModal:!r.state.muestraModal})},r.nivelPersonalizado=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{color:"warning",className:"col-12",onClick:r.modalCambiaEstado},"Crear uno personalizado"),n.a.createElement(f.a,{isOpen:r.state.muestraModal,toggle:r.modalCambiaEstado},n.a.createElement(v.a,{toggle:r.modalCambiaEstado},"Creaci\xf3n de un mapa personalizado"),n.a.createElement(h.a,null,n.a.createElement("form",{onSubmit:r.irNivelPersonalizado},n.a.createElement("table",{className:"w-100"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"casillas",className:"form-check-label"},"Casillas:")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",id:"casillas",name:"casillas",className:"form-control"}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("label",{htmlFor:"minas",className:"form-check-label mt-3"},"Minas:")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",id:"minas",name:"minas",className:"form-control mt-3"}))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement("input",{type:"submit",value:"Crear",className:"btn btn-primary w-100 mt-3"})))))))))},r.selectorDeNiveles=function(){for(var e=[],a=0;a<4;a++)e.push(n.a.createElement(b.a,{color:"danger",className:"botonNivel m-1",key:a,value:a,onClick:r.irNivel},"Nivel ",a));return e},r.irNivel=function(e){window.location.search="nivel="+e.target.value},""!==window.location.search){for(var s=window.location.search.substring(1).split("&&"),o=0;o<s.length;o++){var i=s[o].split("=");s[i[0]]=i[1]}if("undefined"==typeof s.nivel)r.state={tamanio:Number(s.casillas),nivel:0,minas:Number(s.minas)};else{var m,c;switch(Number(s.nivel)){case 0:m=10,c=10;break;case 1:m=10,c=15;break;case 2:m=15,c=20;break;case 3:m=15,c=25;break;default:m=10,c=10}r.state={tamanio:m,nivel:Number(s.nivel),minas:c,muestraModal:!1}}}else r.state={tamanio:10,nivel:0,minas:10,muestraModal:!1};return r}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{color:"warning"},n.a.createElement(d,{puntos:this.puntos})),n.a.createElement("table",{id:"tablero"},n.a.createElement("tbody",null,this.muestraTablero())),n.a.createElement("footer",{className:"bg-primary p-2 d-flex justify-content-between flex-wrap"},this.selectorDeNiveles(),this.nivelPersonalizado()))}}]),t}(n.a.Component));var E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null))};window.oncontextmenu=function(){return!1},o.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4bb409a4.chunk.js.map