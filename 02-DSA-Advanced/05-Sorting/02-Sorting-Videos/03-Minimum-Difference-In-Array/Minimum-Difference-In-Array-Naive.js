// ========== STEP-BY-STEP: Minimum Difference (Naive) ==========
// Goal: Find the minimum absolute difference between any two elements.
// Idea: Check every pair (i, j) with j > i; track the minimum |arr[i] - arr[j]|.

function minimumDifference(arr) {
  // Step 1: n = length; res = current minimum (start with Infinity so any diff is smaller)
  let n = arr.length;
  let res = Infinity;

  for (let i = 0; i < n; i++) {
    // Step 2: For each first element arr[i], check all pairs (arr[i], arr[j]) with j > i
    for (let j = i + 1; j < n; j++) {
      // Step 3: Compute |arr[i] - arr[j]| and update res if it's smaller
      res = Math.min(res, Math.abs(arr[i] - arr[j]));
    }
  }
  return res;
}

// ---------- Example run: arr = [10, 8, 1, 4] ----------
// i=0: pairs (10,8)→2, (10,1)→9, (10,4)→6  → res = 2
// i=1: pairs (8,1)→7,  (8,4)→4              → res stays 2
// i=2: pairs (1,4)→3                         → res stays 2
// i=3: no j (j starts at 4, n=4)
// Result: 2

let arr = [5,3,8,7];
console.log(minimumDifference(arr));
