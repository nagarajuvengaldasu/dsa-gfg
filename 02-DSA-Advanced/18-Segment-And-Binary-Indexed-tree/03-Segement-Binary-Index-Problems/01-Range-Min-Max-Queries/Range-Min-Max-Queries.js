/**
 * Range Min Max Queries
 *
 * Problem: Given an array, you need to answer range queries of the form [L, R] to find the minimum and maximum element in the range.
 *
 * Input: arr = [11, 3, 7, 5, 9, 1], L = 0, R = 2
 * Output: [3, 11]
 *
 * Input: arr = [11, 3, 7, 5, 9, 1], L = 0, R = 5
 * Output: [1, 17]
 */
class Solution {
  constructor(arr) {
    // LINE 1: Copy input array so original is not mutated
    this.arr = arr.slice();
    // LINE 2: Store length (e.g. n = 6)
    this.n = arr.length;
    // LINE 3: Allocate segment tree array; 4*n ensures enough space for full binary tree
    this.segTree = new Array(4 * this.n);
    // LINE 4: Build tree from root (node 0), covering range [0, n-1]
    this._build(0, 0, this.n - 1);
  }

  _build(node, start, end) {
    // BASE: Leaf node — segment has one element, store [min, max] = [arr[start], arr[start]]
    if (start === end) {
      this.segTree[node] = [this.arr[start], this.arr[start]];
      return;
    }
    // Split range: e.g. [0,5] -> mid=2, left [0,2], right [3,5]
    const mid = Math.floor((start + end) / 2);
    // Recurse left child (node 2*node+1), then right child (node 2*node+2)
    this._build(2 * node + 1, start, mid);
    this._build(2 * node + 2, mid + 1, end);
    // After children are filled, read their [min, max]
    const left = this.segTree[2 * node + 1];
    const right = this.segTree[2 * node + 2];
    // Current node = combine: min of both mins, max of both maxs
    this.segTree[node] = [
      Math.min(left[0], right[0]),
      Math.max(left[1], right[1]),
    ];
  }

  // Returns [min, max] in range [L, R] (0-based indexing).
  getMinMax(L, R) {
    // Start query from root (node 0), segment [0, n-1], query [L, R]
    return this._query(0, 0, this.n - 1, L, R);
  }

  _query(node, start, end, L, R) {
    // NO OVERLAP: segment [start,end] is completely outside [L,R] -> return neutral (min=∞, max=-∞)
    if (R < start || L > end) return [Infinity, -Infinity];
    // FULL COVER: segment [start,end] lies entirely inside [L,R] -> return node's [min, max]
    if (L <= start && end <= R) return this.segTree[node];
    // PARTIAL OVERLAP: split and query both children, then combine
    const mid = Math.floor((start + end) / 2);
    const left = this._query(2 * node + 1, start, mid, L, R);
    const right = this._query(2 * node + 2, mid + 1, end, L, R);
    // Combine: overall min = min(leftMin, rightMin), overall max = max(leftMax, rightMax)
    return [Math.min(left[0], right[0]), Math.max(left[1], right[1])];
  }

  // Updates arr[index] to value.
  updateValue(index, value) {
    // LINE 1: Update the underlying array at index
    this.arr[index] = value;
    // LINE 2: Propagate update in segment tree from root, range [0, n-1]
    this._update(0, 0, this.n - 1, index, value);
  }

  _update(node, start, end, index, value) {
    // BASE: Leaf — this node represents single index; set [min, max] = [value, value]
    if (start === end) {
      this.segTree[node] = [value, value];
      return;
    }
    // Find which half contains index: left [start, mid] or right [mid+1, end]
    const mid = Math.floor((start + end) / 2);
    if (index <= mid) {
      this._update(2 * node + 1, start, mid, index, value);
    } else {
      this._update(2 * node + 2, mid + 1, end, index, value);
    }
    // After updating child, recompute this node from both children
    const left = this.segTree[2 * node + 1];
    const right = this.segTree[2 * node + 2];
    this.segTree[node] = [
      Math.min(left[0], right[0]),
      Math.max(left[1], right[1]),
    ];
  }
}

// ----- Example from problem (driver) -----
// Input: N = 6, Q = 3, arr = [11, 3, 7, 5, 9, 1]
let arr = [11, 3, 7, 5, 9, 1];
// Creates Solution: constructor runs -> this.arr copy, this.n=6, segTree size 24, _build(0,0,5) fills tree
let solution = new Solution(arr);

// Query 1: getMinMax(0, 2) -> range [0,1,2] = {11,3,7} -> min=3, max=11
// Execution: getMinMax(0,2) -> _query(0,0,5,0,2) -> may hit full/partial overlap, returns [3, 11]
let res1 = solution.getMinMax(0, 2);
console.log(res1[0] + " " + res1[1]); // Prints: 3 11

// Query 2: updateValue(3, 17) -> arr[3] was 5, now 17; _update propagates from leaf to root
solution.updateValue(3, 17);

// Query 3: getMinMax(0, 5) -> full array [11,3,7,17,9,1] -> min=1, max=17
let res2 = solution.getMinMax(0, 5);
console.log(res2[0] + " " + res2[1]); // Prints: 1 17
