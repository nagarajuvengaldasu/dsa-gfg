// ========== Count Distinct Elements in Every Window (NAIVE) ==========
// Goal: For each window of size k, output count of distinct elements.
// Idea: For each starting index i, slice window [i..i+k-1], create a Set from it,
//       and output Set size. Time: O(n * k) (slice + set), Space: O(k) per window.

function countDistinctElementsInWindow(arr, k) {
  // Step 1: For each valid starting index i (windows: [0..k-1], [1..k], ..., [n-k..n-1])
  for (let i = 0; i < arr.length - k + 1; i++) {
    // Step 2: Get current window as subarray
    let win = arr.slice(i, i + k);
    // Step 3: Distinct count = size of Set built from window elements
    console.log(new Set(win).size);
  }
}

// ---------- Example: arr = [1,2,1,3,4,2,3], k = 4 ----------
// Window 1: [1,2,1,3] → distinct 3
// Window 2: [2,1,3,4] → distinct 4
// Window 3: [1,3,4,2] → distinct 4
// Window 4: [3,4,2,3] → distinct 3

let arr = [1, 2, 1, 3, 4, 2, 3];
let k = 4;
countDistinctElementsInWindow(arr, k);
