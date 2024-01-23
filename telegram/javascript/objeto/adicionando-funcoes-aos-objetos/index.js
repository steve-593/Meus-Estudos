let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        console.log("Preparando propulsão")
        console.log("Ligando computador de bordo")
        console.log(this.name)
    }
}

spaceship.turnOn()

spaceship.velocity = 0

// Dessa forma acaba-se formando um objeto meio macarronado pois para adicionar um elemento no objeto é necessário usar o próprio objeto como parametro da função, para evitar isso existe uma função chamada "this" que vai referenciar o próprio objeto. Veja a maneira correta abaixo.
/*
spaceship.speedUp = function(spaceshipToSpeedUp, acceletarion) {
    spaceshipToSpeedUp.velocity += acceletarion
}

console.log(spaceship)

spaceship.speedUp(spaceship, 10)

console.log(spaceship)
*/

// Maneira correta:

spaceship.speedUp = function(acceletarion) {
    this.velocity += acceletarion
}

console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)