/*
 * ========== PROBLEM STATEMENT ==========
 * MERGE K SORTED ARRAYS
 * Given K sorted arrays, merge them into one sorted array.
 *
 * Example: arr = [[2, 3, 6], [4], [1, 5]] → [1, 2, 3, 4, 5, 6]
 *
 * Approach (Naive - iterative 2-way merge):
 * 1) res = first array.
 * 2) For each remaining array: res = mergeTwoSorted(res, arr[i]).
 * Time: O(n + 2n + 3n + ... + kn)
 */

function mergeTwoSorted(a, b) {
  let res = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {  // Step 1: Merge while both have elements
    if (a[i] <= b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }
  while (i < a.length) res.push(a[i++]);  // Step 2: Append rest of a
  while (j < b.length) res.push(b[j++]);  // Step 3: Append rest of b
  return res;
}

function mergeKSortedNaive(arr) {
  if (arr.length === 0) return [];
  let res = [...arr[0]];  // Step 4: Start with first array
  for (let i = 1; i < arr.length; i++) {
    res = mergeTwoSorted(res, arr[i]);  // Step 5: Merge next array into res
  }
  return res;
}

// Execution: arr=[[2,3,6],[4],[1,5]]
// res=[2,3,6] → merge [4] → [2,3,4,6] → merge [1,5] → [1,2,3,4,5,6]
let arr = [[2, 3, 6], [4], [1, 5]];
console.log(mergeKSortedNaive(arr));  // [1, 2, 3, 4, 5, 6]

console.log(mergeKSortedNaive([[10, 20], [5, 15], [30]]));  // [5, 10, 15, 20, 30]
