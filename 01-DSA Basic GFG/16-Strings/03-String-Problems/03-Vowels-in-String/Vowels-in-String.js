/**
 * Function to count total number of vowels in a string (including duplicates)
 * @param {string} str - The input string to check for vowels
 * @returns {number} - Total count of vowels found in the string
 *
 * Time Complexity: O(n) where n is string length
 * Space Complexity: O(1) - only using a counter variable
 *
 * Note: This counts ALL vowels (including duplicates), unlike distinct vowels count
 *
 * Step-by-step execution for "aeiouaeiouaeiou":
 *
 * Initialization:
 *   count = 0
 *
 * Iteration 1: i=0, str[0]='a'
 *   - 'a' is a vowel ✓
 *   - count = 1
 *
 * Iteration 2: i=1, str[1]='e'
 *   - 'e' is a vowel ✓
 *   - count = 2
 *
 * Iteration 3: i=2, str[2]='i'
 *   - 'i' is a vowel ✓
 *   - count = 3
 *
 * Iteration 4: i=3, str[3]='o'
 *   - 'o' is a vowel ✓
 *   - count = 4
 *
 * Iteration 5: i=4, str[4]='u'
 *   - 'u' is a vowel ✓
 *   - count = 5
 *
 * Iteration 6: i=5, str[5]='a'
 *   - 'a' is a vowel ✓
 *   - count = 6 (duplicates are counted)
 *
 * Iteration 7: i=6, str[6]='e'
 *   - 'e' is a vowel ✓
 *   - count = 7
 *
 * Iteration 8: i=7, str[7]='i'
 *   - 'i' is a vowel ✓
 *   - count = 8
 *
 * Iteration 9: i=8, str[8]='o'
 *   - 'o' is a vowel ✓
 *   - count = 9
 *
 * Iteration 10: i=9, str[9]='u'
 *   - 'u' is a vowel ✓
 *   - count = 10
 *
 * Iteration 11: i=10, str[10]='a'
 *   - 'a' is a vowel ✓
 *   - count = 11
 *
 * Iteration 12: i=11, str[11]='e'
 *   - 'e' is a vowel ✓
 *   - count = 12
 *
 * Iteration 13: i=12, str[12]='i'
 *   - 'i' is a vowel ✓
 *   - count = 13
 *
 * Iteration 14: i=13, str[13]='o'
 *   - 'o' is a vowel ✓
 *   - count = 14
 *
 * Iteration 15: i=14, str[14]='u'
 *   - 'u' is a vowel ✓
 *   - count = 15
 *
 * Final Result:
 *   - count = 15 (total vowels found, including duplicates)
 *   - Return: 15
 *
 * Breakdown: 3 × (a, e, i, o, u) = 3 × 5 = 15 vowels total
 */
function vowelsInString(str) {
  // Initialize counter for total vowel count
  let count = 0;

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if current character is a lowercase vowel (a, e, i, o, u)
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      // Increment counter for each vowel found (including duplicates)
      count++;
    }
  }

  // Return the total count of vowels in the string
  return count;
}

// Test case: String with repeated vowels
let str = "aeiouaeiouaeiou";
console.log(vowelsInString(str)); // Expected output: 15 (all 15 characters are vowels)
