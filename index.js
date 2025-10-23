import AdvancedOperations from "./advancedOperations";

class MathOperations {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
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
}

export default MathOperations;
