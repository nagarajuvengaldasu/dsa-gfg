// ========== STEP-BY-STEP: Subarray with Given Sum (NAIVE) ==========
// Goal: Check if there exists a contiguous subarray that sums to the given target sum.
// Idea: Consider all subarray sums and check for the given sum.
//       For each starting index i, check all subarrays starting at i (ending at j = i, i+1, ..., n-1).
//       Time: O(n²), Aux Space: O(1).

function subarrayzero(arr, sum) {
  let n = arr.length;
  // Step 1: For each starting index i
  for (let i = 0; i < n; i++) {
    let currentsum = 0;
    // Step 2: For each ending index j starting from i
    for (let j = i; j < n; j++) {
      currentsum += arr[j]; // Step 3: Add arr[j] to current sum
      if (currentsum === sum) {
        return true; // Step 4: Found subarray with target sum
      }
    }
  }
  return false; // Step 5: No subarray found
}

// ---------- Example run: arr = [3, 4, 8, 1], sum = 13 ----------
// i=0: subarrays starting at 0 → 3, 3+4=7, 3+4+8=15, 3+4+8+1=16 → none equals 13
// i=1: subarrays starting at 1 → 4, 4+8=12, 4+8+1=13 → found! return true
let arr = [3, 4, 8, 1];
let sum = 13;
console.log(subarrayzero(arr, sum));
