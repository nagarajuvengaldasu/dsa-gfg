// ========== STEP-BY-STEP: Sort Array with Three Types (0s, 1s, 2s) - OPTIMAL ==========
// Goal: Sort array containing only 0s, 1s, and 2s so order is 0s, then 1s, then 2s.
//       This is the Dutch National Flag algorithm. One pass, O(n) time, O(1) space.
// Idea: Three regions: [0..low-1] = 0s, [low..mid-1] = 1s, [mid..h] = unknown, [h+1..n-1] = 2s.
//       Use three pointers: low = start of "1" region, mid = current, h = start of "2" region.
//       If arr[mid]==0: swap with low, extend 0-region (low++, mid++).
//       If arr[mid]==1: it's in correct place, just advance mid.
//       If arr[mid]==2: swap with h, extend 2-region from right (h--). Don't advance mid (need to reprocess).

function closest012(arr, n) {
  let low = 0;        // Step 1: low = index where next 0 should go (start of "1" region)
  let h = n - 1;      // Step 1: h = index where next 2 should go (end of "2" region)
  let mid = 0;        // Step 1: mid = current index to inspect

  while (mid <= h) {
    if (arr[mid] === 0) {
      // Step 2a: Found 0 → send it to left region, extend 0-region
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;          // extend 0-region to the right
      mid++;          // advance (what came from arr[low] is known to be 0 or 1)
    } else if (arr[mid] === 1) {
      // Step 2b: Found 1 → it's in correct place (middle region), just advance
      mid++;
    } else {
      // Step 2c: Found 2 → send it to right region, extend 2-region from right
      [arr[mid], arr[h]] = [arr[h], arr[mid]];
      h--;            // extend 2-region to the left
      // Do NOT advance mid → need to reprocess what came from arr[h] (could be 0, 1, or 2)
    }
  }
  return arr;
}

// ---------- Example run: arr = [0, 1, 0, 2, 0, 1, 0] ----------
// Initial: low=0, mid=0, h=6, arr=[0,1,0,2,0,1,0]
// mid=0: arr[0]=0 → swap with low(0), low=1, mid=1 → [0,1,0,2,0,1,0]
// mid=1: arr[1]=1 → mid=2 → [0,1,0,2,0,1,0]
// mid=2: arr[2]=0 → swap with low(1), low=2, mid=3 → [0,0,1,2,0,1,0]
// mid=3: arr[3]=2 → swap with h(6), h=5 → [0,0,1,0,0,1,2], mid stays 3
// mid=3: arr[3]=0 → swap with low(2), low=3, mid=4 → [0,0,0,1,0,1,2]
// mid=4: arr[4]=0 → swap with low(3), low=4, mid=5 → [0,0,0,0,1,1,2]
// mid=5: arr[5]=1 → mid=6
// mid=6 > h(5) → stop. Result: [0,0,0,0,1,1,2]
let arr = [0, 1, 0, 2, 0, 1, 0];
let n = arr.length;
console.log(closest012(arr, n));
