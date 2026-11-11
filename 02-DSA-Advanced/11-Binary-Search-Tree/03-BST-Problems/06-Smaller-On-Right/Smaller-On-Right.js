/*
 * PROBLEM STATEMENT:
 * For each element, count how many distinct smaller elements appear to its right.
 * Return the maximum such count over all elements.
 *
 * Approach: Process array right-to-left. Use coordinate compression + Fenwick Tree (BIT)
 * to count distinct smaller values already seen; only count each value once (distinct).
 */

// BST-style node structure (optional; this solution uses BIT)
class Node {
  constructor(key) {
    this.left = null;   // left child
    this.right = null;  // right child
    this.key = key;     // value
  }
}

// Returns max count of distinct smaller elements on the right for any position
function smallerOnRight(nums, n) {
  // Coordinate compression: unique sorted values → 1-based indices for BIT
  let sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
  // Map each value to its 1-based rank (smallest → 1, next → 2, ...)
  let index = new Map();
  sorted.forEach((num, i) => index.set(num, i + 1));

  let size = sorted.length;           // number of distinct values
  let bit = new Array(size + 1).fill(0);  // Fenwick tree (1-indexed), initially zeros
  let seen = new Set();               // which distinct values we've already counted
  let maxcount = 0;                   // answer: max "smaller on right" count

  // BIT prefix sum: sum of elements in BIT from index 1 to i (inclusive)
  function query(i) {
    let sum = 0;
    while (i > 0) {
      sum += bit[i];    // add this node's value
      i -= i & -i;      // move to parent (strip lowest set bit)
    }
    return sum;
  }
  // BIT point update: add 1 at index i (and propagate to ancestors)
  function update(i) {
    while (i <= size) {
      bit[i]++;         // add 1 at this node
      i += i & -i;      // move to next node that includes this range
    }
  }

  // Process from right to left so "right" = already processed
  for (let i = n - 1; i >= 0; i--) {
    let idx = index.get(nums[i]);     // 1-based rank of current element
    let count = query(idx - 1);       // how many distinct smaller values seen so far (to the right)
    maxcount = Math.max(maxcount, count);  // update answer
    if (!seen.has(nums[i])) {         // only add to BIT when we see this value for the first time (distinct)
      seen.add(nums[i]);
      update(idx);                    // mark this value as "seen" in the BIT
    }
  }
  return maxcount;
}

let nums = [10, 6, 9, 7, 20, 19, 21, 18, 17, 16];
let n = nums.length;
console.log(smallerOnRight(nums, n));
