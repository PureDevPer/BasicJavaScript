const a = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'Yes');
});

console.log(a);

setInterval(console.log, 1000, a);
