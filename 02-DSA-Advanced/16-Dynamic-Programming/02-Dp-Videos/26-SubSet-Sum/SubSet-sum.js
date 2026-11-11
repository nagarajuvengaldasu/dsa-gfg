/*
SUBSET SUM PROBLEM - Count number of subsets with given sum
Problem: Given an array of integers and a target sum, count the number of subsets
(non-empty or empty) whose elements sum to the target value.
Time Complexity: O(2^n) - exponential, as we explore all possible subsets
Space Complexity: O(n) - maximum depth of recursion stack is n
*/

function countss(arr, n, sum) {
  // Step 1: Base Case - If we've processed all elements (n === 0)
  // Check if the remaining sum is exactly 0
  // - If sum === 0: We found a valid subset, return 1 (count this subset)
  // - If sum !== 0: This path doesn't lead to a valid subset, return 0
  // Example: n=0, sum=0 → return 1 (empty subset sums to 0)
  //          n=0, sum=5 → return 0 (no way to get sum 5 with 0 elements)
  if (n === 0) {
    return sum === 0 ? 1 : 0;
  }
  // Step 2: Recursive Case - For the current element arr[n-1], we have two choices:
  //
  // Choice 1: Exclude arr[n-1] from the subset
  //   - Don't use the last element
  //   - Recursively solve for remaining n-1 elements with the same sum
  //   - Call: countss(arr, n-1, sum)
  //   Example: arr=[10,20,15], sum=30, n=3
  //            Exclude 15, solve for [10,20] with sum=30
  //
  // Choice 2: Include arr[n-1] in the subset
  //   - Use the last element (arr[n-1])
  //   - Reduce the target sum by arr[n-1]
  //   - Recursively solve for remaining n-1 elements with reduced sum
  //   - Call: countss(arr, n-1, sum - arr[n-1])
  return countss(arr, n - 1, sum) + countss(arr, n - 1, sum - arr[n - 1]);
}
// Step 3: Return the total count of subsets that sum to the target value
// - Sum the counts from both choices (excluding + including)
// - This explores all possible subsets and counts those that sum to target
let arr = [10, 20, 15];
let n = arr.length;
let sum = 30;
console.log(countss(arr, n, sum));
