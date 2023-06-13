function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(newVelocity)
    return newVelocity
}

let velocity = 80
let acceleration = 5

console.log(velocity)

velocity = speedUp(velocity, acceleration)

console.log(velocity) 

//Também posso ignorar a return da função

function speedUp2(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(newVelocity)
    //return newVelocity
}

speedUp2(100, 20)