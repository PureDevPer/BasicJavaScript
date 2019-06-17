const a = new Promise((resolve, reject) => {
	resolve(2);
});

const timesTwo = number => number * 2;

// We can have .then as many as we want
a.then(number => {
	console.log(number * 2);
	return number * 2;
}).then(otherNumber => {
	console.log(otherNumber * 2);
});

a.then(timesTwo)
	.then(timesTwo)
	.then(timesTwo)
	.then(timesTwo)
	.then(timesTwo)
	.then(lastNumber => console.log(lastNumber));

a.then(timesTwo)
	.then(timesTwo)
	.then(timesTwo)
	.then(timesTwo)
	.then(timesTwo)
	.then(timesTwo)
	.then(() => {
		throw Error('Something is wrong');
	})
	.then(lastNum => console.log(lastNum))
	.catch(error => console.log(error));
