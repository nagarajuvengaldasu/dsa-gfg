/*
 * ========== PROBLEM STATEMENT: LARGEST SUM CONTIGUOUS SUBARRAY IN RANGE ==========
 * You are given an array of integers and range queries [L, R] (1-based in this API).
 *
 * For each query, find the maximum sum of any contiguous subarray within str[L..R].
 * (Same as "maximum subarray sum" / Kadane's problem, but over a range.)
 *
 * We use a segment tree. Each node stores:
 *   - sum         : total sum of the segment
 *   - prefixSum   : max sum of any prefix (starting from left)
 *   - suffixSum   : max sum of any suffix (ending at right)
 *   - maxSubArraySum : max sum of any contiguous subarray in the segment
 *
 * When merging left and right: maxSubArraySum = max(left.max, right.max, left.suffix + right.prefix).
 * ==================================================================================
 */

// Segment tree node: holds aggregate values for a range
class Node {
  constructor() {
    this.sum = 0; // total sum of all elements in the segment
    this.prefixSum = 0; // max sum of any prefix (left to right)
    this.suffixSum = 0; // max sum of any suffix (right to left)
    this.maxSubArraySum = 0; // max sum of any contiguous subarray in the segment
  }
}

class Solution {
  // Entry: build tree for arr[0..n-1], starting at root node 0
  buildSegmentTree(arr, tree, n) {
    this.buildSegmentTreeUtil(arr, tree, 0, n - 1, 0);
  }

  buildSegmentTreeUtil(arr, tree, start, end, node) {
    // BASE: Leaf — one element; set all four fields and stop
    if (start === end) {
      tree[node] = new Node();
      const val = arr[start];
      tree[node].sum = val; // only element
      tree[node].prefixSum = Math.max(val, 0); // best prefix = max(val, 0)
      tree[node].suffixSum = Math.max(val, 0); // best suffix = max(val, 0)
      tree[node].maxSubArraySum = Math.max(val, 0); // best subarray = max(val, 0)
      return;
    }
    // Split segment and build left and right subtrees
    const mid = Math.floor((start + end) / 2);
    this.buildSegmentTreeUtil(arr, tree, start, mid, 2 * node + 1); // left child
    this.buildSegmentTreeUtil(arr, tree, mid + 1, end, 2 * node + 2); // right child
    // Merge children into this node
    tree[node] = new Node();
    tree[node].sum = tree[2 * node + 1].sum + tree[2 * node + 2].sum; // total = left + right
    tree[node].prefixSum = Math.max(
      tree[2 * node + 1].prefixSum, // best prefix in left only
      tree[2 * node + 1].sum + tree[2 * node + 2].prefixSum, // whole left + best prefix of right
    );
    tree[node].suffixSum = Math.max(
      tree[2 * node + 2].suffixSum, // best suffix in right only
      tree[2 * node + 2].sum + tree[2 * node + 1].suffixSum, // whole right + best suffix of left
    );
    tree[node].maxSubArraySum = Math.max(
      Math.max(
        tree[2 * node + 1].maxSubArraySum,
        tree[2 * node + 2].maxSubArraySum,
      ),
      tree[2 * node + 1].suffixSum + tree[2 * node + 2].prefixSum, // best crossing the split
    );
  }

  // update(index, new_value): 1-based index; sets arr[index-1] = new_value and fixes tree
  update(arr, tree, n, index, new_value) {
    this.updateUtil(arr, tree, 0, n - 1, 0, index - 1, new_value); // convert to 0-based idx
  }

  updateUtil(arr, tree, start, end, node, idx, value) {
    // BASE: Leaf — update array and this node’s four fields
    if (start === end) {
      arr[idx] = value; // update array
      tree[node] = new Node(); // update node
      tree[node].sum = value; // update sum
      tree[node].prefixSum = Math.max(value, 0); // update prefixSum
      tree[node].suffixSum = Math.max(value, 0); // update suffixSum
      tree[node].maxSubArraySum = Math.max(value, 0); // update maxSubArraySum
      return;
    }
    // Recurse into the child that contains idx
    const mid = Math.floor((start + end) / 2);
    if (idx <= mid)
      this.updateUtil(arr, tree, start, mid, 2 * node + 1, idx, value); // update left child
    else this.updateUtil(arr, tree, mid + 1, end, 2 * node + 2, idx, value); // update right child
    // Recompute this node from (possibly updated) left and right children
    const left = tree[2 * node + 1]; // get left child
    const right = tree[2 * node + 2]; // get right child
    tree[node].sum = left.sum + right.sum; // update sum
    tree[node].prefixSum = Math.max(left.prefixSum, left.sum + right.prefixSum); // update prefixSum
    tree[node].suffixSum = Math.max(
      right.suffixSum, // update suffixSum
      right.sum + left.suffixSum, // update suffixSum
    );
    tree[node].maxSubArraySum = Math.max(
      Math.max(left.maxSubArraySum, right.maxSubArraySum), // update maxSubArraySum
      left.suffixSum + right.prefixSum, // update maxSubArraySum
    );
  }

  // query(l, r): 1-based range; returns max contiguous subarray sum in [l, r]
  query(tree, n, l, r) {
    return this.queryUtil(tree, 0, n - 1, l - 1, r - 1, 0).maxSubArraySum; // convert to 0-based, return .maxSubArraySum
  }

  queryUtil(tree, start, end, l, r, node) {
    // No overlap: this segment is outside [l, r]; return sentinel so caller can ignore this side
    if (r < start || end < l) {
      const empty = new Node(); // create empty node
      empty.maxSubArraySum = -Infinity; // mark as “no data”
      return empty;
    }
    // Full cover: this segment is entirely inside [l, r]; return precomputed node
    if (l <= start && end <= r) return tree[node]; // return precomputed node

    // Partial overlap: query both children and merge
    const mid = Math.floor((start + end) / 2); // get mid
    const left = this.queryUtil(tree, start, mid, l, r, 2 * node + 1); // query left child
    const right = this.queryUtil(tree, mid + 1, end, l, r, 2 * node + 2); // query right child

    if (left.maxSubArraySum === -Infinity) return right; // only right has data
    if (right.maxSubArraySum === -Infinity) return left; // only left has data
    // Both have data: merge with same rules as build
    return {
      sum: left.sum + right.sum, // update sum
      prefixSum: Math.max(left.prefixSum, left.sum + right.prefixSum), // update prefixSum
      suffixSum: Math.max(right.suffixSum, right.sum + left.suffixSum), // update suffixSum
      maxSubArraySum: Math.max(
        Math.max(left.maxSubArraySum, right.maxSubArraySum), // update maxSubArraySum
        left.suffixSum + right.prefixSum, // update maxSubArraySum
      ),
    };
  }
}

let solution = new Solution();
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let st = new Array(4 * n); // allocate tree; 4*n ensures enough nodes for recursive indexing
solution.buildSegmentTree(arr, st, n); // fill tree from arr[0..n-1]
// query(1,3) = 1-based → indices 0..2 = [1,2,3]; max contiguous sum = 1+2+3 = 6
console.log(solution.query(st, n, 1, 3));
// query(2,4) → [2,3,4]; max sum = 9
console.log(solution.query(st, n, 2, 4));
// query(3,5) → [3,4,5]; max sum = 12
console.log(solution.query(st, n, 3, 5));
// query(1,5) → full array [1..5]; max sum = 15
console.log(solution.query(st, n, 1, 5));
