function hello(){
    console.log('Hello World!');
}

function hello1(name){
    console.log('Hello ', name);
}

// ``: new string
function hello2(name, city){
    return `Hello ${name}, I live in ${city}`;
}


const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a,b) {
        return a-b;
    }
};

hello();
hello1('You');
const str = hello2(`Stranger`, `California`);
console.log(str);

const plus = calculator.plus(5,6);
const minus = calculator.minus(10,100);
console.log(`plus: ${plus}`);
console.log(`minus: ${minus}`);