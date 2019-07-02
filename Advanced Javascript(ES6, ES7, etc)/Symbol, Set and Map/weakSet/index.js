const weakSet = new WeakSet();
const obj = {
	isObj: true
};

weakSet.add(obj);
console.log(weakSet);
