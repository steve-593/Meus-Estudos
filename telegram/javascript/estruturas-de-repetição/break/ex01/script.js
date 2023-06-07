let nome = prompt('Dê um nome para a espaçonave')
let res = ""

for(let i = nome.length - 1; i >= 0; i--) {
    if(nome[i] == 'e') {
        break
    } else {
        res += nome[i]
    }
}

alert('Nome original da nave: ' + nome + '\nNome após ocultação: ' + res)
console.log(nome.length)
console.log(res)