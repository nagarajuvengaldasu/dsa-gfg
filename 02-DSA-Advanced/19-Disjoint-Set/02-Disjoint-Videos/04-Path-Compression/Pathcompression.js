/**
 * ========== PROBLEM STATEMENT: DISJOINT SET UNION WITH PATH COMPRESSION ==========
 * Path compression is an optimization for the find(x) operation: while finding the root,
 * we make every node on the path from x to the root point directly to the root.
 * This "flattens" the tree so future find() calls on those nodes are O(1).
 *
 *   - createSets(n): create n singleton sets; parent[i]=i, rank[i]=0.
 *   - find(x, parent): return the root of x's set, and set parent[x]=root (path compression).
 *   - union(x, y, parent, rank): merge sets using union by rank.
 *
 * With both Union by Rank and Path Compression, m operations take O(m · α(n)),
 * where α(n) is the inverse Ackermann function (effectively ≤ 4 in practice).
 * ==================================================================================
 */

function createSets(n) {
  let parent = new Array(n); // allocate parent array of size n
  let rank = new Array(n).fill(0); // allocate rank array, all zeros
  for (let i = 0; i < n; i++) {
    parent[i] = i; // each element is its own parent (singleton set)
  }
  return [parent, rank]; // return both for use in union-by-rank
}

// find with path compression: on the way back from root, set parent[x] = root for every x on the path
function find(x, parent) {
  if (parent[x] === x) {
    return x; // base case: x is the root of its set
  }
  parent[x] = find(parent[x], parent); // recurse to root; then set parent[x] to that root (compress path)
  return parent[x]; // return root (same as parent[x] after assignment)
}

function union(x, y, parent, rank) {
  let xroot = find(x, parent); // find root of x's set
  let yroot = find(y, parent); // find root of y's set
  if (xroot === yroot) return;
  if (rank[xroot] < rank[yroot]) {
    // if x's rank is less than y's rank
    parent[xroot] = yroot;
  } else if (rank[xroot] > rank[yroot]) {
    // if x's rank is greater than y's rank
    parent[yroot] = xroot;
  } else {
    // if x's rank is equal to y's rank
    parent[yroot] = xroot;
    rank[xroot] = rank[xroot] + 1;
  }
}

let [parent, rank] = createSets(8); // 8 singletons: parent=[0..7], rank=[0..0]
union(0, 1, parent, rank); // merge 0,1 → 1 under 0, rank[0]=1
union(0, 2, parent, rank); // merge 0,2 → 2 under 0
union(1, 3, parent, rank); // merge 1,3 → 3 under 0 (1's root is 0)
union(1, 4, parent, rank);
union(2, 5, parent, rank);
union(3, 6, parent, rank);
union(3, 7, parent, rank);
// Tree: 0 is root; 1,2 are children of 0; 3,4 of 1; 5 of 2; 6,7 of 3.
// Path from 7 to 0: 7 -> 3 -> 1 -> 0
console.log("Before find(7):", parent.slice()); // show parent array before compression
console.log("find(7) =", find(7, parent)); // path compression: 7, 3, 1 now point to 0
console.log("After find(7):", parent.slice()); // show parent array after (nodes on path point to root)
