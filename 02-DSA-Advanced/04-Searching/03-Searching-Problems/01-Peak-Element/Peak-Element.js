/**
 * PEAK ELEMENT - BINARY SEARCH APPROACH
 * 
 * Problem: Find index of a peak element in an array
 * - Peak element: greater than its adjacent elements (if they exist)
 * - Edge elements: Consider elements before first and after last as negative infinity
 * - If multiple peaks exist, return any one
 * 
 * Constraints:
 * - No two adjacent elements are same
 * - Time: O(log n)
 * - Space: O(1)
 * 
 * APPROACH: Binary Search
 * 
 * KEY INSIGHT:
 * We can eliminate half the search space in each iteration!
 * 
 * Why Binary Search Works:
 * 1. If arr[mid-1] > arr[mid]:
 *    - We're going "downhill" from left to mid
 *    - Peak must be in LEFT half (either find a peak or reach left edge)
 * 
 * 2. If arr[mid+1] > arr[mid]:
 *    - We're going "uphill" from mid to right
 *    - Peak must be in RIGHT half (either find a peak or reach right edge)
 * 
 * 3. If both neighbors are smaller:
 *    - arr[mid] itself is a peak! ✅
 * 
 * Example: arr = [1, 2, 4, 5, 7, 8, 3]
 * 
 * Step-by-step execution:
 * 
 * Iteration 1: low=0, high=6, mid=3
 *   arr[mid] = arr[3] = 5
 *   Check: arr[2]=4 < 5, arr[4]=7 > 5
 *   → arr[4] > arr[3], so peak is in RIGHT half
 *   → low = 4
 * 
 * Iteration 2: low=4, high=6, mid=5
 *   arr[mid] = arr[5] = 8
 *   Check: arr[4]=7 < 8, arr[6]=3 < 8
 *   → Both neighbors smaller! arr[5] is a peak! ✅
 *   → Return index 5
 * 
 * Result: Index 5 (value 8)
 */

function peakElement(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  
  // Binary search loop
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    // Check if arr[mid] is a peak
    // Peak condition:
    // - Left neighbor (if exists) must be < arr[mid]
    // - Right neighbor (if exists) must be < arr[mid]
    
    let isLeftSmaller = (mid === 0 || arr[mid - 1] < arr[mid]);
    let isRightSmaller = (mid === n - 1 || arr[mid + 1] <= arr[mid]);
    
    if (isLeftSmaller && isRightSmaller) {
      // arr[mid] is a peak!
      return mid;
    }
    
    // Decide which half to search
    if (mid > 0 && arr[mid - 1] > arr[mid]) {
      // Left neighbor is greater → going downhill left
      // Peak must be in LEFT half
      high = mid - 1;
    } else {
      // Right neighbor is greater → going uphill right
      // Peak must be in RIGHT half
      low = mid + 1;
    }
  }
  
  // Should never reach here (always find a peak)
  return -1;
}

// Test cases
let arr = [1, 2, 4, 5, 7, 8, 3];
console.log("Peak at index:", peakElement(arr)); // Should return 5 (value 8)