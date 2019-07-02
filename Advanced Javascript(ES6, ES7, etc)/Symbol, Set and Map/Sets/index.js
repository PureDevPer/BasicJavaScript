let set = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 8]);
console.log(set);
/*
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
6: 7
7: 8
*/

console.log(set.has(9));
console.log(set.has(1));
console.log(set.delete(1));
console.log(set.clear());
set.add('Hi');
set.add([1, 2, 3, 4, 5, 5, 5, 5, 6]);
console.log(set);
