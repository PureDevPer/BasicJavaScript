const friends = Array.of("a", "b", "c", "d");
const buttons = document.getElementsByClassName("btn");
const ar = Array.from(buttons);

ar.forEach(button => {
    button.addEventListener("click", ()=>console.log("Clicked"));
});

console.log(buttons);
console.log(friends);

