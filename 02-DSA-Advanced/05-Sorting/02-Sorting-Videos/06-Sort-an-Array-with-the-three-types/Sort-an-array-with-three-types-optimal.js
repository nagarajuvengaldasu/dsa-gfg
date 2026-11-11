// ========== STEP-BY-STEP: Sort Array with Three Types (OPTIMAL – Dutch National Flag) ==========
// Goal: Sort 0s, 1s, 2s in-place so order is 0s, 1s, 2s. One pass, O(n), O(1) extra space.
// Idea: Three pointers: l = start of “1” region, h = start of “2” region from right, mid = current.
//       If arr[mid]==0, swap with l and extend 0-region (l++, mid++).
//       If arr[mid]==1, just advance mid.
//       If arr[mid]==2, swap with h and extend 2-region from right (h--).

function sort012(arr) {
  let l = 0;                  // Step 1: l = index where next 0 should go (start of “1” region)
  let h = arr.length - 1;     // Step 1: h = index where next 2 should go (end of “2” region)
  let mid = 0;                // Step 1: mid = current index to inspect

  while (mid <= h) {
    if (arr[mid] === 0) {
      [arr[l], arr[mid]] = [arr[mid], arr[l]];  // Step 2a: send 0 to left, extend 0-region
      l++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;                  // Step 2b: 1 stays in middle, just advance
    } else {
      [arr[mid], arr[h]] = [arr[h], arr[mid]];  // Step 2c: send 2 to right, extend 2-region
      h--;                    // do not advance mid — need to reprocess what came from arr[h]
    }
  }
  return arr;
}

// ---------- Example run: arr = [0, 1, 2, 0, 1, 2] ----------
// l=0, mid=0, h=5. arr[0]=0 → swap with l, l=1, mid=1.
// mid=1: arr[1]=1 → mid=2.
// mid=2: arr[2]=2 → swap with h=5 → [0,1,2,0,1,2] then h=4; mid still 2.
// mid=2: arr[2]=2 → swap with h=4 → [0,1,1,0,2,2], h=3.
// mid=2: arr[2]=1 → mid=3.
// mid=3: arr[3]=0 → swap with l=1 → [0,0,1,1,2,2], l=2, mid=4.
// mid=4 > h(3) → stop. Result: [0,0,1,1,2,2]
let arr = [0, 1, 2, 0, 1, 2];
console.log(sort012(arr));