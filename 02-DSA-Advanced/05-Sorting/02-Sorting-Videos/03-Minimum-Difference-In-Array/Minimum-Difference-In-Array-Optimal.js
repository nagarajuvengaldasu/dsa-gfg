// ========== STEP-BY-STEP: Minimum Difference (Optimal) ==========
// Goal: Find the minimum absolute difference between any two elements.
// Idea: After sorting, the min difference is always between two consecutive elements.
//       So we only check arr[i] - arr[i-1] for i = 1..n-1. O(n log n) from sort.

function minimumDifference(arr) {
  // Step 1: n = length; res = current minimum (Infinity so any diff is smaller)
  let n = arr.length;
  let res = Number.POSITIVE_INFINITY;
  // Step 2: Sort ascending so consecutive elements are the closest candidates
  arr.sort((a, b) => a - b);
  // Step 3: For each index i from 1 to n-1, check diff with previous element
  for (let i = 1; i < n; i++) {
    // Step 4: Update res with the smaller of res and |arr[i] - arr[i-1]|
    res = Math.min(res, Math.abs(arr[i] - arr[i - 1]));
  }
  return res;
}

// ---------- Example run: arr = [10, 8, 1, 4] ----------
// Step 2: After sort → [1, 4, 8, 10]
// i=1: |4-1|=3   → res = 3
// i=2: |8-4|=4   → res = min(3,4) = 3
// i=3: |10-8|=2  → res = min(3,2) = 2
// Result: 2

let arr = [10, 8, 1, 4];
console.log(minimumDifference(arr));
