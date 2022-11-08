import changeValueOfVariable from "./changeValueOfVariable";

test("Change value of variable x to 5", () => {
    // initial value
    let result = changeValueOfVariable();

    expect(result).toBe(10);

    // changed value
    result = changeValueOfVariable(5);

    expect(result).toBe(5);
});