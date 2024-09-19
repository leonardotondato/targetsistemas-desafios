function isFibonacci() {
    
    const num = parseInt(document.getElementById("valueTwo").value);

    if (num === 0 || num === 1) {
      document.getElementById("res-valueTwo").innerText = `${num} pertence à sequência de Fibonacci.`;
      return;
    }

    let a = 0;
    let b = 1;
    let fib = a + b;

    while (fib < num) {
      a = b;
      b = fib;
      fib = a + b;
    }

    if (fib === num) {
      document.getElementById("res-valueTwo").innerText = `${num} pertence à sequência de Fibonacci.`;
    } else {
      document.getElementById("res-valueTwo").innerText = `${num} NÃO pertence à sequência de Fibonacci.`;
    }
  }