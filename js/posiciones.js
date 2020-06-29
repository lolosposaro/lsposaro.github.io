var posiciones = ['Jinete', 'Leon', 'Mapu', 'Agazapado', 'Arco', 'Serpiente', 'Gato', 'Señorita', 'Cruzado', 'Tumbado'];
var cont = 3;
var contadorDePosiciones = 0;
var tiempoMax = 60;

function nuevaPosicion() {
    document.getElementById("posicion").innerHTML = posiciones[contadorDePosiciones];
}

function finish() {

}

function start() {
    window.setInterval(function () {
        document.getElementById("contador").innerHTML = cont;
        cont--;
        if (cont === 0) {
            cont = tiempoMax;
            nuevaPosicion();
            contadorDePosiciones++;
        }
        if (contadorDePosiciones >= posiciones.length) {
            finish();
        }
    }, 1000);
}
