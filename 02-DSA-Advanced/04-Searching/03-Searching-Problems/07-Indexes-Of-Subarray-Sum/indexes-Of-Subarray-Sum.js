/**
 * INDEXES OF SUBARRAY SUM - OPTIMAL & NAIVE APPROACHES
 * 
 * Problem: Find a contiguous subarray whose sum equals target
 * - Return 1-based indices [left, right] of leftmost subarray
 * - If no such subarray exists, return [-1]
 * 
 * Examples:
 * arr = [1, 2, 3, 7, 5], target = 12
 *   - Subarray [2, 3, 7] at indices 2-4 (1-based) has sum = 12
 *   - Output: [2, 4]
 * 
 * arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 15
 *   - Subarray [1, 2, 3, 4, 5] at indices 1-5 has sum = 15
 *   - Output: [1, 5]
 * 
 * arr = [5, 3, 4], target = 2
 *   - No subarray has sum = 2
 *   - Output: [-1]
 * 
 * APPROACH 1: Sliding Window (Optimal - O(n))
 * 
 * Key Insight:
 * Since all elements are non-negative, we can use sliding window:
 * - If sum < target: expand window (move right pointer)
 * - If sum > target: shrink window (move left pointer)
 * - If sum == target: found answer!
 * 
 * Algorithm:
 * 1. Use two pointers: left and right
 * 2. Expand window by moving right pointer
 * 3. If sum exceeds target, shrink from left
 * 4. When sum equals target, return 1-based indices
 * 
 * Time: O(n) - each element visited at most twice
 * Space: O(1)
 * 
 * APPROACH 2: Naive (O(n²))
 * 
 * Algorithm:
 * 1. Try all possible subarrays starting from each index
 * 2. For each starting index, try all ending indices
 * 3. Return first subarray with sum = target
 * 
 * Time: O(n²)
 * Space: O(1)
 */

// ============================================
// APPROACH 1: SLIDING WINDOW (OPTIMAL)
// ============================================

/**
 * Optimal solution using sliding window
 * Time: O(n)
 * Space: O(1)
 */
function subarraySum(arr, target) {
  let n = arr.length;
  let left = 0;
  let right = 0;
  let currentSum = 0;
  
  // Sliding window approach
  while (right < n) {
    // Add current element to window
    currentSum += arr[right];
    
    // If sum exceeds target, shrink window from left
    while (currentSum > target && left <= right) {
      currentSum -= arr[left];
      left++;
    }
    
    // If sum equals target, found answer!
    if (currentSum === target) {
      // Return 1-based indices
      return [left + 1, right + 1];
    }
    
    // Expand window
    right++;
  }
  
  // No subarray found
  return [-1];
}

/**
 * Step-by-step execution example 1:
 * Input: arr = [1, 2, 3, 7, 5], target = 12
 * 
 * Initial: left=0, right=0, currentSum=0
 * 
 * right=0: arr[0]=1
 *   currentSum = 0 + 1 = 1
 *   1 < 12, continue
 *   right = 1
 * 
 * right=1: arr[1]=2
 *   currentSum = 1 + 2 = 3
 *   3 < 12, continue
 *   right = 2
 * 
 * right=2: arr[2]=3
 *   currentSum = 3 + 3 = 6
 *   6 < 12, continue
 *   right = 3
 * 
 * right=3: arr[3]=7
 *   currentSum = 6 + 7 = 13
 *   13 > 12, shrink window
 *   currentSum = 13 - arr[0] = 13 - 1 = 12
 *   left = 1
 *   currentSum == 12 == target ✓
 *   Return [1+1, 3+1] = [2, 4]
 * 
 * Result: [2, 4]
 */

/**
 * Step-by-step execution example 2:
 * Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 15
 * 
 * right=0: arr[0]=1, currentSum=1, right=1
 * right=1: arr[1]=2, currentSum=3, right=2
 * right=2: arr[2]=3, currentSum=6, right=3
 * right=3: arr[3]=4, currentSum=10, right=4
 * right=4: arr[4]=5, currentSum=15
 *   currentSum == 15 == target ✓
 *   Return [0+1, 4+1] = [1, 5]
 * 
 * Result: [1, 5]
 */

// ============================================
// APPROACH 2: NAIVE (O(n²))
// ============================================

/**
 * Naive solution - try all possible subarrays
 * Time: O(n²)
 * Space: O(1)
 */
function subarraySumNaive(arr, target) {
  let n = arr.length;
  
  // Try all possible starting positions
  for (let i = 0; i < n; i++) {
    let sum = 0;
    
    // Try all possible ending positions from i
    for (let j = i; j < n; j++) {
      sum += arr[j];
      
      // If sum equals target, found answer
      if (sum === target) {
        // Return 1-based indices
        return [i + 1, j + 1];
      }
      
      // If sum exceeds target, no need to continue
      // (since all elements are non-negative)
      if (sum > target) {
        break;
      }
    }
  }
  
  // No subarray found
  return [-1];
}

/**
 * Step-by-step execution (Naive):
 * Input: arr = [1, 2, 3, 7, 5], target = 12
 * 
 * i=0: Start from index 0
 *   j=0: sum=1, continue
 *   j=1: sum=3, continue
 *   j=2: sum=6, continue
 *   j=3: sum=13 > 12, break
 * 
 * i=1: Start from index 1
 *   j=1: sum=2, continue
 *   j=2: sum=5, continue
 *   j=3: sum=12 == target ✓
 *   Return [1+1, 3+1] = [2, 4]
 * 
 * Result: [2, 4]
 */

// ============================================
// TEST CASES
// ============================================

console.log("=== APPROACH 1: Sliding Window (Optimal - O(n)) ===");
console.log("Test 1: arr=[1, 2, 3, 7, 5], target=12");
console.log("Output:", subarraySum([1, 2, 3, 7, 5], 12));
console.log("Expected: [2, 4]\n");


console.log("\n=== APPROACH 2: Naive (O(n²)) ===");
console.log("Test 1: arr=[1, 2, 3, 7, 5], target=12");
console.log("Output:", subarraySumNaive([1, 2, 3, 7, 5], 12));
console.log("Expected: [2, 4]\n");

