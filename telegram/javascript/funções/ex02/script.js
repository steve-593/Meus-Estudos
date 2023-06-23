//Minha versão

let des = (v, d, cb) => {
    do {
        cb(v)
        v -= d
    } while(v > 0) 
    cb(0)
    alert('A nave está parada, as comportas podem ser abertas!')
}

let callback = (num) => {
    alert('Velocidade atual: ' + num + 'km/s')
}

des(150, 20, callback)

//versão do curso

function slowDown(velocity, printer) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert('Nave parada. As comportas podem ser abertas.')
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log('Velocidade atual: ' + velocity)
})