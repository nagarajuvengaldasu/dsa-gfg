// ========== STEP-BY-STEP: Sort Array with Three Types (NAIVE) ==========
// Goal: Sort array containing only 0s, 1s, and 2s so order is 0s, then 1s, then 2s (e.g. [0,0,1,1,2,2]).
// Idea: Three passes: first push all 0s, then all 1s, then all 2s. Time O(n), Space O(n).

function sortArrayWithThreeTypes(arr) {
  let n = arr.length;
  let temp = [];
  // Step 1: First pass — push all 0s
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) temp.push(arr[i]);
  }
  // Step 2: Second pass — push all 1s
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) temp.push(arr[i]);
  }
  // Step 3: Third pass — push all 2s
  for (let i = 0; i < n; i++) {
    if (arr[i] === 2) temp.push(arr[i]);
  }
  return temp;
}

// ---------- Example run: arr = [0, 1, 2, 0, 1, 2] ----------
// Step 1: temp = [0, 0]
// Step 2: temp = [0, 0, 1, 1]
// Step 3: temp = [0, 0, 1, 1, 2, 2]
// Result: [0, 0, 1, 1, 2, 2]
let arr = [0, 1, 2, 0, 1, 2];
console.log(sortArrayWithThreeTypes(arr));