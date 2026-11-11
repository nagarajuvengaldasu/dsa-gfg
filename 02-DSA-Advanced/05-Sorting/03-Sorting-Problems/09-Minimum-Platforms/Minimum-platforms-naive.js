// ========== STEP-BY-STEP: Minimum Platforms (NAIVE) ==========
// Goal: Find minimum number of platforms needed so no train waits. arr[i], dep[i] = train i's times.
// Idea: The count of trains present only changes at arrival/departure times. For each arrival time T,
//       count how many trains are present at T (train j present iff arr[j] <= T < dep[j]). Take max.
//       Time O(n²), Space O(1).

function minimumPlatforms(arr, dep) {
  let n = arr.length;
  let res = 0;
  // Step 1: For each arrival time T = arr[i], check "how many trains are present when train i arrives"
  for (let i = 0; i < n; i++) {
    let T = arr[i]; // Step 2: use this moment as the check time
    let count = 0;
    // Step 3: count all trains j that are present at time T (arr[j] <= T < dep[j])
    for (let j = 0; j < n; j++) {
      if (arr[j] <= T && T < dep[j]) {
        count++;
      }
    }
    res = Math.max(res, count); // Step 4: update max platforms needed so far
  }
  return res; // Step 5: return max count
}

// ---------- Example run: arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000] ----------
// i=0: T=900 → count trains present at 900 → res = 1
// i=1: T=940 → count at 940 → res = 2
// i=2: T=950 → count at 950 → res = 3
// i=3: T=1100 → count at 1100 → res = 3 (or higher depending on overlaps)
// ... max over all T gives minimum platforms needed (e.g. 3)
let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
console.log(minimumPlatforms(arr, dep));
