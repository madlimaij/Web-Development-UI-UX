function revertArray(array) {
    return array.map((_, index, givenArr) => givenArr[givenArr.length - index - 1]);
}

export default revertArray;