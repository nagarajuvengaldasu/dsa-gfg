// ========== STEP-BY-STEP: Meeting Maximum Guests (NAIVE) ==========
// Goal: Given arrival and departure times of guests, find the maximum number of
//       guests present at any moment. (arr[i], dep[i] = guest i’s arrival and departure.)
// Idea: The count only changes at arrival/departure times. So for each arrival time T = arr[i],
//       count how many guests are present at T (guest j is present iff arr[j] <= T < dep[j]).
//       Take the max over those counts. No sorting. Time O(n^2).

function maxGuest(arr, dep) {
  let n = arr.length;
  let res = 0;

  // Step 1: For each arrival time T = arr[i], we check “how many guests are present when guest i arrives”
  for (let i = 0; i < n; i++) {
    let T = arr[i]; // Step 2: use this moment as the check time
    let count = 0;
    // Step 3: count all guests j that are present at time T (arr[j] <= T < dep[j])
    for (let j = 0; j < n; j++) {
      if (arr[j] <= T && T < dep[j]) {
        count++;
      }
    }
    res = Math.max(res, count); // Step 4: update max guests seen so far
  }
  return res;
}

// ---------- Example run: arr = [900, 600, 700], dep = [1000, 800, 730] ----------
// i=0: T=900. j=0: 600<=900<1000 ✓; j=1: 700<=900<800 ✗; j=2: 900<=900<730 ✗ → count=1, res=1
// i=1: T=600. j=0: 600<=600<1000 ✓; j=1: 700<=600 ✗; j=2: 900<=600 ✗ → count=1, res=1
// i=2: T=700. j=0: 600<=700<1000 ✓; j=1: 700<=700<800 ✓; j=2: 900<=700 ✗ → count=2, res=2
// Result: 2
let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
console.log(maxGuest(arr, dep));
