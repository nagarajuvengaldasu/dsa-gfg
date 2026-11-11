/*
 * PROBLEM STATEMENT:
 * Given an array, return all elements that appear exactly once (non-repeated).
 * Preserve the order of first occurrence.
 *
 * NAIVE APPROACH: For each element, count its occurrences in the full array.
 * If count === 1, add to result.
 *
 * STEP-BY-STEP (a=[1,2,1,1,2]):
 * i=0: a[0]=1, count in array=3 → skip
 * i=1: a[1]=2, count=2 → skip
 * i=2: a[2]=1, count=3 → skip
 * i=3: a[3]=1, count=3 → skip
 * i=4: a[4]=2, count=2 → skip
 * return [] (no non-repeated in this example)
 *
 * EXAMPLE: a=[1,1,2,2,3,3,4,5,6,7] → [4,5,6,7]
 * EXAMPLE: a=[1,2,1,1,2] → []
 * Time: O(n²) | Space: O(k)
 */
function printNonRepeatedElements(a, n) {
  const result = [];
  // WHY: Store elements that appear exactly once, in order.
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (a[j] === a[i]) {
        count++;
        // EXECUTION: Count how many times a[i] appears in full array. e.g. a[0]=1, count=3.
      }
    }
    if (count === 1) {
      result.push(a[i]);
      // WHY: count=1 means non-repeated. Add in order of first occurrence.
    }
  }
  return result;
}
let a = [1, 2, 1, 1, 2];
let n = a.length;
console.log(printNonRepeatedElements(a, n));
