let num = document.getElementById ('num')
let res = document.getElementById ('res')
let select = document.getElementById ('select')
let dados = []

// function compare(a,b){   
//     if(a > b){
//         return 1
//     }else if(a < b) {
//         return -1
//     } else {
//         return 0
//     } 
// }

function fNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function fLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (fNumero(num.value) && !fLista(num.value, dados)) {
        dados.push(Number(num.value))
        let item = document.createElement ('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.') 
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    //dados.sort(compare) <-- funciona
    if (dados.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let maior = dados[0]
        let menor = dados[0]
        let soma = 0

        for (let pos in dados) {
            soma += dados[pos]
            if (dados[pos] > maior) {
                maior = dados[pos]
            }
            if (dados[pos] < menor) {
                menor = dados[pos]
            }
        }
    
    res.innerHTML = `<p>Ao todo, temos ${dados.length} números cadastrados</p>
    <p>O maior valor informado foi o ${maior}</p>
    <p>O menor valor informado foi o ${menor}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores digitados é ${soma / dados.length}</p>`
    }
}

/*
function adicionar(){

    let num = Number(numero.value)

    let i = dados.indexOf(numero.value)

    dados.push(num)
    
    if (numero.value.length == 0) {
        alert('Por favor digite algum valor!')
    }else if(numero.value > 100 || numero.value < 1) {
        alert('Por favor, digite um valor dentro dos parâmentros exigidos')
        numero.value = ''
    } else if ( dados.indexOf(numero.value) < 0) {
        let item = document.createElement ('option')
        item.text = `Valor ${num} adicionado`
        select.appendChild(item)
        console.log(dados.indexOf(numero.value))
        
        numero.value = ''       
    } else {
        alert('Por favor, não digite um valor ja adicionado!')
        console.log(dados.indexOf(numero.value))
    }
    
}
*/
/*
let num = 5

let dad = [num]

console.log(dad.indexOf(num))
*/

