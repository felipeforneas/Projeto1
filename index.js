var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var SetaDireita = window.document.getElementById("seta_direita")
var SetaEsquerda = window.document.getElementById("seta_esquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style = "display:flex; margin-top:55px"
    SetaDireita.style =  "display:none"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaEsquerda.style = "display:none"
    SetaDireita.style =  "display:flex; margin-top:55px"
}