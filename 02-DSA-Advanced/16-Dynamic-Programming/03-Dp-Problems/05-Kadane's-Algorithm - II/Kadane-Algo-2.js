/*
Problem: Find the maximum sum of a contiguous subarray
Time Complexity: O(n)
Space Complexity: O(n)
*/

class Solution {
  // Step 1: Initialize the maximumsum function
  maximumsum(arr, sizeofArray) {
    // Step 1.1: Handle base cases
    if (sizeofArray === 0) {
      return 0;
    }
    // Step 1.1.1: Handle base case when sizeofArray is 1
    if (sizeofArray === 1) {
      return arr[0];
    }
    // Step 1.3: Initialize the dp array
    let dp = new Array(sizeofArray);
    // Step 1.3.2: Initialize the dp array
    dp[0] = arr[0];
    // Step 1.3.3: Initialize the dp array
    dp[1] = Math.max(arr[0], arr[1]);
    // Step 1.3.4: Iterate through the array
    for (let i = 2; i < sizeofArray; i++) {
      // Step 1.3.4.1: Calculate the dp array
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i], arr[i]);
    }
    // Step 1.3.4: Return the dp array
    return dp[sizeofArray - 1];
  }
}
// Step 2: Initialize the sol object
let sol = new Solution();
// Step 3: Initialize the arr array
let arr = [1, 2, 3, 4, 5];
// Step 4: Initialize the sizeofArray variable
let sizeofArray = arr.length;
// Step 5: Call the maximumsum function
console.log(sol.maximumsum(arr, sizeofArray));
