//Exercícios 1 e 2
function nome() {
    var nome = prompt('Digite seu nome: ')
    console.log(nome)
    var alert_nome = alert("Olá " + nome + "! Prazer em te conhecer!")
    if (nome != null) {
        return document.getElementById("aqui").innerHTML = ("Olá " + nome + "! Prazer em te conhecer!")
    }
    else {
        alert("Nome inválido!")
    }
}

//Exercício 3

function botao1() {
    document.getElementById("btn").innerHTML = "Você clicou no botão 1"
}
function botao2() {
    document.getElementById("btn").innerHTML = ("Você clicou no botão 2")
}
function botao3() {
    document.getElementById("btn").innerHTML = ("Você clicou no botão 3")
}

//Exercício 4

function botaoVerm() {
    document.getElementById('text').style.color = "red"
}

function botaoAzul() {
    document.getElementById('text').style.color = "blue"
}

function botaoVerd() {
    document.getElementById('text').style.color = "lawngreen"
}
function botaoOrig() {
    document.getElementById('text').style.color = "black"
}

//Exercício 5
function comprarProduto() {
    var produto = prompt("Informe o nome do produto")
    var valor_produto = prompt("Informe o valor do produto em R$")
    document.getElementById('aqui2').innerHTML = ("Você irá comprar " + produto + " por R$" + valor_produto)
}

//Exercício 6

// function  (){

// }