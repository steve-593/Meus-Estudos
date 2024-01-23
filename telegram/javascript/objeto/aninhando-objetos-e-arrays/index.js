let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap.Silva", "Ana júlia", "Thiago"]
}

spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)

// array de objeto

let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15}
]

spaceships.forEach(spaceships => {
    console.log(spaceships.name + " tem " + spaceships.crewQuantity + " tripulantes.")
})

// objeto dentro de um objeto

let espacoNave = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 37
    }
}