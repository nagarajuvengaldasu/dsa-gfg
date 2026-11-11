/*
 * PROBLEM STATEMENT:
 * Count the number of contiguous subarrays with equal number of 0s and 1s.
 *
 * NAIVE APPROACH: For each start i, extend j and count zeros/ones. When equal, count++.
 *
 * STEP-BY-STEP (arr=[1,0,0,1,0,1,1]):
 * i=0: [1] 0s=0,1s=1; [1,0] 1,1 equal→count=1; [1,0,0] 2,1; [1,0,0,1] 2,2→count=2; ...
 * i=1: [0] 1,0; [0,0] 2,0; [0,0,1] 2,1 equal→count=3; ...
 * ... (continue for all i,j)
 * Total: 9
 *
 * EXAMPLE: [1,0,0,1,0,1,1] → 9
 * Time: O(n²) | Space: O(1)
 */
function countequalzeroone(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let zeros = 0;
    let ones = 0;
    // WHY: For each start i, count 0s and 1s as we extend j.
    for (let j = i; j < n; j++) {
      if (arr[j] === 0) {
        zeros++;
      } else {
        ones++;
      }
      if (zeros === ones) {
        count++;
        // EXECUTION: Subarray [i..j] has equal 0s and 1s. e.g. [1,0] → zeros=1, ones=1.
      }
    }
  }
  return count;
}
let arr = [1, 0, 0, 1, 0, 1, 1];
let n = arr.length;
console.log(countequalzeroone(arr, n));
