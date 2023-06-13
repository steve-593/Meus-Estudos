let velocity = 0 
let newVelocity
let name = prompt('Qual o nome da nave?')

function acelerar() {
    newVelocity = velocity += 5
    velocity = newVelocity
    return newVelocity
}

function desacelerar() {
    if (velocity <= 0) {
        alert('A nave não pode ter uma velocidade menor que 0km/s')
    } else {
        newVelocity = velocity -= 5
        velocity = newVelocity
        return newVelocity
    }
}

function imprimir() {
    alert('Nome da Nave: ' + name + '\nVelocidade: ' + velocity)
}

function opção_errada() {
    alert('Escolha uma opção válida!')
}

function menu() {
    let quest 

    do {
        quest = prompt('1- Acelerar a nave em 5km/s' + '\n2- Desacelerar em 5km/s' + '\n3- Imprimir dados de bordo' + '\n4- Sair do programa')
        switch (quest) {
            case '1':
                acelerar()
                break
            case '2':
                desacelerar()
                break
            case '3':
                imprimir()
                break
        }
        if (quest <= 0 || quest >4) {
            opção_errada()
        }
    } while (quest != 4)
    
}

menu()