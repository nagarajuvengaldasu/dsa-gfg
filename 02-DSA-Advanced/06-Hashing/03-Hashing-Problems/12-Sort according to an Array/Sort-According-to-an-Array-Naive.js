/*
 * PROBLEM STATEMENT:
 * Sort a1[] according to the order defined by a2[]. Elements in a1 but not in a2
 * go at the end, sorted ascending.
 *
 * NAIVE APPROACH: For each element in a2 (in order), find all matches in a1 and add.
 * Remaining elements sorted and appended.
 *
 * STEP-BY-STEP (a1=[2,1,2,3,4], a2=[2,1,2]):
 * Process a2: 2→add both 2s, used=[T,F,T,F,F]; 1→add 1; 2→skip (already in seen)
 * result=[2,2,1]
 * remaining: 3,4 → sort → [3,4]
 * return [2,2,1,3,4]
 *
 * EXAMPLE: a1=[2,1,2,3,4], a2=[2,1,2] → [2,2,1,3,4]
 * Time: O(n*m) | Space: O(n)
 */
function relativeSortNaive(a1, a2) {
  const used = new Array(a1.length).fill(false);
  // WHY: Track which a1 elements we've already added to result.
  const result = [];
  const seen = new Set();
  for (let i = 0; i < a2.length; i++) {
    if (seen.has(a2[i])) continue;
    seen.add(a2[i]);
    // WHY: a2 may have duplicates [2,1,2]; process each value only once.
    for (let j = 0; j < a1.length; j++) {
      if (!used[j] && a1[j] === a2[i]) {
        result.push(a1[j]);
        used[j] = true;
        // EXECUTION: Add all a1 elements matching a2[i], mark used.
      }
    }
  }
  const remaining = [];
  for (let i = 0; i < a1.length; i++) {
    if (!used[i]) remaining.push(a1[i]);
    // WHY: Elements in a1 but not in a2.
  }
  remaining.sort((a, b) => a - b);
  return result.concat(remaining);
}
let a1 = [2, 1, 2, 3, 4];
let a2 = [2, 1, 2];
console.log(relativeSortNaive(a1, a2));
