/*
Problem: Find the nth Fibonacci number
Time Complexity: O(n)
Space Complexity: O(n)
*/

class Solution {
  // Step 1: Convert N to a number
  findnthfibonacci(N, dp) {
    // Step 1.1: Convert N to a number
    let n = Number(N);
    // Step 1.2: Handle base cases
    if (n <= 2) {
      // Step 1.2.1: Return 1 for n = 1 or n = 2
      return 1;
    }
    // Step 1.3: Check if the result is already in the dp array
    if (dp[n]) {
      // Step 1.3.1: Return the result from the dp array
      return dp[n];
    }
    // Step 1.4: Calculate the result using the recurrence relation
    const result =
      this.findnthfibonacci(n - 1, dp) + this.findnthfibonacci(n - 2, dp);

    // Step 1.4.1: Store the result in the dp array
    dp[n] = result;

    // Step 1.4.2: Return the result
    return result;
  }
}

let sol = new Solution();
let N = 7;
let dp = new Array(Number(N) + 1); // Creates array with length N
console.log(sol.findnthfibonacci(N, dp));
