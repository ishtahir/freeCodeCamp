// this function accepts a number and returns the result of the factorial for that number
// ex: factorialize(5) = 120 because 5! = 5 * 4 * 3 * 2 * 1

function factorialize(num) {
	var factorsArray = [];
	for (var i = 1; i <= num; i++) {
		factorsArray.push(i);
	}
	var factorial = 1;
	for (var j = 0; j < factorsArray.length; j++) {
		factorial *= factorsArray[j];
	}
	return factorial;
}
