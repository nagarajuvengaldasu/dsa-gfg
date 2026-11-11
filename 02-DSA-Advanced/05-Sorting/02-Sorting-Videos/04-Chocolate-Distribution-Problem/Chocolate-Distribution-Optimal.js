// ========== STEP-BY-STEP: Chocolate Distribution (OPTIMAL) ==========
// Goal: Distribute m packets to m students so that (max - min) chocolates given is minimum.
// Idea: After sorting, the best (max-min) always comes from m CONSECUTIVE elements.
//       Slide a window of size m and take min over (arr[i+m-1] - arr[i]). Time: O(n log n).

function chocolateDistribution(arr, m) {
  let n = arr.length;
  // Step 1: Sort ascending so "consecutive m" windows are the only candidates
  arr.sort((a, b) => a - b);
  // Step 2: First window is arr[0..m-1]; diff = arr[m-1] - arr[0]
  let res = arr[m - 1] - arr[0];
  // Step 3: For each starting index i from 1 to n-m, window is arr[i..i+m-1]
  for (let i = 1; i < n - m + 1; i++) {
    let curr = arr[i + m - 1] - arr[i];  // max - min for this window
    res = Math.min(res, curr);            // Step 4: keep the smallest diff
  }
  return res;
}

// ---------- Example run: arr = [7, 3, 2, 4, 9, 12, 56], m = 3 ----------
// Step 1: After sort → [2, 3, 4, 7, 9, 12, 56]
// Step 2: res = arr[2]-arr[0] = 4-2 = 2
// i=1: window [3,4,7] → 7-3=4, res=min(2,4)=2
// i=2: window [4,7,9] → 9-4=5, res=2
// i=3: window [7,9,12] → 12-7=5, res=2
// i=4: window [9,12,56] → 56-9=47, res=2
// Result: 2
let arr = [7, 3, 2, 4, 9, 12, 56];
let m = 3;
console.log(chocolateDistribution(arr, m));
