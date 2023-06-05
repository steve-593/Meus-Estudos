

function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha-pronto.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde-pronto.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite-pronto.png'
        document.body.style.background = '#515154'
    }
}