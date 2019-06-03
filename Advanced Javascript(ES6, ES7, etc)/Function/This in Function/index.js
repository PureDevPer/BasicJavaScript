const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");

const info = {
    name: "name",
    age: 25,
    addYear() {
        this.age++;
    }
};


button1.addEventListener("click", function(){
    console.log(this); // <button class="btn1">Button1</button>
    console.log("Clicked");
})


button2.addEventListener("click", () => {
    console.log(this); // Refer Windows
    // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
});


const handleClick = () => {
    console.log(this); // Refer Windows
    // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
};
button3.addEventListener("click", handleClick);


function handleClick1() {
    console.log(this); // <button class="btn4">Button4</button>
}
button4.addEventListener("click", handleClick1);


console.log(info);
info.addYear();
info.addYear();
console.log(info);