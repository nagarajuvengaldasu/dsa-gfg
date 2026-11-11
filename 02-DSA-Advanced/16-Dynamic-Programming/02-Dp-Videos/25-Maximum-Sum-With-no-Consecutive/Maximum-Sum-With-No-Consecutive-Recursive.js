/*
MAXIMUM SUM WITH NO CONSECUTIVE - Recursive Solution
Problem: Given an array of integers, find the maximum sum of non-consecutive elements.
Time Complexity: O(2^n) - exponential, as we explore all possible subsets
Space Complexity: O(n) - maximum depth of recursion stack is n
*/
function maxSum(arr, n) {
  // Step 1: Base Case - If there is only one element, return it
  if (n === 1) {
    // If there is only one element, return it
    return arr[0];
  }
  // Step 2: Base Case - If there are two elements, return the maximum of the two
  if (n === 2) {
    // If there are two elements, return the maximum of the two
    return Math.max(arr[0], arr[1]);
  }
  // Step 3: Recursive Case - Return the maximum of the two possibilities
  // 1. Exclude the last element
  // 2. Include the last element
  return Math.max(maxSum(arr, n - 1), arr[n - 1] + maxSum(arr, n - 2));
}
let arr = [10, 20, 30, 40, 50];
let n = arr.length;
console.log(maxSum(arr, n));
