/**
 * SEARCH IN SORTED ROTATED ARRAY - OPTIMAL SOLUTION
 * Problem: Search for an element x in a sorted rotated array
 * 
 * What is a sorted rotated array?
 * - A sorted array that has been rotated (shifted) by some positions
 * - Example: [1, 2, 3, 4, 5] rotated by 2 → [3, 4, 5, 1, 2]
 * - Example: [4, 6, 7, 8, 10, 20] rotated by 2 → [10, 20, 4, 6, 7, 8]
 * 
 * Approach: Modified Binary Search (Optimal)
 * - Use binary search but identify which half is sorted
 * - If left half is sorted and x is in that range → search left
 * - If right half is sorted and x is in that range → search right
 * - Otherwise, search the other half
 * 
 * Time Complexity: O(log n) where n is the length of array
 *   - Each iteration eliminates half of the search space
 *   - Much better than O(n) linear search
 * Space Complexity: O(1) - only using constant extra space
 * 
 * KEY INSIGHT:
 * In a rotated sorted array, at least one half is always sorted!
 * - If arr[low] < arr[mid] → left half [low...mid] is sorted
 * - Otherwise → right half [mid...high] is sorted
 * - We can use this to decide which half to search
 * 
 * WHY THIS IS OPTIMAL:
 * 1. Time: O(log n) - best possible for sorted array search
 * 2. Space: O(1) - no extra arrays or recursion stack
 * 3. Efficient: Eliminates half the search space each iteration
 * 4. Handles all cases: rotated, not rotated, duplicates (mostly)
 */

function search(arr, x){
  // Step 1: Initialize binary search boundaries
  // low: start index of current search range
  // high: end index of current search range
  // Example: arr = [10, 20, 4, 6, 7, 8] → low=0, high=5
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  
  // Step 2: Binary Search Loop
  // Continue while we have a valid search range
  // Each iteration eliminates half of the remaining elements
  while(low <= high){
    // Step 2.1: Calculate middle index
    // This splits the current search range in half
    // Example: low=0, high=5 → mid = (0+5)/2 = 2
    let mid = Math.floor((low + high) / 2);
    
    // Step 2.2: Check if middle element is the target
    // If found, return immediately (best case: O(1))
    // Example: arr[2] = 4, x = 4 → return 2
    if(arr[mid] === x){
      return mid;
    }
    
    // Step 2.3: Determine which half is sorted
    // KEY INSIGHT: In rotated array, at least one half is always sorted!
    // 
    // Case 1: Left half [low...mid] is sorted
    // This means arr[low] < arr[mid]
    // Example: arr = [10, 20, 4, 6, 7, 8]
    //   low=0, mid=2: arr[0]=10, arr[2]=4
    //   10 < 4? No → left half is NOT sorted
    if(arr[low] < arr[mid]){
      // Left half is sorted!
      // Check if x is in the sorted left half range [arr[low]...arr[mid])
      // Note: We use < arr[mid] because we already checked arr[mid] === x above
      // Example: arr = [4, 6, 7, 8, 10, 20] (not rotated)
      //   low=0, mid=2: arr[0]=4, arr[2]=7
      //   x=6: 6 >= 4 && 6 < 7? Yes → search left
      if(x >= arr[low] && x < arr[mid]){
        // x is in the sorted left half → search left
        // Eliminate right half: high = mid - 1
        high = mid - 1;
      }
      else{
        // x is NOT in the sorted left half → search right
        // x could be in the unsorted right half
        // Eliminate left half: low = mid + 1
        low = mid + 1;
      }
    }
    // Case 2: Right half [mid...high] is sorted
    // This means arr[low] >= arr[mid] (left half is NOT sorted)
    // So right half must be sorted
    else{
      // Right half is sorted!
      // Check if x is in the sorted right half range (arr[mid]...arr[high]]
      // Example: arr = [10, 20, 4, 6, 7, 8]
      //   mid=2, high=5: arr[2]=4, arr[5]=8
      //   x=7: 7 > 4 && 7 <= 8? Yes → search right
      if(x > arr[mid] && x <= arr[high]){
        // x is in the sorted right half → search right
        // Eliminate left half: low = mid + 1
        low = mid + 1;
      }
      else{
        // x is NOT in the sorted right half → search left
        // x could be in the unsorted left half
        // Eliminate right half: high = mid - 1
        high = mid - 1;
      }
    }
  }
  
  // Step 3: Element not found
  // If we've exhausted the search space (low > high), x is not in array
  // Example: Searched entire array but didn't find x → return -1
  return -1;
}

// Step-by-step execution example 1:
// Input: arr = [10, 20, 4, 6, 7, 8], x = 7
// (Original sorted: [4, 6, 7, 8, 10, 20], rotated by 2)
//
// Call: search([10, 20, 4, 6, 7, 8], 7)
//   Iteration 1:
//     low=0, high=5, mid=2
//     arr[mid] = arr[2] = 4
//     Check: 4 === 7? No
//     Check: arr[low] < arr[mid]? arr[0]=10 < arr[2]=4? No
//     → Right half is sorted
//     Check: x > arr[mid] && x <= arr[high]?
//       7 > 4 && 7 <= 8? Yes ✅
//     → Search right: low = mid + 1 = 3
//   
//   Iteration 2:
//     low=3, high=5, mid=4
//     arr[mid] = arr[4] = 7
//     Check: 7 === 7? Yes ✅
//     Return: 4
//
// Result: 4 (Element 7 found at index 4)

// Step-by-step execution example 2:
// Input: arr = [10, 20, 4, 6, 7, 8], x = 20
//
// Call: search([10, 20, 4, 6, 7, 8], 20)
//   Iteration 1:
//     low=0, high=5, mid=2
//     arr[mid] = 4
//     Check: 4 === 20? No
//     Check: arr[0]=10 < arr[2]=4? No
//     → Right half is sorted
//     Check: 20 > 4 && 20 <= 8? No
//     → Search left: high = mid - 1 = 1
//   
//   Iteration 2:
//     low=0, high=1, mid=0
//     arr[mid] = arr[0] = 10
//     Check: 10 === 20? No
//     Check: arr[0]=10 < arr[0]=10? No (equal, not less)
//     → Right half is sorted
//     Check: 20 > 10 && 20 <= 20? Yes ✅
//     → Search right: low = mid + 1 = 1
//   
//   Iteration 3:
//     low=1, high=1, mid=1
//     arr[mid] = arr[1] = 20
//     Check: 20 === 20? Yes ✅
//     Return: 1
//
// Result: 1 (Element 20 found at index 1)

// Step-by-step execution example 3:
// Input: arr = [4, 6, 7, 8, 10, 20] (not rotated), x = 6
//
// Call: search([4, 6, 7, 8, 10, 20], 6)
//   Iteration 1:
//     low=0, high=5, mid=2
//     arr[mid] = 7
//     Check: 7 === 6? No
//     Check: arr[0]=4 < arr[2]=7? Yes ✅
//     → Left half is sorted
//     Check: 6 >= 4 && 6 < 7? Yes ✅
//     → Search left: high = mid - 1 = 1
//   
//   Iteration 2:
//     low=0, high=1, mid=0
//     arr[mid] = 4
//     Check: 4 === 6? No
//     Check: arr[0]=4 < arr[0]=4? No
//     → Right half is sorted
//     Check: 6 > 4 && 6 <= 6? Yes ✅
//     → Search right: low = mid + 1 = 1
//   
//   Iteration 3:
//     low=1, high=1, mid=1
//     arr[mid] = 6
//     Check: 6 === 6? Yes ✅
//     Return: 1
//
// Result: 1 (Element 6 found at index 1)

// Step-by-step execution example 4:
// Input: arr = [10, 20, 4, 6, 7, 8], x = 50 (not in array)
//
// Call: search([10, 20, 4, 6, 7, 8], 50)
//   Iteration 1:
//     low=0, high=5, mid=2
//     arr[mid] = 4, x = 50
//     Check: 4 === 50? No
//     Check: arr[0]=10 < arr[2]=4? No
//     → Right half is sorted
//     Check: 50 > 4 && 50 <= 8? No
//     → Search left: high = mid - 1 = 1
//   
//   Iteration 2:
//     low=0, high=1, mid=0
//     arr[mid] = 10, x = 50
//     Check: 10 === 50? No
//     Check: arr[0]=10 < arr[0]=10? No
//     → Right half is sorted
//     Check: 50 > 10 && 50 <= 20? No
//     → Search left: high = mid - 1 = -1
//   
//   Iteration 3:
//     low=0, high=-1
//     Check: low <= high? (0 <= -1)? No
//     Exit loop
//   
//   Return: -1
//
// Result: -1 (Element 50 not found)

// WHY THIS APPROACH IS OPTIMAL:
// 
// 1. TIME COMPLEXITY: O(log n) ✅
//    - Each iteration eliminates half the search space
//    - For array of size n, we need at most log₂(n) iterations
//    - Example: n=1,000,000 → only ~20 comparisons needed!
//    - This is the BEST possible time complexity for sorted array search
// 
// 2. SPACE COMPLEXITY: O(1) ✅
//    - Only using a few variables: n, low, high, mid
//    - No recursion stack (iterative approach)
//    - No extra arrays
//    - This is OPTIMAL space complexity
// 
// 3. HANDLES ALL CASES:
//    - Works for rotated arrays: [10, 20, 4, 6, 7, 8]
//    - Works for non-rotated arrays: [4, 6, 7, 8, 10, 20]
//    - Works for single element: [5]
//    - Works for two elements: [2, 1]
// 
// 4. EFFICIENT DECISION MAKING:
//    - Uses the property: "At least one half is always sorted"
//    - Makes smart decisions about which half to search
//    - Eliminates impossible search spaces quickly
// 
// 5. COMPARISON WITH NAIVE APPROACH:
//    - Naive: O(n) time - checks every element
//    - Optimal: O(log n) time - eliminates half each time
//    - For n=1,000,000: Naive needs 1M checks, Optimal needs ~20 checks!

// TIME COMPLEXITY ANALYSIS:
// 
// Best Case: O(1)
//   - Element found at middle of first iteration
//   - Example: arr = [10, 20, 4, 6, 7, 8], x = 4 → found at mid=2
// 
// Average Case: O(log n)
//   - Element found after log₂(n) iterations on average
//   - Example: n=8 → ~3 iterations
// 
// Worst Case: O(log n)
//   - Element found at last iteration or not found
//   - Example: n=8 → exactly 3 iterations
// 
// Overall: O(log n) - logarithmic time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using variables: n, low, high, mid
//   - No recursion (iterative approach)
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// KEY INSIGHT: Why "At Least One Half is Always Sorted"
// 
// In a rotated sorted array, there's a pivot point where rotation occurs.
// 
// Example: [10, 20, 4, 6, 7, 8]
//   Original: [4, 6, 7, 8, 10, 20]
//   Pivot at index 2 (where 4 is)
// 
// When we split at mid:
//   - Left half: [10, 20, 4] - NOT sorted (contains pivot)
//   - Right half: [6, 7, 8] - SORTED ✅
// 
// OR if we split differently:
//   - Left half: [10, 20] - SORTED ✅
//   - Right half: [4, 6, 7, 8] - SORTED ✅
// 
// The key: The pivot can be in at most ONE half.
// Therefore, at least ONE half is always sorted!
// 
// We use this to decide:
// - If x is in the sorted half's range → search that half
// - Otherwise → search the other half (which might contain the pivot)

// CONCLUSION: This IS the OPTIMAL approach ✅
// 
// ✅ Time: O(log n) - best possible
// ✅ Space: O(1) - best possible
// ✅ Handles all edge cases
// ✅ Efficient and elegant
// ✅ Industry standard solution

let arr = [10, 20, 4, 6, 7, 8];
let x = 7;
console.log(search(arr, x)); // Expected output: 4 (element 7 is at index 4)