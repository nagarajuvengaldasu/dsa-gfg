// Build a prefix‑sum array `ps` from the original array `arr` of length `n`.
function initalize(ps, arr, n) {
  // First prefix sum is just the first element of `arr`.
  ps[0] = arr[0];
  // For each subsequent index, accumulate the sum up to that index.
  for (let i = 1; i < n; i++) {
    // `ps[i]` = sum of arr[0] + arr[1] + ... + arr[i].
    ps[i] = ps[i - 1] + arr[i];
  }
}

// Return the sum of elements from index `qs` to `qe` inclusive using prefix sums.
function getsum(ps, qs, qe) {
  // If the range starts at index 0, the sum is just `ps[qe]`.
  if (qs === 0) {
    return ps[qe];
  } else {
    // Otherwise subtract prefix up to `qs - 1` from prefix up to `qe`.
    // This leaves the sum of indices [qs .. qe].
    return ps[qe] - ps[qs - 1];
  }
}

// Update the value at index `i` in `arr` to `new_val` and fix prefix sums in `ps`.
function update(ps, arr, i, new_val) {
  // Compute how much the element is changing by.
  let diff = new_val - arr[i];
  // For every prefix sum from index `i` onward, add this difference.
  for (let j = i; j < arr.length; j++) {
    // Each prefix that includes index `i` must be increased by `diff`.
    ps[j] = ps[j] + diff;
  }
  // Note: in a full implementation we would also update `arr[i] = new_val`
  // so the original array stays in sync; here the focus is on prefix sums.
}

// Example original array of 5 elements.
let arr = [10, 20, 30, 40, 50];
// Number of elements in the array.
let n = arr.length;
// Allocate an array `ps` to hold prefix sums of length `n`.
let ps = new Array(n);
// Build the prefix sum array from `arr`.
initalize(ps, arr, n);
// Print sum of elements from index 0 to 2 (10 + 20 + 30).
console.log(getsum(ps, 0, 2));
// Print sum of elements from index 1 to 3 (20 + 30 + 40).
console.log(getsum(ps, 1, 3));
// Change value at index 1 (20) to 60 and adjust prefix sums.
update(ps, arr, 1, 60);
// After update, print sum from index 0 to 2 (10 + 60 + 30).
console.log(getsum(ps, 0, 2));
// After update, print sum from index 1 to 3 (60 + 30 + 40).
console.log(getsum(ps, 1, 3));
