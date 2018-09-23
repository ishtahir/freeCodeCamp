// this function accepts a string and checks to see if the string entered is a palindrome, returns T or F accordingly

palindrome = str =>	{
  reverse = str.split('').reverse().join('');
  return reverse === str ? true : false;
}
