const x = 5;

console.log(`Initial value for ${x}`);

// eslint-disable-next-line no-const-assign
x = 10;

console.log(`New value for x is ${x}`); // TypeError: Assignment to constant variable