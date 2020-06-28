const movs = [
    { name: "Pin Chuen" },
    { name: "Lin Chuen" },
    { name: "Pin Chuen Bajo" },
    { name: "Bon Chuen" },
    { name: "Yap" },
    { name: "Cross" },
    { name: "Gancho Recto" },
    { name: "Gancho Bajo" },
    { name: "Gancho Tecnico" },
    { name: "Low  Kick" },
    { name: "Rodilla Ofensiva" },
    { name: "Rodilla Ofensiva" },
    { name: "Latigo" },
    { name: "Frontal" },
    { name: "Lateral" },
    { name: "Circular Externa" },
    { name: "Circular Interna" },
    { name: "Patada de Mono" },
    { name: "Patada de Tigre" },
    { name: "Pin Chuen" },
    { name: "Pin Chuen" },
    { name: "Lin Chuen bajo" },
    { name: "Ding Zhou" }
];

// var input =
function mostrarMovimiento() {
    var rdmMov = movs[Math.floor(Math.random() * movs.length)].name;
    var elementNode = document.createElement('h1');
    var textNode = document.createTextNode(" => " + rdmMov);

    elementNode.appendChild(textNode);
    document.body.appendChild(elementNode);
}

function start(cantidadDeMovimientos) {
    for (let i = 0; i < cantidadDeMovimientos; i++) {
        mostrarMovimiento();
        console.log(i);
    }
}
