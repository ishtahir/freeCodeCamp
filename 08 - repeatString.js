// this function accepts a string and a number, and it simply repeats the string that number of times
// if number is not positive it returns an empty string

function repeatStringNumTimes(str, num) {
	if (num > 0) {
		var newStr = "";
		for (var i = 0; i < num; i++) {
			newStr += str;
		}
		console.log(newStr);
		return newStr;
	}
	else {
		return "";
	}
}
