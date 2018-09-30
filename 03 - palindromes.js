// this function checks to see if the string is a palindrome, returns true or false accordingly

function palindrome(str) {
  const reverse = str.split('').reverse().join('');
  return reverse === str;
}
