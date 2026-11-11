// ========== Longest Consecutive Subsequence (NAIVE - Sorting) ==========
// Goal: Find length of longest consecutive subsequence (e.g. 1,2,3,4).
// Idea: Sort the array. Then scan and count consecutive runs (arr[i] === arr[i-1] + 1).
//       Time: O(n log n), Space: O(1) (or O(log n) for sort).

function longestConsecutiveSubsequence(arr) {
  // Step 1: Sort so consecutive numbers sit next to each other
  arr.sort((a, b) => a - b);

  let res = 1; // at least one element
  let curr = 1; // current run length

  // Step 2: From index 1, check if arr[i] extends the consecutive run
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      curr++; // Step 3: Consecutive — extend run
    } else {
      res = Math.max(res, curr); // Step 4: Run ended — update max
      curr = 1; // Start new run
    }
  }
  res = Math.max(res, curr); // Step 5: Don't forget last run
  return res;
}

// ---------- Example: arr = [1, 9, 3, 4, 2, 20] → sorted [1,2,3,4,9,20] ----------
// curr: 1→2→3→4, then 9 breaks run, res=4, curr=1; 20 breaks, res=4, curr=1 → return 4

let arr = [1, 9, 3, 4, 2, 20];
console.log(longestConsecutiveSubsequence(arr));
