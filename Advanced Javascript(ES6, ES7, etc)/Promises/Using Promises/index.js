const a = new Promise((resolve, reject) => {
	//setTimeout(resolve, 1000, 'Yes');
	// resolve('Yes')
	setTimeout(reject, 1000, 'No');
});

a.then(value => console.log(value)); // Yes

const thenFn = value => console.log(value);
a.then(thenFn);

// For reject
a.then(result => console.log(result)).catch(error => console.log(error));

// If then happens, catch doesn't happen
// If catch happens, tehn doesnt happen
