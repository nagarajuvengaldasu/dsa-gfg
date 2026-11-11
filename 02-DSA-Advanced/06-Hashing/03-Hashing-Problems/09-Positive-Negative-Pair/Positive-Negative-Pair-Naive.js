/*
 * PROBLEM STATEMENT:
 * Find all pairs (x, -x) in the array. For each positive, check if negative exists.
 * Return pairs as [neg, pos] for each pair.
 *
 * NAIVE APPROACH: For each negative element, scan array for its positive counterpart.
 *
 * STEP-BY-STEP (arr=[1,2,-1,-2,3]):
 * i=0: 1≥0 skip
 * i=1: 2≥0 skip
 * i=2: -1<0, needPositive=1, j=0 arr[0]=1 match → push(-1,1), break
 * i=3: -2<0, needPositive=2, j=1 match → push(-2,2), break
 * i=4: 3≥0 skip
 * return [-1, 1, -2, 2]
 *
 * EXAMPLE: [1,2,-1,-2,3] → [-1,1,-2,2]
 * Time: O(n²) | Space: O(k)
 */

function positiveNegativePair(arr, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) continue;
    // WHY: Process only negatives; for each neg, find if positive exists.
    const neg = arr[i];
    const needPositive = -neg;
    // EXECUTION: -1 needs +1, -2 needs +2.
    for (let j = 0; j < n; j++) {
      if (arr[j] === needPositive) {
        result.push(neg, needPositive);
        break;
        // EXECUTION: Found pair. Push (neg,pos), break inner loop.
      }
    }
  }
  return result;
}
// Example: arr = [1, 2, -1, -2, 3]  →  pairs: (1, -1), (2, -2). 3 has no -3.
// Example: arr = [1, -1, 2, -2]    →  pairs: (1, -1), (2, -2)
let arr = [1, 2, -1, -2, 3];
console.log(positiveNegativePair(arr, arr.length)); // [[1, -1], [2, -2]]
