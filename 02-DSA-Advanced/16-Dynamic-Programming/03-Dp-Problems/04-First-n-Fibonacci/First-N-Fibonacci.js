/*
Problem: Find the first N Fibonacci numbers
Time Complexity: O(n)
Space Complexity: O(n)
*/

class Solution {
  fibonacci(N) {
    // Step 1: Convert N to a number
    let n = Number(N);
    // Step 2: Initialize the result array
    let result = [];
    // Step 3: Handle base cases
    if (n >= 1) {
      // Step 3.1: Push 0 to the result array
      result.push(0n);
    }
    // Step 3.2: Push 1 to the result array
    if (n >= 2) {
      // Step 3.2.1: Push 1 to the result array
      result.push(1n);
    }
    // Step 3.3: Iterate through the result array
    for (let i = 2; i < n; i++) {
      // Step 3.3.1: Push the sum of the two previous numbers to the result array
      result.push(result[i - 1] + result[i - 2]);
    }
    // Step 3.4: Return the result array
    return result;
  }
}
let sol = new Solution();
// Step 4: Initialize the N variable
let N = 10;
// Step 5: Call the fibonacci function
console.log(sol.fibonacci(N));
