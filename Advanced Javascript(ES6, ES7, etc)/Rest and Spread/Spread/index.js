const friends = [1, 2, 3, 4];
const family = ['a', 'b', 'c'];

// spread: ...
console.log(friends);
console.log(...friends);
console.log([...friends, ...family]);

const info = {
	name: 'name',
	age: 15
};

const moreInfo = {
	isTall: true,
	isOld: false
};

console.log({ ...info, ...moreInfo });
