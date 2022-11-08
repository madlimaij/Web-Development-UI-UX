function countDown(number) {
    console.log(`Count down to ${number}`);

    const newNumber = number - 1;

    if (newNumber > 0) {
        setTimeout(() => {
            countDown(newNumber);
        }, 5000);
    } else {
        console.log("Hurra!!!");
    }
}

countDown(5);