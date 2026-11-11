// naive approach
function polindrome(str) {
  //store the original string in a temp variable
  let temp = str;
  // find the length of the string using the length property
  let n = str.length;
  // create a new string to store the reversed string
  let rev = "";
  // reverse the string using a for loop
  for (let i = n - 1; i >= 0; i--) {
    // add the characters to the new string
    rev = rev + str[i];
  }
  // compare the original string with the reversed string
  if (temp === rev) {
    return "Polindrome";
  } else {
    return "Not Polindrome";
  }
}
let str = "abcdcba";
console.log(polindrome(str));
