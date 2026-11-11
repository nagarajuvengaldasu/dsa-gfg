/*
 * PROBLEM STATEMENT:
 * Sort array by decreasing frequency. Same frequency → smaller element first.
 *
 * NAIVE: Get distinct elements, count freq for each by scanning full array,
 * sort by (freq desc, element asc), expand.
 *
 * STEP-BY-STEP (arr=[9,9,9,2,5]):
 * distinct=[9,2,5]
 * pairs: 9→3, 2→1, 5→1
 * sort: [(9,3),(2,1),(5,1)] (freq desc, then 2<5)
 * expand: [9,9,9,2,5]
 *
 * EXAMPLE: [9,9,9,2,5] → [9,9,9,2,5]
 * Time: O(n*d) | Space: O(n)
 */

function sortElementByDecreasingFrequency(arr) {
  const n = arr.length;
  const distinct = [];

  for (let i = 0; i < n; i++) {
    let found = false;
    for (let j = 0; j < distinct.length; j++) {
      if (distinct[j] === arr[i]) {
        found = true;
        break;
      }
    }
    if (!found) distinct.push(arr[i]);
    // EXECUTION: Get unique elements. [9,9,9,2,5] → distinct=[9,2,5].
  }

  const pairs = [];
  for (let i = 0; i < distinct.length; i++) {
    const num = distinct[i];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] === num) count++;
    }
    pairs.push([num, count]);
    // EXECUTION: pairs = [[9,3],[2,1],[5,1]].
  }

  pairs.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0] - b[0];
    // WHY: Higher freq first. Same freq → smaller element first (2 before 5).
  });

  const result = [];
  for (let i = 0; i < pairs.length; i++) {
    const [num, count] = pairs[i];
    for (let k = 0; k < count; k++) result.push(num);
    // EXECUTION: Expand. [9,3] → push 9 three times.
  }

  return result;
}

let arr = [9, 9, 9, 2, 5];
console.log(sortElementByDecreasingFrequency(arr)); // [9, 9, 9, 2, 5] (9:3, 2:1, 5:1 → 2 before 5)
