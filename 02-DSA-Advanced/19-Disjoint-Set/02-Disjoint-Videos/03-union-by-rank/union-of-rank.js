/**
 * ========== PROBLEM STATEMENT: DISJOINT SET UNION WITH UNION BY RANK ==========
 * Same as basic Union-Find, but union is optimized so the smaller tree (by rank)
 * is attached under the larger. This keeps trees shallow and makes find faster.
 *
 *   - createSets(n): create n singleton sets; each has parent[i]=i, rank[i]=0.
 *   - find(x, parent): return the root of the set containing x.
 *   - union(x, y, parent, rank): merge sets of x and y using rank to decide which
 *     root becomes the new root (attach lower rank under higher; if equal, pick one and increment its rank).
 *
 * Rank is an upper bound on tree height. Union by rank gives near O(log n) find without path compression.
 * ================================================================================================
 */

function createsets(n) {
  let parent = new Array(n);           // parent[i] = parent of i in the set tree
  let rank = new Array(n).fill(0);     // rank[i] = upper bound on height of tree rooted at i
  for (let i = 0; i < n; i++) {
    parent[i] = i;                     // each element is its own parent (singleton)
  }
  return [parent, rank];
}

function union(x, y, parent, rank) {
  let xroot = find(x, parent);         // root of set containing x
  let yroot = find(y, parent);         // root of set containing y
  if (xroot === yroot) return;         // already in same set; do nothing
  if (rank[xroot] < rank[yroot]) {
    parent[xroot] = yroot;             // attach x's tree under y's root (y's tree is "taller")
  } else if (rank[xroot] > rank[yroot]) {
    parent[yroot] = xroot;             // attach y's tree under x's root
  } else {
    parent[yroot] = xroot;             // same rank: attach y under x arbitrarily
    rank[xroot] = rank[xroot] + 1;     // new root's tree height increases by 1
  }
}

function find(x, parent) {
  if (parent[x] === x) {
    return x;                          // x is the root
  }
  return find(parent[x], parent);      // recurse up to root
}

let [parent, rank] = createsets(5);    // parent=[0,1,2,3,4], rank=[0,0,0,0,0]
console.log(parent);
console.log(rank);
union(0, 1, parent, rank);             // merge 0,1 (equal rank → 1 under 0, rank[0]=1)
console.log(parent);
console.log(rank);
union(0, 2, parent, rank);             // 2's root=2 rank 0; 0's rank 1 → 2 under 0
console.log(parent);
console.log(rank);
union(0, 3, parent, rank);
console.log(parent);
console.log(rank);
union(0, 4, parent, rank);
console.log(parent);
console.log(rank);
console.log(find(0, parent));          // 0
console.log(find(1, parent));          // 0
console.log(find(2, parent));          // 0
console.log(find(3, parent));          // 0
console.log(find(4, parent));          // 0