function isFibonacciNumber(num) {
    // Inicializa os valores iniciais da sequência de Fibonacci
    let a = 0;
    let b = 1;
  
    // Itera enquanto o valor atual da sequência de Fibonacci é menor ou igual ao número informado
    while (b <= num) {
      // Verifica se o número informado pertence à sequência de Fibonacci
      if (b === num) {
        return true;
      }
  
      // Atualiza os valores da sequência de Fibonacci para o próximo valor
      let temp = a;
      a = b;
      b = temp + b;
    }
  
    // Se o número informado não pertence à sequência de Fibonacci, retorna falso
    return false;
  }
  
  // Exemplo de uso
  let num = 22;
  if (isFibonacciNumber(num)) {
    console.log(num + " pertence à sequência de Fibonacci.");
  } else {
    console.log(num + " não pertence à sequência de Fibonacci.");
  }
  