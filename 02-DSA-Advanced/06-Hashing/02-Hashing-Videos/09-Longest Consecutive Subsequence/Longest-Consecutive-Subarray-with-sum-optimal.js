// ========== Longest Consecutive Subsequence (OPTIMAL - Set) ==========
// Goal: Find length of longest consecutive subsequence (e.g. 3,4,5,6).
// Idea: Put all elements in a Set. For each element x, only start counting from x
//       if (x-1) is NOT in the set (so we don't double-count). Then count forward
//       x, x+1, x+2,... as long as they're in the set. Max such count = answer.
//       Time: O(n), Space: O(n).

function longestConsecutiveSubarrayWithSum(arr) {
  // Step 1: Put all elements in a Set for O(1) lookup
  let h = new Set(arr);
  let res = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // Step 2: Only start a run from arr[i] if arr[i]-1 is not present (avoid duplicate runs)
    if (h.has(arr[i] - 1) === false) {
      let curr = 1;
      // Step 3: Count consecutive sequence: arr[i], arr[i]+1, arr[i]+2, ...
      while (h.has(arr[i] + curr)) {
        curr++;
      }
      res = Math.max(res, curr);
    }
  }
  return res;
}

// ---------- Example: arr = [1, 9, 3, 10, 4, 20, 2] ----------
// Set = {1,2,3,4,9,10,20}. Start only at 1 (no 0): 1,2,3,4 → curr=4. Start at 9 (no 8): 9,10 → curr=2. Start at 20: curr=1. res = 4.

let arr = [1, 9, 3, 10, 4, 20, 2];
console.log(longestConsecutiveSubarrayWithSum(arr));
