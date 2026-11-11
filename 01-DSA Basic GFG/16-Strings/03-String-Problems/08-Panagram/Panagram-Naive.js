/**
 * Function to check if a string is a pangram (contains all 26 letters of alphabet)
 * @param {string} str - Input string to check
 * @returns {boolean} - true if pangram, false otherwise
 *
 * Time Complexity: O(n * 26) = O(n) where n is string length
 * Space Complexity: O(1) - fixed size array of 26 letters
 *
 * A pangram is a sentence containing every letter of the alphabet at least once.
 * Example: "The quick brown fox jumps over the lazy dog" is a pangram
 */
function isPanagram(str) {
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
  str = str.toLowerCase();
  if (str.length < 26) {
    return false;
  }
  // Check if each letter of the alphabet exists in the string
  for (let i = 0; i < arr.length; i++) {
    // Check if current alphabet letter exists anywhere in the string
    // Using includes() to search for the letter in the entire string
    if (!str.includes(arr[i])) {
      // If any letter is missing, it's not a pangram
      return false;
    }
  }

  // If we've checked all 26 letters and all are present, it's a pangram
  return true;
}

// Test case: Famous pangram sentence
let str = "The quick brown fox jumps over the lazy dog";
console.log(isPanagram(str)); // Expected output: true
