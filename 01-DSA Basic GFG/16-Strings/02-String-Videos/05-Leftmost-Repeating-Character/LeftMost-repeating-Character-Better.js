// Better Solution
function leftmostRepeatingCharacter(str) {
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // create a count array to store the frequency of each character
  let count = new Array(256).fill(0);
  for (let i = 0; i < str.length; i++) {
    count[str.charCodeAt(i)]++;
  }
  // loop to check for the first repeating character
  for (let i = 0; i < str.length; i++) {
    // if the frequency of the character is greater than 1, return the index of the first repeating character
    if (count[str.charCodeAt(i)] > 1) {
      // return the index of the first repeating character
      return i;
    }
  }
  // if no repeating character is found, return -1
  return -1;
}
let str = "geeksforgeeks";
console.log(leftmostRepeatingCharacter(str));
