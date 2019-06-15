const friends = ['a', 'b', 'c', 'd'];

for (let i = 0; i < friends.length; ++i) {
	console.log(friends[i]);
}

const addHeart = (current, index, arr) => console.log(current, index, arr);
friends.forEach(addHeart);
friends.forEach(friend => console.log(friend));

for (const friend of friends) {
	if (friend === 'c') {
		break;
	} else {
		console.log(friend);
	}
}

for (const letter of 'Hello') {
	console.log(letter);
}
