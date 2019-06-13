const infiniteArgs = (...arg) => console.log(arg);

infiniteArgs('1', 2, true, 'asdf', [1, 2, 3, 4], 'asdfasdf', 'qwerqwer');

const bestFriendMaker = (first, ...rest) => {
	console.log(`My best friend is ${first}`);
	console.log(rest);
};
bestFriendMaker('a', 'b', 'c', 'd');
