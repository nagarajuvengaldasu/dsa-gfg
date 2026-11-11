// Recursively builds a segment tree for range [ss, se] at index `si` in `tree`.
function buildtree(ss, se, si, arr, tree) {
  // Base case: if start and end are the same, this node represents a single element.
  if (ss === se) {
    // Store the value of that single element from `arr` into the current tree node.
    tree[si] = arr[ss];
    // Return the value stored at this leaf node.
    return tree[si];
  }
  // Compute the middle index of the current segment [ss, se].
  let mid = Math.floor((ss + se) / 2);
  // Recursively build the left and right subtrees and store their sum at this node.
  tree[si] =
    // Left child covers range [ss .. mid] and is stored at index 2*si + 1.
    buildtree(ss, mid, 2 * si + 1, arr, tree) +
    // Right child covers range [mid + 1 .. se] and is stored at index 2*si + 2.
    buildtree(mid + 1, se, 2 * si + 2, arr, tree);
  // Return the sum stored at the current node.
  return tree[si];
}

// Example input array for which we are building a segment tree.
let arr = [10, 20, 30, 40];
// Number of elements in the array.
let n = arr.length;
// Allocate array to store the segment tree; size = 2*n - 1 for this full binary tree.
let tree = new Array(2 * n - 1);
// Build the segment tree for the whole range [0 .. n-1], starting at tree index 0.
buildtree(0, n - 1, 0, arr, tree);
// Print the internal representation of the segment tree array.
console.log(tree);
