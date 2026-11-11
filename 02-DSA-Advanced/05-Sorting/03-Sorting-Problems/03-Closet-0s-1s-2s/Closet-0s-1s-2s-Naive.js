// ========== STEP-BY-STEP: Sort Array with Three Types (0s, 1s, 2s) - NAIVE ==========
// Goal: Sort array containing only 0s, 1s, and 2s so order is 0s, then 1s, then 2s.
// Idea: Three passes through the array: first pass collect all 0s, second pass collect all 1s,
//       third pass collect all 2s. Then return the new array. Time O(n), Space O(n).

function closest(arr) {
  let n = arr.length;
  let temp = [];

  // Step 1: First pass — collect all 0s
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      temp.push(arr[i]);
    }
  }

  // Step 2: Second pass — collect all 1s
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      temp.push(arr[i]);
    }
  }

  // Step 3: Third pass — collect all 2s
  for (let i = 0; i < n; i++) {
    if (arr[i] === 2) {
      temp.push(arr[i]);
    }
  }

  return temp;
}

// ---------- Example run: arr = [0, 1, 0, 2, 0, 1, 0] ----------
// Step 1: First pass → temp = [0, 0, 0, 0] (all 0s)
// Step 2: Second pass → temp = [0, 0, 0, 0, 1, 1] (add all 1s)
// Step 3: Third pass → temp = [0, 0, 0, 0, 1, 1, 2] (add all 2s)
// Result: [0, 0, 0, 0, 1, 1, 2]
let arr = [0, 1, 0, 2, 0, 1, 0];
console.log(closest(arr));
