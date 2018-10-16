// given a string of letters in a row with one missing, the function will find the missing letter and return it

function fearNotLetter(str) {
	let currentCode = str.charCodeAt(0);
	for (let i = 0; i <= str.length - 1; i++) {
		if (str.charCodeAt(i) === currentCode) {
			currentCode++;
		} else {
			return String.fromCharCode(currentCode);
		}
	}
}

fearNotLetter("abce");
fearNotLetter("hijklnop");
fearNotLetter("stvwx");
