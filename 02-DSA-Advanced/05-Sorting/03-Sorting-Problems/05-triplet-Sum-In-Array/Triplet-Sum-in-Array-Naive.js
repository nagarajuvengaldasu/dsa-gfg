// ========== STEP-BY-STEP: Triplet Sum in Array (NAIVE) ==========
// Goal: Return true if there exist three distinct indices i < j < k such that arr[i] + arr[j] + arr[k] === target.
// Idea: Try every triple (i, j, k) with i < j < k. If any triple sums to target, return true. Time O(n³).

function tripletSumInArray(arr, target) {
  let n = arr.length;
  // Step 1: Fix first element index i
  for (let i = 0; i < n - 2; i++) {
    // Step 2: Fix second element index j (j > i)
    for (let j = i + 1; j < n - 1; j++) {
      // Step 3: Fix third element index k (k > j)
      for (let k = j + 1; k < n; k++) {
        // Step 4: If this triple sums to target, we found one
        if (arr[i] + arr[j] + arr[k] === target) {
          return true;
        }
      }
    }
  }
  return false; // Step 5: no triple found
}

// ---------- Example run: arr = [4, 20, 10, 3, 6, 7], target = 24 ----------
// i=0: (4,20,10)=34, (4,20,3)=27, (4,20,6)=30, (4,20,7)=31; (4,10,3)=17, (4,10,6)=20, (4,10,7)=21;
//       (4,3,6)=13, (4,3,7)=14; (4,6,7)=17
// i=1: (20,10,3)=33, (20,10,6)=36, (20,10,7)=37; (20,3,6)=29, (20,3,7)=30; (20,6,7)=33
// i=2: (10,3,6)=19, (10,3,7)=20; (10,6,7)=23
// i=3: (3,6,7)=16 → none equals 24. Return false.
// (If target were 17: (4,3,10)=17 → return true.)
let arr = [4, 20, 10, 3, 6, 7];
let target = 24;
console.log(tripletSumInArray(arr, target));
