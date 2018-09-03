// this function takes in a string and deciphers it or ciphers it depending on how it came in to the rot13 method

function rot13(str) {
	str = str.toUpperCase();
	let decipher = '';
    let charNum;
    for (let i = 0; i < str.length; i++) {
    	charNum = str.charCodeAt(i);
    	if (charNum === 32) {
    		decipher += String.fromCharCode(charNum);
    	}
    	else if(charNum >= 0 && charNum <= 64) {
    		decipher += String.fromCharCode(charNum);
    	}
    	else if (charNum + 13 >= 65 && charNum + 13 <= 90) {
    		decipher += String.fromCharCode(charNum + 13);
    	}
    	else if (charNum - 13 >= 65 && charNum - 13 <= 90) {
    		decipher += String.fromCharCode(charNum - 13);
    	}
    	else {
    		decipher += String.fromCharCode(charNum);
    	}
    }
    return decipher;
}
