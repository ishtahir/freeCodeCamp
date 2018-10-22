// given a word, convert it to pig latin and return it

function translatePigLatin(str) {
	const regex = /[aeiou]/;
	if (regex.test(str[0])) {
		return `${str}way`;
	} else {
		str = str.split('');
		str.push(str[0]);
		str.shift();
		return `${str.join('')}ay`;
	}
}

console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin('topanga'));
