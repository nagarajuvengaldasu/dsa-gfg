/**
 * ========== PROBLEM STATEMENT: DISJOINT SET UNION (Union-Find) ==========
 * Maintain a collection of disjoint sets. Support:
 *   - createSets(n): create n singleton sets (elements 0 to n-1).
 *   - find(parent, x): return the representative (root) of the set containing x.
 *   - union(parent, x, y): merge the sets containing x and y.
 *
 * Implementation: each set is a tree; parent[i] = parent of i (root has parent[i]=i).
 * Find: follow parent pointers until root. Union: make one root point to the other.
 * This version uses no optimizations (no path compression, no union by rank).
 * ========================================================================
 */

function createsets(n) {
  let parent = new Array(n);        // parent[i] = representative of i's set
  for (let i = 0; i < n; i++) {
    parent[i] = i;                  // each element is its own parent (n singleton sets)
  }
  return parent;
}

function find(parent, x) {
  if (parent[x] === x) {
    return x;                       // x is the root of its set
  }
  return find(parent, parent[x]);    // recurse on x's parent until we reach root
}

function union(parent, x, y) {
  let xroot = find(parent, x);      // root of set containing x
  let yroot = find(parent, y);      // root of set containing y
  if (xroot === yroot) {
    return;                         // already in same set; nothing to do
  }
  parent[yroot] = xroot;            // attach y's tree under x's root (merge sets)
}

let parent = createsets(5);         // [0,1,2,3,4] — five separate sets
console.log(parent);
union(parent, 0, 1);                // merge 0 and 1 → parent[1]=0
console.log(parent);
union(parent, 0, 2);                // merge set of 0 with 2 → parent[2]=0
console.log(parent);
union(parent, 0, 3);
console.log(parent);
union(parent, 0, 4);
console.log(parent);                // all point to 0: [0,0,0,0,0]
console.log(find(parent, 0));       // 0
console.log(find(parent, 1));       // 0 (1’s root is 0)
