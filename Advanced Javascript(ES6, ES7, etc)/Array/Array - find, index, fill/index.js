// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

const friends = [
    "a@gmail.com",
    "b@gmail.com",
    "c@yahoo.com",
    "d@hotmail.com",
    "e@yagoo.com",
    "f@hatmail.com"
];

const target = friends.find(friend => friend.includes("@yahoo.com"));
console.log(target);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

const check = () => friends.findIndex(friend => friend.includes("@yagoo.com"));
let target1 = check();

if(target1 !== -1){
    console.log(target1);

    const username = friends[target1].split("@")[0];
    const email = "yahoo.com";
    console.log(`${username}@${email}`);

    friends[target1] = `${username}@${email}`;
    target1 = check();
}

console.log(target1);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
const check1 = () => friends.findIndex(friend => friend.includes("@hatmail.com"));
let target2 = check1();

if(target2 !== -1){
    //friends.fill("*".repeat(5), target2);
    //friends.fill("*".repeat("5"), 1, 3);
    friends.fill("*".repeat(5));
}

console.log(friends);