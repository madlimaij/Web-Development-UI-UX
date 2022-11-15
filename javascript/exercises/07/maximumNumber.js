function maximumNumber() {
    const numbers = [2, 6, 4, 64, 23];
    let max = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

export default maximumNumber;