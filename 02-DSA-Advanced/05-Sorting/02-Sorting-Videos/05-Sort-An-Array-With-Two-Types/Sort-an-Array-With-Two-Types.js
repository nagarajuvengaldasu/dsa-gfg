// ========== STEP-BY-STEP: Sort Array with Two Types (NAIVE) ==========
// Goal: Segregate two types—e.g. non‑positive (≤0) first, positive (>0) after (or similar).
// Idea: Two passes: first pass push all “type 1” (≤0), second pass push all “type 2” (>0).
//       Time O(n), Space O(n) for the temp array.

function sortArrayWithTwoTypes(arr) {
  let n = arr.length;
  let temp = [];
  // Step 1: First pass — push all elements of type 1 (e.g. ≤ 0)
  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0) {
      temp.push(arr[i]);
    }
  }
  // Step 2: Second pass — push all elements of type 2 (e.g. > 0)
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

// ---------- Example run: arr = [-12, 2, 4, 6, -8, 18, -10, 15] ----------
// Step 1: temp = [-12, -8, -10]
// Step 2: temp = [-12, -8, -10, 2, 4, 6, 18, 15]
// Result: [-12, -8, -10, 2, 4, 6, 18, 15]
let arr = [-12, 2, 4, 6, -8, 18, -10, 15];
console.log(sortArrayWithTwoTypes(arr));