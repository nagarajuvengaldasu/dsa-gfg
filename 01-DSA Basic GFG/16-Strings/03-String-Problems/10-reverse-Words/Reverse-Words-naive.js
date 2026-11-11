/**
 * Function to reverse words in a string separated by dots
 * @param {string} str - Input string with words separated by dots
 * @returns {string} - String with words reversed, joined by single dots
 *
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(n) for storing the array
 *
 * Step-by-step execution for str = "www...google.....com":
 *
 * LINE 2 EXECUTION:
 * ================
 *
 * Step 1: str.split(".")
 *   - Splits the string at every dot ('.') character
 *   - Input: "www...google.....com"
 *   - Split at positions: w-w-w-.-.-.-g-o-o-g-l-e-.-.-.-.-.-c-o-m
 *   - Result: ["www", "", "", "google", "", "", "", "", "com"]
 *   - Note: Multiple consecutive dots create empty strings in the array
 *
 * Step 2: .filter((word) => word.length > 0)
 *   - Filters out all empty strings from the array
 *   - Filters elements where word.length > 0 (non-empty strings only)
 *   - Iteration through ["www", "", "", "google", "", "", "", "", "com"]:
 *     * "www": length=3 > 0 ✓ → keep
 *     * "": length=0 > 0 ✗ → remove
 *     * "": length=0 > 0 ✗ → remove
 *     * "google": length=6 > 0 ✓ → keep
 *     * "": length=0 > 0 ✗ → remove
 *     * "": length=0 > 0 ✗ → remove
 *     * "": length=0 > 0 ✗ → remove
 *     * "": length=0 > 0 ✗ → remove
 *     * "": length=0 > 0 ✗ → remove
 *     * "com": length=3 > 0 ✓ → keep
 *   - Result after filter: ["www", "google", "com"]
 *
 * Step 3: Store in variable 'result'
 *   - result = ["www", "google", "com"]
 *
 * LINE 3 EXECUTION:
 * ================
 *
 * Step 1: result.reverse()
 *   - Reverses the order of elements in the array
 *   - Input: ["www", "google", "com"]
 *   - Process:
 *     * Original order: [0]="www", [1]="google", [2]="com"
 *     * Reversed order: [0]="com", [1]="google", [2]="www"
 *   - Result: ["com", "google", "www"]
 *
 * Step 2: .join(".")
 *   - Joins all array elements into a single string with "." as separator
 *   - Input: ["com", "google", "www"]
 *   - Process:
 *     * "com" + "." + "google" + "." + "www"
 *   - Result: "com.google.www"
 *
 * Step 3: return the joined string
 *   - Returns: "com.google.www"
 *
 * LINE 5-7 EXECUTION:
 * ===================
 * Line 5: str = "www...google.....com"
 * Line 6: reversedStr = reverseWords(str) → "com.google.www"
 * Line 7: console.log(reversedStr) → Output: "com.google.www"
 */
function reverseWords(str) {
  // LINE 2: Split string by dots, filter out empty strings, store in result
  // Process: str.split(".") → filter empty strings → result array
  let result = str.split(".").filter((word) => word.length > 0);

  // LINE 3: Reverse the array and join with single dots
  // Process: reverse array → join with "." → return string
  return result.reverse().join(".");
}

// LINE 5: Initialize test string with multiple dots between words
let str = "www...google.....com";

// LINE 6: Call function to reverse words and store result
let reversedStr = reverseWords(str);

// LINE 7: Print the reversed string
console.log(reversedStr); // Output: "com.google.www"
