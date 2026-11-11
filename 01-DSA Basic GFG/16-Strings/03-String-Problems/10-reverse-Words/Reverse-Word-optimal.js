/**
 * Function to reverse words in a string separated by dots (optimal approach)
 * @param {string} str - Input string with words separated by dots
 * @returns {string} - String with words reversed, joined by single dots
 *
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(n) for storing words array
 *
 * Algorithm:
 *   1. Extract all words (non-dot sequences) into an array
 *   2. Reverse the order of words in the array
 *   3. Join them back with single dots
 *
 * Step-by-step execution for str = "www...google.....com":
 *
 * ===== PHASE 1: EXTRACT WORDS =====
 *
 * Initialization (Line 2-4):
 *   words = []
 *   i = 0
 *   n = 20 (length of "www...google.....com")
 *
 * String breakdown:
 *   "www...google.....com"
 *   Indices: 0-19
 *   - "www" at indices 0-2
 *   - "..." at indices 3-5 (3 dots)
 *   - "google" at indices 6-11
 *   - "....." at indices 12-16 (5 dots)
 *   - "com" at indices 17-19
 *
 * Outer Loop Iteration 1 (Line 5: while i < n):
 *   i = 0, str[0] = 'w'
 *
 *   Inner Loop 1 (Line 7: Skip dots):
 *     - str[0] = 'w' !== '.' ✓ (loop condition false, skip this loop)
 *     - i remains 0
 *
 *   Line 11: j = i = 0
 *
 *   Inner Loop 2 (Line 12: Extract word):
 *     - j = 0, str[0] = 'w' !== '.' ✓ → j = 1
 *     - j = 1, str[1] = 'w' !== '.' ✓ → j = 2
 *     - j = 2, str[2] = 'w' !== '.' ✓ → j = 3
 *     - j = 3, str[3] = '.' === '.' ✗ (loop exits)
 *     - Final: j = 3
 *
 *   Line 15: Check if i < j: 0 < 3 ✓
 *   Line 16: words.push(str.slice(0, 3)) → words.push("www")
 *     words = ["www"]
 *
 *   Line 18: i = j = 3
 *
 * Outer Loop Iteration 2:
 *   i = 3, str[3] = '.'
 *
 *   Inner Loop 1 (Skip dots):
 *     - i = 3, str[3] = '.' === '.' ✓ → i = 4
 *     - i = 4, str[4] = '.' === '.' ✓ → i = 5
 *     - i = 5, str[5] = '.' === '.' ✓ → i = 6
 *     - i = 6, str[6] = 'g' !== '.' ✗ (loop exits)
 *     - Final: i = 6 (all 3 dots skipped)
 *
 *   Line 11: j = i = 6
 *
 *   Inner Loop 2 (Extract word):
 *     - j = 6, str[6] = 'g' !== '.' ✓ → j = 7
 *     - j = 7, str[7] = 'o' !== '.' ✓ → j = 8
 *     - j = 8, str[8] = 'o' !== '.' ✓ → j = 9
 *     - j = 9, str[9] = 'g' !== '.' ✓ → j = 10
 *     - j = 10, str[10] = 'l' !== '.' ✓ → j = 11
 *     - j = 11, str[11] = 'e' !== '.' ✓ → j = 12
 *     - j = 12, str[12] = '.' === '.' ✗ (loop exits)
 *     - Final: j = 12
 *
 *   Line 15: Check if i < j: 6 < 12 ✓
 *   Line 16: words.push(str.slice(6, 12)) → words.push("google")
 *     words = ["www", "google"]
 *
 *   Line 18: i = j = 12
 *
 * Outer Loop Iteration 3:
 *   i = 12, str[12] = '.'
 *
 *   Inner Loop 1 (Skip dots):
 *     - i = 12, str[12] = '.' === '.' ✓ → i = 13
 *     - i = 13, str[13] = '.' === '.' ✓ → i = 14
 *     - i = 14, str[14] = '.' === '.' ✓ → i = 15
 *     - i = 15, str[15] = '.' === '.' ✓ → i = 16
 *     - i = 16, str[16] = '.' === '.' ✓ → i = 17
 *     - i = 17, str[17] = 'c' !== '.' ✗ (loop exits)
 *     - Final: i = 17 (all 5 dots skipped)
 *
 *   Line 11: j = i = 17
 *
 *   Inner Loop 2 (Extract word):
 *     - j = 17, str[17] = 'c' !== '.' ✓ → j = 18
 *     - j = 18, str[18] = 'o' !== '.' ✓ → j = 19
 *     - j = 19, str[19] = 'm' !== '.' ✓ → j = 20
 *     - j = 20, j >= n ✗ (loop exits)
 *     - Final: j = 20
 *
 *   Line 15: Check if i < j: 17 < 20 ✓
 *   Line 16: words.push(str.slice(17, 20)) → words.push("com")
 *     words = ["www", "google", "com"]
 *
 *   Line 18: i = j = 20
 *
 * Outer Loop Check: i = 20, n = 20, i < n is false ✗
 * Loop exits
 *
 * After Phase 1: words = ["www", "google", "com"]
 *
 * ===== PHASE 2: REVERSE AND JOIN WORDS =====
 *
 * Initialization (Line 20):
 *   result = ""
 *   words = ["www", "google", "com"]
 *   words.length = 3
 *
 * Loop Iteration 1 (Line 21: k = words.length - 1 = 2):
 *   k = 2, words[2] = "com"
 *   Line 22: result += "com" → result = "com"
 *   Line 23: k > 0? 2 > 0 ✓
 *   Line 24: result += "." → result = "com."
 *   k = 1
 *
 * Loop Iteration 2 (k = 1):
 *   k = 1, words[1] = "google"
 *   Line 22: result += "google" → result = "com.google"
 *   Line 23: k > 0? 1 > 0 ✓
 *   Line 24: result += "." → result = "com.google."
 *   k = 0
 *
 * Loop Iteration 3 (k = 0):
 *   k = 0, words[0] = "www"
 *   Line 22: result += "www" → result = "com.google.www"
 *   Line 23: k > 0? 0 > 0 ✗ (skip adding dot after last word)
 *   k = -1
 *
 * Loop exits (k < 0)
 *
 * Final Result: "com.google.www"
 */
function reverseWords(str) {
  // LINE 2: Initialize array to store extracted words
  const words = [];

  // LINE 3-4: Initialize pointer and string length
  let i = 0; // Pointer to traverse the string
  let n = str.length; // Length of input string

  // LINE 5: Outer loop - traverse through entire string
  // This loop extracts all words separated by dots
  while (i < n) {
    // LINE 6-9: Skip consecutive dots
    // Move pointer 'i' forward while encountering dots
    // This handles cases like "www...google" where we need to skip multiple dots
    while (i < n && str[i] === ".") {
      i++; // Skip the dot character
    }

    // LINE 10-14: Extract the word (non-dot sequence)
    // 'j' starts at 'i' and moves forward until it finds a dot or end of string
    // This identifies the end position of the current word
    let j = i; // 'j' tracks the end of current word
    while (j < n && str[j] !== ".") {
      j++; // Move forward while current character is not a dot
    }

    // LINE 15-17: Store the word if it exists (i < j means we found a valid word)
    // str.slice(i, j) extracts substring from index i to j-1 (exclusive of j)
    if (i < j) {
      words.push(str.slice(i, j)); // Add the extracted word to array
    }

    // LINE 18: Move 'i' to position 'j' for next iteration
    // This continues from where we left off (either after a dot or at end of string)
    i = j;
  }

  // LINE 20: Initialize result string to build the reversed output
  let result = "";

  // LINE 21-26: Reverse words and join with dots
  // Loop backwards through words array (from last to first)
  for (let k = words.length - 1; k >= 0; k--) {
    // LINE 22: Append current word to result
    result += words[k];

    // LINE 23-25: Add dot separator between words (but not after last word)
    if (k > 0) {
      result += "."; // Add dot only if there are more words to come
    }
  }

  // LINE 27: Return the final reversed word string
  return result;
}

// Test case: String with multiple dots between words
let str = "www...google.....com";
let reversedStr = reverseWords(str);
console.log(reversedStr); // Expected output: "com.google.www"
