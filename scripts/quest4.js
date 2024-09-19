function calcPercent(fat) {

    const fatEstados = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const totalFat = Object.values(fatEstados).reduce((total, valor) => total + valor, 0);

    document.getElementById("fat-total").innerText = `Faturamento Total: R$ ${totalFat.toFixed(2)}`;

    for (let estado in fatEstados) {
        const percent = (fatEstados[estado] / totalFat) * 100;
        const resultado = `${estado}: ${percent.toFixed(2)}%`;
        const elementoResult = document.createElement("span");
        elementoResult.innerText = resultado;
        document.getElementById("pValues").appendChild(elementoResult);
    }
}