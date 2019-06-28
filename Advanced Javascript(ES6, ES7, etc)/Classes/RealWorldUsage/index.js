class Counter {
	constructor({ initialNumber = 0, counterId, plusId, minusId }) {
		this.count = initialNumber;
		this.counter = document.getElementById(counterId);
		this.counter.innerText = initialNumber;
		this.plusBtn = document.getElementById(plusId);
		this.minusBtn = document.getElementById(minusId);
		this.addEventListeners();
	}
	addEventListeners = () => {
		this.plusBtn.addEventListener('click', this.increase);
		this.minusBtn.addEventListener('click', this.decrease);
	};

	increase = () => {
		// console.log(this);
		this.count += 1;
		this.repaintCount();
	};

	decrease = () => {
		this.count -= 1;
		this.repaintCount();
	};
	repaintCount = () => {
		this.counter.innerText = this.count;
	};
}

new Counter({
	counterId: 'count',
	plusId: 'add',
	minusId: 'minus'
});

new Counter({
	counterId: 'count2',
	plusId: 'add2',
	minusId: 'minus2',
	initialNumber: 100
});
