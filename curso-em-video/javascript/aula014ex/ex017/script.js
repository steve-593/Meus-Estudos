function calcular() {
    let numero = document.getElementById ('numero')
    let tabuada = document.getElementById ('tabuada')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let num = Number(numero.value)
        tabuada.innerHTML = ''
        tabuada.style.display = 'block'

        for(let c = 1; c <=10; c++){
            let item = document.createElement ('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
        }
    }

    //TUDO EM COMENTÁRIOS FOI OQUE EU FIZ

    // let opt0 = document.getElementById ('opt0')
    // let opt1 = document.getElementById ('opt1')
    // let opt2 = document.getElementById ('opt2')
    // let opt3 = document.getElementById ('opt3')
    // let opt4 = document.getElementById ('opt4')
    // let opt5 = document.getElementById ('opt5')
    // let opt6 = document.getElementById ('opt6')
    // let opt7 = document.getElementById ('opt7') 
    // let opt8 = document.getElementById ('opt8') 
    // let opt9 = document.getElementById ('opt9') 
    // let opt10 = document.getElementById ('opt10') 

    // let o0 = num * 0
    // let o1 = num * 1
    // let o2 = num * 2
    // let o3 = num * 3
    // let o4 = num * 4
    // let o5 = num * 5
    // let o6 = num * 6
    // let o7 = num * 7
    // let o8 = num * 8 
    // let o9 = num * 9 
    // let o10 = num * 10

    // opt0.innerHTML = `${num} x 0 = ${o0}`
    // opt1.innerHTML = `${num} x 1 =${o1}`
    // opt2.innerHTML = `${num} x 2 =${o2}`
    // opt3.innerHTML = `${num} x 3 =${o3}`
    // opt4.innerHTML = `${num} x 4 =${o4}`
    // opt5.innerHTML = `${num} x 5 =${o5}`
    // opt6.innerHTML = `${num} x 6 =${o6}`
    // opt7.innerHTML = `${num} x 7 =${o7}`
    // opt8.innerHTML = `${num} x 8 =${o8}`
    // opt9.innerHTML = `${num} x 9 =${o9}`
    // opt10.innerHTML = `${num} x 10 =${o10}`

    //fundo.style.height = '265px'
}

function limpar() {
    let limpar = document.getElementById ('limpar')
    let tabuada = document.getElementById ('tabuada')
    let numero = document.getElementById ('numero')
    
    numero.value = ''
    
    if (tabuada.style.display == 'block') {
        tabuada.style.display = 'none'
    }
}