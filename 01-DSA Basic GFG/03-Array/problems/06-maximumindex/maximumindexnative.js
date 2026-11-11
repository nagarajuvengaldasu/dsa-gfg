// Maximum Index Problem - Native and Optimal Solutions

// ========== NATIVE SOLUTION (Brute Force) ==========
// Time Complexity: O(N^2)
// Space Complexity: O(1)

function maximumIndexNative(arr) {
  let n = arr.length;
  let maxDiff = 0;

  // Check every possible pair (i, j) where i <= j
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Check if arr[i] <= arr[j]
      if (arr[i] <= arr[j]) {
        // Update maximum difference
        maxDiff = Math.max(maxDiff, j - i);
      }
    }
  }

  return maxDiff;
}
let arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
console.log(maximumIndexNative(arr));
