import mathOperations from "./mathOperations";

describe("Math operations", () => {
    test("Addition of 2 numbers", () => {
        const result = mathOperations.addition(2, 5);

        expect(result).toBe(7);
    });

    test("Subtraction of 2 numbers", () => {
        const result = mathOperations.subtraction(10, 2);

        expect(result).toBe(8);
    });

    test("Multiplication of 2 numbers", () => {
        const result = mathOperations.multiplication(6, 2);

        expect(result).toBe(12);
    });

    test("Division of 2 numbers", () => {
        const result = mathOperations.division(100, 2);

        expect(result).toBe(50);
    });

    test("Remainder of 2 numbers", () => {
        const result = mathOperations.remainder(7, 2);

        expect(result).toBe(1);
    });
});