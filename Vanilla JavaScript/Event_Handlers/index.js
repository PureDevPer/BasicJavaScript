// https://developer.mozilla.org/en-US/docs/Web/Events


const title = document.querySelector('#title');
const CLICKED_CLASS = "clicked";

//function handleResize(event){
    //console.log("I have been resized");
    //console.log(event);
//}

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClassName = title.classList.contains(CLICKED_CLASS);
    //const currentClassname = title.className;
    //console.log(currentClassname);
    if(!hasClassName){
        //title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    }
        
    else{
        // title.className = "";
        title.classList.remove(CLICKED_CLASS);
    }   
    */
}

function init(){
    title.addEventListener("click", handleClick);
    //title.addEventListener("mouseenter", handleClick);
}

//window.addEventListener("resize", handleResize);
// Call right now
//window.addEventListener("resize", handleResize());

init();
