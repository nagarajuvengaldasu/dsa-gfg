/*
 * ========== PROBLEM: Minimum Swaps to Sort ==========
 *
 * Given an array of distinct integers, find the minimum number of
 * swaps required to sort the array. You may swap any two elements.
 *
 * Input:  arr = array of distinct integers (unsorted)
 *
 * Output: Minimum number of swaps needed so the array becomes sorted
 *         in ascending order.
 *
 * Approach: Model the permutation as cycles.
 * - After sorting, we know the "correct" position for each value.
 * - Build arrpos: for each position i in the sorted order, store
 *   (value, that value's original index). So arrpos[i][1] = "where
 *   is the element that should be at i right now?"
 * - Following i -> arrpos[i][1] -> arrpos[arrpos[i][1]][1] -> ...
 *   gives a cycle. Each cycle of size k can be fixed with k-1 swaps.
 * - Total swaps = sum over all cycles of (cycle_size - 1).
 *
 * Time: O(n log n) due to sort  |  Space: O(n)
 */

class Solution {
  minimumSwaps(arr) {
    let n = arr.length;

    // arrpos[i] = [value that should be at position i in sorted order, that value's original index]
    let arrpos = arr.map((value, index) => [value, index]);
    arrpos.sort((a, b) => a[0] - b[0]); // sort by value; now arrpos[i] describes "who belongs at position i"

    // visited[i] = true if we've already counted the cycle that includes position i
    let visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
      // Skip if this position is already part of a cycle we processed, or if element is already in place (cycle size 1)
      if (visited[i] || arrpos[i][1] === i) {
        continue;
      }

      // Trace the cycle starting at position i: i -> arrpos[i][1] -> arrpos[arrpos[i][1]][1] -> ... back to i
      let cycle_size = 0;
      let j = i;

      while (!visited[j]) {
        visited[j] = true;       // Mark this position as part of current cycle
        j = arrpos[j][1];       // Jump to where the "element that belongs at j" currently lives
        cycle_size++;
      }

      // A cycle of size k needs k-1 swaps to fix (e.g. cycle of 3: swap two to fix one, then one more swap)
      if (cycle_size > 1) {
        swaps += cycle_size - 1;
      }
    }
    return swaps;
  }
}

let sol = new Solution();
let arr = [10, 19, 6, 3, 5];
console.log(sol.minimumSwaps(arr));
