import minimumNumber from "./minimumNumber";

test("Loop through an array of numbers and return the minimum value", () => {
    const result = minimumNumber();

    expect(result).toBe(2);
});