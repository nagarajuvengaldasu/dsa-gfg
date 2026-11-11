// ========== STEP-BY-STEP: Merge Overlapping Intervals (OPTIMAL) ==========
// Goal: Merge all overlapping intervals. Time O(n log n) from sort, then one pass.
// Idea: Sort by start. Keep “current merged” at arr[res]. For each next interval arr[i]:
//       if it overlaps current (arr[res][1] >= arr[i][0]), extend current’s end;
//       else start a new merged interval at ++res and set arr[res] = arr[i].

function MergeIntrevals(arr) {
  // Step 1: Sort intervals by start time so we can merge in one left-to-right pass
  arr.sort((a, b) => a[0] - b[0]);
  let res = 0;   // Step 2: index of the “last merged interval” in the in-place result

  for (let i = 1; i < arr.length; i++) {
    if (arr[res][1] >= arr[i][0]) {
      // Step 3a: current merged interval overlaps arr[i] — extend end to max of both ends
      arr[res][1] = Math.max(arr[res][1], arr[i][1]);
    } else {
      // Step 3b: no overlap — start new merged interval at res+1, copy arr[i]
      res++;
      arr[res] = arr[i];
    }
  }
  // Step 4: merged intervals are arr[0..res]
  for (let i = 0; i <= res; i++) {
    console.log(arr[i]);
  }
}

// ---------- Example run: [[5,10],[3,15],[18,30],[2,7]] ----------
// Step 1: After sort → [[2,7],[3,15],[5,10],[18,30]]
// res=0. i=1: [2,7] vs [3,15] → 7>=3, merge → [2,15]. res stays 0.
// i=2: [2,15] vs [5,10] → 15>=5, merge → [2,15]. res stays 0.
// i=3: [2,15] vs [18,30] → 15<18 → res=1, arr[1]=[18,30]. Merged: [[2,15],[18,30]]
let arr = [[5, 10], [3, 15], [18, 30], [2, 7]];
MergeIntrevals(arr);