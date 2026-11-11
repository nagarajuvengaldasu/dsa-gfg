/*
 * PROBLEM STATEMENT:
 * Given an array, return all elements that appear exactly once (non-repeated).
 * Preserve the order of first occurrence.
 *
 * OPTIMAL APPROACH: One pass to build frequency map. Second pass: if freq===1, add.
 *
 * STEP-BY-STEP (arr=[1,1,2,2,3,3,4,5,6,7]):
 * Map: {1:2, 2:2, 3:2, 4:1, 5:1, 6:1, 7:1}
 * i=0..9: arr[0]=1 freq=2 skip, arr[1]=1 skip, ... arr[6]=4 freq=1 push, ...
 * result = [4, 5, 6, 7]
 *
 * EXAMPLE: arr=[1,1,2,2,3,3,4,5,6,7] → [4,5,6,7]
 * Time: O(n) | Space: O(n)
 */
function printNonRepeatedElements(arr, n) {
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    // EXECUTION: Build freq map. (map.get(x)||0)+1 increments count. e.g. map{1:2, 2:2, 4:1...}.
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    if (map.get(arr[i]) === 1) {
      result.push(arr[i]);
      // EXECUTION: freq 1 = non-repeated. Add in original order. e.g. arr[6]=4, freq=1 → push.
    }
  }
  return result;
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7];
let n = arr.length;
console.log(printNonRepeatedElements(arr, n));
