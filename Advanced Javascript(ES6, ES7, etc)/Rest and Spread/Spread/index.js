const friends = [1, 2, 3, 4];
const family = ['a', 'b', 'c'];

// spread: ...
// Spread unpacks values
console.log(friends); // (4) [1, 2, 3, 4]
console.log(...friends); // 1 2 3 4
console.log([...friends, ...family]); // (7) [1, 2, 3, 4, "a", "b", "c"]

const info = {
	name: 'name',
	age: 20
};

const moreInfo = {
	isTall: true,
	isOld: false
};

console.log({ ...info, ...moreInfo });
// {name: "name", age: 20, isTall: true, isOld: false}
