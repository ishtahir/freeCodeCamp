// this function takes in a string and returns the spinal returns the spinal case of that string

function spinalCase(str) {
  let myStr = str;
  const camel = /([a-z])([A-Z])/g;
  const regex = /[_ -]/;
  if (camel.test(myStr)) {
    myStr = myStr.replace(camel, '$1 $2');
    myStr = myStr.split(' ').join('-')
  } else {
    myStr = myStr.split(regex).join('-');
  }
  return myStr.toLowerCase();
}
