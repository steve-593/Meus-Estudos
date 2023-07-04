let hitchedSpaceships = ['Supernova', 'Elemental', 'Helmet']

console.log(hitchedSpaceships)

hitchedSpaceships.push('Supernova')

console.log(hitchedSpaceships)

//////////////////////////////////////////////////////////////////////////

hitchedSpaceships.pop() //remove o ultimo elemento

console.log(hitchedSpaceships)

//////////////////////////////////////////////////////////////////////////

let removeSpaceship = hitchedSpaceships.pop()

console.log(removeSpaceship)

//////////////////////////////////////////////////////////////////////////

let removeSpaceship0 = hitchedSpaceships.shift() //remove o primeiro elemento, posição 0

console.log(hitchedSpaceships)
console.log(removeSpaceship0)

//////////////////////////////////////////////////////////////////////////

hitchedSpaceships.unshift('Fenix') //adiciona um elemento na posição 0

console.log(hitchedSpaceships)

//////////////////////////////////////////////////////////////////////////]

console.log(hitchedSpaceships.length)

//////////////////////////////////////////////////////////////////////////

let elementalPos = hitchedSpaceships.indexOf('Elemental')
let ElementalPos = hitchedSpaceships.indexOf('Golias')

console.log(elementalPos)
console.log(ElementalPos)