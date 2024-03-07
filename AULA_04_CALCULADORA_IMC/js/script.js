function transformar() {
    var altura_orig = document.getElementById("altura").value;
    var altura_trnsf = altura_orig.replace(",", ".");
    altura_trnsf = parseFloat(altura_trnsf);
    document.getElementById("resultado").innerHTML = altura_trnsf;
}