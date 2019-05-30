const person = {
    name: "name"
}

person.name = "new name";
console.log(person.name);

let tmp = "tech";
console.log(`tmp: ${tmp}`);
tmp = "asdfasdf";
console.log(`tmp: ${tmp}`);


// Var: function-scoped
console.log(x); // Undefined
var x=5;
console.log(x); // 5


// let: block-scoped, Similar to a variable in Java or other languages
console.log(a); // Reference Error
let a=5;
console.log(a);