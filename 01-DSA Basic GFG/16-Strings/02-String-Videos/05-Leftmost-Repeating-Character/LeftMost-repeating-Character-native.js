// Naive Solution
function leftmostRepeatingCharacter(str) {
  // Time Complexity: O(n^2)
  // Space Complexity: O(1)
  // find the length of the string
  let n = str.length; 
  // nested loop to check for repeating characters
  for (let i = 0; i < n; i++) {
    // inner loop to check for repeating characters
    for (let j = i + 1; j < n; j++) {
      // if the characters are repeating, return the index of the first repeating character
      if (str[i] === str[j]) {
        // return the index of the first repeating character
        return i;
      }
    }
  }
  // if no repeating character is found, return -1
  return -1;
}
let str = "abbcc";
console.log(leftmostRepeatingCharacter(str));
