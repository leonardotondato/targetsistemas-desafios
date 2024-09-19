function calcFaturamento(faturamento) {
    let totalFaturamento = 0;
    let diasComFaturamento = 0;
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    
    for (let i = 0; i < faturamento.length; i++) {
      let valor = faturamento[i].valor;

      if (valor > 0) {
        totalFaturamento += valor;
        diasComFaturamento++;

        if (valor < menorValor) {
          menorValor = valor;
        }
        if (valor > maiorValor) {
          maiorValor = valor;
        }
      }
    }
  
    const mediaMensal = totalFaturamento / diasComFaturamento;
  
    let diasAcimaDaMedia = faturamento.filter(item => item.valor > mediaMensal).length;
  
    document.getElementById("minFat").innerText = menorValor;
    document.getElementById("maxFat").innerText = maiorValor;
    document.getElementById("upMed").innerText = diasAcimaDaMedia;
}

function loadData() {
    fetch('../scripts/dados.json')
        .then(response => response.json())
        .then(data => {
            calcFaturamento(data);
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON', error));
}

window.onload = loadData;