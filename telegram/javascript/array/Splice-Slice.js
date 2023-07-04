/*

SPLICE

*Significa "emendar" ou "costurar"
*Substitui o array original
*A sintaxe deste método é

array.splice(index[, deleteCount[, elemento1[, ...[, elementoN]]]])

*Espera um primeiro parâmetro que é um índice do Array
*O segundo é a quantidade de elementos que queremos remover a partir deste índice
*Os próximos são os elementos que queremos adicionar no lugar
*Apenas o primeiro parâmetro é 'obrigatório'

*/

console.log('SPLICE')

let spaceshipNames = ['Elemental', 'Darwin', 'Artemis', 'Supernova']

console.log(spaceshipNames)

let removedSpaceships = spaceshipNames.splice(1, 2,) //let removedSpaceships = spaceshipNames.splice(1, 2, 'Deméter', 'Puller', 'Golias')

console.log(spaceshipNames)

console.log(removedSpaceships)

/*

SLICE

*Significa 'fatiar' ou 'dividir'
*Extrai uma parte do array sem alterar o array original
*A sintaxe deste método é

arr.slice([begin[, end]])

*Possui um primeiro parâmetro que é o índice inicial
*O segundo parâmetro é o índice final
*Retorna todos os elementos entre o elemento de índice 'begin' e o anterior ao elemento 'end'

*/

console.log('SLICE')

let spaceshipNames2 = ['Elemental', 'Darwin', 'Artemis', 'Supernova']

console.log(spaceshipNames2)

let extractedNames = spaceshipNames2.slice(1,3)

console.log(extractedNames)

console.log(spaceshipNames2)