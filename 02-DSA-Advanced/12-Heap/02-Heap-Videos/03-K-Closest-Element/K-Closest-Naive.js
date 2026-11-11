/*
 * ========== PROBLEM STATEMENT ==========
 * K CLOSEST ELEMENTS
 * Given array arr, target X, and K: find K elements in arr closest to X
 * (smallest absolute difference |arr[i] - X|).
 *
 * Example: arr = [10, 30, 40, 38, 80], X = 35, K = 3 → [38, 30, 40]
 * (diffs: 25, 5, 5, 3, 45 → closest are 38(3), 30(5), 40(5))
 *
 * Approach (Naive):
 * 1) diff[i] = [|arr[i]-X|, i]
 * 2) Sort diff by difference
 * 3) Return arr at first K indices
 * Time: O(n log n)
 */

function kClosestNaive(arr, x, k) {
  if (k <= 0 || arr.length === 0) return [];
  if (k >= arr.length) return [...arr];

  let diff = arr.map((val, i) => [Math.abs(val - x), i]);  // Step 1: [[25,0],[5,1],[5,2],[3,3],[45,4]]
  diff.sort((a, b) => a[0] - b[0]);  // Step 2: Sort by diff → [[3,3],[5,1],[5,2],[25,0],[45,4]]
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[diff[i][1]]);  // Step 3: arr[3]=38, arr[1]=30, arr[2]=40
  }
  return result;
}

// Execution: arr=[10,30,40,38,80], x=35, k=3
// diff = [[25,0],[5,1],[5,2],[3,3],[45,4]] → sorted [[3,3],[5,1],[5,2],...]
// result = [arr[3], arr[1], arr[2]] = [38, 30, 40]
let arr = [10, 30, 40, 38, 80];
let x = 35;
let k = 3;
console.log(kClosestNaive(arr, x, k));  // [38, 30, 40]
