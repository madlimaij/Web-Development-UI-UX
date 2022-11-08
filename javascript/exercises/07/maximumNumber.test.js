import maximumNumber from "./maximumNumber";

test("Loop through an array of numbers and return the maximum value", () => {
    const result = maximumNumber();

    expect(result).toBe(64);
});