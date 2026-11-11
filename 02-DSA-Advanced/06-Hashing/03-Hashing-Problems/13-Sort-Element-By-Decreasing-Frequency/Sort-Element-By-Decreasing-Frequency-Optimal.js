/*
 * PROBLEM STATEMENT:
 * Sort array by decreasing frequency. Same frequency → smaller element first.
 *
 * OPTIMAL: One pass to build frequency map. Sort map entries by (freq desc, elem asc).
 * Expand each element freq times.
 *
 * STEP-BY-STEP (arr=[9,9,9,2,5]):
 * map={9:3, 2:1, 5:1}
 * entries sorted: [(9,3),(2,1),(5,1)]
 * result=[9,9,9,2,5]
 *
 * EXAMPLE: [9,9,9,2,5] → [9,9,9,2,5]
 * Time: O(n log n) | Space: O(n)
 */
function sortElementByDecreasingFrequency(arr) {
  let res = new Map();
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (res.has(arr[i])) {
      res.set(arr[i], res.get(arr[i]) + 1);
    } else {
      res.set(arr[i], 1);
    }
  }
  // EXECUTION: res = {9:3, 2:1, 5:1}. One pass, O(n).
  const entries = Array.from(res.entries());

  entries.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
    // WHY: Freq desc, then elem asc. [(9,3),(2,1),(5,1)].
  });

  const result = [];
  for (const [num, count] of entries) {
    for (let i = 0; i < count; i++) {
      result.push(num);
    }
  }
  return result;
}
let arr = [9, 9, 9, 2, 5];
console.log(sortElementByDecreasingFrequency(arr));
