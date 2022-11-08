import loveJavascript from "./loveJavascript";

test("Console log 'I love Javascript!' 10 times using for loop", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    loveJavascript();

    expect(consoleSpy.mock.calls.length).toBe(10);
    expect(consoleSpy).toHaveBeenCalledWith("I love Javascript!");
});