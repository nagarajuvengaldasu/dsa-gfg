/*
 * ========== PROBLEM STATEMENT: RANGE SUM QUERY ==========
 * You are given an array of integers of size N and Q queries.
 *
 * Your task is to support:
 *   1. getSum(L, R) : return the sum of elements in range [L, R] (0-based, inclusive).
 *   2. updateValue(index, value) : set arr[index] = value.
 *
 * We use a segment tree where each node stores the sum of its segment.
 * Build: O(N), Query: O(log N), Update: O(log N).
 *
 * Constraints (typical): 1 ≤ N, Q ≤ 10^5; 0 ≤ L ≤ R, index < N.
 * ==========================================================
 */

class Solution {
  // ---------- BUILD: Each node = sum of segment [start, end] ----------
  buildSegmentTree(node, start, end, arr, st) {
    // BASE: Leaf — single element, st[node] = arr[start]
    if (start === end) {
      st[node] = arr[start];
      return;
    }
    // Split range into left [start, mid] and right [mid+1, end]
    const mid = Math.floor((start + end) / 2);
    this.buildSegmentTree(2 * node + 1, start, mid, arr, st);
    this.buildSegmentTree(2 * node + 2, mid + 1, end, arr, st);
    // Current node = sum of left child + right child
    st[node] = st[2 * node + 1] + st[2 * node + 2];
  }

  // ---------- UPDATE: Set arr[index] = val and fix segment tree ----------
  updatevalue(arr, st, n, index, val) {
    arr[index] = val;
    this.update(0, 0, n - 1, index, val, st);
  }

  update(node, start, end, idx, value, st) {
    // BASE: Leaf — this node covers single index, set st[node] = value
    if (start === end) {
      st[node] = value;
      return;
    }
    const mid = Math.floor((start + end) / 2);
    if (idx <= mid) {
      this.update(2 * node + 1, start, mid, idx, value, st);
    } else {
      this.update(2 * node + 2, mid + 1, end, idx, value, st);
    }
    // Recompute this node = left sum + right sum
    st[node] = st[2 * node + 1] + st[2 * node + 2];
  }

  // ---------- QUERY: Return sum of elements in [l, r] ----------
  getsum(l, r, st, n) {
    return this.query(0, 0, n - 1, l, r, st);
  }

  query(node, start, end, l, r, st) {
    // No overlap — segment [start,end] outside [l,r] -> return 0
    if (r < start || l > end) return 0;
    // Full cover — segment entirely inside [l,r] -> return node sum
    if (l <= start && r >= end) return st[node];
    // Partial overlap — query both children and add
    const mid = Math.floor((start + end) / 2);
    const leftsum = this.query(2 * node + 1, start, mid, l, r, st);
    const rightsum = this.query(2 * node + 2, mid + 1, end, l, r, st);
    return leftsum + rightsum;
  }
}

// ----- Driver: step-by-step execution -----
// arr = [1, 2, 3, 4, 5], n = 5
let solution = new Solution();
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
// Allocate segment tree; 4*n safe for recursive indexing (2*node+1, 2*node+2)
let st = new Array(4 * n);
solution.buildSegmentTree(0, 0, n - 1, arr, st);

console.log(solution.getsum(0, 2, st, n)); // 1+2+3 = 6
console.log(solution.getsum(1, 3, st, n)); // 2+3+4 = 9
console.log(solution.getsum(2, 4, st, n)); // 3+4+5 = 12

solution.updatevalue(arr, st, n, 1, 10); // arr[1] = 10 -> [1, 10, 3, 4, 5]

console.log(solution.getsum(0, 2, st, n)); // 1+10+3 = 14
console.log(solution.getsum(1, 3, st, n)); // 10+3+4 = 17
console.log(solution.getsum(2, 4, st, n)); // 3+4+5 = 12
