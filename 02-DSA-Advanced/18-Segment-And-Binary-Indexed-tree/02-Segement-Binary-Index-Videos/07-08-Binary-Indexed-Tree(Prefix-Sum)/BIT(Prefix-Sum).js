/*
Binary Indexed Tree (Fenwick Tree) - Prefix Sum Implementation
---------------------------------------------------------------
Problem:
We are given an array `arr[]`. We want to support two operations efficiently:
  1. getSum(i): return the sum of elements from index 0 to i (inclusive).
  2. update(i, newVal): change the value at index i to newVal.

Using a Binary Indexed Tree (Fenwick Tree) we can do both operations in:
  - O(log n) time.
  - O(n) space for the tree.

Idea:
We keep an auxiliary array `bit[]` (1‑indexed) where each position stores the
sum of a range of elements. The ranges follow powers of two, so by moving
through indices with `i = i - (i & -i)` we can quickly accumulate prefix sums,
and with `i = i + (i & -i)` we can propagate updates.
*/

// --------------------------------------------------------------
// Helper: internal function to add `val` at 1‑based index `idx` in BIT.
// --------------------------------------------------------------
function internalAdd(bit, n, idx, val) {
  // While idx is within the BIT array.
  while (idx <= n) {
    // Add `val` to this BIT cell because its range includes this index.
    bit[idx] += val;
    // Move to the next index that also covers this element:
    // add the least significant set bit (LSB) to idx.
    idx = idx + (idx & -idx);
  }
}

// --------------------------------------------------------------
// Build the Binary Indexed Tree from the original array `arr`.
// --------------------------------------------------------------
function buildBIT(arr) {
  const n = arr.length;          // Number of elements in the array.
  const bit = new Array(n + 1);  // BIT is 1‑indexed, so size is n + 1.

  // Initialize all BIT cells to 0.
  for (let i = 0; i <= n; i++) {
    bit[i] = 0;
  }

  // Insert each array element into the BIT using internalAdd.
  for (let i = 0; i < n; i++) {
    // BIT index is i + 1 because BIT is 1‑indexed, arr is 0‑indexed.
    internalAdd(bit, n, i + 1, arr[i]);
  }

  // Return the constructed BIT.
  return bit;
}

// --------------------------------------------------------------
// getSum(i): return prefix sum arr[0] + ... + arr[i] using BIT.
// --------------------------------------------------------------
function getSum(bit, i) {
  // Convert 0‑based index i to 1‑based index for BIT.
  let idx = i + 1;
  // This will store the running prefix sum result.
  let res = 0;

  // Traverse ancestors in BIT until we reach index 0.
  while (idx > 0) {
    // Add the sum stored at current BIT cell.
    res += bit[idx];
    // Move to parent index by removing the least significant set bit.
    idx = idx - (idx & -idx);
  }

  // When loop finishes, res holds sum of arr[0..i].
  return res;
}

// --------------------------------------------------------------
// update(i, newVal): update arr[i] to newVal and reflect in BIT.
// --------------------------------------------------------------
function update(arr, bit, i, newVal) {
  const n = arr.length;          // Number of elements.
  const diff = newVal - arr[i];  // How much arr[i] is changing by.

  // Update the original array so it stays in sync.
  arr[i] = newVal;

  // Add this difference into the BIT at position (i + 1).
  internalAdd(bit, n, i + 1, diff);
}

// --------------------------------------------------------------
// Example usage (based on the board illustration)
// --------------------------------------------------------------
// Example array: indices 0..8
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Build the BIT from this array.
let bit = buildBIT(arr);

// Print initial array and BIT representation.
console.log("Initial array:", arr);
console.log("Initial BIT:", bit);

// Compute prefix sum up to index 3: 10 + 20 + 30 + 40 = 100.
console.log("getSum(3):", getSum(bit, 3));

// Update index 4 from 50 to 100 (for example).
update(arr, bit, 4, 100);
console.log("After update(4, 100): array =", arr);
console.log("BIT after update:", bit);

// New prefix sum getSum(5) = 10 + 20 + 30 + 40 + 100 + 60 = 260.
console.log("getSum(5):", getSum(bit, 5));
