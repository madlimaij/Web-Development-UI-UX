const createBMW = (
    name,
    modelYear,
    isAllWheelDrive = false
) => ({
    manufacturer: "BMW",
    modelName: name,
    modelYear,
    isAllWheelDrive,
});

const x5 = createBMW("x5", 2020, true);
//const x5 = createBMW(2020, true);
const z1 = createBMW("z1", 1990, false);
//const z1 = createBMW("z1");

const printDetails = (car) => {
    console.log(
        `Model ${car.modelName} was manufactured by ${car.manufacturer} in ${car.modelYear}.`
    );
    if (car.isAllWheelDrive) {
        console.log("This model is all-wheel drive.");
    } else {
        console.log("This model is not all-wheel drive.");
    }
};

function printCar(car) {
    if (!car) {
        console.log("No car was provided...");
    } else {
        console.log(car);
    }
}

function printSeparator() {
    console.log("--------------");
}

printDetails(x5);
printSeparator();
printDetails(z1);
printSeparator();
printCar();
