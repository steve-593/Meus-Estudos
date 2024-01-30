class espacoNaves {
    constructor (nome, qtdeTripulantes, engate = "Engatado", portas = "Abertas") {
        this.nome = nome;
        this.qtdeTripulantes = qtdeTripulantes;
        this.engate = engate;
        this.portas = portas;
    }
}

let naves = [];

function menu() {
    let res = Number(prompt("Escolha uma opção: \n1- Realizar engate\n2- Imprimir naves\n3- Sair do programa"));

    return res
}

function realizarEngate() {
    let perguntarNome = () => {
        let res = prompt("Qual o nome da nave?");

        while(res == "") {
            perguntarNome();
        }

        return res
    }

    let perguntarQtde = () => {
        let res = prompt("Qual a quantidade de tripulantes")

        while(res == "") {
            perguntarQtde();
        }

        return res
    }

    let nome = perguntarNome()
    let qtde = perguntarQtde()

    if(nome != null && qtde != null) {
        naves.push(new espacoNaves(nome, qtde));
    } else {
        alert("Digita certo rapaz");
        realizarEngate()
    }

}

function imprimirNaves() {
    
    let msg = "Naves:\n\n";

    for(i = 0; i < naves.length; i++) {
        msg += "Nome: " + naves[i].nome
        msg += "\nQuantidade de tripulantes: " + naves[i].qtdeTripulantes
        msg += "\nEngate: " + naves[i].engate
        msg += "\nPortas: " + naves[i].portas + "\n\n"
    }
    
    alert(msg);
}

function programa() {
    let vf = true   
    do {
        switch (menu()) {
            case 1: 
                realizarEngate();
                break
            case 2:
                imprimirNaves();
                break
            case 3:
                vf = false;
                break
            case 4:

            default: 
                programa();
                break
        }
    } while(vf == true);

}

programa();