let des = (vel, desa, cb) => {
    let newVel
    for (let i = vel; i > 0; i - desa) {
        newVel = vel - desa
        cb(newVel)
    }
}

let callback = (num) => {
    console.log('Velocidade atual: ' + num)
}

des(150, 20, callback)