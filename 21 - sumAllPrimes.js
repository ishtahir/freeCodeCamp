function sumPrimes(num) {
  	let total = 0;
  	for (let i = 2; i <= num; i++) {
	  	if (isPrime(i)) {
		  	total += i;
	  	}
  	}
 	 return total;
}

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	let count = 0;
	for (let i = num; i > 0; i--) {
		if (num % i === 0) {
			count++;
		}
	}
	return count === 2;
}

sumPrimes(977);
