// convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities

function convertHTML(str) {
	const entity = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;'
	};
	
	return str.split('').map(char => entity[char] || char).join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML('<>'));
