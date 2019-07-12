// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const userObj = {
	username: 'name',
	age: 12,
	password: 1234
};

const userFilter = {
	get: (target, prop, receiver) => {
		//console.log('Getting');
		//return 'NOTHING';
		console.log(target);
		console.log(prop);
		console.log(receiver);
		return prop === 'password' ? `${'*'.repeat(5)}` : target[prop];
	},
	set: () => {
		console.log('Set');
	},
	deleteProperty: (target, prop) => {
		if (prop === 'password') {
			return;
		} else {
			target[prop] = 'DELETED';
		}
	}
};

const filteredUser = new Proxy(userObj, userFilter);

console.log(filteredUser.age);
console.log(filteredUser.password);
delete userObj.password;
console.log(userObj);
delete filteredUser.username;
console.log(filteredUser);
