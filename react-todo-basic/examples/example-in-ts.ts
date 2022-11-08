type Car = {
  manufacturer: string;
  modelName: string;
  modelYear: number;
  isAllWheelDrive: boolean;
};

interface ICar {
  manufacturer: string;
  modelName: string;
}

interface ICar {
  modelYear: number;
  isAllWheelDrive: boolean;
}

const createBMWTS = (
  name: string,
  modelYear: number,
  isAllWheelDrive = false
): Car => ({
  manufacturer: "BMW",
  modelName: name,
  modelYear,
  isAllWheelDrive,
});

const x5TS: Car = createBMWTS("x5", 2020, true);
const z1TS: Car = createBMWTS("z1", 1990, false);

const printDetailsTS = (car: Car): void => {
  console.log(
    `Model ${car.modelName} was manufactured by ${car.manufacturer} in ${car.modelYear}.`
  );
  if (car.isAllWheelDrive) {
    console.log("This model is all-wheel drive.");
  } else {
    console.log("This model is not all-wheel drive.");
  }
};

function printCarTS(car?: Car): void {
  if (!car) {
    console.log("No car was provided...");
  } else {
    console.log(car);
  }
}

function printSeparatorTS() {
  console.log("--------------");
}

printDetailsTS(x5TS);
printSeparatorTS();
printDetailsTS(z1TS);
printSeparatorTS();
printCarTS();
