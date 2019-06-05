const sayHi = (aName = "anonymous") => "hello " + aName;
const sayHello = (aName = "anonymous") => `hello  ${aName}`;
const add = (a, b) => a+b;

console.log(sayHi());
console.log(sayHello());
console.log(`Adding two numbers 10, 20 is ${add(10,20)}`);