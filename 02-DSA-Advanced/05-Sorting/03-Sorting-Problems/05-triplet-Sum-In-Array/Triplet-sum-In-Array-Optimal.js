// ========== STEP-BY-STEP: Triplet Sum in Array (OPTIMAL) ==========
// Goal: Check if there exist three distinct indices i < j < k such that
//       arr[i] + arr[j] + arr[k] === target.
// Idea: Sort the array, then for each i, use the 2‑pointer technique on the
//       subarray (i+1 .. n-1) to find a pair that, with arr[i], sums to target.
//       Time O(n²): outer loop over i (O(n)) and inner 2‑pointer loop (O(n)).

function tripletSumInArray(arr, target) {
  // Step 1: Sort array so we can use 2‑pointer for the pair sum
  arr.sort((a, b) => a - b);
  let n = arr.length;

  // Step 2: Fix first element index i, then search for a pair (j, k)
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;      // left pointer
    let k = n - 1;      // right pointer
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum === target) {
        return true;    // Step 3a: found a triplet
      } else if (sum < target) {
        j++;            // Step 3b: need larger sum → move left pointer right
      } else {
        k--;            // Step 3c: sum too big → move right pointer left
      }
    }
  }
  return false;         // Step 4: no triplet found
}

// ---------- Example idea ----------
// arr = [100, 149, 21, 103], target = 352
// After sort: [21, 100, 103, 149]
// i=0 (21): 2‑pointer on [100,103,149] → no triple = 352
// i=1 (100): j=2 (103), k=3 (149) → 100+103+149 = 352 → return true

let arr = [100, 149, 21, 103, 352];
let target = 300;
console.log(tripletSumInArray(arr, target));
