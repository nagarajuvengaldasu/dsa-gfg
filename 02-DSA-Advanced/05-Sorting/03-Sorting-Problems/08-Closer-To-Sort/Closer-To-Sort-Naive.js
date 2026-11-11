// ========== STEP-BY-STEP: Search in Closer-to-Sort Array (NAIVE) ==========
// Goal: Find index of x in arr. Array is "closer sorted": each element may be at i, i-1, or i+1.
// Idea: Linear scan — check every index until we find x. Time O(n), works for any arrangement.

function closerToSort(arr, x) {
  let n = arr.length;
  // Step 1: Scan each index from 0 to n-1
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return i; // Step 2: Found x at index i
    }
  }
  return -1; // Step 3: x not present
}

// ---------- Example run: arr = [2, 1, 4, 3], x = 5 ----------
// i=0: arr[0]=2 ≠ 5
// i=1: arr[1]=1 ≠ 5
// i=2: arr[2]=4 ≠ 5
// i=3: arr[3]=3 ≠ 5
// Loop ends → return -1
let arr = [2, 1, 4, 3];
let x = 5;
console.log(closerToSort(arr, x));
