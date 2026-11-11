/*
 * PROBLEM STATEMENT:
 * Sort a[] according to order in b[]. Elements not in b go at end, sorted ascending.
 *
 * OPTIMAL APPROACH: Build frequency map of a[]. Traverse b[], output each b[i] freq
 * times. Remaining keys from map, sorted, output freq times each.
 *
 * STEP-BY-STEP (a=[2,1,2,3,4], b=[2,1,2]):
 * freq={2:2, 1:1, 3:1, 4:1}
 * b[0]=2 → push 2,2; delete 2. b[1]=1 → push 1; delete 1. b[2]=2 → not in freq
 * remaining: [3,4] sorted → push 3, 4
 * return [2,2,1,3,4]
 *
 * EXAMPLE: a=[2,1,2,3,4], b=[2,1,2] → [2,2,1,3,4]
 * Time: O(n log n) | Space: O(n)
 */
function relativeSortOptimal(a, b) {
  const freq = new Map();
  let n = a.length;
  let m = b.length;
  for (let i = 0; i < n; i++) {
    if (freq.has(a[i])) {
      freq.set(a[i], freq.get(a[i]) + 1);
    } else {
      freq.set(a[i], 1);
    }
  }
  // EXECUTION: freq = {2:2, 1:1, 3:1, 4:1}.
  const result = [];
  for (let i = 0; i < m; i++) {
    if (freq.has(b[i])) {
      let count = freq.get(b[i]);
      while (count--) {
        result.push(b[i]);
      }
      freq.delete(b[i]);
      // WHY: Delete so freq.entries() later = only elements NOT in b.
    }
  }
  const remaining = [];
  for (const [key, count] of freq.entries()) {
    for (let i = 0; i < count; i++) {
      remaining.push(key);
    }
  }
  remaining.sort((a, b) => a - b);
  return result.concat(remaining);
}
let a = [2, 1, 2, 3, 4];
let b = [2, 1, 2];
console.log(relativeSortOptimal(a, b));
