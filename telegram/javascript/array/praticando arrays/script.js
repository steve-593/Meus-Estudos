const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false ]
]

let filtrar = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let achar = hitchedSpaceships.findIndex (spaceship => {
    return spaceship[2] == false
})

let maiusculo = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let msg = "Espaçonaves com mais de 9 tripulantes: " + filtrar.join(", ")
msg += "\nPlataforma com processo de engato: " + (achar + 1)
msg += "\nEspaçonaves detacadas: " + maiusculo.join(", ")

alert(msg)