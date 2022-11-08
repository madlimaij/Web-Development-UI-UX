import helloWorld from "./helloWorld";

test("Create a function that returns 'hello world!' using if else", () => {
    let result = helloWorld(true);

    expect(result).toEqual("Hello world!");

    result = helloWorld(false);

    expect(result).toEqual("");

    result = helloWorld();

    expect(result).toEqual("");
});