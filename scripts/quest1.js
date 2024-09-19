function calcSoma () {
    let indice = document.getElementById("valueOne").value;
    let soma = 0;
    let K = 0;

    if (indice <= 0) {
        indice = 13;
    }

    while (K < indice) {
        K = K + 1;
        soma = soma + K;
    }

    document.getElementById("res-value").innerText = soma;
}