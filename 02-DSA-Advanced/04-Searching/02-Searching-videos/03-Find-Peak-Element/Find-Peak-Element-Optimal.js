/**
 * FIND PEAK ELEMENT - OPTIMAL SOLUTION
 * Problem: Find a peak element in an array
 * 
 * What is a peak element?
 * - A peak element is greater than or equal to its neighbors
 * - For edge elements, they only need to be >= their one neighbor
 * - Example: In [5, 20, 40, 30, 20, 50, 60], 40 is a peak (40 >= 20 && 40 >= 30)
 * 
 * Approach: Binary Search (Optimal)
 * - Use binary search to eliminate half the search space each iteration
 * - Key insight: If arr[mid-1] >= arr[mid], peak is in left half
 * - Otherwise, peak is in right half
 * 
 * Time Complexity: O(log n) where n is the length of array
 *   - Each iteration eliminates half of the search space
 *   - Much better than O(n) linear search
 * Space Complexity: O(1) - only using constant extra space
 * 
 * KEY INSIGHT:
 * If arr[mid-1] >= arr[mid], then there must be a peak in the left half.
 * Why? Because we're going "uphill" from mid-1 to mid, so if we continue
 * left, we'll either find a peak or reach the left edge (which is a peak).
 * 
 * Similarly, if arr[mid] < arr[mid+1], peak is in right half.
 * 
 * WHY THIS IS OPTIMAL:
 * 1. Time: O(log n) - best possible for this problem
 * 2. Space: O(1) - no extra arrays or recursion stack
 * 3. Efficient: Eliminates half the search space each iteration
 * 4. Handles all edge cases elegantly
 */

function findPeakElement(arr){
  // Step 1: Initialize binary search boundaries
  // low: start index of current search range
  // high: end index of current search range
  // Example: arr = [5, 20, 40, 30, 20, 50, 60] → low=0, high=6
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  // Step 2: Binary Search Loop
  // Continue while we have a valid search range
  // Each iteration eliminates half of the remaining elements
  while(low <= high){
    // Step 2.1: Calculate middle index
    // This splits the current search range in half
    // Example: low=0, high=6 → mid = (0+6)/2 = 3
    let mid = Math.floor((low + high) / 2);

    // Step 2.2: Check if middle element is a peak
    // Peak condition for arr[mid]:
    //   - If mid === 0 (first element): only check right neighbor
    //   - If mid === n-1 (last element): only check left neighbor
    //   - Otherwise: check both neighbors
    // 
    // Condition breakdown:
    //   (mid === 0 || arr[mid-1] <= arr[mid])
    //     → Left side is OK (either no left neighbor OR left <= current)
    //   (mid === n-1 || arr[mid+1] <= arr[mid])
    //     → Right side is OK (either no right neighbor OR right <= current)
    // 
    // If both conditions are true, arr[mid] is a peak!
    // Example: mid=2, arr[2]=40, arr[1]=20, arr[3]=30
    //   mid === 0? No, check arr[1] <= arr[2]: 20 <= 40? Yes ✅
    //   mid === n-1? No, check arr[3] <= arr[2]: 30 <= 40? Yes ✅
    //   → arr[2] is a peak!
    if((mid === 0 || arr[mid - 1] <= arr[mid])
      && (mid === n - 1 || arr[mid + 1] <= arr[mid])){
      return arr[mid];  // Found peak! Return it immediately
    }
    
    // Step 2.3: Decide which half to search
    // If arr[mid] is not a peak, we need to search one of the halves
    // 
    // Case 1: Left neighbor is >= current element
    // If arr[mid-1] >= arr[mid], there must be a peak in left half
    // Why? Because we're going "downhill" from mid-1 to mid
    // If we continue left, we'll either:
    //   - Find a peak (element >= both neighbors)
    //   - Reach left edge (which is automatically a peak)
    // 
    // Example: mid=3, arr[3]=30, arr[2]=40
    //   arr[2] >= arr[3]? 40 >= 30? Yes
    //   → Peak must be in left half [0...2]
    //   → Search left: high = mid - 1 = 2
    else if(mid > 0 && arr[mid - 1] >= arr[mid]){
      high = mid - 1;  // Search left half
    }
    
    // Case 2: Right neighbor is > current element
    // If arr[mid+1] > arr[mid], there must be a peak in right half
    // Why? Because we're going "uphill" from mid to mid+1
    // If we continue right, we'll either:
    //   - Find a peak (element >= both neighbors)
    //   - Reach right edge (which is automatically a peak)
    // 
    // Example: mid=1, arr[1]=20, arr[2]=40
    //   arr[2] > arr[1]? 40 > 20? Yes
    //   → Peak must be in right half [2...6]
    //   → Search right: low = mid + 1 = 2
    else{
      low = mid + 1;  // Search right half
    }
  }
  
  // Step 3: No peak found (shouldn't happen in valid input)
  // In a valid array, there should always be at least one peak
  // But we return -1 as a safety check
  return -1;
}

// Step-by-step execution example 1:
// Input: arr = [5, 20, 40, 30, 20, 50, 60]
//
// Call: findPeakElement([5, 20, 40, 30, 20, 50, 60])
//   Step 1: Initialize
//     n = 7, low = 0, high = 6
//   
//   Iteration 1:
//     low=0, high=6, mid = (0+6)/2 = 3
//     arr[mid] = arr[3] = 30
//     
//     Check if arr[3] is a peak:
//       mid === 0? No
//       Check: arr[2] <= arr[3]? arr[2]=40 <= arr[3]=30? No
//       → arr[3] is NOT a peak
//     
//     Decide which half to search:
//       mid > 0? Yes (3 > 0)
//       Check: arr[2] >= arr[3]? arr[2]=40 >= arr[3]=30? Yes ✅
//       → Peak is in left half
//       → Search left: high = mid - 1 = 2
//   
//   Iteration 2:
//     low=0, high=2, mid = (0+2)/2 = 1
//     arr[mid] = arr[1] = 20
//     
//     Check if arr[1] is a peak:
//       mid === 0? No
//       Check: arr[0] <= arr[1]? arr[0]=5 <= arr[1]=20? Yes ✅
//       mid === n-1? No
//       Check: arr[2] <= arr[1]? arr[2]=40 <= arr[1]=20? No
//       → arr[1] is NOT a peak
//     
//     Decide which half to search:
//       mid > 0? Yes (1 > 0)
//       Check: arr[0] >= arr[1]? arr[0]=5 >= arr[1]=20? No
//       → Go to else: arr[2] > arr[1]? 40 > 20? Yes
//       → Peak is in right half
//       → Search right: low = mid + 1 = 2
//   
//   Iteration 3:
//     low=2, high=2, mid = (2+2)/2 = 2
//     arr[mid] = arr[2] = 40
//     
//     Check if arr[2] is a peak:
//       mid === 0? No
//       Check: arr[1] <= arr[2]? arr[1]=20 <= arr[2]=40? Yes ✅
//       mid === n-1? No
//       Check: arr[3] <= arr[2]? arr[3]=30 <= arr[2]=40? Yes ✅
//       → arr[2] IS a peak! ✅
//       Return: 40
//   
//   Result: 40 (Peak element found at index 2)

// Step-by-step execution example 2:
// Input: arr = [1, 2, 3, 4, 5] (strictly increasing)
//
// Call: findPeakElement([1, 2, 3, 4, 5])
//   Step 1: n = 5, low = 0, high = 4
//   
//   Iteration 1:
//     low=0, high=4, mid = 2
//     arr[mid] = arr[2] = 3
//     
//     Check if arr[2] is a peak:
//       arr[1] <= arr[2]? 2 <= 3? Yes
//       arr[3] <= arr[2]? 4 <= 3? No
//       → Not a peak
//     
//     Decide: arr[1] >= arr[2]? 2 >= 3? No
//     → Search right: low = 3
//   
//   Iteration 2:
//     low=3, high=4, mid = 3
//     arr[mid] = arr[3] = 4
//     
//     Check if arr[3] is a peak:
//       arr[2] <= arr[3]? 3 <= 4? Yes
//       arr[4] <= arr[3]? 5 <= 4? No
//       → Not a peak
//     
//     Decide: arr[2] >= arr[3]? 3 >= 4? No
//     → Search right: low = 4
//   
//   Iteration 3:
//     low=4, high=4, mid = 4
//     arr[mid] = arr[4] = 5
//     
//     Check if arr[4] is a peak:
//       mid === n-1? Yes (4 === 4) ✅
//       → arr[4] IS a peak! (last element, no right neighbor)
//       Return: 5
//   
//   Result: 5 (Last element is a peak in strictly increasing array)

// Step-by-step execution example 3:
// Input: arr = [5, 3, 2] (strictly decreasing)
//
// Call: findPeakElement([5, 3, 2])
//   Step 1: n = 3, low = 0, high = 2
//   
//   Iteration 1:
//     low=0, high=2, mid = 1
//     arr[mid] = arr[1] = 3
//     
//     Check if arr[1] is a peak:
//       arr[0] <= arr[1]? 5 <= 3? No
//       → Not a peak
//     
//     Decide: arr[0] >= arr[1]? 5 >= 3? Yes ✅
//     → Search left: high = 0
//   
//   Iteration 2:
//     low=0, high=0, mid = 0
//     arr[mid] = arr[0] = 5
//     
//     Check if arr[0] is a peak:
//       mid === 0? Yes ✅
//       → arr[0] IS a peak! (first element, no left neighbor)
//       Return: 5
//   
//   Result: 5 (First element is a peak in strictly decreasing array)

// Step-by-step execution example 4:
// Input: arr = [1, 7, 8, 20, 12]
//
// Call: findPeakElement([1, 7, 8, 20, 12])
//   Step 1: n = 5, low = 0, high = 4
//   
//   Iteration 1:
//     low=0, high=4, mid = 2
//     arr[mid] = arr[2] = 8
//     
//     Check if arr[2] is a peak:
//       arr[1] <= arr[2]? 7 <= 8? Yes
//       arr[3] <= arr[2]? 20 <= 8? No
//       → Not a peak
//     
//     Decide: arr[1] >= arr[2]? 7 >= 8? No
//     → Search right: low = 3
//   
//   Iteration 2:
//     low=3, high=4, mid = 3
//     arr[mid] = arr[3] = 20
//     
//     Check if arr[3] is a peak:
//       arr[2] <= arr[3]? 8 <= 20? Yes ✅
//       arr[4] <= arr[3]? 12 <= 20? Yes ✅
//       → arr[3] IS a peak! ✅
//       Return: 20
//   
//   Result: 20 (Peak element found at index 3)

// WHY BINARY SEARCH WORKS:
// 
// The key insight is that we can always eliminate half the search space.
// 
// Property: In any array, there's always at least one peak.
// 
// Decision Logic:
// 1. If arr[mid-1] >= arr[mid]:
//    - We're going "downhill" from mid-1 to mid
//    - If we continue left, we'll either:
//      a) Find a peak (element >= both neighbors)
//      b) Reach left edge (which is automatically a peak)
//    - Therefore, peak MUST be in left half
// 
// 2. Otherwise (arr[mid] < arr[mid+1]):
//    - We're going "uphill" from mid to mid+1
//    - If we continue right, we'll either:
//      a) Find a peak (element >= both neighbors)
//      b) Reach right edge (which is automatically a peak)
//    - Therefore, peak MUST be in right half
// 
// Example: [5, 20, 40, 30, 20, 50, 60]
//   At mid=3 (value 30):
//   - arr[2]=40 >= arr[3]=30 → going downhill left
//   - Peak must be in [0...2]
//   - We eliminate [3...6] from search

// TIME COMPLEXITY ANALYSIS:
// 
// Best Case: O(1)
//   - Peak found at middle of first iteration
//   - Example: arr = [1, 5, 3] → found at mid=1
// 
// Average Case: O(log n)
//   - Peak found after log₂(n) iterations on average
//   - Example: n=7 → ~2-3 iterations
// 
// Worst Case: O(log n)
//   - Peak found at last iteration
//   - Example: n=7 → exactly 3 iterations
// 
// Overall: O(log n) - logarithmic time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using variables: n, low, high, mid
//   - No recursion (iterative approach)
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// COMPARISON WITH NAIVE SOLUTION:
// 
// Naive (Linear Search):
//   - Time: O(n) - checks every element
//   - Space: O(1)
//   - Simple but slow for large arrays
//   - Example: n=1,000,000 → need 1M comparisons
// 
// Optimal (Binary Search - This Solution):
//   - Time: O(log n) - eliminates half each time
//   - Space: O(1)
//   - More complex but much faster
//   - Example: n=1,000,000 → need only ~20 comparisons!
// 
// Speed Improvement:
//   - For n=1,000,000: Naive needs 1,000,000 checks
//   - Optimal needs only ~20 checks
//   - That's 50,000x faster! 🚀

// KEY INSIGHT: Why We Can Eliminate Half
// 
// The crucial observation is that we can always determine which half
// contains a peak, even without checking all elements.
// 
// Intuition:
// - Think of the array as a mountain range
// - If you're going downhill in one direction, you must be going
//   uphill in the other direction (or at an edge)
// - The peak is always in the "uphill" direction
// 
// Mathematical Proof:
// - If arr[mid-1] >= arr[mid], then from mid-1 to mid, we're going down
// - If we continue left from mid-1, we must eventually:
//   1. Find an element >= both neighbors (peak), OR
//   2. Reach index 0 (which is a peak if arr[0] >= arr[1])
// - Therefore, a peak MUST exist in the left half
// - Same logic applies for right half

// EDGE CASES HANDLED:
// 
// 1. Single element: [5]
//   - mid=0, mid === 0? Yes → peak found immediately
// 
// 2. Two elements: [5, 3]
//   - mid=0, mid === 0? Yes → peak found (first element)
// 
// 3. Strictly increasing: [1, 2, 3, 4, 5]
//   - Eventually reaches last element (mid === n-1) → peak
// 
// 4. Strictly decreasing: [5, 4, 3, 2, 1]
//   - Eventually reaches first element (mid === 0) → peak
// 
// 5. Multiple peaks: [1, 3, 2, 4, 1]
//   - Returns first peak found (could be 3 or 4)

// CONCLUSION: This IS the OPTIMAL approach ✅
// 
// ✅ Time: O(log n) - best possible
// ✅ Space: O(1) - best possible
// ✅ Handles all edge cases
// ✅ Efficient and elegant
// ✅ Industry standard solution

let arr = [5, 20, 40, 30, 20, 50, 60];
console.log(findPeakElement(arr)); // Expected output: 40 (peak element at index 2)