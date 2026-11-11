/*
MAXIMUM SUM WITH NO CONSECUTIVE - Dynamic Programming Solution
Problem: Given an array of integers, find the maximum sum of non-consecutive elements.
Time Complexity: O(n) - linear, as we traverse the array once
Space Complexity: O(n) - additional space for the dp array
*/

function maxSum(arr) {
  // Step 1: Initialize the base cases
  // If there is only one element, return it
  let n = arr.length;
  if (n === 1) {
    // If there is only one element, return it
    return arr[0];
  }
  // Step 2: Create a dp array to store the results of subproblems
  // dp[i] represents the maximum sum of non-consecutive elements up to index i
  let dp = new Array(n + 1);
  // Step 3: Initialize the first two elements of the dp array
  // dp[1] = arr[0] because the maximum sum of non-consecutive elements up to index 1 is the first element itself
  // dp[2] = Math.max(arr[0], arr[1]) because the maximum sum of non-consecutive elements up to index 2 is the maximum of the first two elements
  dp[1] = arr[0];
  // Step 3a: Initialize the second element of the dp array
  // dp[2] = Math.max(arr[0], arr[1]) because the maximum sum of non-consecutive elements up to index 2 is the maximum of the first two elements
  dp[2] = Math.max(arr[0], arr[1]);

  // Step 4: Fill the rest of the dp array
  // For each index i, we need to find the maximum sum of non-consecutive elements up to index i
  // We can either exclude the current element and take the maximum sum up to index i-1
  // Or we can include the current element and take the maximum sum up to index i-2 plus the current element
  for (let i = 3; i <= n; i++) {
    // Step 4a: Calculate the maximum sum of non-consecutive elements up to index i
    // We take the maximum of the two possibilities
    // 1. Exclude the current element and take the maximum sum up to index i-1
    // 2. Include the current element and take the maximum sum up to index i-2 plus the current element
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i - 1]);
  }
  // Step 4b: Return the maximum sum of non-consecutive elements up to index n
  return dp[n];
}

let arr = [10, 20, 30, 40, 50];
console.log(maxSum(arr));
