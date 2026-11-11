/*
Problem (Method 1 - Simple)
---------------------------
We are given an array `arr[]`. We need to support two operations:
  1. getsum(i): return the sum of elements from index 0 to i (inclusive).
  2. update(i, x): change the value at index i to x.

In this first (naive) method:
  - getsum(i) runs in O(n) time by looping from 0 to i.
  - update(i, x) runs in O(1) time by directly assigning arr[i] = x.

This file demonstrates this simple approach for teaching and comparison
with Prefix Sum and Segment Tree methods.
*/

// Return sum of elements from index 0 to i (inclusive) using a simple loop.
function getsum(arr, i) {
  // Start with a running total of zero.
  let sum = 0;
  // Visit every index from 0 up to i.
  for (let idx = 0; idx <= i; idx++) {
    // Add the current element arr[idx] to the running total.
    sum += arr[idx];
  }
  // After the loop, `sum` contains arr[0] + arr[1] + ... + arr[i].
  return sum;
}

// Update position i to new value x in O(1).
function update(arr, i, x) {
  // Simply overwrite the old value at index i.
  arr[i] = x;
}

// ---- Example usage ----
// Create an example array.
let arr = [10, 20, 30, 40, 50];

// Print the initial array contents.
console.log("Initial array:", arr);
// Call getsum(3) which returns 10 + 20 + 30 + 40 = 100.
console.log("getsum(3):", getsum(arr, 3)); // 10 + 20 + 30 + 40 = 100

// Perform update(1, 60): change arr[1] from 20 to 60.
// After this, the array becomes [10, 60, 30, 40, 50].
update(arr, 1, 60);
// Print the array after the update to see the change.
console.log("After update(1, 60):", arr);
// Now getsum(3) returns 10 + 60 + 30 + 40 = 140.
console.log("getsum(3):", getsum(arr, 3)); // 10 + 60 + 30 + 40 = 140

