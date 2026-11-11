/*
Problem (Method 3 - Segment Tree)
---------------------------------
We are given an array `arr[]`. We need to support two operations efficiently:
  1. getsum(i): return the sum of elements from index 0 to i (inclusive).
  2. update(i, x): change the value at index i to x.

In this method we use a Segment Tree that stores range sums. This gives:
  - getsum(i) in O(log n) time, by querying range [0..i].
  - update(i, x) in O(log n) time, by updating all nodes that cover index i.

This is more complex than the previous two methods, but it supports many
queries and many updates efficiently.
*/

// Build the segment tree for range [ss, se] at index `si`.
function buildtree(ss, se, si, arr, tree) {
  // Base case: segment [ss, se] represents a single element.
  if (ss === se) {
    // Store that element from arr into this tree node.
    tree[si] = arr[ss];
    return tree[si];
  }
  // Compute the middle index for splitting [ss, se].
  const mid = Math.floor((ss + se) / 2);
  // Recursively build left and right children and sum their values.
  tree[si] =
    buildtree(ss, mid, 2 * si + 1, arr, tree) +
    buildtree(mid + 1, se, 2 * si + 2, arr, tree);
  // Return the sum stored at this internal node.
  return tree[si];
}

// Range-sum query on [qs, qe] using the segment tree.
function getsumrec(qs, qe, ss, se, si, tree) {
  // Case 1: no overlap between [ss, se] and [qs, qe] -> contributes 0.
  if (se < qs || ss > qe) return 0;
  // Case 2: total overlap -> current node entirely inside query range, use its sum.
  if (qs <= ss && qe >= se) return tree[si];
  // Case 3: partial overlap -> query both children and add results.
  const mid = Math.floor((ss + se) / 2);
  return (
    getsumrec(qs, qe, ss, mid, 2 * si + 1, tree) +
    getsumrec(qs, qe, mid + 1, se, 2 * si + 2, tree)
  );
}

// Point update: change arr[i] by `diff` and update all affected nodes.
function update(ss, se, i, si, diff, tree) {
  // If index i is outside this segment, nothing to do.
  if (i < ss || i > se) return;
  // Otherwise, this node covers i, so update its stored sum.
  tree[si] += diff;
  // If this is not a leaf, propagate the update to children.
  if (se > ss) {
    const mid = Math.floor((ss + se) / 2);
    update(ss, mid, i, 2 * si + 1, diff, tree);
    update(mid + 1, se, i, 2 * si + 2, diff, tree);
  }
}

// Wrapper getsum(i) = sum of arr[0..i].
function getsum(i, n, tree) {
  // Internally we query the range [0..i] on the segment tree.
  return getsumrec(0, i, 0, n - 1, 0, tree);
}

// Wrapper update(i, x): set arr[i] = x.
function pointUpdate(arr, tree, i, x) {
  // Compute difference between new value and old value.
  const diff = x - arr[i];
  // Update the base array for correctness.
  arr[i] = x;
  // Apply the difference along the path that covers index i.
  update(0, arr.length - 1, i, 0, diff, tree);
}

// ---- Example usage ----
// Create an example array.
let arr = [10, 20, 30, 40, 50];
// Store its length.
let n = arr.length;
// Allocate a segment tree array (4*n is a safe upper bound).
let tree = new Array(4 * n); // safe size for segment tree

// Build the segment tree for the full range [0..n-1] at root index 0.
buildtree(0, n - 1, 0, arr, tree);

// Print the initial array.
console.log("Initial array:", arr);
// getsum(3) queries sum of arr[0..3] = 10 + 20 + 30 + 40 = 100.
console.log("getsum(3):", getsum(3, n, tree)); // 10 + 20 + 30 + 40 = 100

// Perform update(1, 60) so arr becomes [10, 60, 30, 40, 50].
pointUpdate(arr, tree, 1, 60);
// Print the array after the update.
console.log("After update(1, 60):", arr);
// Now getsum(3) = 10 + 60 + 30 + 40 = 140, still in O(log n) time.
console.log("getsum(3):", getsum(3, n, tree)); // 10 + 60 + 30 + 40 = 140

