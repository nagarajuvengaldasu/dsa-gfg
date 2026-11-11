// ========== STEP-BY-STEP: Meeting Maximum Guests (OPTIMAL) ==========
// Goal: Given arrival and departure times of guests, find the maximum number of
//       guests present at any moment. (arr[i], dep[i] = guest i’s arrival and departure.)
// Idea: Sort arrivals and departures. Sweep in time: at each step compare “next arrival”
//       arr[i] with “next departure” dep[j]. If arrival happens first (arr[i] <= dep[j]),
//       add a guest (count++) and advance i; else treat departure first (count--, j++).
//       Track max count. Time O(n log n) from sorting.

function maxGuest(arr, dep) {
  // Step 1: Sort both arrays so we can process events in chronological order
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);
  let n = arr.length;
  let m = dep.length;
  // Step 2: i = index of next arrival to process (start at 1 since guest 0 is already “in”)
  let i = 1;
  let j = 0;       // j = index of next departure to process
  let res = 1;     // max guests seen so far (at least 1 = first guest)
  let count = 1;   // current guests (first guest is already present)

  while (i < n && j < m) {
    if (arr[i] <= dep[j]) {
      // Step 3a: Next event is an arrival (or same time as next dep) → one more guest, advance i
      count++;
      i++;
    } else {
      // Step 3b: Next event is a departure → one guest leaves, advance j
      count--;
      j++;
    }
    res = Math.max(res, count);   // Step 4: update max guests so far
  }
  return res;
}

// ---------- Example run: arr = [900, 600, 700], dep = [1000, 800, 730] ----------
// Step 1: arr sorted → [600, 700, 900], dep sorted → [730, 800, 1000]
// Step 2: i=1, j=0, count=1, res=1 (guest 0 arrived at 600, still in)
// i=1,j=0: arr[1]=700 <= dep[0]=730 → arrival first → count=2, i=2, res=2
// i=2,j=0: arr[2]=900 > dep[0]=730 → departure first (guest 0 leaves at 730) → count=1, j=1, res=2
// i=2,j=1: arr[2]=900 > dep[1]=800 → departure first → count=0, j=2, res=2
// i=2,j=2: arr[2]=900 <= dep[2]=1000 → arrival first (guest 2 at 900) → count=1, i=3, res=2
// i=3 → exit loop. Result: 2 (max guests present at same time)
let arr = [900, 600, 700];
let dep = [1000, 800, 730];
console.log(maxGuest(arr, dep));