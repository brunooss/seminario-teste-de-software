import { describe, it, expect, beforeEach } from "vitest";
import MathOperations from "./index.js";

describe("MathOperations", () => {
  let mathOps;

  beforeEach(() => {
    mathOps = new MathOperations();
  });

  describe("add", () => {
    it("should add two positive numbers correctly", () => {
      expect(mathOps.add(2, 3)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(mathOps.add(-2, -3)).toBe(-5);
      expect(mathOps.add(-2, 5)).toBe(3);
    });
  });

  // describe('subtract', () => {
  //   it('should subtract two numbers correctly', () => {
  //     expect(mathOps.subtract(5, 3)).toBe(2);
  //   });

  //   it('should handle negative results', () => {
  //     expect(mathOps.subtract(3, 5)).toBe(-2);
  //   });
  // });

  // describe('multiply', () => {
  //   it('should multiply two numbers correctly', () => {
  //     expect(mathOps.multiply(2, 3)).toBe(6);
  //   });

  //   it('should handle negative numbers', () => {
  //     expect(mathOps.multiply(-2, 3)).toBe(-6);
  //     expect(mathOps.multiply(-2, -3)).toBe(6);
  //   });

  //   it('should return 0 when multiplying by 0', () => {
  //     expect(mathOps.multiply(5, 0)).toBe(0);
  //   });
  // });

  // describe('divide', () => {
  //   it('should divide two numbers correctly', () => {
  //     expect(mathOps.divide(6, 3)).toBe(2);
  //   });

  //   it('should handle decimal results', () => {
  //     expect(mathOps.divide(5, 2)).toBe(2.5);
  //   });

  //   it('should throw error when dividing by zero', () => {
  //     expect(() => mathOps.divide(5, 0)).toThrow('Division by zero is not allowed');
  //   });
  // });

  // describe("power", () => {
  //   it("should calculate power correctly", () => {
  //     expect(mathOps.power(2, 3)).toBe(8);
  //   });

  //   it("should handle power of 0", () => {
  //     expect(mathOps.power(5, 0)).toBe(1);
  //   });

  //   it("should handle negative exponents", () => {
  //     expect(mathOps.power(2, -2)).toBe(0.25);
  //   });
  // });

  describe("squareRoot", () => {
    it("should calculate square root correctly", () => {
      expect(mathOps.squareRoot(9)).toBe(3);
    });

    it("should handle decimal results", () => {
      expect(mathOps.squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    it("should throw error for negative numbers", () => {
      expect(() => mathOps.squareRoot(-1)).toThrow(
        "Cannot calculate square root of negative number"
      );
    });
  });
});
