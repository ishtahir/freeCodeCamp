// find the smallest common multiple of the provided parameters that can be evenly divided by both
// as well as by all sequential numbers in the range between these parameters

function smallestCommons(arr) {
	arr = arr.sort((a, b) => a - b);
	const myArr = [];
	let every;
	for (let i = arr[0]; i <= arr[1]; i++) {
		myArr.unshift(i);
	}
	let lcm = myArr[0] * myArr[1];
	while (!every) {
		every = myArr.every(num => lcm % num === 0);
		if (!every) {
			lcm += arr[1];
		}
	}
	return lcm;
}

smallestCommons([23, 18]);
smallestCommons([1, 5]);
smallestCommons([5, 1]);
