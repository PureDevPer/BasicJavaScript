const union = (set1, set2) => {
	const unionAB = new Set();
	set1.forEach(value => unionAB.add(value));
	set2.forEach(value => unionAB.add(value));
	return unionAB;
};

const intersection = (set1, set2) => {
	const intersectionSet = new Set();
	set1.forEach(value => {
		if (set2.has(value)) {
			intersectionSet.add(value);
		}
	});
	return intersectionSet;
};

const difference = (set1, set2) => {
	const differenceSet = new Set();
	set1.forEach(value => {
		if (!set2.has(value)) {
			differenceSet.add(value);
		}
	});
	return differenceSet;
};

const set = new Set();
set.add(1);
console.log(set.values()); // SetIterator {1}
console.log(set.has(1)); // true
console.log(set.size); // 1

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

console.log(union(setA, setB)); // Set(3) {1,2,3,4}
console.log(intersection(setA, setB)); // {2,3}
console.log(difference(setA, setB)); // {1}
