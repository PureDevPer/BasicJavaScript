// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const p1 = new Promise(resolve => {
	setTimeout(resolve, 5000, 'First');
});

const p2 = new Promise((resolve, reject) => {
	// setTimeout(reject, 1000, 'Second');
	setTimeout(reject, 1000, 'Second');
});

const p3 = new Promise(resolve => {
	setTimeout(resolve, 3000, 'Third');
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise.then(val => console.log(val)).catch(err => console.log(err));
