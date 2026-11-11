/*
 * PROBLEM STATEMENT:
 * Find the first repeating element in an array. Return the 1-based index of the
 * first element that appears more than once. If no repeating element, return -1.
 *
 * NAIVE APPROACH: For each element, check if it appears again later. Return the
 * first such index (1-based).
 *
 * STEP-BY-STEP (arr = [1, 5, 3, 4, 3, 5, 6]):
 * i=0: arr[0]=1, count elements equal to 1 from j=0→6 → count=1. Skip.
 * i=1: arr[1]=5, count from j=1→6 → count=2. 2>=2 → return 1+1 = 2
 * Output: 2 (first repeating is 5 at index 1)
 *
 * EXAMPLE: [1,2,3,4] → -1 (no repeat)
 * EXAMPLE: [1,5,3,4,3,5,6] → 2
 * Time: O(n²) | Space: O(1)
 */
function firstRepeatingElement(arr) {
  let n = arr.length;
  // WHY: Need array length for loop bounds.
  // EXECUTION: n=7 for [1,5,3,4,3,5,6]

  for (let i = 0; i < n; i++) {
    // WHY: Check each position left-to-right; first repeating wins.
    // EXECUTION: i=0,1,2... until we find count>=2 or reach end.

    let count = 0;
    // WHY: Count how many times arr[i] appears from index i onward.

    for (let j = i; j < n; j++) {
      // WHY: j starts at i (include self); scan right to count same element.
      if (arr[i] === arr[j]) {
        count++;
        // EXECUTION: e.g. i=1, arr[1]=5, j=1→5 matches, j=5→5 matches → count=2.
      }
    }
    if (count >= 2) {
      return i + 1;
      // WHY: count>=2 means arr[i] repeats. Return 1-based index.
      // EXECUTION: i=1, count=2 → return 2 (5 is first repeating).
    }
  }
  return -1;
  // WHY: No element repeated → return -1.
}
let arr = [1, 5, 3, 4, 3, 5, 6];
console.log(firstRepeatingElement(arr));
