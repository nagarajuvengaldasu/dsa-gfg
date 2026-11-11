/*
Problem: Find the number of unique paths in a grid
Time Complexity: O(n)
Space Complexity: O(1)
*/

class Solution {
  // Step 1: Initialize the numberOfUniquePaths function
  numberOfUniquePaths(a, b) {
    // Step 1.1: Initialize the n variable
    let n = a + b - 2;
    // Step 1.2: Initialize the r variable
    let r = Math.min(a - 1, b - 1);
    // Step 1.3: Initialize the result variable
    let result = 1;
    // Step 1.4: Iterate through the loop
    for (let i = 1; i <= r; i++) {
      result = result * (n - r + i) / i;
    }
    // Step 1.5: Return the result
    return Math.round(result);
  }
}
// Step 2: Initialize the sol object
let sol = new Solution();
// Step 3: Initialize the a variable
let a = 2;
let b = 2;
console.log(sol.numberOfUniquePaths(a, b));
