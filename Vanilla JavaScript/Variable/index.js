let a = 221;
let b = a - 5;
a = 4;
var c = 5;
const d = 10;
console.log(b, a, c, d);

// -------------
// Data type
const str = "name";
let boolTrue = true;
let boolFalse = false;
let fl = 12.34;
console.log(str, boolTrue, boolFalse, fl);

// ------------
// Data Type
const dayOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", true, 123, 345, a, b];
console.log(dayOfWeek);
console.log(dayOfWeek[8] + dayOfWeek[9]);

// ------------
// Object
const prog = {
    name: "Program Name",
    language: "JavaScript",
    textProgram: "MS Visual Studio code",
    class: ["201", "202", "203"],
    major: [{
        degree: "bs",
        study: "cs"
    }, {
        degree: "PhD",
        study: "CS"
    }]
};

console.log(prog);
console.log(prog.name);
console.log(prog.language);
console.log(prog.textProgram);

prog.textProgram = "Eclipse";
console.log(prog.textProgram);
console.log("Class: ", prog.class);
console.log(prog.major[0]);