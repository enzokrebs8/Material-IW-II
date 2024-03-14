function myFunction(myValue) {
    document.getElementById("currentValue").innerHTML = myValue;
}


// function verificarValor(event) {
//     var input = event.target;
//     if (input.value > input.max) {
//       input.value = input.max;
//     }
//     console.log(input)
// }

// function myFunction2(myValue){
//     document.getElementById("currentValue2").innerHTML = myValue;
// }

// function converterAlt() {
//     var altura_orig = document.getElementById("alt").value;
//     console.log(altura_orig)
//     var altura_orig_conv = altura_orig.replace(".", "");
//     var altura_nova = Math.round(parseFloat(altura_orig_conv));
//     console.log(altura_nova)
// }

function chamarPeso() {
    var peso = document.getElementById("peso").value;
    console.log(peso);
}

function calcular() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("alt").value;
    var imc = peso / (altura ** 2);
    result.innerHTML = imc;
    taxaIMC(genero, imc);
}

function taxaIMC(genero, imc) {
    var genero = document.getElementById("genero");
    console.log("Aqui: ", imc)
    console.log("sexo: ", genero.value)
    if (genero.value === "masculino") {
        return mascIMC(imc);
    } else {
        return femIMC(imc);
    }
}
function mascIMC(imc) {

    if (imc < 20.0) {
        return diag.innerHTML = "Abaixo do normal"
    }
    else if (imc <= 24.9 && imc >= 20.0) {
        return diag.innerHTML = "Normal"
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        return diag.innerHTML = "Obesidade Leve"
    }
    else if (imc <= 39.9 && imc >= 30.0) {
        return diag.innerHTML = "Obesidade  Moderada"
    }
    else if (imc >= 39.9); {
        return diag.innerHTML = "Obesidade Mórbida "
    }
}

function femIMC(imc) {
    console.log("IMC feminino: ", imc)
    if (imc <= 19.0) {
        return "Abaixo do normal"
    }
    else if (imc <= 23.9 && imc >= 19.0) {
        return "Normal"
    }
    else if (imc >= 24.0 && imc <= 28.9) {
        return "Obesidade Leve"
    }
    else if (imc <= 38.9 && imc >= 29.0) {
        return "Obesidade  Moderada"
    }
    else (imc >= 38.9); {
        return "Obesidade Mórbida"
    }
}

// const novoCalc = document.getElementById('novo_calc'){
// }