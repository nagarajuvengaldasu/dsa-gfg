/**
 * ========== PROBLEM STATEMENT: NUMBER OF CONNECTED COMPONENTS ==========
 * Given n nodes and a list of edges (or union operations), find the number
 * of connected components. Two nodes are in the same component iff they
 * are connected by a path (via union operations).
 *
 * Approach: Use Disjoint Set Union (Union-Find). After all unions,
 * the number of roots (nodes where arr[i] === i after find) equals the
 * number of connected components.
 *
 *   - find(node, arr): return root of node's set (with path compression).
 *   - union(a, b, arr, rank1): merge sets containing a and b (union by rank).
 *   - findnumberOfConnectedComponents(n, arr, rank1): count roots = count components.
 * ============================================================================
 */

class Solution {
  find(node, arr) {
    if (arr[node] !== node) {
      arr[node] = this.find(arr[node], arr);   // path compression: flatten to root
    }
    return arr[node];
  }

  union(a, b, arr, rank1, n) {
    let parenta = this.find(a, arr);      // root of a's set
    let parentb = this.find(b, arr);      // root of b's set
    if (parenta === parentb) return;      // already in same set; no merge
    if (rank1[parenta] < rank1[parentb]) {
      arr[parenta] = parentb;             // attach a's tree under b's root (union by rank)
    } else if (rank1[parenta] > rank1[parentb]) {
      arr[parentb] = parenta;
    } else {
      arr[parentb] = parenta;
      rank1[parenta] = rank1[parenta] + 1;   // same rank: pick one, increment
    }
  }

  findnumberOfConnectedComponents(n, arr, rank1) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (this.find(i, arr) === i) {      // root: each root = one connected component
        count++;
      }
    }
    return count;
  }
}

let solution = new Solution();
let arr = new Array(5);
let rank1 = new Array(5);
for (let i = 0; i < 5; i++) {
  arr[i] = i;   // each node starts as its own set (singleton)
  rank1[i] = 0;
}
// No unions yet: 5 singletons → 5 components
console.log(solution.findnumberOfConnectedComponents(5, arr, rank1));   // 5
