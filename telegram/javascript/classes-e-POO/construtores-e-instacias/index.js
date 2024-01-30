class SpacialStation {
    constructor (name, plataformQuantity) {
        this.name = name
        this.plataformQuantity = plataformQuantity
    }
}

let observatory = new SpacialStation("Observatório", 40)

console.log(observatory)

console.log("/////////////////////////////////////////////////////////////////")

class Spaceship {
    constructor (name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")

console.log(darwin)
console.log(helmet)
