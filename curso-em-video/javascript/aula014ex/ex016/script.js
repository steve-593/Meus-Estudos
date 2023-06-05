function calcular(){
    let inicio = window.document.getElementById ('inicio')
    let fimm = window.document.getElementById ('fim')
    let passo = window.document.getElementById ('passo')
    let res = window.document.getElementById ('res')
    
    if (inicio.value.length == 0 || fimm.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        window.alert ('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando: <br>`
        let ini = Number(inicio.value)
        let fim = Number(fimm.value)
        let pas = Number(passo.value)

        if (pas <= 0) {
            window.alert('Passo inálido! Considerando PASSO 1')
            p = 1
        }

        if (ini < fim) { // Contagem crescente
            for (let c = ini; c <= fim; c += pas) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else { // Contagem regressiva
            for (let c = ini; c > fim; c -= pas) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }

    
    
}


// let c = 1

// do {
//     console.log(c)
//     c++
// } while (c <= 5) {
    
// }