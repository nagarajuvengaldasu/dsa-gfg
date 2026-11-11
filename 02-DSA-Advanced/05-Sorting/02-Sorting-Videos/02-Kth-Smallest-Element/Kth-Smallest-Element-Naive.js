// ========== STEP-BY-STEP: Kth Smallest (NAIVE) ==========
// Goal: Find the kth smallest element (1-based: k=1 means smallest, k=2 means 2nd smallest, …).
// Idea: Sort the array in ascending order, then the kth smallest is at index k-1.
//       Time O(n log n) from sort.

function kthSmallest(arr, k) {
  // Step 1: Sort the array in ascending order
  arr.sort((a, b) => a - b);
  // Step 2: The kth smallest element is at index k-1 (1-based → 0-based)
  return arr[k - 1];
}

// ---------- Example run: arr = [13, 12, 11, 5, 4], k = 3 ----------
// Step 1: After sort → [4, 5, 11, 12, 13]
// Step 2: arr[3-1] = arr[2] = 11 → result 11
let arr = [13, 12, 11, 5, 4];
let k = 3;
console.log(kthSmallest(arr, k));