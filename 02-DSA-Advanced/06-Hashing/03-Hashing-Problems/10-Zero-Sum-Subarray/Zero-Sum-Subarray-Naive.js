/*
 * PROBLEM STATEMENT:
 * Count the number of contiguous subarrays with sum 0.
 *
 * NAIVE APPROACH: For each starting index i, compute sum for j=i to n-1.
 * Whenever sum===0, increment count.
 *
 * STEP-BY-STEP (arr=[0,0,5,5,0,0]):
 * i=0: j=0 sum=0 count=1; j=1 sum=0 count=2; j=2 sum=5; j=3 sum=10; j=4 sum=10; j=5 sum=10
 * i=1: j=1 sum=0 count=3; j=2 sum=5; ...
 * ... (similar for all i)
 * Total: 6
 *
 * EXAMPLE: [0,0,5,5,0,0] → 6
 * Time: O(n²) | Space: O(1)
 */
function zeroSumSubarraycount(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    // WHY: For each start i, extend j and track sum of [i..j].
    for (let j = i; j < n; j++) {
      sum = sum + arr[j];
      if (sum === 0) {
        count++;
        // EXECUTION: Subarray [i..j] has sum 0. e.g. i=0,j=0: sum=0 → count=1.
      }
    }
  }
  return count;
}
let arr = [0, 0, 5, 5, 0, 0];
let n = arr.length;
console.log(zeroSumSubarraycount(arr, n));
