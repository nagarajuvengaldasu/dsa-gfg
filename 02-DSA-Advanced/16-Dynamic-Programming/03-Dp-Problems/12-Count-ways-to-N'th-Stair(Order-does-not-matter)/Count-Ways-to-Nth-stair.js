/**
 * Count ways to Nth stair (Order does not matter)
 * Problem: Count the number of ways to reach the Nth stair, where you can take 1 step or 2 steps at a time.
 *
 * Time Complexity: O(1) - constant time
 * Space Complexity: O(1) - constant space
 *
 * KEY INSIGHT: For each stair, you can either take 1 step or 2 steps.
 * The number of ways to reach the Nth stair is the sum of the ways to reach the (N-1)th stair and the (N-2)th stair.
 * This is because you can either take 1 step from the (N-1)th stair or 2 steps from the (N-2)th stair.
 */

class Solution {
  // Step 1: Initialize the solution class
  nthStair(n) {
    // Step 2: Return the number of ways to reach the Nth stair
    return Math.floor(n / 2) + 1;
  }
}
// Step 3: Create a new solution object
// Step 4: Call the nthStair method with the input value
let n = 4;
// Step 5: Create a new solution object
let solution = new Solution();
// Step 6: Call the nthStair method with the input value
console.log(solution.nthStair(n));
// Step 7: Print the result
