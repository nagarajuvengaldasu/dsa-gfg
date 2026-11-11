/**
 * Count Number of Hops
 * Problem: Count the number of ways to reach the Nth stair, where you can take 1 step, 2 steps, or 3 steps at a time.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * KEY INSIGHT: Use dynamic programming to store the number of ways to reach the Nth stair.
 */

class Solution {
  // Step 1: Initialize the solution class
  countWays(n) {
    // Step 2: If the number of steps is 1, return 1
    if (n === 1) {
      return 1;
    }
    // Step 3: If the number of steps is 2, return 2
    if (n === 2) {
      return 2;
    }
    // Step 4: If the number of steps is 3, return 4
    if (n === 3) {
      return 4;
    }
    // Step 5: Initialize the previous steps
    let prev3 = 1;
    let prev2 = 2;
    let prev1 = 4;
    let current = 0;

    // Step 6: For each step, calculate the number of ways to reach the Nth stair
    for (let i = 4; i <= n; i++) {
      current = prev1 + prev2 + prev3;
      // Step 7: Update the previous steps
      prev3 = prev2;
      prev2 = prev1;
      prev1 = current;
    }
    // Step 8: Return the number of ways to reach the Nth stair
    return current;
  }
}
// Step 9: Create a new solution object
let n = 2;
// Step 10: Create a new solution object
let solution = new Solution();
console.log(solution.countWays(n));
