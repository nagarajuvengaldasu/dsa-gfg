/*
 * ========== PROBLEM STATEMENT: RANGE GCD QUERIES ==========
 * You are given an array of integers of size N and Q queries.
 *
 * Your task is to complete:
 *   1. findRangeGcd(L, R) : return GCD of all elements in range [L, R] (0-based indexing).
 *   2. updateValue(index, value) : update arr[index] to value.
 *
 * We use a segment tree where each node stores the GCD of its segment.
 * GCD is associative: gcd(a, gcd(b,c)) = gcd(gcd(a,b), c), so we can combine left and right child GCDs.
 *
 * Constraints (typical): 1 ≤ N, Q ≤ 10^5; 0 ≤ L ≤ R, index < N.
 * =========================================================
 */

class Solution {
  // ---------- BUILD: Fill segment tree so each node = GCD of its range ----------
  buildSegmentTree(node, start, end, arr, st) {
    // STEP 1: Base case — leaf node (single element): st[node] = arr[start]
    if (start === end) {
      st[node] = arr[start];
      return;
    }
    // STEP 2: Split range into left [start, mid] and right [mid+1, end]
    const mid = Math.floor((start + end) / 2);
    // STEP 3: Recurse to fill left child (2*node+1) and right child (2*node+2)
    this.buildSegmentTree(2 * node + 1, start, mid, arr, st);
    this.buildSegmentTree(2 * node + 2, mid + 1, end, arr, st);
    // STEP 4: Current node = GCD(left child value, right child value)
    st[node] = this.gcd(st[2 * node + 1], st[2 * node + 2]);
  }

  // ---------- UPDATE: Set arr[index] = new_val and fix segment tree ----------
  updatevalue(index, new_val, arr, st, n) {
    // STEP 1: Update the array at index
    arr[index] = new_val;
    // STEP 2: Propagate update in tree from root (node 0), range [0, n-1]
    this.update(0, 0, n - 1, index, new_val, st);
  }

  update(node, start, end, idx, value, st) {
    // STEP 1: Base case — leaf: this node covers single index, set st[node] = value
    if (start === end) {
      st[node] = value;
      return;
    }
    // STEP 2: Decide which half contains idx (left [start, mid] or right [mid+1, end])
    const mid = Math.floor((start + end) / 2);
    if (idx <= mid) {
      this.update(2 * node + 1, start, mid, idx, value, st);
    } else {
      this.update(2 * node + 2, mid + 1, end, idx, value, st);
    }
    // STEP 3: After child is updated, recompute this node = GCD(leftChild, rightChild)
    let leftgcd = st[2 * node + 1];
    let rightgcd = st[2 * node + 2];
    st[node] = this.gcd(leftgcd, rightgcd);
  }

  // ---------- QUERY: Return GCD of elements in [l, r] ----------
  findRangeGcd(l, r, st, n) {
    // Start from root (node 0), segment [0, n-1], query [l, r]
    return this.query(0, 0, n - 1, l, r, st);
  }

  query(node, start, end, l, r, st) {
    // STEP 1: No overlap — segment [start,end] outside [l,r] -> return 0 (gcd(x,0)=x, so neutral for GCD)
    if (r < start || l > end) {
      return 0;
    }
    // STEP 2: Full cover — segment [start,end] entirely inside [l,r] -> return node's GCD
    if (l <= start && r >= end) {
      return st[node];
    }
    // STEP 3: Partial overlap — query both children and combine with GCD
    const mid = Math.floor((start + end) / 2);
    const leftgcd = this.query(2 * node + 1, start, mid, l, r, st);
    const rightgcd = this.query(2 * node + 2, mid + 1, end, l, r, st);
    return this.gcd(leftgcd, rightgcd);
  }

  // ---------- GCD: Euclidean algorithm (gcd(a,0)=a; gcd(a,b)=gcd(b, a%b)) ----------
  gcd(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}

// ========== STEP-BY-STEP EXECUTION (driver) ==========
// arr = [2, 3, 4, 6, 8, 16], n = 6
let solution = new Solution();
let arr = [2, 3, 4, 6, 8, 16];
let n = arr.length;
// Allocate segment tree (2*n-1; for safety 4*n is often used for recursive indexing)
let st = new Array(2 * n - 1);

// STEP A: Build tree — buildSegmentTree(0, 0, 5, arr, st) fills st: root = GCD(0..5), leaves = arr[i]
solution.buildSegmentTree(0, 0, n - 1, arr, st);

// STEP B: Query 1 — findRangeGcd(0, 2) = GCD(arr[0], arr[1], arr[2]) = GCD(2, 3, 4) = 1
console.log(solution.findRangeGcd(0, 2, st, n)); // 1

// STEP C: Update — updatevalue(3, 8): arr[3] = 8; tree updated so all nodes covering index 3 get new GCD
solution.updatevalue(3, 8, arr, st, n); // arr = [2, 3, 4, 8, 8, 16]

// STEP D: Query 2 — findRangeGcd(2, 5) = GCD(arr[2], arr[3], arr[4], arr[5]) = GCD(4, 8, 8, 16) = 4
console.log(solution.findRangeGcd(2, 5, st, n)); // 4
