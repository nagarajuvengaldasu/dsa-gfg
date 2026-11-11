// ========== STEP-BY-STEP: Binary Array Sorting (OPTIMAL, in-place) ==========
// Goal: Given a binary array (only 0s and 1s), sort it so that all 0s come before all 1s.
// Idea: Two-pointer technique (similar to partitioning):
//       - left scans from start, right scans from end.
//       - If arr[left] is already 0, move left forward.
//       - Else if arr[right] is already 1, move right backward.
//       - Otherwise arr[left] is 1 and arr[right] is 0 → swap them, then move both pointers.
//       Time: O(n), Space: O(1).

function binaryArraySorting(arr) {
  let left = 0; // Step 1: start pointer
  let right = arr.length - 1; // Step 1: end pointer

  while (left < right) {
    // Step 2: process until pointers cross
    if (arr[left] === 0) {
      left++; // Step 3a: correct (0) on left side → just move left
    } else if (arr[right] === 1) {
      right--; // Step 3b: correct (1) on right side → just move right
    } else {
      // Step 3c: arr[left] is 1 and arr[right] is 0 → they are in wrong places, swap them
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr; // Step 4: array is now sorted (all 0s then all 1s)
}

// ---------- Example run: arr = [0,1,0,1,0,1,0,1] ----------
// left=0,right=7: arr[0]=0 → left=1
// left=1,right=7: arr[1]=1, arr[7]=1 → right=6
// left=1,right=6: arr[1]=1, arr[6]=0 → swap → [0,0,0,1,0,1,1,1], left=2,right=5
// left=2,right=5: arr[2]=0 → left=3
// left=3,right=5: arr[3]=1, arr[5]=1 → right=4
// left=3,right=4: arr[3]=1, arr[4]=0 → swap → [0,0,0,0,1,1,1,1], left=4,right=3 → stop
// Result: [0,0,0,0,1,1,1,1]
let arr = [0, 1, 0, 1, 0, 1, 0, 1];
console.log(binaryArraySorting(arr));
