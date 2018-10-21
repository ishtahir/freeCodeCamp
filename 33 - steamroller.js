// given an array with possibly multiple levels of arrays, flatten it all to the core element

function steamrollArray(arr) {
	const myArr = [];
	steamroll(arr);
	function steamroll(arr) {
		arr.forEach(item => {
			if (Array.isArray(item)) {
				steamroll(item);
			} else {
				myArr.push(item);
			}
		});
	}
	return myArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
