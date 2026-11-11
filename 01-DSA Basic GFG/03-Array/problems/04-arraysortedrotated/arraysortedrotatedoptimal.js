// Optimal approach using Binary Search
// Time Complexity: O(n) - but optimized for most cases
//
// Why sorting check is REQUIRED:
// 1. Find pivot using binary search (O(log n))
// 2. Verify left and right sides are sorted (O(n) worst case)
//
// We cannot skip the sorting check because:
// - Finding pivot only tells us WHERE the rotation is
// - We must verify BOTH sides are actually sorted
// - Without this check, [5,4,3,1,2] would incorrectly return true

function findPivot(arr, start, end) {
  // Binary search to find the pivot (minimum element index)
  if (start > end) return -1;
  if (start === end) return start;

  let mid = Math.floor((start + end) / 2);

  // Check if mid is the pivot
  if (mid < end && arr[mid] > arr[mid + 1]) {
    return mid + 1;
  }
  if (mid > start && arr[mid - 1] > arr[mid]) {
    return mid;
  }

  // Decide which side to search
  if (arr[mid] < arr[end]) {
    return findPivot(arr, start, mid - 1);
  }
  return findPivot(arr, mid + 1, end);
}

function isSorted(arr, start, end) {
  // Check if the subarray is sorted in increasing order
  if (start === end) return true;
  for (let i = start; i < end; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function arraysortedrotatedoptimal(arr) {
  let n = arr.length;

  // Edge cases
  if (n <= 1) return false;

  // If the array is already sorted (not rotated)
  if (arr[0] < arr[n - 1]) return false;

  // Find pivot using binary search
  let pivot = findPivot(arr, 0, n - 1);

  // If no pivot found, array is not rotated
  if (pivot === -1) return false;

  // Check if both parts are sorted
  let leftSorted = pivot === 0 || isSorted(arr, 0, pivot - 1);
  let rightSorted = isSorted(arr, pivot, n - 1);

  return leftSorted && rightSorted;
}

let arr = [4, 5, 6, 1];
console.log(arraysortedrotatedoptimal(arr));
