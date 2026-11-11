/**
 * Equal Sum Partition
 * Problem: Given an array of integers, check if it can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 *
 * Time Complexity: O(n*sum)
 * Space Complexity: O(sum)
 */

class Solution {
  findPartition(a, n) {
    // Step 1: Initialize the totalsum with the sum of the array a
    let totalsum = a.reduce((sum, num) => sum + num, 0);
    // Step 2: Check if the totalsum is not divisible by 2
    if (totalsum % 2 !== 0) {
      return false;
    }
    // Step 3: Initialize the target with the totalsum divided by 2
    const target = totalsum / 2;
    // Step 4: Initialize the dp array with the target + 1 elements and fill it with false
    const dp = new Array(target + 1).fill(false);
    // Step 5: Initialize the dp array with true at index 0
    dp[0] = true;

    // Step 6: Iterate over the array a
    for (let i = 0; i < n; i++) {
      // Step 7: Iterate over the target from target to a[i]
      for (let j = target; j >= a[i]; j--) {
        // Step 8: Check if the dp array at index j - a[i] is true
        if (dp[j - a[i]]) {
          // Step 9: Update the dp array at index j with true
          dp[j] = true;
        }
      }
    }
    // Step 10: Return the dp array at index target
    return dp[target];
  }
}

// Step 11: Create a new instance of the solution class
// Step 12: Initialize the findPartition function with a and n
// Step 13: Initialize the a with [1, 5, 11, 5]
// Step 14: Initialize the n with the length of a
// Step 15: Print the result
let solution = new Solution();
let a = [1, 5, 11, 5];
let n = a.length;
console.log(solution.findPartition(a, n));
