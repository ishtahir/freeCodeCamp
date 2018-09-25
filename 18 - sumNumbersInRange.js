// given an array with two number elements, return the sum of the two numbers plus the sum of all the numbers between them 

sumAll = arr => {
  const myarr = arr.slice().sort((a, b) => a - b);
  let count = 0;
  for (let i = myarr[0]; i <= myarr[1]; i++) {
    count += i;
  }
  return count;
}
