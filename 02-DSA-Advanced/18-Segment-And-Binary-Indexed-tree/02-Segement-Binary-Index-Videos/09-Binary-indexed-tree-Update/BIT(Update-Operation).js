/*
Binary Indexed Tree (Fenwick Tree) - Update Operation
-----------------------------------------------------
Problem:
We are given:
  - An array `arr[]`.
  - Its Binary Indexed Tree array `bit[]` (1‑indexed) already built.
We want to support the operation:
  update(i, x): change arr[i] to x and update all affected entries in `bit[]`.

The idea:
  1. Compute diff = x - arr[i].
  2. Set arr[i] = x.
  3. Starting from index i+1 in `bit[]` (because BIT is 1‑indexed),
     keep adding `diff` to bit[j] for all j that cover this index.
     We move to the next such j by: j = j + (j & -j).

This update runs in O(log n) time.
*/

// --------------------------------------------------------------
// Helper: build a BIT from `arr` so we can test updates.
// --------------------------------------------------------------
function buildBIT(arr) {
  const n = arr.length;       // Number of elements in arr.
  const bit = new Array(n + 1);

  // Initialize all BIT cells to 0.
  for (let i = 0; i <= n; i++) {
    bit[i] = 0;
  }

  // For each element arr[i], add it into BIT at position i+1.
  for (let i = 0; i < n; i++) {
    let idx = i + 1;          // BIT is 1‑indexed.
    const val = arr[i];       // Value to add.
    // Add val to all BIT cells that cover index i.
    while (idx <= n) {
      bit[idx] += val;
      // Move to next index by adding least significant set bit.
      idx = idx + (idx & -idx);
    }
  }

  return bit;
}

// --------------------------------------------------------------
// getSum(i): prefix sum arr[0] + ... + arr[i] using BIT.
// --------------------------------------------------------------
function getSum(bit, i) {
  let idx = i + 1;  // Convert 0‑based i to 1‑based index.
  let res = 0;      // Accumulate prefix sum here.

  // Traverse ancestors in BIT until we hit 0.
  while (idx > 0) {
    res += bit[idx];              // Add the partial sum at this node.
    idx = idx - (idx & -idx);     // Move to parent.
  }

  return res;  // This is sum of arr[0..i].
}

// --------------------------------------------------------------
// update(i, x, arr, bit): change arr[i] to x and fix BIT.
// --------------------------------------------------------------
function update(i, x, arr, bit) {
  // Step 1: compute how much arr[i] is changing.
  let diff = x - arr[i];
  // Step 2: update the original array.
  arr[i] = x;

  // Step 3: start updating BIT at index i+1 (1‑based index).
  let idx = i + 1;

  // While idx is inside BIT array.
  while (idx < bit.length) {
    // Add diff to this BIT cell because its range includes index i.
    bit[idx] += diff;
    // Move to the next index to update by adding least significant set bit.
    idx = idx + (idx & -idx);
  }
}

// --------------------------------------------------------------
// Example usage (similar to the board illustration)
// --------------------------------------------------------------
// Example base array.
let arr = [10, 20, 30, 40, 50];
// Build its BIT.
let bit = buildBIT(arr);

console.log("Initial arr:", arr);
console.log("Initial BIT:", bit);

// Show a prefix sum before any updates: getsum(3) = 10 + 20 + 30 + 40 = 100.
console.log("getSum(3) before update:", getSum(bit, 3));

// Perform update(2, 35): change arr[2] from 30 to 35.
update(2, 35, arr, bit);

console.log("After update(2, 35), arr:", arr);
console.log("BIT after update(2, 35):", bit);

// Now prefix sum getSum(3) = 10 + 20 + 35 + 40 = 105.
console.log("getSum(3) after update:", getSum(bit, 3));
