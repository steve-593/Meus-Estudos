// Parte[2]

// Exemplos de propriedade e elementos que se pode criar em um objeto
let spacialStation = {
    name: "Fox",
    qtdePlataforma: 10,
    "new name": "Estelar",
    true: false,
    2: "Descoberta"
}

// Da erro pois se entende como um número e não como propriedade
//console.log(spacialStation.2)

// Maneira correta
console.log(spacialStation["2"])

// Não tem como acessar dessa forma pois existe um espaço na propriedade
//console.log(spacialStation.new name) 

// Maneira correta
console.log(spacialStation["new name"])