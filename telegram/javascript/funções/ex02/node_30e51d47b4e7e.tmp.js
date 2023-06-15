let des = (vel, cb) => {
    let newVel
    for (let i = vel; i > 0; i - 20) {
        newVel = 
        cb(i)
    }
}

let callback = (num) => {
    console.log('Velocidade atual: ' + num)
}

des(150, callback)