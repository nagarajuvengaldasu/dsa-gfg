/**
 * Function to check if str1 is a subsequence of str2
 * A subsequence means all characters of str1 appear in str2 in the same order,
 * but not necessarily consecutively.
 *
 * @param {string} str1 - The potential subsequence string to check
 * @param {string} str2 - The main string to search in
 * @returns {boolean} - true if str1 is a subsequence of str2, false otherwise
 *
 * Time Complexity: O(n) where n is the length of str2
 * Space Complexity: O(1) - only using a few variables
 *
 * Algorithm:
 * - Use two pointers: i for str1, j for str2
 * - Traverse str2, and whenever we find a matching character from str1, advance i
 * - If we successfully match all characters of str1 (i === str1.length), return true
 *
 * Step-by-step execution for str1="AXY", str2="YADXCP":
 *
 * Initialization:
 *   a = str1.length = 3
 *   b = str2.length = 6
 *   i = 0 (pointer for str1, tracks how many characters we've matched)
 *
 * Iteration 1: j=0, str2[0]='Y'
 *   - i=0, str1[0]='A'
 *   - 'A' !== 'Y' ✗
 *   - i stays 0 (no match, continue searching)
 *   - State: i=0, matched: "" (none)
 *
 * Iteration 2: j=1, str2[1]='A'
 *   - i=0, str1[0]='A'
 *   - 'A' === 'A' ✓ (first character matched!)
 *   - i becomes 1
 *   - State: i=1, matched: "A"
 *
 * Iteration 3: j=2, str2[2]='D'
 *   - i=1, str1[1]='X'
 *   - 'X' !== 'D' ✗
 *   - i stays 1 (no match, continue searching for 'X')
 *   - State: i=1, matched: "A"
 *
 * Iteration 4: j=3, str2[3]='X'
 *   - i=1, str1[1]='X'
 *   - 'X' === 'X' ✓ (second character matched!)
 *   - i becomes 2
 *   - State: i=2, matched: "AX"
 *
 * Iteration 5: j=4, str2[4]='C'
 *   - i=2, str1[2]='Y'
 *   - 'Y' !== 'C' ✗
 *   - i stays 2 (no match, continue searching for 'Y')
 *   - State: i=2, matched: "AX"
 *
 * Iteration 6: j=5, str2[5]='P'
 *   - i=2, str1[2]='Y'
 *   - 'Y' !== 'P' ✗
 *   - i stays 2 (no match, end of str2 reached)
 *   - State: i=2, matched: "AX" (could not find 'Y' after 'X')
 *
 * Final Check:
 *   - i = 2, a = 3
 *   - i !== a (2 !== 3) ✗
 *   - Return: false
 *
 * Result: "AXY" is NOT a subsequence of "YADXCP"
 * Reason: We found 'A' and 'X' in order, but 'Y' appears at index 0 (before 'X' at index 3),
 *         so we cannot form "AXY" in the correct order.
 *
 * Example where it would return true:
 *   str1 = "AXY", str2 = "YADXCPY" → would return true (Y found at end)
 *   str1 = "AXY", str2 = "ADXCPY" → would return true (all in order)
 */
function subsequenceOfStringOther(str1, str2) {
  // Store lengths of both strings
  let a = str1.length;
  let b = str2.length;

  // Pointer for str1 - tracks how many characters we've successfully matched
  let i = 0;

  // Traverse through str2 (the main string)
  // Continue while we haven't reached end of str2 AND haven't matched all of str1
  for (let j = 0; j < b && i < a; j++) {
    // If current character in str2 matches the character we're looking for in str1
    if (str1[i] === str2[j]) {
      // Match found! Move to next character in str1
      i++;
    }
    // If no match, continue searching in str2 (j increments automatically)
  }

  // If i equals str1.length, we've matched all characters of str1 in order
  // This means str1 is a subsequence of str2
  return i === a;
}

// Test case: Check if "AXY" is a subsequence of "YADXCP"
let str1 = "AXY";
let str2 = "YADXCP";
console.log(subsequenceOfStringOther(str1, str2)); // Expected output: false
