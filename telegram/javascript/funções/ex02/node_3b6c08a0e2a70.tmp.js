let des = (v, d, cb) => {
    let vel = v
    let newVel
    for (let i = vel; i > 0; i - d) {
        newVel = vel - d
        cb(newVel)
    }
}

let callback = (num) => {
    console.log('Velocidade atual: ' + num)
}

des(150, 20, callback)