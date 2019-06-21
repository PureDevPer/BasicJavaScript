const p1 = new Promise(resolve => {
	setTimeout(resolve, 1000, 'First');
})
	.then(value => console.log(value))
	.finally(() => console.log("I'm done"));
