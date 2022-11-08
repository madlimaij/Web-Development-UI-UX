import uniqueArray from "./uniqueArray";

test("Write a method that returns a unique array", () => {
    const initialArray = [1, 2, 4, 10, 1, 2];
    
    const result = uniqueArray(initialArray);

    expect(result).toEqual([1, 2, 4, 10]);
});