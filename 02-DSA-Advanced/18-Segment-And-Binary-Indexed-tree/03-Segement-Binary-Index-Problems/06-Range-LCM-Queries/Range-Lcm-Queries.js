/**
 * ========== PROBLEM STATEMENT: RANGE LCM QUERIES ==========
 * You are given an array of integers and range queries [L, R] (1-based in this API).
 *
 * For each query, find the LCM of the elements in the range [L, R].
 *
 * We use a segment tree. Each node stores the LCM of the elements in the segment.
 *
 * ==================================================================================
 */
class Solution {
  // Build segment tree: each node holds LCM of segment [start, end]
  buildSegmentTree(arr, st, start, end, node) {
    if (start === end) {
      st[node] = arr[start];   // leaf = single element, LCM is the element itself
      return;
    }
    const mid = Math.floor((start + end) / 2);   // split segment
    this.buildSegmentTree(arr, st, start, mid, 2 * node + 1);   // fill left child
    this.buildSegmentTree(arr, st, mid + 1, end, 2 * node + 2);  // fill right child
    st[node] = this.lcm(st[2 * node + 1], st[2 * node + 2]);     // parent = LCM(left, right)
  }

  gcd(a, b) {
    while (b !== 0) {
      let temp = b;   // save b
      b = a % b;       // replace b with a mod b
      a = temp;        // replace a with old b
    }
    return a;          // when b=0, gcd is a
  }

  lcm(a, b) {
    return (a * b) / this.gcd(a, b);   // LCM(a,b) = (a*b) / GCD(a,b)
  }

  updateValue(index, new_val, arr, st, n) {
    this.updateUtil(0, n - 1, index, new_val, 0, arr, st);   // start from root (node 0), range [0, n-1]
  }

  updateUtil(start, end, idx, value, node, arr, st) {
    if (start === end) {
      arr[idx] = value;   // update array at index
      st[node] = value;   // leaf node = new value (LCM of single element)
      return;
    }
    let mid = Math.floor((start + end) / 2);
    if (idx <= mid)
      this.updateUtil(start, mid, idx, value, 2 * node + 1, arr, st);   // go left
    else this.updateUtil(mid + 1, end, idx, value, 2 * node + 2, arr, st);  // go right
    st[node] = this.lcm(st[2 * node + 1], st[2 * node + 2]);   // recompute this node from children
  }

  getLCM(st, arr, n, qs, qe) {
    return this.queryUtil(0, n - 1, qs, qe, 0, st);   // query from root, range [0, n-1], query [qs, qe]
  }

  queryUtil(start, end, l, r, node, st) {
    if (r < start || end < l) return 1;   // no overlap: return 1 (identity for LCM so LCM(x,1)=x)
    if (l <= start && end <= r) return st[node];   // full overlap: segment inside [l,r], return precomputed LCM
    let mid = Math.floor((start + end) / 2);
    let leftLCM = this.queryUtil(start, mid, l, r, 2 * node + 1, st);   // LCM of query in left half
    let rightLCM = this.queryUtil(mid + 1, end, l, r, 2 * node + 2, st); // LCM of query in right half
    return this.lcm(leftLCM, rightLCM);   // combine: LCM(leftLCM, rightLCM)
  }
}

let solution = new Solution();
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let st = new Array(4 * n);   // 4*n nodes for recursive segment tree
solution.buildSegmentTree(arr, st, 0, n - 1, 0);   // build tree for arr[0..n-1], root at node 0
console.log(solution.getLCM(st, arr, n, 0, 4));   // LCM of arr[0..4] = LCM(1,2,3,4,5) = 60
