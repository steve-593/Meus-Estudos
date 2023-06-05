let nome = prompt ('Qual o seu nome?')
let VelocidadeEscolhida = prompt ('Para qual velocidade você gostaria de acelerar a nave?')
let confirmaçãoDeVel = confirm (`Você deseja acelerar a velocidade para ${VelocidadeEscolhida}km/s?`)

let velocidade = 0

if (confirmaçãoDeVel = true) {
    velocidade = VelocidadeEscolhida
}

if (VelocidadeEscolhida <= 0) {
    window.alert ('A nave está parada. Considere partir e aumentar a velocidade')

} else if (VelocidadeEscolhida < 40) {
    window.alert ('Você está devagar, podemos aumentar mais!')

} else if (VelocidadeEscolhida >= 40 && VelocidadeEscolhida < 80) {
    window.alert ('Parece uma boa velocidade para manter.')

} else if (VelocidadeEscolhida >= 80 && VelocidadeEscolhida < 100) {
    window.alert ('Velocidade alta. Considere diminuir!')

} else {
    window.alert ('Velocidade perigosa. Controle automático forçado!')
}

alert (
    `
    Nome do piloto: ${nome}

    Velocidade atual: ${VelocidadeEscolhida}
    `
)