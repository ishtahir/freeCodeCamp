// this function takes two or more arrays and returns a new array of unique values in the order of the original provided arrays

function uniteUnique(...arr) {
	const myArr = arr.concat();
	const newArr = [];
	for (let i = 0; i < myArr.length; i++) {
		myArr[i].forEach(item => {
			if (!newArr.includes(item)) {
				newArr.push(item);
			}
		});
	}
	return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
