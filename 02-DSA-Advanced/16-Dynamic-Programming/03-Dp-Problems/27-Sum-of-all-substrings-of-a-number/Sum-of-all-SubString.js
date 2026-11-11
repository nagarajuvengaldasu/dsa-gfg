/**
 * Sum of all Substrings of a Number
 * Problem: Given a number as a string, find the sum of all its substrings.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

class Solution {
  // Step 1: Initialize the sumOfSubstrings function with str
  sumOfSubstrings(str) {
    // Step 2: Initialize the n with the length of str
    let n = str.length;
    // Step 3: Initialize the totalsum with 0
    let totalsum = 0;
    // Step 4: Iterate over the string str
    for (let i = 0; i < n; i++) {
      // Step 5: Iterate over the string str from i to n
      for (let j = i; j < n; j++) {
        // Step 6: Update the totalsum with the sum of the substring of str from i to j
        totalsum += parseInt(str.substring(i, j + 1));
      }
    }
    // Step 7: Return the totalsum
    return totalsum;
  }
}

// Step 8: Create a new instance of the solution class
let solution = new Solution();
// Step 9: Initialize the str with "123"
let str = "123";
// Step 10: Print the result
console.log(solution.sumOfSubstrings(str));
