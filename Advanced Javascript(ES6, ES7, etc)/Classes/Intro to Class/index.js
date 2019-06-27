class User {
	constructor(name) {
		this.username = name;
	}
	sayHello() {
		console.log(`Hello, my name is ${this.username}`);
	}
}

const user = new User('Hi');
const user2 = new User('You');

console.log(user.username);

setTimeout(user.sayHello, 4000);

user.sayHello();
user2.sayHello();
