/**
 * Optimal Approach - Left Rotate Array by D places using Reversal Algorithm
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1) - no extra space needed
 *
 * Algorithm (Reversal Method):
 * 1. Reverse the first D elements (0 to d-1)
 * 2. Reverse the remaining elements (d to n-1)
 * 3. Reverse the entire array (0 to n-1)
 *
 * This approach uses the property that reversing twice brings back original,
 * but selective reversals can achieve rotation.
 */
function leftrotate(arr, d, n) {
  // Step 1: Reverse the first D elements (from index 0 to d-1)
  //   Example: arr = [1, 2, 3, 4, 5], d = 3
  //   After reverse(arr, 0, 2): [3, 2, 1, 4, 5]
  reverse(arr, 0, d - 1);

  // Step 2: Reverse the remaining elements (from index d to n-1)
  //   Example: arr = [3, 2, 1, 4, 5], d = 3, n = 5
  //   After reverse(arr, 3, 4): [3, 2, 1, 5, 4]
  reverse(arr, d, n - 1);

  // Step 3: Reverse the entire array (from index 0 to n-1)
  //   Example: arr = [3, 2, 1, 5, 4]
  //   After reverse(arr, 0, 4): [4, 5, 1, 2, 3]
  //   This gives us the left rotated array by d positions
  reverse(arr, 0, n - 1);
}

/**
 * Helper function: Reverse array elements from low to high index
 *
 * Algorithm:
 * 1. Swap elements at low and high positions
 * 2. Move low pointer forward, high pointer backward
 * 3. Continue until low >= high
 */
function reverse(arr, low, high) {
  // Step 1: Swap elements from both ends until pointers meet
  //   Example: arr = [1, 2, 3, 4], low = 0, high = 3
  //   Iteration 1: Swap arr[0] and arr[3] → [4, 2, 3, 1], low=1, high=2
  //   Iteration 2: Swap arr[1] and arr[2] → [4, 3, 2, 1], low=2, high=1 (stop)
  while (low < high) {
    // Swap elements at low and high positions
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;

    // Move pointers inward
    low++;
    high--;
  }
}

// Step-by-step execution for leftrotate([1, 2, 3, 4, 5], 3, 5):
//   Input: arr = [1, 2, 3, 4, 5], d = 3, n = 5
//
//   Step 1: reverse(arr, 0, d-1) = reverse(arr, 0, 2)
//     Initial: [1, 2, 3, 4, 5], low = 0, high = 2
//     Iteration 1: Swap arr[0] and arr[2] → [3, 2, 1, 4, 5], low=1, high=1 (stop)
//     Result: [3, 2, 1, 4, 5]
//
//   Step 2: reverse(arr, d, n-1) = reverse(arr, 3, 4)
//     Initial: [3, 2, 1, 4, 5], low = 3, high = 4
//     Iteration 1: Swap arr[3] and arr[4] → [3, 2, 1, 5, 4], low=4, high=3 (stop)
//     Result: [3, 2, 1, 5, 4]
//
//   Step 3: reverse(arr, 0, n-1) = reverse(arr, 0, 4)
//     Initial: [3, 2, 1, 5, 4], low = 0, high = 4
//     Iteration 1: Swap arr[0] and arr[4] → [4, 2, 1, 5, 3], low=1, high=3
//     Iteration 2: Swap arr[1] and arr[3] → [4, 5, 1, 2, 3], low=2, high=2 (stop)
//     Result: [4, 5, 1, 2, 3]
//
//   Final result: [4, 5, 1, 2, 3] (left rotated by 3 positions)

let arr = [1, 2, 3, 4, 5];
let d = 3;
let n = arr.length;
leftrotate(arr, d, n);
console.log(arr);
