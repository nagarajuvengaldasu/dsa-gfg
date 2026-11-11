/**
 * ========== PROBLEM STATEMENT: UNION-FIND (DISJOINT SET UNION) ==========
 * We have N elements and two operations:
 *   - union(a, b): merge the sets containing a and b.
 *   - isConnected(x, y): return 1 if x and y are in the same set, else 0.
 *
 * We maintain a parent array: each set is a tree; parent[i] points to i's parent.
 * The root of a tree (parent[root] === root) is the representative of that set.
 *
 * Optimizations used:
 *   - Path compression (in find): flatten the tree so future find() is faster.
 *   - Union by rank: attach smaller tree under larger to keep trees shallow.
 *
 * Time: O(α(n)) per operation (effectively constant in practice).
 * =========================================================================
 */

class Solution {
  find(node, parent) {
    // If node is not the root, we need to go up to the root.
    if (parent[node] !== node) {
      // Path compression: set parent[node] to the root, so next find(node) is O(1).
      parent[node] = this.find(parent[node], parent);
    }
    return parent[node];
  }

  union(a, b, parent, rank1) {
    let parenta = this.find(a, parent);
    let parentb = this.find(b, parent);
    // If both have the same root, they are already in the same set; skip.
    if (parenta === parentb) {
      return;
    }
    // Union by rank: attach the tree with smaller rank under the one with larger rank
    // so we keep trees shallow and avoid long chains.
    if (rank1[parenta] < rank1[parentb]) {
      parent[parenta] = parentb;
    } else if (rank1[parenta] > rank1[parentb]) {
      parent[parentb] = parenta;
    } else {
      parent[parentb] = parenta;
      rank1[parenta] = rank1[parenta] + 1; // Same rank: pick one as root and increase its rank.
    }
  }

  isConnected(x, y, parent, rank1) {
    // Same set iff they have the same root; find() returns the root.
    return this.find(x, parent) === this.find(y, parent) ? 1 : 0;
  }
}

let solution = new Solution();
let parent = new Array(5);
let rank1 = new Array(5);
for (let i = 0; i < 5; i++) {
  parent[i] = i;   // Each element is its own set (singleton).
  rank1[i] = 0;    // Initial rank is 0.
}
solution.union(0, 1, parent, rank1);
console.log(solution.isConnected(0, 1, parent, rank1)); // 1 (0 and 1 are in the same set)
console.log(solution.isConnected(0, 2, parent, rank1)); // 0
console.log(solution.isConnected(0, 3, parent, rank1)); // 0
console.log(solution.isConnected(0, 4, parent, rank1)); // 0
