// ========== STEP-BY-STEP: Sort by Absolute Difference (OPTIMAL) ==========
// Goal: Sort the array by |arr[i] - x| (closest to x first). Same diff → preserve original order.
// Idea: Build an array of { diff, index, value }, sort by diff (then by index for ties),
//       then map back to values. Time O(n log n) from sort, Space O(n).

function sortByAbsoluteDifference(arr, x) {
  const n = arr.length;
  const result = [];
  // Step 1: For each element, store |arr[i] - x|, original index, and value
  for (let i = 0; i < n; i++) {
    result.push({
      diff: Math.abs(arr[i] - x),
      index: i,
      value: arr[i],
    });
  }
  // Step 2: Sort by diff ascending; if diff ties, sort by index (preserve original order)
  result.sort((a, b) => {
    if (a.diff !== b.diff) {
      return a.diff - b.diff;
    }
    return a.index - b.index;
  });
  // Step 3: Return only the values in the new order
  return result.map((item) => item.value);
}

// ---------- Example run: arr = [10, 5, 3, 9, 2], x = 7 ----------
// Step 1: result = [{diff:3,index:0,value:10}, {diff:2,index:1,value:5}, {diff:4,index:2,value:3},
//                   {diff:2,index:3,value:9}, {diff:5,index:4,value:2}]
// Step 2: Sorted by diff then index → (2,1), (2,3), (3,0), (4,2), (5,4) → values: [5, 9, 10, 3, 2]
// Result: [5, 9, 10, 3, 2]
let arr = [10, 5, 3, 9, 2];
let x = 7;
console.log(sortByAbsoluteDifference(arr, x)); // Output: [5, 9, 10, 3, 2]
