/**
 * PROBLEM STATEMENT: Count Distinct Rows in a Binary Matrix
 * --------------------------------------------------------
 * Given a binary matrix (2D array of 0s and 1s), count how many rows are distinct.
 * Two rows are the same if they have the same length and identical values at every index.
 *
 * Input (I/p): mat — 2D array, e.g. [[1,0,0], [1,1,1], [1,0,0], [1,1,1]]
 * Output (O/p): Number of distinct rows. Example above → 2 (only [1,0,0] and [1,1,1] are unique).
 *
 * NAIVE APPROACH:
 * 1. Initialize res = 0.
 * 2. For each row i, if it does not match any previous row (0 to i-1), then res = res + 1.
 * 3. Return res.
 * Time: O(R^2 * C), Space: O(1) excluding input.
 */

// Returns true only if rowA and rowB have same length and same value at every index
function rowsEqual(rowA, rowB) {
  if (rowA.length !== rowB.length) return false; // different lengths → not equal
  for (let j = 0; j < rowA.length; j++) {
    if (rowA[j] !== rowB[j]) return false;        // first mismatch → not equal
  }
  return true;                                    // all elements matched → equal
}

function countDistinctRows(mat) {
  let res = 0;                                    // Step 1: initialize result (count of distinct rows)
  const R = mat.length;                           // number of rows
  for (let i = 0; i < R; i++) {                  // Step 2: traverse each row
    let found = false;                            // whether current row matches any previous row
    for (let p = 0; p < i; p++) {                // compare with all previous rows (0 to i-1)
      if (rowsEqual(mat[i], mat[p])) {
        found = true;                             // current row already seen → not distinct
        break;                                    // no need to check more previous rows
      }
    }
    if (!found) res = res + 1;                    // no match in previous rows → distinct, increment res
  }
  return res;                                     // Step 3: return count of distinct rows
}

// Example 1: mat = [[1,0,0], [1,1,1], [1,0,0], [1,1,1]] → O/p: 2
let mat1 = [
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];
console.log(countDistinctRows(mat1));            // 2

// Example 2: mat = [[1,0,0], [1,0,0]] → O/p: 1
let mat2 = [
  [1, 0, 0],
  [1, 0, 0],
];
console.log(countDistinctRows(mat2));            // 1
