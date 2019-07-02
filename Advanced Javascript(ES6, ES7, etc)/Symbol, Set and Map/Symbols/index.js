const hello = Symbol('hello');
const bye = Symbol('hello');

const superBig = {
	[Symbol('person')]: {
		handsome: true
	},
	[Symbol('person')]: {
		handsome: true
	},
	hello: 'bye'
};

console.log(hello === bye);

const s = Object.getOwnPropertySymbols(superBig);
s.forEach(symbol => console.log(superBig[symbol]));
