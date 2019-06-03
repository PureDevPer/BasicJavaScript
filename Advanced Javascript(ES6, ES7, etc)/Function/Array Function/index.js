// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
const email = [
    "a@gmail.com", 
    "google@google.com", 
    "yahoo@amazon.com", 
    "hulu@netflix.com"
];

const foundMail = email.find(item => true);
const foundMail1 = email.find(item => item.includes(".com"));

console.log(foundMail);
console.log(foundMail1);

const noGmail = email.filter(address => !address.includes("@gmail.com"));
console.log(noGmail);

const cleaned = [];
email.forEach( userName => {
    cleaned.push(userName.split("@")[0]);
});
console.log(cleaned);

const emailUserName = email.map(userName => userName.split("@")[0]);
console.log(emailUserName);

const emailObject = email.map((userName, index) => ({
    userName: userName.split("@")[0],
    index
}));
console.log(emailObject);
console.table(emailObject);