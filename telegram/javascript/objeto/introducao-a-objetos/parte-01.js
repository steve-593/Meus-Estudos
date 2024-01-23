// Parte[1]

let spaceship = {
    name: "Fenix",
    qtdeTripulantes: 7,
    type:"Batalha",
}

// Ambos os jeitos funcionam
console.log(spaceship.type)
console.log(spaceship["type"])

console.log("======================================================================")

// Adicionar elemento no objeto
spaceship.isHitched = false
spaceship["shieldLevel"] = 100

console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

console.log("======================================================================")

// Pode-se criar um objeto vazio de duas formas
let spaceshipvazio = {}
let spaceshipVazio = new Object()

console.log("======================================================================")