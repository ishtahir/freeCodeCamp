// this function accepts a string and a number, it truncates the string to the number of characters it is provided

function truncateString(str, num) {
	var newStr = "";
	var i;
	if (num >= str.length) {
		return str;
	}
	else if (num > 4) {
		for (i = 0; i < num - 3; i++) {
			newStr += str[i];
		}
		newStr += "...";
		return newStr;
	}
	else {
		for (i = 0; i < num; i++) {
			newStr += str[i];
		}
		newStr += "...";
		return newStr;
	}
}
