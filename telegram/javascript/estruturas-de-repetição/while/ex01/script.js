// Estava tentando fazer assim, mas fiquei pensando que podia fazer bem melhor, e resolvi tentar fazer de novo

/*let SouN = prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não')
let numDobra = 0

if (SouN == 1) {
    numDobra++
    let prox = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
    while (prox == 1) {
        prox = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
        numDobra++
    }
    alert('Nome da nave: ' + nomeDaNave + '\nNumero de dobras: ' + numDobra)
} else {
    alert('Nome da nave: ' + nomeDaNave + '\nNumero de dobras: ' + numDobra)
}
*/

// Esse foi o meu segundo código.


let nomeDaNave = prompt('Dê o nome da nave')
let SouN = prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não')
let numDobra = 0

while (SouN == 1) {
    SouN = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
    numDobra++
}

alert('Nome da nave: ' + nomeDaNave + '\nNúmero de dobras: ' + numDobra)