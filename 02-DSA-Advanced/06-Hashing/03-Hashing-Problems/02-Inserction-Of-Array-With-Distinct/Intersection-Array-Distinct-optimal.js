/*
 * PROBLEM STATEMENT:
 * Given two arrays with distinct elements in each, find the count of elements
 * that appear in both arrays (intersection count).
 *
 * OPTIMAL APPROACH: Store all elements from a[] in a Map. For each element in
 * b[], if it exists in map, increment count; else add to map.
 *
 * STEP-BY-STEP (a=[20,10,30,50,40], b=[15,25,30,20,35]):
 * Loop1: result = {20:1, 10:1, 30:1, 50:1, 40:1}
 * Loop2: b[0]=15 not in map → add. b[1]=25 not in map → add.
 *        b[2]=30 in map → count=1. b[3]=20 in map → count=2. b[4]=35 not in map → add.
 * return 2
 *
 * EXAMPLE: a=[20,10,30,50,40], b=[15,25,30,20,35] → 2
 * Time: O(n+m) | Space: O(n+m)
 */
function intersectionOfArrayWithDistinct(a, b) {
  let n = a.length;
  let m = b.length;
  let result = new Map();
  // WHY: Store elements from a[] for O(1) lookup. Value 1 is placeholder.
  let count = 0;
  for (let i = 0; i < n; i++) {
    result.set(a[i], 1);
    // EXECUTION: Put all a[] in map. e.g. map = {20:1, 10:1, 30:1, 50:1, 40:1}.
  }
  for (let i = 0; i < m; i++) {
    if (result.has(b[i])) {
      count++;
      // EXECUTION: b[i] exists in a[] → intersection. e.g. b[2]=30 in map → count=1.
    } else {
      result.set(b[i], 1);
      // WHY: Add b[i] if not in map (problem may expect union-like behavior; else this line optional).
    }
  }
  return count;
}
let a = [20, 10, 30, 50, 40];
let b = [15, 25, 30, 20, 35];
console.log(intersectionOfArrayWithDistinct(a, b));
