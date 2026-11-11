// ========== STEP-BY-STEP: Number of Pairs (NAIVE) ==========
// Problem: Given arrays arr[] and brr[], count pairs (x, y) where
//          x ∈ arr, y ∈ brr and x^y > y^x.
// Naive idea: Try every pair (arr[i], brr[j]) and check the inequality
//             using Math.pow. Time O(n * m).

function numberOfPairs(arr, brr) {
  let count = 0;
  let n = arr.length;
  let m = brr.length;

  // Step 1: Loop over every element x = arr[i]
  for (let i = 0; i < n; i++) {
    // Step 2: For this x, loop over every element y = brr[j]
    for (let j = 0; j < m; j++) {
      // Step 3: Check if x^y > y^x
      if (Math.pow(arr[i], brr[j]) > Math.pow(brr[j], arr[i])) {
        count++; // Step 4: If true, increment the pair count
      }
    }
  }
  // Step 5: Return total count of valid pairs
  return count;
}

// ---------- Example run: arr = [2, 3, 4, 5], brr = [1, 2, 3] ----------
// Pairs (x,y):
// (2,1): 2^1 = 2, 1^2 = 1  → 2 > 1  → count++
// (2,2): 2^2 = 4, 2^2 = 4  → 4 > 4? no
// (2,3): 2^3 = 8, 3^2 = 9  → 8 > 9? no
// (3,1): 3^1 = 3, 1^3 = 1  → 3 > 1  → count++
// (3,2): 3^2 = 9, 2^3 = 8  → 9 > 8  → count++
// (3,3): 3^3 = 27, 3^3 = 27 → equal → no
// (4,1): 4^1 = 4, 1^4 = 1  → 4 > 1  → count++
// (4,2): 4^2 = 16, 2^4 = 16 → equal → no
// (4,3): 4^3 = 64, 3^4 = 81 → 64 > 81? no
// (5,1): 5^1 = 5, 1^5 = 1  → 5 > 1  → count++
// (5,2): 5^2 = 25, 2^5 = 32 → 25 > 32? no
// (5,3): 5^3 = 125, 3^5 = 243 → 125 > 243? no
// Final count = 5

let arr = [2, 3, 4, 5];
let brr = [1, 2, 3];
console.log(numberOfPairs(arr, brr));
