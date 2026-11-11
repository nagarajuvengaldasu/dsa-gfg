/*
 * PROBLEM STATEMENT:
 * Find the first repeating element in an array. Return the 1-based index of the
 * first element that appears more than once. If no repeating, return -1.
 *
 * OPTIMAL APPROACH: Use a Map to store first occurrence index. On seeing a
 * duplicate, update the minimum index. Return smallest such index + 1.
 *
 * STEP-BY-STEP (arr = [1, 5, 3, 4, 3, 5, 6]):
 * i=0: 1 not in map → firstIndex.set(1, 0)
 * i=1: 5 not in map → firstIndex.set(5, 1)
 * i=2: 3 not in map → firstIndex.set(3, 2)
 * i=3: 4 not in map → firstIndex.set(4, 3)
 * i=4: 3 in map → best = min(∞, 2) = 2
 * i=5: 5 in map → best = min(2, 1) = 1
 * i=6: 6 not in map → firstIndex.set(6, 6)
 * return 1+1 = 2
 *
 * EXAMPLE: [1,2,3,4] → -1
 * EXAMPLE: [1,5,3,4,3,5,6] → 2
 * Time: O(n) | Space: O(n)
 */
function firstRepeatingElement(arr) {
  let n = arr.length;
  // WHY: Loop bound.
  let firstIndex = new Map();
  // WHY: Store element → first occurrence index. When we see duplicate, we know its first pos.
  let best = Infinity;
  // WHY: Track smallest index among all repeating elements. Infinity = none found yet.
  for (let i = 0; i < n; i++) {
    const v = arr[i];
    if (!firstIndex.has(v)) {
      firstIndex.set(v, i);
      // EXECUTION: First time seeing v → record its index. e.g. v=1,i=0 → map{1:0}.
    } else {
      best = Math.min(best, firstIndex.get(v));
      // EXECUTION: Duplicate! v=3 at i=4, map had 3→2. best=min(∞,2)=2. Later v=5 at i=5, best=min(2,1)=1.
    }
  }
  return best === Infinity ? -1 : best + 1;
  // WHY: best+1 = 1-based index. Infinity means no duplicate → return -1.
}
let arr = [1, 5, 3, 4, 3, 5, 6];
console.log(firstRepeatingElement(arr));
