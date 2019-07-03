function* listPeople() {
	yield 'A';
	yield 'B';
	yield 'C';
	yield 'D';
}

const listG = listPeople();
console.log(listG);
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());

const people = ['A', 'b', 'c', 'd'];

function* peopleTeller() {
	for (const person of people) {
		yield person;
	}
}

const peopleFunction = peopleTeller();

console.log(peopleFunction);
console.log(peopleFunction.next());
console.log(peopleFunction.next());
console.log(peopleFunction.next());
console.log(peopleFunction.next());
console.log(peopleFunction.next());
