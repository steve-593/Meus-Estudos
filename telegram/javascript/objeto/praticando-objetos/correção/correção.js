let nave = {
    vel: 0,
    subirVel: function(aceleracao) {
        this.velocidade += aceleracao
    }
}

function registrarNave() {
    nave.name = prompt("Informe o nome da nave")
    nave.tipo = prompt("Informe o tipo da nave")
    nave.velMax = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function acelerar() {
    let aceleracao = Number(prompt("Quantos km/s você deseja acelerar?"))
    nave.subirVel(aceleracao)
    if(nave.vel > nave.velMax) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + nave.vel + "km/s" +
                "\nVelocidade máxima da Nave: " + nave.velMax + "km/s")
    }
}

function parar() {
    alert(  "Nome: " + nave.nome + "\nTipo: " + nave.tipo + "\nVelocidade da nave: " 
            + nave.vel + "\nMáxima da nave: " + nave.velMax)
        nave.vel = 0
}

function showMenu () {
    let opcaoEscolhida
    do{
        opcaoEscolhida = Number(prompt("Você deseja:\n1-Acelerar\n2-Parar"))
        switch(opcaoEscolhida) {
            case 1:
                acelerar()
                break
            case 2:
                stop()
                break
            default:
                alert("Opção inálida!")
        }
    } while(opcaoEscolhida != 2)
}