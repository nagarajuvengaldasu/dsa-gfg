/*
 * ========== PROBLEM STATEMENT ==========
 * MERGE K SORTED ARRAYS
 * Given K sorted arrays, merge them into one sorted array.
 *
 * Example: arr = [[2, 3, 6], [1, 5], [4]] → [1, 2, 3, 4, 5, 6]
 *
 * Approach (Super Naive):
 * 1) Concatenate all arrays into res.
 * 2) Sort res.
 * Time: O(N log N), N = total elements
 */

function mergeKSortedSuperNaive(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      res.push(arr[i][j]);  // Step 1: Copy all elements into res
    }
  }
  res.sort((a, b) => a - b);  // Step 2: Sort res
  return res;
}

// Execution: arr=[[2,3,6],[1,5],[4]]
// res = [2,3,6,1,5,4] → sort → [1,2,3,4,5,6]
let arr = [[2, 3, 6], [1, 5], [4]];
console.log(mergeKSortedSuperNaive(arr));  // [1, 2, 3, 4, 5, 6]

// Another example
console.log(mergeKSortedSuperNaive([[10, 20], [5, 15], [30]]));  // [5, 10, 15, 20, 30]
