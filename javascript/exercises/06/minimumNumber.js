function minimumNumber() {
    const numbers = [2, 6, 4, 64, 23];
    let min = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

export default minimumNumber;