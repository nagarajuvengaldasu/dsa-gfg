// ========== STEP-BY-STEP: Sort by Absolute Difference (NAIVE) ==========
// Goal: Sort the array by |arr[i] - x| (closest to x first). Same diff → preserve original order.
// Idea: For each output position i, scan all unused elements and pick the one with smallest
//       |arr[j] - x|. Mark it used and append to result. Time O(n²), Space O(n).

function sortByAbsoluteDifference(arr, x) {
  const n = arr.length;
  const used = new Array(n).fill(false); // Step 1: track which indices are already placed
  const result = [];

  for (let i = 0; i < n; i++) {
    // Step 2: For this output position, find the unused element with minimum |arr[j] - x|
    let mindiff = Number.POSITIVE_INFINITY;
    let index = -1;
    for (let j = 0; j < n; j++) {
      if (!used[j]) {
        const diff = Math.abs(arr[j] - x); // Step 3: compute distance from x
        if (diff < mindiff) {
          mindiff = diff;
          index = j;
        }
      }
    }
    used[index] = true; // Step 4: mark this element as used
    result.push(arr[index]); // Step 5: append to result (next in sorted order)
  }
  return result;
}

// ---------- Example run: arr = [10, 5, 3, 9, 2], x = 7 ----------
// |10-7|=3, |5-7|=2, |3-7|=4, |9-7|=2, |2-7|=5
// i=0: among unused, min diff = 2 at index 1 (arr[1]=5) → result=[5], used[1]=true
// i=1: min diff = 2 at index 3 (arr[3]=9) → result=[5,9], used[3]=true
// i=2: min diff = 3 at index 0 (arr[0]=10) → result=[5,9,10], used[0]=true
// i=3: min diff = 4 at index 2 (arr[2]=3) → result=[5,9,10,3], used[2]=true
// i=4: only index 4 left (arr[4]=2) → result=[5,9,10,3,2]
// Result: [5, 9, 10, 3, 2]
let arr = [10, 5, 3, 9, 2];
let x = 7;
console.log(sortByAbsoluteDifference(arr, x)); // Output: [5, 9, 10, 3, 2]
