/*
Problem: Find the nth Fibonacci number
Time Complexity: O(n)
Space Complexity: O(n)
*/

class Solution {
  findnthfibonacci(n) {
    // Step 1: Convert n to BigInt
    n = BigInt(n);
    // Step 2: Handle base cases
    if (n == 0n) {
      // Step 2.1: Return 0 for n = 0
      return 0n;
    }
    if (n === 1n) {
      // Step 2.2: Return 1 for n = 1
      return 1n;
    }
    // Step 3: Initialize dp array
    let dp = new Array(Number(n) + 1);

    // Step 3.1: Initialize base cases
    dp[0] = 0n;
    // Step 3.1.1: Initialize base case for n = 1
    dp[1] = 1n;

    // Step 3.2: Fill dp array using recurrence relation
    for (let i = 2; i <= Number(n); i++) {
      // Step 3.2.1: Fill dp array using recurrence relation
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    // Step 3.2.2: Return the nth Fibonacci number
    return dp[Number(n)];
  }
}

let sol = new Solution();
let n = 7;
console.log(sol.findnthfibonacci(n));
