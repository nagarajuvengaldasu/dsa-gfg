/*
Problem statement:
------------------
We are given an array `arr[]` of size `n`. We want to:
  1. Build a Segment Tree that stores range sums.
  2. Support point updates: update index `i` from old value `arr[i]` to a new value `new_val`.
  3. After each update, all segment tree nodes whose ranges include index `i` must be updated.
  4. Support range-sum queries: get the sum of elements from index `qs` to `qe` (both inclusive).

The goal is to perform both updates and queries in O(log n) time using the Segment Tree.

Below is a complete implementation:
  - `buildtree`  : builds the Segment Tree from the original array.
  - `getsumrec`  : answers sum queries using the Segment Tree.
  - `update`     : updates the Segment Tree when a single array element changes.
  - Example code : demonstrates two updates and two queries that match the board illustration.
*/

// --------------------------------------------------------------
// buildtree: build a segment tree that stores range sums
// --------------------------------------------------------------
function buildtree(ss, se, si, arr, tree) {
  // If the current segment [ss, se] represents a single element (leaf node).
  if (ss === se) {
    // Store that element from the array in the tree at index `si`.
    tree[si] = arr[ss];
    // Return the value stored at this leaf node.
    return tree[si];
  }

  // Compute the middle index of the current segment.
  let mid = Math.floor((ss + se) / 2);

  // Recursively build the left subtree and right subtree,
  // then store their sum at the current node `si`.
  tree[si] =
    // Left child covers [ss .. mid] and is stored at index 2*si + 1.
    buildtree(ss, mid, 2 * si + 1, arr, tree) +
    // Right child covers [mid+1 .. se] and is stored at index 2*si + 2.
    buildtree(mid + 1, se, 2 * si + 2, arr, tree);

  // Return the sum stored at this internal node.
  return tree[si];
}

// --------------------------------------------------------------
// getsumrec: recursive range-sum query on the segment tree
// --------------------------------------------------------------
function getsumrec(qs, qe, ss, se, si, tree) {
  // Case 1: no overlap between the segment [ss, se] and query [qs, qe].
  // If the current segment is completely to the left (se < qs) or
  // completely to the right (ss > qe) of the query range, it contributes 0.
  if (se < qs || ss > qe) {
    return 0;
  }

  // Case 2: total overlap – the current segment [ss, se] is fully inside
  // the query range [qs, qe]. We can directly use the precomputed sum.
  if (qs <= ss && qe >= se) {
    return tree[si];
  }

  // Case 3: partial overlap – split into left and right children and sum both.
  let mid = Math.floor((ss + se) / 2);

  // Recurse on left child [ss .. mid] and right child [mid+1 .. se]
  // and return the sum of both contributions.
  return (
    getsumrec(qs, qe, ss, mid, 2 * si + 1, tree) +
    getsumrec(qs, qe, mid + 1, se, 2 * si + 2, tree)
  );
}

// --------------------------------------------------------------
// update: point update on the segment tree
// --------------------------------------------------------------
function update(ss, se, i, si, diff, tree) {
  // If the index `i` to be updated is outside the segment [ss, se],
  // this node does not need to change, so we just return.
  if (i < ss || i > se) {
    return;
  }

  // Otherwise, this node's range includes index `i`,
  // so we add `diff` to the stored sum at `tree[si]`.
  tree[si] += diff;

  // If this is not a leaf node (there are more elements in the segment),
  // we propagate the update further down to its children.
  if (se > ss) {
    // Find the middle index to split [ss, se] into two halves.
    let mid = Math.floor((ss + se) / 2);
    // Update the left child segment [ss .. mid].
    update(ss, mid, i, 2 * si + 1, diff, tree);
    // Update the right child segment [mid+1 .. se].
    update(mid + 1, se, i, 2 * si + 2, diff, tree);
  }
}

// --------------------------------------------------------------
// Example usage matching the board illustration
// --------------------------------------------------------------
// Initial array: arr = [10, 20, 30, 40]
let arr = [10, 20, 30, 40];
// Number of elements in the array.
let n = arr.length;
// Allocate memory for the segment tree. For simplicity we use size 2*n - 1.
let tree = new Array(2 * n - 1);
// Build the segment tree for the full range [0 .. n-1] at root index 0.
buildtree(0, n - 1, 0, arr, tree);

// First update: update(1, 25) – change index 1 from 20 to 25.
let i = 1;            // index to update
let new_val = 25;     // new value at index 1
let diff = new_val - arr[i]; // difference between new and old value = 25 - 20 = 5
update(0, n - 1, i, 0, diff, tree); // apply the change to the segment tree
arr[i] = new_val;                  // keep the original array in sync

// Second update: update(0, 15) – change index 0 from 10 to 15.
i = 0;               // index to update
new_val = 15;        // new value at index 0
diff = new_val - arr[i]; // difference between new and old value = 15 - 10 = 5
update(0, n - 1, i, 0, diff, tree); // update the segment tree again
arr[i] = new_val;                  // update the original array

// After both updates, the array becomes [15, 25, 30, 40].
// Now we answer two sum queries using the segment tree:

// Query 1: getsum(0, 1) – sum of arr[0] and arr[1] => 15 + 25 = 40.
console.log(getsumrec(0, 1, 0, n - 1, 0, tree)); // expected output: 40

// Query 2: getsum(1, 2) – sum of arr[1] and arr[2] => 25 + 30 = 55.
console.log(getsumrec(1, 2, 0, n - 1, 0, tree)); // expected output: 55
