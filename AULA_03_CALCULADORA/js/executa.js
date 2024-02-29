var resultado = document.getElementById('resultado')

function pegaNome() {
    var nome = document.getElementById('nome').value
    console.log("Nome: ", nome)
    resultado.innerHTML = nome
}

//Calculadora

function somar() {
    var num1 = parseFloat(document.getElementById('num1').value)
    console.log('Digitou: ' + num1)
    console.log(typeof (num1))
    var num2 = parseFloat(document.getElementById('num2').value)
    console.log('Digitou: ' + num2)
    console.log(typeof (num2))
    var soma = num1 + num2
    console.log(soma)
    resul.innerHTML = (soma)
}

function subt() {
    var num1 = parseFloat(document.getElementById('num1').value)
    console.log('Digitou: ' + num1)
    console.log(typeof (num1))
    var num2 = parseFloat(document.getElementById('num2').value)
    console.log('Digitou: ' + num2)
    console.log(typeof (num2))
    var subtra = num1 - num2
    console.log(subtra)
    resul.innerHTML = (subtra)
}

function multi() {
    var num1 = parseFloat(document.getElementById('num1').value)
    console.log('Digitou: ' + num1)
    console.log(typeof (num1))
    var num2 = parseFloat(document.getElementById('num2').value)
    console.log('Digitou: ' + num2)
    console.log(typeof (num2))
    var multi = num1 * num2
    console.log(multi)
    resul.innerHTML = (multi)
}

function divid() {
    var num1 = parseFloat(document.getElementById('num1').value)
    console.log('Digitou: ' + num1)
    console.log(typeof (num1))
    var num2 = parseFloat(document.getElementById('num2').value)
    console.log('Digitou: ' + num2)
    console.log(typeof (num2))
    var divid = num1 / num2
    console.log(divid)
    resul.innerHTML = (divid)
}

function limpar() {
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    num1.value = ""
    num2.value = ""
}