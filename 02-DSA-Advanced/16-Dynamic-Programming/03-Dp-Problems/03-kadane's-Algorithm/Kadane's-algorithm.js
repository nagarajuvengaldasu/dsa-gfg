/*
Problem: Find the maximum sum of a contiguous subarray.
Time Complexity: O(n)
Space Complexity: O(n)
*/

class Solution {
  // Step 1: Initialize the dp array
  maximum(arr, sizeofArray) {
    // Step 1.1: Initialize the dp array
    let dp = new Array(sizeofArray);
    // Step 1.2: Initialize the base case
    dp[0] = arr[0];
    // Step 1.3: Initialize the maxoverall variable
    let maxoverall = dp[0];
    // Step 1.4: Iterate through the array
    for (let i = 1; i < sizeofArray; i++) {
      // Step 1.4.1: Calculate the dp[i] value
      dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
      // Step 1.4.2: Update the maxoverall variable
      maxoverall = Math.max(maxoverall, dp[i]);
    }
    // Step 1.5: Print the dp array
    console.log(dp.join(" "));
    // Step 1.6: Return the maxoverall variable
    return maxoverall;
  }
}

let sol = new Solution();
// Step 2: Initialize the arr array
let arr = [1, -2, 3, -1, 2];
// Step 3: Initialize the sizeofArray variable
let sizeofArray = arr.length;
// Step 4: Call the maximum function
console.log(sol.maximum(arr, sizeofArray));
