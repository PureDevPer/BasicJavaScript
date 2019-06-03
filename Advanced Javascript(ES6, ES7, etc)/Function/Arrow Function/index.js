const names = ['a', 'b', 'c','d'];

// Function
const emoji = names.map(function (item){
    return item + "😊";
});

console.log(emoji);


// Function_1
function addItems(item){
    return item + "😊";
}

const emoji_1 = names.map(addItems);
console.log(emoji_1);


// Function_2
const emoji_2 = names.map(item => {
    return item + "😊";
});
console.log(emoji_2);


// Function_3
const emoji_3 = names.map((item, index) => {
    console.log(`index: ${index}`);
    return item + "😊";
});
console.log(emoji_3);


// Function_4
const emoji_4 = names.map( item => item + "😊");
console.log(emoji_4);

// Function_5
const emoji_5 = names.map( (item, index) => item + "😊" + index);
console.log(emoji_5);


// Function_6
const emoji_6 = names.map( () => "😊");
console.log(emoji_6);