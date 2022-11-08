function message(msg, another) {
    console.log(msg);
    if (another) {
        console.log(another);
    }
}

function greetings() {
    console.log("HEllo");
    // Kutsun välja message meetodi siin:
    message("Kutsun välja greetings meetodi sees!");
}

greetings(); // Kutsun meetodi välja.

message("See on meie sõnum!", "Antoher"); // Kutsun meetodi välja

function studentInfo(student) { // student object
    console.log(`Student name is ${student.fullName} and age is ${student.age}`);
}

// variant 1
const student = { fullName: "Kalle Siin", age: 30 };
studentInfo(student);

// variant 2
studentInfo({ fullName: "Malle Suur", age: 32 });

