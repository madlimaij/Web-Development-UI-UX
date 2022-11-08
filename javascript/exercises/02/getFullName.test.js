import getFullName from "./getFullName";

test("Get user full name", () => {
    const result = getFullName("Mikk", "Saar");

    expect(result).toEqual("Your name is Mikk Saar");
});