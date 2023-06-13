// Versão com armadilha 

function speedUpArm(vel, unit = 'km/s',  acce) {
    let newV = vel + acce
    console.log('Nova velocidade: ' + newV + unit)
}

speedUpArm(50, 20)

//Versão sem armadilha
//A ordem no chamado tem que ser igual a ordem dos parâmetros

function speedUp(vel, acce,  unit = 'km/s') {
    let newV = vel + acce
    console.log('Nova velocidade: ' + newV + unit)
}

speedUp(50, 20)

