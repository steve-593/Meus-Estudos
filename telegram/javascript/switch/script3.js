velocity = 90

switch(velocity) {
    case 80:
        console.log('Velocidade mínima')
    case 90:
    case 100:
        console.log('Velocidade aceitável')
    case 110:
        console.log('Velocidade alta, mas aceitável')
        break
    default:
        console.log('Velocidade não identificada')
}

//depois de encontrar o case, ele vai executar todos os cases seguintes até encontrar um break