/**
 * Function to count distinct vowels in a string (naive approach)
 * @param {string} str - The input string to check for distinct vowels
 * @returns {number} - Count of distinct vowels found in the string
 *
 * Time Complexity: O(n * m) where n is string length, m is vowel count
 * Space Complexity: O(1) as we store at most 5 vowels
 *
 * Step-by-step execution for "aeiouaeiouaeiou":
 *
 * Initialization:
 *   arr = [], count = 0
 *
 * Iteration 1: i=0, str[0]='a'
 *   - 'a' is a vowel ✓
 *   - arr doesn't include 'a' ✓
 *   - count = 1, arr = ['a']
 *
 * Iteration 2: i=1, str[1]='e'
 *   - 'e' is a vowel ✓
 *   - arr doesn't include 'e' ✓
 *   - count = 2, arr = ['a', 'e']
 *
 * Iteration 3: i=2, str[2]='i'
 *   - 'i' is a vowel ✓
 *   - arr doesn't include 'i' ✓
 *   - count = 3, arr = ['a', 'e', 'i']
 *
 * Iteration 4: i=3, str[3]='o'
 *   - 'o' is a vowel ✓
 *   - arr doesn't include 'o' ✓
 *   - count = 4, arr = ['a', 'e', 'i', 'o']
 *
 * Iteration 5: i=4, str[4]='u'
 *   - 'u' is a vowel ✓
 *   - arr doesn't include 'u' ✓
 *   - count = 5, arr = ['a', 'e', 'i', 'o', 'u']
 *
 * Iteration 6: i=5, str[5]='a'
 *   - 'a' is a vowel ✓
 *   - arr includes 'a' ✗ (skip increment)
 *   - count = 5, arr = ['a', 'e', 'i', 'o', 'u']
 *
 * Iteration 7-15: Similar pattern - vowels are found but already in arr
 *   - All subsequent vowels ('e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e')
 *     are skipped as they're already in the array
 *
 * Final Result: count = 5 (all 5 distinct vowels found)
 */
function distinctOvwelsCountNaive(str) {
  // Initialize an array to store encountered vowels
  let arr = [];

  // Initialize counter for distinct vowels
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
      // Check if this vowel hasn't been encountered before
      // arr.includes() checks if the vowel already exists in our tracking array
      if (!arr.includes(str[i])) {
        // If it's a new distinct vowel, increment the counter
        count++;

        // Add the vowel to our tracking array so we don't count it again
        arr.push(str[i]);
      }
    }
  }

  // Return the total count of distinct vowels found
  return count;
}

// Test case: String with repeated vowels
let str = "aeiouaeiouaeiou";
console.log(distinctOvwelsCountNaive(str)); // Expected output: 5
