# Algorithm Complexity

| **Notation**     | **Name**         |
| ---------------- | ---------------- |
| O(1)             | Constant         |
| O(log(n))        | Logarithmic      |
| O(log(n)c)       | Ploy-Logarithmic |
| O(n)             | Linear           |
| O(n<sup>2</sup>) | Quadratic        |
| O(n<sup>c</sup>) | Polynomial       |
| O(c<sup>n</sup>) | Exponential      |

`O(1) < O(log(n)) < O(n) < O(n<sup>2</sup>) < O(c<sup>n</sup>)`

## O(1) - Constant

```javascript
const increment = num => ++num;
```

## O(log(n)) - Logarithmic

```javascript
const half = n => {
	while (n > 0) {
		n /= 2;
	}
};
```

| **Iteration** |        n        |
| :-----------: | :-------------: |
|       0       |        n        |
|       1       |       n/2       |
|       2       |       n/4       |
|      ...      |       ...       |
|      ...      |       ...       |
|       k       | n/2<sup>k</sup> |

2<sup>k</sup> = n -> k = log(n)

## O(n) - Linear

```javascript
const sequentialSearch = (array, value) => {
	for (let i = 0; i < array.length; ++i) {
		if (value === array[i]) {
			return i;
		}
	}
	return -1;
};
```

## O(n<sup>2</sup>) - Quadratic

```javascript
const bubbleSort = array => {
	for (let i = 0; i < array.length; ++i) {
		for (let j = 0; j < length - 1; ++j) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return array;
};
```

## O(2<sup>n</sup>) - Exponential

O(2<sup>n</sup>) is often recursive algorithms that solve size N by recursively solving two smaller problems of size N-1

```javascript
const hanoi = (n, from_peg, to_peg, spare_peg) => {
	if (n < 1) {
		return;
	}
	if (n > 1) {
		hanoi(n - 1, from_peg, to_peg, spare_peg);
	}
	console.log(`move from ${from_peg} to ${to_peg}`);
	if (n > 1) {
		hanoi(n - 1, from_peg, to_peg, spare_peg);
	}
};
```

Let T(N) be the time it takes for N disks.

```
T(1) = O(1)
T(N) = O(1) + 2*T(N-1) where N > 1
```

If repeatedly expanding the last term,

```
T(N) = 3*O(1) + 4*T(N-2)
T(N) = 7*O(1) + 8*T(N-3)
...
T(N) = (2<sup>N-1</sup>-1)*O(1) + (2<sup>N-1</sup>)*T(1)
T(N) = (2<sup>N</sup> - 1)*O(1)
T(N) = O(2<sup>N</sup>)
```

## Big-O Cheat Sheet

![alt text](https://he-s3.s3.amazonaws.com/media/uploads/ece920b.png)

### Data Structure

![alt text](https://he-s3.s3.amazonaws.com/media/uploads/c14cb1f.JPG)

### Searching

![alt text](https://he-s3.s3.amazonaws.com/media/uploads/1e0079d.JPG)

### Sorting

![alt text](https://he-s3.s3.amazonaws.com/media/uploads/2d5308d.JPG)

### Heaps

![alt text](https://he-s3.s3.amazonaws.com/media/uploads/3a17756.JPG)

### Graphs

![alt text](https://he-s3.s3.amazonaws.com/media/uploads/526213e.JPG)
