const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')



function lampLigada() {
    if (!estaQuebrada()) {
        lampada.src = 'img/ligada.jpg'
    }
}

function lampDesligada() {
    if (!estaQuebrada()) {
        lampada.src = 'img/desligada.jpg'
    }
}

function lampQuebrada() {
    lampada.src = 'img/quebrada.jpg'
}

function estaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1
    //Isso retorna True ou False
}

function lampRestaurar() {
    if (estaQuebrada()) {
        lampada.src = 'img/desligada.jpg'
    }
}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)
lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)
lampada.addEventListener('dblclick', lampQuebrada)
restaurar.addEventListene('click', lampRestaurar)