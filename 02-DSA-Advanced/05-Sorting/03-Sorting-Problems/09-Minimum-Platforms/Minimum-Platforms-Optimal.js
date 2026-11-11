// ========== STEP-BY-STEP: Minimum Platforms (OPTIMAL) ==========
// Goal: Find minimum number of platforms needed so no train waits. arr[i], dep[i] = train i's times.
// Idea: Sort arrivals and departures. Sweep in time: compare next arrival arr[i] with next departure dep[j].
//       If arrival happens first (arr[i] <= dep[j]) → one more train → count++, i++.
//       Else departure first → one train leaves → count--, j++. Track max count. Time O(n log n).

function minimumPlatforms(arr, dep) {
  // Step 1: Sort both arrays so we can process events in chronological order
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);
  let n = arr.length;
  let m = dep.length;
  let i = 1; // Step 2: index of next arrival (first train already "in" at arr[0])
  let j = 0; // index of next departure
  let res = 1; // max platforms seen so far (at least 1 = first train)
  let count = 1; // current trains on platform (first train already present)

  while (i < n && j < m) {
    if (arr[i] <= dep[j]) {
      // Step 3a: Next event is an arrival → one more train, advance i
      count++;
      i++;
    } else {
      // Step 3b: Next event is a departure → one train leaves, advance j
      count--;
      j++;
    }
    res = Math.max(res, count); // Step 4: update max platforms needed
  }
  return res; // Step 5: return max count
}

// ---------- Example run: arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000] ----------
// After sort: arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1120, 1130, 1200, 1900, 2000]
// i=1,j=0: 940 <= 910? No → departure first, count=0, j=1
// i=1,j=1: 940 <= 1120? Yes → arrival, count=2, i=2, res=2
// i=2,j=1: 950 <= 1120? Yes → arrival, count=3, i=3, res=3
// ... continue; max count = 3 → result 3
let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
console.log(minimumPlatforms(arr, dep));
