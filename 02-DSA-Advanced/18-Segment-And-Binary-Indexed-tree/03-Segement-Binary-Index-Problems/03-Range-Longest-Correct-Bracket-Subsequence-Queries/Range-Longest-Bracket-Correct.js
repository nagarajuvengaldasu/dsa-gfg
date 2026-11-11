/*
 * ========== PROBLEM STATEMENT: RANGE LONGEST CORRECT BRACKET SUBSEQUENCE ==========
 * You are given a string of '(' and ')' and Q range queries [L, R].
 *
 * For each query, find the length of the longest correct (balanced) bracket
 * subsequence in the substring str[L..R]. A correct bracket sequence is one
 * where every '(' has a matching ')' and they are well-formed (e.g. "()", "()()", "(())").
 *
 * Approach: Segment tree where each node stores a triple [full, open, close]:
 *   - full  = length of longest correct bracket subsequence in this segment
 *   - open  = count of unmatched '(' (can be matched by ')' to the right)
 *   - close = count of unmatched ')' (can be matched by '(' to the left)
 *
 * When merging left and right segments: we match min(left.open, right.close)
 * pairs, so full = left.full + right.full + 2*Matched, and we update open/close accordingly.
 * ==================================================================================
 */

class Solution {
  getLongestSequence(str, queries) {
    // LINE 1: Length of string (e.g. "(()())" -> n = 6)
    const n = str.length;
    // LINE 2: Allocate segment tree; 4*n for safe recursive indexing
    const segTree = new Array(4 * n);
    // LINE 3: Build tree from root (node 0), range [0, n-1]; each node gets [full, open, close]
    this.buildTree(0, 0, n - 1, str, segTree);
    // LINE 4: Result array — one answer per query (the "full" length for range [L,R])
    const result = [];
    // LINE 5–7: For each query [L, R], run range query and push the longest correct length (node[0])
    for (const [L, R] of queries) {
      const node = this.query(0, 0, n - 1, L, R, segTree);
      result.push(node[0]);
    }
    return result;
  }

  buildTree(node, start, end, str, segTree) {
    // BASE: Leaf — single character. '(' -> [0, 1, 0] (1 unmatched open); ')' -> [0, 0, 1] (1 unmatched close)
    if (start === end) {
      if (str[start] === "(") {
        segTree[node] = [0, 1, 0];
      } else {
        segTree[node] = [0, 0, 1];
      }
      return;
    }
    // Split range; recurse left and right children
    const mid = Math.floor((start + end) / 2);
    this.buildTree(2 * node + 1, start, mid, str, segTree);
    this.buildTree(2 * node + 2, mid + 1, end, str, segTree);
    // Current node = merge left and right [full, open, close]
    segTree[node] = this.mergeNodes(
      segTree[2 * node + 1],
      segTree[2 * node + 2],
    );
  }

  // Combine two segments: left's unmatched '(' can match right's unmatched ')'
  mergeNodes(left, right) {
    if (!left) return right;
    if (!right) return left;
    // How many new pairs we can form: min(left's open, right's close)
    const Matched = Math.min(left[1], right[2]);
    // Each pair adds 2 to the correct subsequence length
    const newfull = Matched * 2;
    // Total full = already full in left + already full in right + newly matched pairs
    const full = left[0] + right[0] + newfull;
    // Remaining open: left.open + right.open, minus the Matched we used from left's open
    const open = left[1] + right[1] - Matched;
    // Remaining close: left.close + right.close, minus the Matched we used from right's close
    const close = left[2] + right[2] - Matched;
    return [full, open, close];
  }

  query(node, start, end, l, r, segTree) {
    // No overlap — return neutral [0, 0, 0] (no full, no open, no close)
    if (l > end || r < start) return [0, 0, 0];
    // Full cover — segment lies inside [l, r], return node's [full, open, close]
    if (l <= start && r >= end) return segTree[node];
    // Partial overlap — query both children and merge
    const mid = Math.floor((start + end) / 2);
    const left = this.query(2 * node + 1, start, mid, l, r, segTree);
    const right = this.query(2 * node + 2, mid + 1, end, l, r, segTree);
    return this.mergeNodes(left, right);
  }
}

// ----- Driver: step-by-step execution -----
// str = "(()())", indices 0..5:  (  (  )  (  )  )
let solution = new Solution();
let str = "(()())";
let queries = [
  [0, 2],   // substring "(()"  -> longest correct subsequence length = 2 (pick "()")
  [1, 4],   // substring "()()" -> longest correct = 4
  [2, 5],   // substring ")()"  -> longest correct = 2 (pick "()" from middle)
];
console.log(solution.getLongestSequence(str, queries)); // [2, 4, 2]
