let nomeNave = prompt("Qual nome você deseja dar para a nave?")
let tipoNave = prompt("Qual o tipo da nave?")
let velmaxNave = prompt("Qual a velocidade máxima que nave pode atingir para que não entre em combustão?")

if (nomeNave == null) {
    nomeNave = "Espaçonave"
}

let nave = {
    nome: nomeNave,
    tipo: tipoNave,
    vel: 0,
    velMax: velmaxNave,
}

let ver
do {
    ver = Number(prompt("Você deseja acelerar ou parar a nave? \nDigite: \n1-Acelerar \n2-Parar"))

    console.log("ver:" + ver)

    switch (ver) {
        case 1: 
            nave.vel += Number(prompt("A quantos km/s você deseja acelerar?"))
            if (nave.vel > nave.velMax) {
                alert("A velocidade da nave está a cima da velocidade máxima permitida.\nVelocidade atual: " + nave.vel + "\nLimite de velocidade: " + nave.velMax)
            }
            break
        case 2: 
            alert("Nome da nave: " + nave.nome + "\nTipo da nave: " + nave.tipo + "\nVelocidade em que a nave parou: " + nave.vel + "km/s")
            if (nave.vel > (nave.velMax * 1.5)) {
                alert("A nave entrou em combustão, e provavelmente explodiu, meus parabéns.")
            }
            ver = 2
            break
        default:
            alert("Resposta inválida. Tente novamente.")
            ver = 1
            break
    }
} while(ver == 1) 