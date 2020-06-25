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

var optNum = 5;

for (let i = 0; i < optNum; i++) {
    var rdmNum = movs[Math.floor(Math.random() * movs.length)].name;
    console.log("Random number => " + rdmNum);
}
