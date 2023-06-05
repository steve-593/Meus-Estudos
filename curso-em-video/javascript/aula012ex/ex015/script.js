function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-m-gimp.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m-gimp.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m-gimp.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m-gimp.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-f-gimp.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-f-gimp.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f-gimp.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f-gimp.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}