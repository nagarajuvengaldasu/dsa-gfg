/*
Problem (Method 2 - Prefix Sum)
-------------------------------
We are given an array `arr[]`. We need to support two operations:
  1. getsum(i): return the sum of elements from index 0 to i (inclusive).
  2. update(i, x): change the value at index i to x.

In this second method, we maintain a prefix-sum array `ps[]` where:
  ps[i] = arr[0] + arr[1] + ... + arr[i]

Then:
  - getsum(i) = ps[i] in O(1) time.
  - update(i, x) is O(n), because we must adjust all prefix sums from i to n-1.

This is faster for many queries and few updates than the simple method,
but slower than a Segment Tree when there are many updates.
*/

// Build prefix sum array from `arr`.
function buildPrefixSum(arr) {
  // Length of the original array.
  const n = arr.length;
  // Allocate an array of the same length for the prefix sums.
  const ps = new Array(n);
  // If the array is empty, just return the empty prefix-sum array.
  if (n === 0) return ps;
  // First prefix sum is just arr[0].
  ps[0] = arr[0];
  // For each subsequent index i, accumulate the sum up to i.
  for (let i = 1; i < n; i++) {
    // ps[i] = ps[i - 1] + arr[i] = sum of arr[0..i].
    ps[i] = ps[i - 1] + arr[i];
  }
  // Return the filled prefix-sum array.
  return ps;
}

// getsum(i) = ps[i] in O(1).
function getsum(ps, i) {
  // Since ps[i] already stores the sum 0..i, just return it.
  return ps[i];
}

// update(i, x): change arr[i] to x and fix all prefix sums from i to end in O(n).
function update(arr, ps, i, x) {
  // Compute the difference between new value and old value.
  const diff = x - arr[i];
  // Update the original array at index i.
  arr[i] = x;
  // Every prefix sum that includes index i must be increased by diff.
  for (let j = i; j < arr.length; j++) {
    ps[j] += diff;
  }
}

// ---- Example usage ----
// Create an example array.
let arr = [10, 20, 30, 40, 50];
// Build the prefix-sum array from arr.
let ps = buildPrefixSum(arr);

// Print the original array and its prefix sums.
console.log("Initial array:", arr);
console.log("Initial prefix sums:", ps);
// getsum(3) uses ps[3] = 10 + 20 + 30 + 40 = 100.
console.log("getsum(3):", getsum(ps, 3)); // 10 + 20 + 30 + 40 = 100

// Perform update(1, 60): change arr[1] from 20 to 60.
// After this call, arr becomes [10, 60, 30, 40, 50] and
// each ps[j] for j >= 1 is increased by (60 - 20) = 40.
update(arr, ps, 1, 60);
// Print the updated array and prefix sums.
console.log("After update(1, 60):", arr);
console.log("Updated prefix sums:", ps);
// Now getsum(3) = ps[3] = 10 + 60 + 30 + 40 = 140.
console.log("getsum(3):", getsum(ps, 3)); // 10 + 60 + 30 + 40 = 140

