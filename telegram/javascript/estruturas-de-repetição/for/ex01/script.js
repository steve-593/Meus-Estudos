let nomeEscolhido = prompt('Qual o nome da espaçonave?')
let caractereSubstituido = prompt('Qual o caractere você deseja substituir?')
let caractereDesejado = prompt('Por qual caractere você deseja substituir?')
let nomeFinal = ''

for (let i = 0; i < nomeEscolhido.length; i++) {
    if (nomeEscolhido[i] == caractereSubstituido) {
        nomeFinal += caractereDesejado
    } else {
        nomeFinal += nomeEscolhido[i]
    }
}

alert('O nome da nave é: ' + nomeFinal)