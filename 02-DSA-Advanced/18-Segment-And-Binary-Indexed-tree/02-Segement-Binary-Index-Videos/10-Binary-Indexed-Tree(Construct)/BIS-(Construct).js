/*
Construction of Binary Indexed Tree (Fenwick Tree)
--------------------------------------------------
Problem:
Given an input array `arr[]` of length `n`, construct its Binary Indexed Tree
array `bit[]` (1‑indexed) such that we can later support:
  - getSum(i): prefix sum from index 0 to i,
  - update(i, x): change arr[i] to x and update BIT in O(log n) time.

Construction idea:
  1. Create `bit[]` of size n+1 and initialize all entries to 0.
  2. For each index i from 0 to n-1, call the BIT update routine with
     index i and value arr[i]. This is equivalent to repeatedly inserting
     each array element into the BIT, and runs in O(n log n) time.
*/

// --------------------------------------------------------------
// BIT point-update helper: add `val` at index `i` (0-based for arr)
// --------------------------------------------------------------
function updateBIT(i, val, arr, bit) {
  // We assume arr and bit are already allocated; here we only update bit.
  // BIT is 1-indexed, so convert 0-based index i to 1-based idx.
  let idx = i + 1;
  const n = arr.length;

  // While idx is within the BIT array length.
  while (idx <= n) {
    // Add `val` to this BIT cell, since its range includes index i.
    bit[idx] += val;
    // Move to the next index that also covers i by adding the least
    // significant set bit (LSB) of idx.
    idx = idx + (idx & -idx);
  }
}

// --------------------------------------------------------------
// constructBIT(arr): build and return the BIT array for `arr`.
// --------------------------------------------------------------
function constructBIT(arr) {
  // Find the number of elements in the input array.
  const n = arr.length;
  // Allocate BIT of size n+1 (1-indexed) and fill with 0.
  const bit = new Array(n + 1).fill(0);

  // For each element arr[i], insert it into the BIT using updateBIT.
  for (let i = 0; i < n; i++) {
    updateBIT(i, arr[i], arr, bit);
  }

  // Return the constructed BIT array.
  return bit;
}

// --------------------------------------------------------------
// Example usage (matching the board illustration)
// --------------------------------------------------------------
// Example 1: arr = [10, 20, 30, 40]
let arr1 = [10, 20, 30, 40];
let bit1 = constructBIT(arr1);
console.log("arr1:", arr1);
console.log("BIT for arr1:", bit1); // expected like: [0, 10, 30, 30, 100]

// Example 2: arr = [10, 20, 30, 40, 50, 60, 70]
let arr2 = [10, 20, 30, 40, 50, 60, 70];
let bit2 = constructBIT(arr2);
console.log("arr2:", arr2);
console.log("BIT for arr2:", bit2); // matches the second example tree structure
