import MathOperations from "./index.js";

class AdvancedOperations {
  constructor() {
    this.basicOps = new MathOperations();
    this.operationLog = [];
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  squareRoot(a) {
    if (a < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(a);
  }

  // Calcula o fatorial de um número
  factorial(n) {
    this.logOperation("factorial", n);

    if (n < 0) {
      throw new Error(
        "Não é possível calcular o fatorial de um número negativo"
      );
    }

    if (n === 0 || n === 1) {
      return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  // Calcula a média de uma lista de números
  average(numbers) {
    this.logOperation("average", numbers);

    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error("É necessário fornecer um array não vazio de números");
    }

    const sum = numbers.reduce((acc, val) => this.basicOps.add(acc, val), 0);
    return this.basicOps.divide(sum, numbers.length);
  }

  // Calcula o desvio padrão de uma lista de números
  standardDeviation(numbers) {
    this.logOperation("standardDeviation", numbers);

    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error("É necessário fornecer um array não vazio de números");
    }

    const avg = this.average(numbers);
    const squaredDiffs = numbers.map((num) => {
      const diff = this.basicOps.subtract(num, avg);
      return this.basicOps.power(diff, 2);
    });

    const variance = this.average(squaredDiffs);
    return this.basicOps.squareRoot(variance);
  }

  // Calcula o logaritmo de um número em uma base específica
  logarithm(number, base = Math.E) {
    this.logOperation("logarithm", { number, base });

    if (number <= 0) {
      throw new Error("O número deve ser positivo para calcular o logaritmo");
    }

    if (base <= 0 || base === 1) {
      throw new Error("A base deve ser positiva e diferente de 1");
    }

    return Math.log(number) / Math.log(base);
  }

  // Registra operações para fins de depuração
  logOperation(operation, params) {
    const timestamp = new Date().toISOString();
    this.operationLog.push({
      operation,
      params,
      timestamp,
    });

    console.log(`[${timestamp}] Operação: ${operation}, Parâmetros:`, params);
  }

  // Retorna o histórico de operações
  getOperationLog() {
    return this.operationLog;
  }

  // Limpa o histórico de operações
  clearLog() {
    this.operationLog = [];
    console.log("Histórico de operações limpo");
  }
}

export default AdvancedOperations;
