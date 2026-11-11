// ========== STEP-BY-STEP: Merge Overlapping Intervals (NAIVE) ==========
// Problem: Given an array of intervals, merge all overlapping intervals.
// Idea: For every interval x, check if x overlaps with other intervals.
//       In case of overlap: (i) Update x to the merged interval,
//       (ii) Delete the other interval. Repeat until no merge for x, then move to next.
// Time: O(n^3) [can be optimized to O(n^2)]

// Step 0: Two intervals overlap iff they share any point (or touch).
function overlaps(a, b) {
  return !(a[1] < b[0] || b[1] < a[0]);
}

function mergeOverlappingIntervalsNaive(intervals) {
  if (!intervals?.length) return [];

  let arr = intervals.map((x) => [...x]);
  let i = 0;

  while (i < arr.length) {
    let x = arr[i];           // Step 1: take current interval x
    let foundOverlap = false;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (overlaps(x, arr[j])) {
        // Step 2a (i): Update x to merged interval [min starts, max ends]
        x = [Math.min(x[0], arr[j][0]), Math.max(x[1], arr[j][1])];
        arr[i] = x;
        // Step 2a (ii): Delete the other interval
        arr.splice(j, 1);
        if (j < i) i--;
        foundOverlap = true;
        break;  // Step 2b: re-check x against remaining intervals (next loop iteration)
      }
    }

    if (!foundOverlap) i++;   // Step 3: no overlap for x → move to next interval
  }

  return arr.sort((a, b) => a[0] - b[0]);  // Step 4: sort by start for standard output order
}

// ---------- Example run: [[1,3],[2,4],[5,7],[6,8]] ----------
// i=0, x=[1,3]. j=1: overlaps [2,4] → merge to [1,4], delete [2,4], arr=[[1,4],[5,7],[6,8]], i stays 0.
// i=0, x=[1,4]. No overlap with [5,7],[6,8] → i=1.
// i=1, x=[5,7]. j=2: overlaps [6,8] → merge to [5,8], delete [6,8], arr=[[1,4],[5,8]], i stays 1.
// i=1, x=[5,8]. No overlap → i=2. Done. After sort: [[1,4],[5,8]]

// ---------- From Naive slide: [[5, 10], [2, 3], [6, 8], [1, 7], [1, 10], [2, 3]] ----------
console.log("Merge Overlapping Intervals Naive",
  mergeOverlappingIntervalsNaive([
    [5, 10],
    [2, 3],
    [6, 8],
    [1, 7],
    [1, 10],
    [2, 3],
  ])
);
