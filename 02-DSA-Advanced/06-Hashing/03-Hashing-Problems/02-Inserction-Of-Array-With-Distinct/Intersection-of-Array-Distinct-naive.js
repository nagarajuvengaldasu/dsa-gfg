/*
 * PROBLEM STATEMENT:
 * Given two arrays with distinct elements in each, find the count of elements
 * that appear in both arrays (intersection count).
 *
 * NAIVE APPROACH: For each element in a[], scan b[] to check if it exists.
 *
 * STEP-BY-STEP (a=[20,10,30,50,40], b=[15,25,30,20,35]):
 * i=0: a[0]=20 → j=0..4, b[3]=20 match → count=1, break
 * i=1: a[1]=10 → no match in b
 * i=2: a[2]=30 → j=0..4, b[2]=30 match → count=2, break
 * i=3: a[3]=50 → no match
 * i=4: a[4]=40 → no match
 * return 2
 *
 * EXAMPLE: a=[20,10,30,50,40], b=[15,25,30,20,35] → 2 (20, 30)
 * Time: O(n*m) | Space: O(1)
 */
function intersectionOfArrayWithDistinct(a, b) {
  let n = a.length;
  let m = b.length;
  // WHY: Loop bounds for a[] and b[].
  let count = 0;
  // WHY: Count elements that appear in both arrays.
  for (let i = 0; i < n; i++) {
    // WHY: For each element in a[], check if it exists in b[].
    for (let j = 0; j < m; j++) {
      if (a[i] === b[j]) {
        count++;
        // EXECUTION: a[i] found in b[] → intersection. e.g. a[0]=20, b[3]=20 → count=1.
        break;
        // WHY: Found match, no need to scan rest of b[]. Saves time.
      }
    }
  }
  return count;
}
let a = [20, 10, 30, 50, 40];
let b = [15, 25, 30, 20, 35];
console.log(intersectionOfArrayWithDistinct(a, b));
