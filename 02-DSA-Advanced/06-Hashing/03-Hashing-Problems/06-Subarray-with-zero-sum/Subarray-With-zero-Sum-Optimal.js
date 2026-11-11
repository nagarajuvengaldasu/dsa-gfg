/*
 * PROBLEM STATEMENT:
 * Check if the array has any contiguous subarray with sum 0. Return true/false.
 *
 * OPTIMAL APPROACH: Use prefix sum + Set. If prefix_sum repeats or is 0, we have
 * a subarray with sum 0.
 *
 * STEP-BY-STEP (arr=[4, 2, -3, 1, 6]):
 * sum=0, res={}
 * i=0: sum=4, not in res, sum≠0 → add 4
 * i=1: sum=6 → add 6
 * i=2: sum=3 → add 3
 * i=3: sum=4 → 4 in res! return true (subarray [2,-3,1] has sum 0)
 *
 * EXAMPLE: [4,2,-3,1,6] → true
 * EXAMPLE: [1,2,3] → false
 * Time: O(n) | Space: O(n)
 */
function subarrayWithZeroSum(arr, n) {
  let res = new Set();
  // WHY: Store prefix sums. If same sum appears twice, subarray between has sum 0.
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    // EXECUTION: Cumulative sum. e.g. arr=[4,2,-3,1,6] → sum: 4,6,3,4,10.

    if (res.has(sum)) {
      return true;
      // EXECUTION: sum=4 seen again at i=3 → subarray [2,-3,1] has sum 0. Return true.
    }
    if (sum === 0) {
      return true;
      // WHY: Prefix from index 0 has sum 0.
    }
    res.add(sum);
    // EXECUTION: Record this prefix sum for future. res = {4}, {4,6}, {4,6,3}...
  }
  return false;
}
let arr = [4, 2, -3, 1, 6];
let n = arr.length;
console.log(subarrayWithZeroSum(arr, n));
