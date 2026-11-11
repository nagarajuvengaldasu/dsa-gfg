/*
 * PROBLEM STATEMENT:
 * Find union of two arrays (with duplicates). Return array of unique elements
 * present in either array, in order of first occurrence.
 *
 * NAIVE APPROACH: Traverse a[], add to result if not already in result. Same for b[].
 *
 * STEP-BY-STEP (a=[1,2,1,1,2], b=[2,2,1,2,1]):
 * Process a[]: 1→add, 2→add, 1→skip, 1→skip, 2→skip → res=[1,2]
 * Process b[]: 2→skip, 2→skip, 1→skip, 2→skip, 1→skip → res=[1,2]
 * return [1, 2]
 *
 * EXAMPLE: a=[1,2,1,1,2], b=[2,2,1,2,1] → [1, 2]
 * Time: O((n+m)*res_len) | Space: O(res)
 */
function unionOfArraysWithDuplicates(a, b) {
  let res = [];
  // WHY: Result array to collect unique elements in order of first occurrence.

  for (let i = 0; i < a.length; i++) {
    let found = false;
    // WHY: Check if a[i] already in res before adding.
    for (let j = 0; j < res.length; j++) {
      if (res[j] === a[i]) {
        found = true;
        break;
        // EXECUTION: a[i] already in res → skip (avoid duplicate). e.g. a[2]=1, res has 1 → skip.
      }
    }
    if (!found) {
      res.push(a[i]);
      // EXECUTION: First occurrence → add. e.g. a[0]=1 → res=[1], a[1]=2 → res=[1,2].
    }
  }

  for (let i = 0; i < b.length; i++) {
    let found = false;
    for (let j = 0; j < res.length; j++) {
      if (res[j] === b[i]) {
        found = true;
        break;
        // EXECUTION: b[i] already in res → skip. All of b[] already in res for this example.
      }
    }
    if (!found) {
      res.push(b[i]);
      // WHY: b[i] not in res → add to union.
    }
  }
  return res;
}
let a = [1, 2, 1, 1, 2];
let b = [2, 2, 1, 2, 1];
console.log(unionOfArraysWithDuplicates(a, b));
