// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const isEmail = (email) => email.includes("@");
console.log(isEmail("abc@abc.com"));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
const creditcard_number = "1009";
const displayName = `${"*".repeat(12)}${creditcard_number}`;
console.log(displayName);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
const name = "abc defghi";
console.log(name.startsWith("ab"));
console.log(name.endsWith("ab"));