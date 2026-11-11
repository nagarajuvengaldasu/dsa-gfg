/*
 * PROBLEM STATEMENT:
 * Find all pairs (x, -x) in the array. Return pairs [smaller, larger] for each.
 *
 * OPTIMAL APPROACH: Use Set. As we traverse, if -x is already seen, we have a pair.
 *
 * STEP-BY-STEP (arr=[1,3,6,-2,-1,-3,2,7]):
 * i=0: 1, -1 not in seen → add 1
 * i=1: 3, -3 not in seen → add 3
 * i=2: 6 → add 6
 * i=3: -2, 2 not in seen → add -2
 * i=4: -1, 1 in seen! → push(-1,1)
 * i=5: -3, 3 in seen! → push(-3,3)
 * i=6: 2, -2 in seen! → push(-2,2)
 * i=7: 7 → add 7
 * return [-1,1,-3,3,-2,2]
 *
 * EXAMPLE: [1,3,6,-2,-1,-3,2,7] → [-1,1,-3,3,-2,2]
 * Time: O(n) | Space: O(n)
 */
function findPairs(arr, n) {
  const seen = new Set();
  const result = [];
  // WHY: If we see x and later -x (or vice versa), we have a pair.

  for (let i = 0; i < n; i++) {
    const x = arr[i];

    if (seen.has(-x)) {
      if (x < 0) {
        result.push(x, -x);
      } else {
        result.push(-x, x);
      }
      // EXECUTION: -x was seen earlier → pair. Always push (neg, pos): x=-1→(-1,1), x=2→(-2,2).
    }

    seen.add(x);
    // WHY: Add current element so later -x can find it. Order: see 1, later -1 → pair.
  }

  return result.length === 0 ? [0] : result;
}
let arr = [1, 3, 6, -2, -1, -3, 2, 7];
console.log(findPairs(arr, arr.length));
