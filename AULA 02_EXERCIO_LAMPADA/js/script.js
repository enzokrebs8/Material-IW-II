const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const string = document.getElementById('string')
const botaoDuplo = document.getElementById('botaoDuplo')
const restaurar = document.getElementById('restaurar')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampLigada(){
    if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        string.innerHTML = "A LÂMPADA ESTÁ LIGADA"
    }
}

function lampDesligada(){
    if(!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
        string.innerHTML = "A LÂMPADA ESTÁ DESLIGADA"
    }
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    string.innerHTML = "A LÂMPADA ESTÁ QUEBRADA"
}

function estInicial(){
    return lampada.src.indexOf('desligada') > -1
}

function Duplo(){
    if(!estaQuebrada()){
        if(estInicial()){
            lampada.src = "img/ligada.jpg"
            string.innerHTML = "A LÂMPADA ESTÁ LIGADA"
        }
        else{
            lampada.src = "img/desligada.jpg"
            string.innerHTML = "A LÂMPADA ESTÁ DESLIGADA"
        }
       
    }
}

function restaura(){
    if(estaQuebrada()){
        lampada.src = "img/desligada.jpg"
        string.innerHTML = "A LÂMPADA ESTÁ DESLIGADA"
    }
}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)
restaurar.addEventListener('click', restaura)
botaoDuplo.addEventListener('click', Duplo)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)

lampada.addEventListener('dblclick', lampQuebrada)