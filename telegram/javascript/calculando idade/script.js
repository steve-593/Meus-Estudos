let nomeMaisVelho = prompt ('Qual o nome da pessoa mais velha?')
let nomeMaisNovo = prompt ('Qual o nome da pessoa mais nova?')

let idadeMaisVelha = prompt ('Qual a idade da pessoa mais velha?')
let idadeMaisNova = prompt ('Qual a idade da pessoa mais nova?')

let calc = idadeMaisVelha - idadeMaisNova

window.alert (`
    ${nomeMaisVelho} tem ${idadeMaisVelha} anos
    ${nomeMaisNovo} tem ${idadeMaisNova} anos
    A diferença de idade entre ${nomeMaisVelho} e ${nomeMaisNovo} é de: ${calc}
`)