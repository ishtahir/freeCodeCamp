// this function accepts a number and returns the result of the factorial for that number
// ex: factorialize(5) = 120 because 5! = 5 * 4 * 3 * 2 * 1

function factorialize(num) {
  let factor = 1;
  for (let i = num; i > 0; i--) {
    factor *= i;
  }
  return factor;
}
