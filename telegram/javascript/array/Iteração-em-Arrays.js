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

let hitchedSpaceships = ['Deméter', 'Darwin', 'Supernove', 'Fenix', 'Puller']

hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log('Nave: ' + currentSpaceship + '\nÍndice: ' + index)
})
