import revertArray from "./revertArray";

test("Write a method that reverts input array", () => {
    const initialArray = [1, 2, 3];
    
    const result = revertArray(initialArray);

    expect(result).toEqual([3,2,1]);
});