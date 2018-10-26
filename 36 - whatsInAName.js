// make a function that looks through an array of objects (first argument) and returns an array of all objects that have
// matching name and value pairs (second argument). Each name and value pair of the source object has to be present in
// the object from the collection if it is to be included in the returned array

function whatIsInAName(collection, source) {
	const srcKeys = Object.keys(source);
	const filter = collection.filter(obj => srcKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
	return filter;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
