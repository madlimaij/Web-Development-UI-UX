const prompt = require("prompt-sync")();
const fruit = prompt("Enter your favorite fruit: ");

const fruits = {
    Apple: "Apple",
    Banana: "Banana",
    Orange: "Orange",
    Mango: "Mango",
    Avocado: "Avocado",
};

switch (fruit.toLowerCase()) {
case fruits.Apple.toLowerCase():
    console.log(`Your favorite fruit is ${fruits.Apple}`);
    break;
case fruits.Banana.toLowerCase():
    console.log(`Your favorite fruit is ${fruits.Banana}`);
    break;
case fruits.Orange.toLowerCase():
    console.log(`Your favorite fruit is ${fruits.Orange}`);
    break;
case fruits.Mango.toLowerCase():
    console.log(`Your favorite fruit is ${fruits.Mango}`);
    break;
case fruits.Avocado.toLowerCase():
    console.log(`Your favorite fruit is ${fruits.Avocado}`);
    break;
default:
    console.log("Sorry, no fruit for you! :(");
    break;
}