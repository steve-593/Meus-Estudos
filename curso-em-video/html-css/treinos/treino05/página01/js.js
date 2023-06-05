window.onscroll = function() {
    scroll();
}

function scroll() {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 950) {
        document.getElementById("menu").classList.add ("transicao");
    }
    else {
        document.getElementById("menu").style.background= "transparent";
}