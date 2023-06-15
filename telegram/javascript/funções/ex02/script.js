let des = (v, d, cb) => {
    let vel = v
    do {
        cb(vel)
        vel -= d
    } while(vel > 0) 
    cb(0)
    alert('A nave está parada, as comportas podem ser abertas!')
}

let callback = (num) => {
    alert('Velocidade atual: ' + num + 'km/s')
}

des(150, 20, callback)