function reverseString(str) {
	var reverse = "";
	for (var i = (str.length - 1); i >= 0; i--) {
    	console.log(str[i]);
    	reverse += str[i];
	}
	return reverse;
}
