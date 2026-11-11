/**
 * Stickler Thief
 * Problem: Given an array of integers, find the maximum amount of money you can rob without robbing two adjacent houses.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
// Step 1: Initialize the solution class
// Step 2: Initialize the sticklerThief function with arr
class Solution {
  sticklerThief(arr) {
    // Step 3: Initialize the n with the length of the array
    let n = arr.length;
    // Step 4: Check if the array is empty
    if (n === 0) return 0;
    // Step 5: Check if the array has only one element
    if (n === 1) return arr[0];
    // Step 6: Initialize the prev2 with the first element of the array
    let prev2 = arr[0];
    // Step 7: Initialize the prev1 with the maximum of the first two elements of the array
    let prev1 = Math.max(arr[0], arr[1]);
    // Step 8: Initialize the curr with the maximum of the prev1 and the sum of the prev2 and the current element
    for (let i = 2; i < n; i++) {
      // Step 9: Initialize the curr with the maximum of the prev1 and the sum of the prev2 and the current element
      let curr = Math.max(prev1, prev2 + arr[i]);
      // Step 10: Update the prev2 with the prev1
      prev2 = prev1;
      // Step 11: Update the prev1 with the curr
      prev1 = curr;
    }
    // Step 12: Return the prev1
    return prev1;
  }
}

// Step 2: Create a new instance of the solution class
// Step 3: Initialize the sticklerThief function with arr
// Step 4: Print the result
let solution = new Solution();
// Step 5: Initialize the arr with [5, 5, 10, 100, 10, 5]
let arr = [5, 5, 10, 100, 10, 5];
console.log(solution.sticklerThief(arr));
