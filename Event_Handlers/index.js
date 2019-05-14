const title = document.querySelector('#title');

//function handleResize(event){
    //console.log("I have been resized");
    //console.log(event);
//}

function handleClick(){
    if(title.style.color === "blue")
        title.style.color = "white";
    else
        title.style.color = "blue";
    
}

//window.addEventListener("resize", handleResize);
// Call right now
//window.addEventListener("resize", handleResize());

title.addEventListener("click", handleClick);