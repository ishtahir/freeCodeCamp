// this function accepts a string value and returns it reversed

function reverseString(str) {
	var reverse = "";
	for (var i = (str.length - 1); i >= 0; i--) {
    	reverse += str[i];
	}
	return reverse;
}
