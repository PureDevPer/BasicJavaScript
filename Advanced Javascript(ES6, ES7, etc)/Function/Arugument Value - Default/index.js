const DEFAULT = " Anonymous";

function Hi(aName = DEFAULT){
    return "Hello" + DEFAULT;
}

const Hello = (aName = DEFAULT) => "Hello " + DEFAULT;

console.log(Hi());
console.log(Hello());