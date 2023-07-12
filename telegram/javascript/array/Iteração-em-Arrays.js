/*

*As funções de iretação que veremos são HOF
    //Enviamos callbacks(funções que enviamos como parâmetro)
*O callback é chamado para cada elemento do Array
*Segue o seguinto formato:

array.funcaoDeIterar(function(elementoAtual, índice, array){
    <corpo da função>
})

Espera um callback que receba como parâmetro o elemento atual, o índice e o array completo

*/

let hitchedSpaceships = ['Deméter', 'Darwin', 'Supernova', 'Fenix', 'Puller']

//Para cada elemento vai ser realizado a função
hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log('Nave: ' + currentSpaceship + '\nÍndice: ' + index)
})

console.log('') //para espaçar os exemplos no console

//Realiza uma ação sobre o array sem modificar o array original
let upcasedSpaceship = hitchedSpaceships.map(function(currentSpaceship) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceship)
console.log(hitchedSpaceships)

console.log('') //para espaçar os exemplos no console

//Retorna um array com os elementos que passaram no filtro
let with7Chars = hitchedSpaceships.filter(element => { return element.length >= 7})

console.log(with7Chars)

console.log('') //para espaçar os exemplos no console

//Retorna o primeiro elemento que satisfazer a operação lógica
let withSevenChars = hitchedSpaceships.find(element => { return element.length >= 7})

console.log(withSevenChars)