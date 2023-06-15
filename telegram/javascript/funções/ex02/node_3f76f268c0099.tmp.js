let des = (vel, des, cb) => {
    let newVel
    for (let i = vel; i > 0; i - des) {
        newVel = 
        cb(i)
    }
}

let callback = (num) => {
    console.log('Velocidade atual: ' + num)
}

des(150, 20, callback)