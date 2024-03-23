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
    document.getElementById("btn").innerHTML = "Você clicou no botão 1."
}
function botao2() {
    document.getElementById("btn").innerHTML = ("Você clicou no botão 2.")
}
function botao3() {
    document.getElementById("btn").innerHTML = ("Você clicou no botão 3.")
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
    document.getElementById('aqui2').innerHTML = ("Você irá comprar " + produto + " por R$" + valor_produto + ".")
}

//Exercício 6
function calcularTroco() {
    var produto = prompt("Informe o nome do produto")
    var valor_produto = prompt("Informe o valor do produto em R$")
    var dinheiro_recebido = prompt("Informe o valor recebido em R$")
    var troco = (dinheiro_recebido - valor_produto)
    document.getElementById('aqui2').innerHTML = ("Você irá comprar " + produto + " por R$" + valor_produto + ".")
    document.getElementById('aqui3').innerHTML = ("Você deu R$" + dinheiro_recebido + ".")
    document.getElementById('aqui4').innerHTML = ("Você irá receber de troco R$" + troco + ".")
}

//Exercício 7
function reajusteSalario(){
    var nome_func = prompt("Qual é o nome do funcionário?")

    // var salario_atual = prompt("Qual é o salário atual de " + nome_func + "?")
    // var reajuste_porc = prompt("O salário de " + nome_func + " será ajustado em quantos % (porcento)?")

    var salario_atual = parseFloat(prompt("Qual é o salário atual dele(a)?"))

    // var salario_atual = salario_atual.replace(",", ".") 
    
    var reajuste_porc = parseFloat(prompt("Em quantos % (porcento) o salário será ajustado?"))
    var aumento = parseFloat(salario_atual * (reajuste_porc / 100))
    var novo_salario = parseFloat(salario_atual * (reajuste_porc / 100) + salario_atual)
    document.getElementById('aqui5').innerHTML = ("O salário de " + nome_func + " era R$" + salario_atual + ".")
    document.getElementById('aqui6').innerHTML = ("Com um aumento de " + reajuste_porc + "%, o salário de " + nome_func + " irá aumentar R$" + aumento + " no próximo mês" )
    document.getElementById('aqui7').innerHTML = ("Então, " + nome_func + " passará a receber R$ " + novo_salario + ".")
}

//Exercício 8
function cacularBhaskara(){
    var a = prompt("Qual é o valor de a?")
    var b = prompt("Qual é o valor de b?")
    var c = prompt("Qual é o valor de c?")
    var delta = (b**2) - 4 * a * c
    console.log(delta)
    document.getElementById('aqui8').innerHTML = ("A equação atual é " + a + "x² " + " + " + b + "x " + "+ " + c + " = 0")
    document.getElementById('aqui9').innerHTML = ("O cálculo realizado será: Δ = " + b + "²" + " -4." + a + "." + c)
    document.getElementById('aqui10').innerHTML = ("O valor calculado foi: Δ =" + delta)
}