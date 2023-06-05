let spaceship = 'Elemental'
let velocity = 20

//console.log(!(velocity >19))
// NÃO V = F

//console.log(!(spaceship == 'Golias'))
// NÃO V = F

console.log(!(velocity > 25 && spaceship == 'Elemental') || (velocity - 3 == 17 && spaceship.length + 1 > 15))
// !(velocity > 25 && spaceship == 'Elemental') || (velocity - 3 == 17 && spaceship.length + 1 > 15))
// !(F && V) || (V && F))
// !F || F
//  V || F
//  V