/**
 * Max Sum Subarray by Removing at Most One Element
 * Problem: Given an array, find the maximum sum of a subarray by removing at most one element.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
class Solution {
  maxSumSubarray(arr) {
    // Step 1: Initialize the n with the length of the array
    let n = arr.length;
    // Step 2: Check if the length of the array is 1
    if (n === 1) return arr[0];
    // Step 3: Initialize the skip0 with the first element of the array
    let skip0 = arr[0];
    // Step 4: Initialize the skip1 with the first element of the array
    let skip1 = arr[0];
    // Step 5: Initialize the result with the first element of the array
    let result = arr[0];
    // Step 6: Iterate over the array
    for (let i = 1; i < n; i++) {
      // Step 7: Calculate the new skip0
      const newskip0 = Math.max(arr[i], skip0 + arr[i]);
      // Step 8: Calculate the new skip1
      const newskip1 = Math.max(skip0, skip1 + arr[i]);
      // Step 9: Update the result with the maximum of the new skip0 and new skip1

      // Step 10: Update the result with the maximum of the new skip0 and new skip1
      result = Math.max(result, newskip0, newskip1);
      // Step 11: Update the skip0 with the new skip0
      // Step 12: Update the skip1 with the new skip1
      skip0 = newskip0;
      // Step 13: Update the skip1 with the new skip1
      skip1 = newskip1;
    }
    return result;
  }
}
// Step 14: Create a new instance of the solution class
let solution = new Solution();
// Step 15: Initialize the arr with [1, -2, 3, -1, 2]
let arr = [1, -2, 3, -1, 2];
// Step 16: Print the result
console.log(solution.maxSumSubarray(arr));
