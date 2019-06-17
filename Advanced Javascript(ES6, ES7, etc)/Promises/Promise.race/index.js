// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,
// with the value or reason from that promise.

// Fast one is returned
const p1 = new Promise(resolve => {
	setTimeout(resolve, 5000, 'First');
});

const p2 = new Promise((resolve, reject) => {
	// setTimeout(reject, 1000, 'Second');
	setTimeout(reject, 5000, 'Second');
});

const p3 = new Promise(resolve => {
	setTimeout(resolve, 3000, 'Third');
});

const motherPromise = Promise.race([p1, p2, p3]);
motherPromise.then(val => console.log(val)).catch(err => console.log(err));
