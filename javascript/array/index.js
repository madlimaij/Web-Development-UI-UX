let dailyActivities = ["sleep", "eat", "work"];

// Size of an array
console.log(`Array "dailyActivities" length is ${dailyActivities.length}`);

// Select first element of an array
console.log(`Now it's time to ${dailyActivities[0]}`);

// Select second element of an array
console.log(`Now it's time to ${dailyActivities[1]}`);

// Last element of an array
const lastActivity = dailyActivities[dailyActivities.length - 1];
console.log(`Now it's time to ${lastActivity}`);

// Add an element to an array
dailyActivities.push("exercise");
console.log(`Array "dailyActivities" length is ${dailyActivities.length}`);
console.log(`Now it's time to ${dailyActivities[dailyActivities.length - 1]}`);

// Change the element of an array
dailyActivities[0] = "wash";
console.log(`Now it's time to ${dailyActivities[0]}`);

// Remove the first element of an array
dailyActivities.shift();
console.log(`Array "dailyActivities" length is ${dailyActivities.length}`);
console.log(`Current daily activities are ${dailyActivities.join(", ")}`);

// Remove the last element of an array
dailyActivities.pop();
console.log(`Array "dailyActivities" length is ${dailyActivities.length}`);
console.log(`Current daily activities are ${dailyActivities.join(", ")}`);
