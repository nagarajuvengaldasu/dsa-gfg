function kthSmallest(arr, k) {
  let left = 0;                  // Step 1: Search window start
  let right = arr.length - 1;    // Step 2: Search window end

  while (left <= right) {
    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    // Step 3: Random pivot in [left, right] (reduces worst-case)
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    // Step 4: Move pivot to end for partition

    let p = partition(arr, left, right);
    // Step 5: Partition → pivot at index p, smaller to left, larger to right

    if (p === k - 1) {
      return arr[p];   // Step 6: Found! arr[p] is kth smallest (0-indexed: k-1)
    } else if (p > k - 1) {
      right = p - 1;   // Step 7: kth smallest is in left subarray
    } else {
      left = p + 1;    // Step 8: kth smallest is in right subarray
    }
  }
  return -1;  // Step 9: Invalid k
}

function partition(arr, left, right) {
  let pivot = arr[right];  // Step 10: Pivot = last element (after swap)
  let i = left;            // Step 11: i = place for next "smaller" element

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];  // Step 12: Swap smaller to left
      i++;                                   // Step 13: Advance partition point
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];  // Step 14: Put pivot in place
  return i;  // Step 15: Final pivot index
}

// Execution: arr=[3,5,4,2,9], k=3 (want 3rd smallest = 4)
// Iteration 1: left=0, right=4. Random pivot e.g. index 2 (value 4).
//   Swap arr[2] with arr[4] → [3,5,9,2,4]. partition → smaller: 3,2; pivot 4 at i=2.
//   p=2 === k-1=2 → return arr[2]=4
let arr = [3, 5, 4, 2, 9];
let k = 3;
console.log(kthSmallest(arr, k));  // 4
