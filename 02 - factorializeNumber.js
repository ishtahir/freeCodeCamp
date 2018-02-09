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
