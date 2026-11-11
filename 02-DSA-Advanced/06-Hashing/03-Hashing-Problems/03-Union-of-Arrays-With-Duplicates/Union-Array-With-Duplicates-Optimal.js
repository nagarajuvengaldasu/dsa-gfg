/*
 * PROBLEM STATEMENT:
 * Find union of two arrays (with duplicates). Return array of unique elements
 * present in either array.
 *
 * OPTIMAL APPROACH: Use Set - add all elements from a[] and b[] to a Set,
 * then convert to array.
 *
 * STEP-BY-STEP (a=[1,2,1,1,2], b=[2,2,1,2,1]):
 * res = Set(a) → {1, 2}
 * Add b: 2→already in, 2→in, 1→in, 2→in, 1→in
 * Array.from(res) → [1, 2]
 *
 * EXAMPLE: a=[1,2,1,1,2], b=[2,2,1,2,1] → [1, 2]
 * Time: O(n+m) | Space: O(n+m)
 */
function unionOfArraysWithDuplicates(a, b) {
  let n = a.length;
  let m = b.length;
  let res = new Set(a);
  // WHY: Set stores unique values. new Set(a) adds all from a[], auto-removing duplicates.
  // EXECUTION: Set(a) for [1,2,1,1,2] → {1, 2}.
  for (let i = 0; i < m; i++) {
    res.add(b[i]);
    // EXECUTION: add() ignores if already in Set. b=[2,2,1,2,1] → Set stays {1,2}.
  }
  return Array.from(res);
  // WHY: Convert Set to array for return. [1, 2].
}
let a = [1, 2, 1, 1, 2];
let b = [2, 2, 1, 2, 1];
console.log(unionOfArraysWithDuplicates(a, b));
