/**
 * MINIMUM NUMBER IN A SORTED ROTATED ARRAY - OPTIMAL & NAIVE APPROACHES
 * 
 * Problem: Find minimum element in a sorted and rotated array
 * - Array was initially sorted, then rotated at some unknown point
 * - All elements are distinct
 * 
 * Examples:
 * arr = [2,3,4,5,6,7,8,9,10,1]
 *   - Rotated once anti-clockwise
 *   - Minimum = 1 (at last index)
 * 
 * arr = [3,4,5,1,2]
 *   - Rotated array
 *   - Minimum = 1 (at index 3)
 * 
 * APPROACH 1: Binary Search (Optimal - O(log n))
 * 
 * Key Insight:
 * - In a sorted rotated array, there's a pivot point (rotation point)
 * - Minimum element is at the pivot
 * - Compare mid with high (or low) to determine which half contains pivot
 * 
 * Algorithm:
 * 1. Compare arr[mid] with arr[high]
 * 2. If arr[mid] > arr[high]: pivot is in right half (mid+1 to high)
 * 3. If arr[mid] < arr[high]: pivot is in left half (low to mid)
 * 4. Continue until low == high
 * 
 * Time: O(log n)
 * Space: O(1)
 * 
 * APPROACH 2: Linear Search (Naive - O(n))
 * 
 * Algorithm:
 * 1. Scan array from left to right
 * 2. Find first element where arr[i] < arr[i-1]
 * 3. That element is the minimum
 * 4. If no such element, array is not rotated (return first element)
 * 
 * Time: O(n)
 * Space: O(1)
 */

// ============================================
// APPROACH 1: BINARY SEARCH (OPTIMAL)
// ============================================

/**
 * Optimal solution using binary search
 * Time: O(log n)
 * Space: O(1)
 */
function findMinimum(arr, n) {
  let low = 0;
  let high = n - 1;
  
  // Binary search to find pivot (minimum element)
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    
    // If arr[mid] > arr[high], pivot is in right half
    // Example: [3,4,5,1,2], mid=2, arr[2]=5 > arr[4]=2
    // Pivot must be in [3,4] (right half)
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } 
    // If arr[mid] < arr[high], pivot is in left half (including mid)
    // Example: [5,1,2,3,4], mid=2, arr[2]=2 < arr[4]=4
    // Pivot must be in [0,2] (left half including mid)
    else {
      high = mid;
    }
  }
  
  // When low == high, we found the minimum
  return arr[low];
}

/**
 * Step-by-step execution example 1:
 * Input: arr = [2,3,4,5,6,7,8,9,10,1], n=10
 * 
 * Initial: low=0, high=9
 * 
 * Iteration 1: low=0, high=9, mid=4
 *   arr[mid] = arr[4] = 6
 *   arr[high] = arr[9] = 1
 *   arr[4] > arr[9]? 6 > 1? Yes ✓
 *   → Pivot in right half: low = 5
 * 
 * Iteration 2: low=5, high=9, mid=7
 *   arr[mid] = arr[7] = 9
 *   arr[high] = arr[9] = 1
 *   arr[7] > arr[9]? 9 > 1? Yes ✓
 *   → Pivot in right half: low = 8
 * 
 * Iteration 3: low=8, high=9, mid=8
 *   arr[mid] = arr[8] = 10
 *   arr[high] = arr[9] = 1
 *   arr[8] > arr[9]? 10 > 1? Yes ✓
 *   → Pivot in right half: low = 9
 * 
 * Iteration 4: low=9, high=9 → loop ends
 * 
 * Result: arr[9] = 1
 */

/**
 * Step-by-step execution example 2:
 * Input: arr = [3,4,5,1,2], n=5
 * 
 * Initial: low=0, high=4
 * 
 * Iteration 1: low=0, high=4, mid=2
 *   arr[mid] = arr[2] = 5
 *   arr[high] = arr[4] = 2
 *   arr[2] > arr[4]? 5 > 2? Yes ✓
 *   → Pivot in right half: low = 3
 * 
 * Iteration 2: low=3, high=4, mid=3
 *   arr[mid] = arr[3] = 1
 *   arr[high] = arr[4] = 2
 *   arr[3] > arr[4]? 1 > 2? No ✗
 *   → Pivot in left half (including mid): high = 3
 * 
 * Iteration 3: low=3, high=3 → loop ends
 * 
 * Result: arr[3] = 1
 */

// Alternative: Using low and high parameters (as per problem description)
function minNumber(arr, low, high) {
  // Binary search approach
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    
    // Compare mid with high to find pivot
    if (arr[mid] > arr[high]) {
      // Pivot is in right half
      low = mid + 1;
    } else {
      // Pivot is in left half (including mid)
      high = mid;
    }
  }
  
  // Minimum element is at low (or high, they're equal)
  return arr[low];
}

// ============================================
// APPROACH 2: LINEAR SEARCH (NAIVE)
// ============================================

/**
 * Naive solution - linear search
 * Time: O(n)
 * Space: O(1)
 */
function findMinimumNaive(arr, n) {
  // If array is not rotated, first element is minimum
  // Check if array is rotated: arr[0] > arr[n-1]
  if (arr[0] < arr[n - 1]) {
    return arr[0];
  }
  
  // Find the pivot point (where rotation occurred)
  // Pivot is where arr[i] < arr[i-1]
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return arr[i];
    }
  }
  
  // Should not reach here, but return first element as fallback
  return arr[0];
}

/**
 * Step-by-step execution (Naive):
 * Input: arr = [2,3,4,5,6,7,8,9,10,1], n=10
 * 
 * Check: arr[0]=2 < arr[9]=1? No, so array is rotated
 * 
 * i=1: arr[1]=3, arr[0]=2, 3 < 2? No, continue
 * i=2: arr[2]=4, arr[1]=3, 4 < 3? No, continue
 * i=3: arr[3]=5, arr[2]=4, 5 < 4? No, continue
 * i=4: arr[4]=6, arr[3]=5, 6 < 5? No, continue
 * i=5: arr[5]=7, arr[4]=6, 7 < 6? No, continue
 * i=6: arr[6]=8, arr[5]=7, 8 < 7? No, continue
 * i=7: arr[7]=9, arr[6]=8, 9 < 8? No, continue
 * i=8: arr[8]=10, arr[7]=9, 10 < 9? No, continue
 * i=9: arr[9]=1, arr[8]=10, 1 < 10? Yes ✓
 * 
 * Result: arr[9] = 1
 */

// ============================================
// TEST CASES
// ============================================

console.log("=== APPROACH 1: Binary Search (Optimal - O(log n)) ===");
console.log("Test 1: arr=[2,3,4,5,6,7,8,9,10,1], n=10");
console.log("Output:", findMinimum([2,3,4,5,6,7,8,9,10,1], 10));
console.log("Expected: 1\n");


console.log("\n=== APPROACH 2: Linear Search (Naive - O(n)) ===");
console.log("Test 1: arr=[2,3,4,5,6,7,8,9,10,1], n=10");
console.log("Output:", findMinimumNaive([2,3,4,5,6,7,8,9,10,1], 10));
console.log("Expected: 1\n");
