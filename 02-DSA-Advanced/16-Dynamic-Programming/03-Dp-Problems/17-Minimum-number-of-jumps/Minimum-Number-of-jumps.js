/**
 * Minimum Number of Jumps
 * Problem: Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * If it is not possible to reach the last index, return -1.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
// Step 1: Initialize the solution class
class Solution {
  minimumJumps(arr) {
    let n = arr.length;
    // Step 2: If the array is empty, return 0
    if (n < 1) {
      return 0;
    }
    // Step 3: If the first element is 0, return -1
    if (arr[0] === 0) {
      return -1;
    }
    // Step 4: Initialize the jumps, maxreach, and steps
    let jumps = 1;
    // Step 4a: Initialize the maxreach
    let maxreach = arr[0];
    // Step 4b: Initialize the steps
    let steps = arr[0];

    // Step 5: For each element in the array, calculate the minimum number of jumps
    for (let i = 1; i < n; i++) {
      // Step 5a: If the current index is the last index, return the number of jumps
      if (i === n - 1) {
        return jumps;
      }
      // Step 5b: Update the maxreach
      maxreach = Math.max(maxreach, i + arr[i]);
      // Step 5c: Update the steps
      steps--;
      if (steps === 0) {
        // Step 5d: Update the jumps
        jumps++;
        // Step 5e: If the current index is greater than or equal to the maxreach, return -1
        if (i >= maxreach) {
          return -1;
        }
        // Step 5f: Update the steps
        steps = maxreach - i;
      }
    }
    // Step 6: If the last index is not reached, return -1
    return -1;
  }
}
// Step 7: Initialize the solution class
let solution = new Solution();
let arr = [2, 3, 1, 1, 4];
console.log(solution.minimumJumps(arr));
