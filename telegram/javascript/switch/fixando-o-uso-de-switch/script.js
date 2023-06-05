let lyDesejado = prompt('Digite uma distância em anos luz')

let uniDisDesejada = prompt('Para qual unidade de distância você deseja converter?\n1- Parsec (pc)\n2- Unidade astronômica (AU)\n3- Quilômetros(Km)\n\n(Digite o numero da opção desejada)')

let uniDesejada
let distanciaConvertida

switch (uniDisDesejada) {
    case '1':
        distanciaConvertida = lyDesejado * 0.306601
        uniDesejada = 'Parsec'
        alert('Distância em Anos-luz: ' + lyDesejado + '\n' + uniDesejada + ': ' + distanciaConvertida )
        break
    case '2':
        distanciaConvertida = lyDesejado * 63241.1
        uniDesejada = 'Unidade astronômica'
        alert('Distância em Anos-luz: ' + lyDesejado + '\n' + uniDesejada + ': ' + distanciaConvertida )
        break
    case '3':
        distanciaConvertida = lyDesejado * (9.5 * (10**12))
        uniDesejada = 'Quilômetros(Km)'
        alert('Distância em Anos-luz: ' + lyDesejado + '\n' + uniDesejada + ': ' + distanciaConvertida )
        break
    default:
        alert('Distância em Anos-luz desejada: ' + lyDesejado + '\nUnidade não identificada: Conversão fora do escopo')
}