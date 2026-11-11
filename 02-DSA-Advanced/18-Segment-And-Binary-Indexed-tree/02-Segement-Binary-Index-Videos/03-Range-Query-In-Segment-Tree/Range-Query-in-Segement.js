/*
Recursive approach to get the sum of a range in a segment tree.
Time Complexity per query: O(log n)
Extra Space for tree: O(n)
*/

// Build the segment tree for range sums.
function buildtree(ss, se, si, arr, tree) {
  // If the segment represents a single element (leaf node).
  if (ss === se) {
    // Store that element's value at this tree index.
    tree[si] = arr[ss];
    // Return the value of this leaf node.
    return tree[si];
  }

  // Find the middle index of the current segment [ss, se].
  const mid = Math.floor((ss + se) / 2);

  // Recursively build left and right children and store their sum at `si`.
  tree[si] =
    // Left child covers [ss .. mid] at index 2*si + 1.
    buildtree(ss, mid, 2 * si + 1, arr, tree) +
    // Right child covers [mid+1 .. se] at index 2*si + 2.
    buildtree(mid + 1, se, 2 * si + 2, arr, tree);

  // Return the sum stored at this internal node.
  return tree[si];
}

// Recursive range‑sum query on the segment tree.
// qs, qe: query start and end (user input range)
// ss, se: segment start and end (current node's range)
// si:     index of current node in the `tree` array
function getsumrec(qs, qe, ss, se, si, tree) {
  // Case 1: no overlap between [ss, se] and [qs, qe].
  // If current segment is completely to the left (se < qs) or right (ss > qe) of the query.
  if (se < qs || ss > qe) {
    // This segment contributes nothing to the sum.
    return 0;
  }

  // Case 2: total overlap – current segment is fully inside query range.
  if (qs <= ss && qe >= se) {
    // Return the precomputed sum stored at this tree node.
    return tree[si];
  }

  // Case 3: partial overlap – split segment and query both children.
  const mid = Math.floor((ss + se) / 2);

  // Sum from left child on [ss .. mid] plus right child on [mid+1 .. se].
  return (
    getsumrec(qs, qe, ss, mid, 2 * si + 1, tree) +
    getsumrec(qs, qe, mid + 1, se, 2 * si + 2, tree)
  );
}

// ------------- Example usage / driver code -------------
// Original array we are building the segment tree from.
let arr = [10, 20, 30, 40];
// Number of elements in the array.
let n = arr.length;
// Allocate array to hold the segment tree (for n elements, size 2*n - 1 is enough).
let tree = new Array(2 * n - 1);
// Build the segment tree for the full range [0 .. n-1] rooted at index 0.
buildtree(0, n - 1, 0, arr, tree);

// Perform a sample range‑sum query: get sum of indices [1 .. 3].
console.log(getsumrec(0, 2, 0, n - 1, 0, tree)); // expected 90
// Print the internal tree array representation.
console.log(tree);
