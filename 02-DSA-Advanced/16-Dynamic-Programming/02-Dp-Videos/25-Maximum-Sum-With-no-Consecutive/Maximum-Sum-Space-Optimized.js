/*
MAXIMUM SUM WITH NO CONSECUTIVE - Space Optimized Solution
Problem: Given an array of integers, find the maximum sum of non-consecutive elements.
Time Complexity: O(n) - linear, as we traverse the array once
Space Complexity: O(1) - constant space, as we only use two variables
*/

function maxSum(arr) {
  let n = arr.length;
  // Step 1: Initialize the base cases
  if (n === 1) {
    // If there is only one element, return it
    return arr[0];
  }
  // Step 2: Initialize the previous two elements
  // prev_prev = arr[0] because the maximum sum of non-consecutive elements up to index 0 is the first element itself
  // prev = Math.max(arr[0], arr[1]) because the maximum sum of non-consecutive elements up to index 1 is the maximum of the first two elements
  let prev_prev = arr[0];
  // prev = Math.max(arr[0], arr[1]) because the maximum sum of non-consecutive elements up to index 1 is the maximum of the first two elements
  let prev = Math.max(arr[0], arr[1]);
  // Step 3: Initialize the result
  // res = prev because the maximum sum of non-consecutive elements up to index 1 is the maximum of the first two elements
  let res = prev;
  // Step 4: Fill the rest of the array
  // For each index i, we need to find the maximum sum of non-consecutive elements up to index i
  // We can either exclude the current element and take the maximum sum up to index i-1
  // Or we can include the current element and take the maximum sum up to index i-2 plus the current element
  for (let i = 3; i <= n; i++) {
    // Step 4a: Calculate the maximum sum of non-consecutive elements up to index i
    // We take the maximum of the two possibilities
    // 1. Exclude the current element and take the maximum sum up to index i-1
    // 2. Include the current element and take the maximum sum up to index i-2 plus the current element
    res = Math.max(prev, prev_prev + arr[i - 1]);
    // Step 4b: Update the previous two elements
    // prev_prev = prev because the maximum sum of non-consecutive elements up to index i-1 is the maximum of the previous two elements
    // prev = res because the maximum sum of non-consecutive elements up to index i is the maximum of the previous two elements
    prev_prev = prev;
    prev = res;
  }
  // Step 4c: Return the maximum sum of non-consecutive elements up to index n
  return res;
}
let arr = [10, 20, 30, 40, 50];
console.log(maxSum(arr));
