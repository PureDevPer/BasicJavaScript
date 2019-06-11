const friends = ['a', 'b'];

const newFirends = [...friends, 'c'];
const newFirends1 = ['d', ...friends];

console.log(newFirends1);

const info = {
	userName: 'name'
};

console.log({ ...info, password: 1 });

const first = ['mon', 'tue', 'wed'];
const weekend = ['sat', 'sun'];
const fullWeek = [...first, 'thu', 'fri', ...weekend];
console.log(fullWeek);

const lastName = prompt('last name');
const user = {
	username: 'userName',
	age: 10,
	...(lastName !== '' && { lastName })
};

console.log(user);
