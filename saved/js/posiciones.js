//var posiciones = ['Jinete', 'Leon', 'Mapu', 'Agazapado', 'Arco', 'Serpiente', 'Gato', 'Señorita', 'Cruzado', 'Tumbado'];
var posiciones = ['Jinete', 'Leon', 'Mapu', 'Agazapado pierna derecha', 'Agazapado pierna izquierda', 'Arco pierna derecha',
    'Arco pierna izquierda', 'Serpiente pierna derecha', 'Serpiente pierna izquierda', 'Gato pierna derecha', 'Gato pierna izquierda',
    'Señorita pierna derecha', 'Señorita pierna izquierda', 'Cruzado pierna derecha', 'Cruzado pierna izquierda', 'Tumbado pierna derecha',
    'Tumbado pierna derecha'];

var cont = 3;
var contadorDePosiciones = 0;
var tiempoMax = 60;

function finish() {

};

function nuevaPosicion() {
    if (posiciones[contadorDePosiciones] === undefined) {
        document.getElementById("posicion").innerHTML = 'Listo!';
        return 'Listo!';
    } else {
        document.getElementById("posicion").innerHTML = posiciones[contadorDePosiciones];
        return posiciones[contadorDePosiciones];
    }
}
function start() {
    window.setInterval(function () {
        document.getElementById("contador").innerHTML = cont;
        cont--;
        if (cont === 0) {
            if (nuevaPosicion().includes('pierna')) {
                cont = tiempoMax / 2;

            } else if (nuevaPosicion().includes('Listo!')) {
                document.getElementById("contador").style.display = "none";
                cont = 0;
            } else {
                cont = tiempoMax;
            }
            contadorDePosiciones++;
        }

    }, 1000);
}
