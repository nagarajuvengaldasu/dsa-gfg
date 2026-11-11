/**
 * Function to find the first missing character in a pangram string
 * @param {string} str - Input string to check
 * @returns {string|number} - Returns the first missing letter, or -1 if all letters are present
 *
 * Time Complexity: O(n * 26) = O(n) where n is string length
 * Space Complexity: O(1) - fixed size array of 26 letters
 *
 * A pangram contains all 26 letters of the alphabet.
 * This function finds the first missing letter in alphabetical order.
 */
function MissingCharInPanagram(str) {
  let result = [];
  // Array containing all 26 lowercase letters of the alphabet
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Convert string to lowercase for case-insensitive comparison
  // This ensures we check for letters regardless of their case in the input
  str = str.toLowerCase();

  // Check each letter of the alphabet in order
  for (let i = 0; i < arr.length; i++) {
    // If current letter is not found in the string, return it
    if (!str.includes(arr[i])) {
      result.push(arr[i]); // push the missing letter to the result array
    }
  }

  // If all 26 letters are found, return the result array joined as a string
  return result.join("");
}

// Test case: Famous pangram sentence (contains all 26 letters)
let str = "abcdefghij";
console.log(MissingCharInPanagram(str)); // Expected output: "klmnopqrstuvwxyz" (all letters present)
