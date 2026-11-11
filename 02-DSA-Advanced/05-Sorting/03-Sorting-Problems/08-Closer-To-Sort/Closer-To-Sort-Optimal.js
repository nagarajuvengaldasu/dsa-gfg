// ========== STEP-BY-STEP: Search in Closer-to-Sort Array (OPTIMAL) ==========
// Goal: Find index of x in arr. Array is "closer sorted": each element may be at i, i-1, or i+1.
// Idea: Modified binary search — at each mid, check arr[mid], arr[mid-1], arr[mid+1].
//       If x < arr[mid] go left (high = mid-2); else go right (low = mid+2). Time O(log n).

function closerToSort(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Step 1: compute mid

    if (arr[mid] === x) return mid; // Step 2a: found at mid
    if (mid > low && arr[mid - 1] === x) return mid - 1; // Step 2b: found at mid-1
    if (mid < high && arr[mid + 1] === x) return mid + 1; // Step 2c: found at mid+1

    // Step 3: shrink search space by 2 (we already ruled out mid and one neighbor)
    if (x < arr[mid]) {
      high = mid - 2; // x must be in left half
    } else {
      low = mid + 2; // x must be in right half
    }
  }
  return -1; // Step 4: not found
}

// ---------- Example run: arr = [3, 2, 10, 4, 40], x = 2 ----------
// low=0, high=4 → mid=2. arr[2]=10, arr[1]=2, arr[3]=4. arr[1]==2 → return 1
let arr = [3, 2, 10, 4, 40];
let x = 2;
console.log(closerToSort(arr, x));
