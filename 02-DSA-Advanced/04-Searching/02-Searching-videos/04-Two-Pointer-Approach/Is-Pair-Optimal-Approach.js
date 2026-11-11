/**
 * PAIR ELEMENT - OPTIMAL SOLUTION USING TWO-POINTER TECHNIQUE
 * Problem: Check if there exists a pair of elements in a sorted array that sum to x
 * 
 * What is the problem?
 * - Given a sorted array and a target sum x
 * - Find if there exists two elements arr[i] and arr[j] such that arr[i] + arr[j] === x
 * - Return true if such pair exists, false otherwise
 * 
 * Approach: Two-Pointer Technique (Optimal)
 * - Use two pointers: one at start (i), one at end (j)
 * - If sum === x: found pair, return true
 * - If sum > x: move right pointer left (decrease sum)
 * - If sum < x: move left pointer right (increase sum)
 * - Continue until pointers meet
 * 
 * Time Complexity: O(n) where n is the length of array
 *   - Each element is visited at most once
 *   - Single pass through the array
 *   - This is the BEST possible time complexity!
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS OPTIMAL:
 * 1. Time: O(n) - best possible (must check at least n elements in worst case)
 * 2. Space: O(1) - best possible (no extra arrays needed)
 * 3. Efficient: Single pass, no nested loops
 * 4. Elegant: Simple and intuitive algorithm
 * 
 * KEY INSIGHT:
 * Since array is sorted:
 * - Moving left pointer right → increases sum (arr[i] increases)
 * - Moving right pointer left → decreases sum (arr[j] decreases)
 * - This allows us to "adjust" the sum efficiently
 */

function isPair(arr, x){
  // Step 1: Get the length of the array
  // This tells us the bounds for our pointers
  // Example: arr = [2, 3, 8, 11] → n = 4
  let n = arr.length;
  
  // Step 2: Initialize two pointers
  // i: left pointer starting at beginning of array (index 0)
  // j: right pointer starting at end of array (index n-1)
  // Example: arr = [2, 3, 8, 11] → i = 0, j = 3
  let i = 0;
  let j = n - 1;
  
  // Step 3: Two-Pointer Loop
  // Continue while left pointer is less than right pointer
  // When i >= j, we've checked all possible pairs
  // Example: i=0, j=3 → 0 < 3? Yes, continue
  while(i < j){
    // Step 3.1: Calculate sum of current pair
    // Check if arr[i] + arr[j] equals target x
    // Example: i=0, j=3: arr[0]=2, arr[3]=11, sum = 2+11 = 13
    //   Check: 13 === x? (depends on x value)
    
    // Step 3.2: Check if we found the target sum
    // If sum equals x, we found a pair!
    // Return true immediately
    // Example: i=1, j=2: arr[1]=3, arr[2]=8, sum = 3+8 = 11
    //   If x = 11: 11 === 11? Yes ✅ → return true
    if(arr[i] + arr[j] === x){
      return true;  // Found pair! Return true immediately
    }
    
    // Step 3.3: If sum is greater than target
    // We need to decrease the sum
    // Since array is sorted, moving right pointer left decreases sum
    // (arr[j] decreases, so arr[i] + arr[j] decreases)
    // Example: i=0, j=3: arr[0]=2, arr[3]=11, sum = 13
    //   If x = 11: 13 > 11? Yes
    //   → Move j left: j = 3 - 1 = 2
    //   → New sum: arr[0] + arr[2] = 2 + 8 = 10 (decreased!)
    else if(arr[i] + arr[j] > x){
      j = j - 1;  // Move right pointer left (decrease sum)
    }
    
    // Step 3.4: If sum is less than target
    // We need to increase the sum
    // Since array is sorted, moving left pointer right increases sum
    // (arr[i] increases, so arr[i] + arr[j] increases)
    // Example: i=0, j=2: arr[0]=2, arr[2]=8, sum = 10
    //   If x = 11: 10 < 11? Yes
    //   → Move i right: i = 0 + 1 = 1
    //   → New sum: arr[1] + arr[2] = 3 + 8 = 11 (increased!)
    else{
      i = i + 1;  // Move left pointer right (increase sum)
    }
  }
  
  // Step 4: No pair found
  // If pointers have met (i >= j), we've checked all possible pairs
  // No pair sums to x, so return false
  // Example: After checking all pairs, none sum to x → return false
  return false;
}

// Step-by-step execution example 1:
// Input: arr = [2, 3, 8, 11], x = 11
//
// Call: isPair([2, 3, 8, 11], 11)
//   Step 1: n = 4
//   Step 2: i = 0, j = 3
//   
//   Iteration 1:
//     i=0, j=3
//     Check: i < j? (0 < 3)? Yes, continue
//     sum = arr[0] + arr[3] = 2 + 11 = 13
//     Check: 13 === 11? No
//     Check: 13 > 11? Yes ✅
//     → Sum too large, need to decrease
//     → Move j left: j = 3 - 1 = 2
//   
//   Iteration 2:
//     i=0, j=2
//     Check: i < j? (0 < 2)? Yes, continue
//     sum = arr[0] + arr[2] = 2 + 8 = 10
//     Check: 10 === 11? No
//     Check: 10 > 11? No
//     Check: 10 < 11? Yes ✅
//     → Sum too small, need to increase
//     → Move i right: i = 0 + 1 = 1
//   
//   Iteration 3:
//     i=1, j=2
//     Check: i < j? (1 < 2)? Yes, continue
//     sum = arr[1] + arr[2] = 3 + 8 = 11
//     Check: 11 === 11? Yes ✅
//     Return: true
//   
//   Result: true (Pair found: arr[1] + arr[2] = 3 + 8 = 11)

// Step-by-step execution example 2:
// Input: arr = [2, 3, 8, 11], x = 0
//
// Call: isPair([2, 3, 8, 11], 0)
//   Step 1: n = 4
//   Step 2: i = 0, j = 3
//   
//   Iteration 1:
//     i=0, j=3
//     sum = arr[0] + arr[3] = 2 + 11 = 13
//     Check: 13 === 0? No
//     Check: 13 > 0? Yes ✅
//     → Move j left: j = 2
//   
//   Iteration 2:
//     i=0, j=2
//     sum = arr[0] + arr[2] = 2 + 8 = 10
//     Check: 10 === 0? No
//     Check: 10 > 0? Yes ✅
//     → Move j left: j = 1
//   
//   Iteration 3:
//     i=0, j=1
//     sum = arr[0] + arr[1] = 2 + 3 = 5
//     Check: 5 === 0? No
//     Check: 5 > 0? Yes ✅
//     → Move j left: j = 0
//   
//   Iteration 4:
//     i=0, j=0
//     Check: i < j? (0 < 0)? No
//     Exit loop
//   
//   Step 4: No pair found
//     Return: false
//   
//   Result: false (No pair sums to 0)

// Step-by-step execution example 3:
// Input: arr = [1, 2, 3, 4, 5], x = 9
//
// Call: isPair([1, 2, 3, 4, 5], 9)
//   Step 1: n = 5
//   Step 2: i = 0, j = 4
//   
//   Iteration 1:
//     i=0, j=4
//     sum = arr[0] + arr[4] = 1 + 5 = 6
//     Check: 6 === 9? No
//     Check: 6 < 9? Yes ✅
//     → Move i right: i = 1
//   
//   Iteration 2:
//     i=1, j=4
//     sum = arr[1] + arr[4] = 2 + 5 = 7
//     Check: 7 === 9? No
//     Check: 7 < 9? Yes ✅
//     → Move i right: i = 2
//   
//   Iteration 3:
//     i=2, j=4
//     sum = arr[2] + arr[4] = 3 + 5 = 8
//     Check: 8 === 9? No
//     Check: 8 < 9? Yes ✅
//     → Move i right: i = 3
//   
//   Iteration 4:
//     i=3, j=4
//     sum = arr[3] + arr[4] = 4 + 5 = 9
//     Check: 9 === 9? Yes ✅
//     Return: true
//   
//   Result: true (Pair found: arr[3] + arr[4] = 4 + 5 = 9)

// Step-by-step execution example 4:
// Input: arr = [1, 2], x = 3
//
// Call: isPair([1, 2], 3)
//   Step 1: n = 2
//   Step 2: i = 0, j = 1
//   
//   Iteration 1:
//     i=0, j=1
//     Check: i < j? (0 < 1)? Yes, continue
//     sum = arr[0] + arr[1] = 1 + 2 = 3
//     Check: 3 === 3? Yes ✅
//     Return: true
//   
//   Result: true (Pair found: arr[0] + arr[1] = 1 + 2 = 3)

// Step-by-step execution example 5:
// Input: arr = [1, 2, 3], x = 10
//
// Call: isPair([1, 2, 3], 10)
//   Step 1: n = 3
//   Step 2: i = 0, j = 2
//   
//   Iteration 1:
//     i=0, j=2
//     sum = arr[0] + arr[2] = 1 + 3 = 4
//     Check: 4 === 10? No
//     Check: 4 < 10? Yes ✅
//     → Move i right: i = 1
//   
//   Iteration 2:
//     i=1, j=2
//     sum = arr[1] + arr[2] = 2 + 3 = 5
//     Check: 5 === 10? No
//     Check: 5 < 10? Yes ✅
//     → Move i right: i = 2
//   
//   Iteration 3:
//     i=2, j=2
//     Check: i < j? (2 < 2)? No
//     Exit loop
//   
//   Step 4: No pair found
//     Return: false
//   
//   Result: false (No pair sums to 10)

// WHY THIS APPROACH IS OPTIMAL:
// 
// 1. TIME COMPLEXITY: O(n) ✅
//    - Each element is visited at most once
//    - In worst case, we check all n elements
//    - This is the BEST possible time complexity!
//    - Cannot do better than O(n) - must check at least n elements
// 
// 2. SPACE COMPLEXITY: O(1) ✅
//    - Only using a few variables: n, i, j
//    - No extra arrays or data structures
//    - This is OPTIMAL space complexity
// 
// 3. EFFICIENT DECISION MAKING:
//    - Uses sorted property to make smart decisions
//    - Eliminates impossible pairs without checking them
//    - Single pass through array
// 
// 4. COMPARISON WITH OTHER APPROACHES:
//    - Naive: O(n²) - checks all pairs
//    - Binary Search: O(n log n) - searches for complement
//    - Two-Pointer (This): O(n) - optimal! ✅

// TIME COMPLEXITY ANALYSIS:
// 
// Best Case: O(1)
//   - Pair found at first check (arr[0] + arr[n-1] === x)
//   - Example: arr = [1, 2, 3], x = 4 → found immediately
// 
// Average Case: O(n/2) ≈ O(n)
//   - Pair found after checking ~n/2 pairs on average
//   - Example: arr = [1, 2, 3, 4, 5], x = 9 → found at iteration 4
// 
// Worst Case: O(n)
//   - Pair not found or found at last check
//   - Need to check all n-1 pairs
//   - Example: arr = [1, 2, 3], x = 10 → check all pairs
// 
// Overall: O(n) - linear time complexity (OPTIMAL!)

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using variables: n, i, j
//   - No recursion
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// KEY INSIGHT: Why Two-Pointer Works
// 
// The crucial observation is that we can "adjust" the sum by moving pointers:
// 
// 1. If sum > x:
//    - We need a smaller sum
//    - Moving j left decreases arr[j] (since array is sorted)
//    - Therefore, arr[i] + arr[j] decreases
//    - This gets us closer to x
// 
// 2. If sum < x:
//    - We need a larger sum
//    - Moving i right increases arr[i] (since array is sorted)
//    - Therefore, arr[i] + arr[j] increases
//    - This gets us closer to x
// 
// 3. If sum === x:
//    - We found the pair! Return true
// 
// Example: arr = [2, 3, 8, 11], x = 11
//   Start: i=0, j=3, sum = 2+11 = 13 > 11
//   → Move j left: i=0, j=2, sum = 2+8 = 10 < 11
//   → Move i right: i=1, j=2, sum = 3+8 = 11 === 11 ✅
// 
// Why this works:
//   - We never "skip" a valid pair
//   - If arr[i] + arr[j] > x, then arr[i] + arr[k] > x for all k > j
//     (since arr is sorted, arr[k] >= arr[j])
//   - So we can safely eliminate all pairs (i, k) where k > j
//   - Same logic applies for sum < x

// COMPARISON OF ALL APPROACHES:
// 
// 1. Naive (Nested Loops):
//    - Time: O(n²)
//    - Space: O(1)
//    - Checks all pairs: n(n-1)/2 pairs
//    - Example: n=1000 → ~500,000 comparisons
// 
// 2. Binary Search:
//    - Time: O(n log n)
//    - Space: O(1)
//    - Searches for complement using binary search
//    - Example: n=1000 → ~10,000 comparisons
// 
// 3. Two-Pointer (This Solution - OPTIMAL):
//    - Time: O(n) ✅
//    - Space: O(1) ✅
//    - Single pass through array
//    - Example: n=1000 → ~1,000 comparisons
// 
// Speed Comparison (n=1000):
//   - Naive: 500,000 comparisons
//   - Binary Search: 10,000 comparisons
//   - Two-Pointer: 1,000 comparisons (500x faster than naive, 10x faster than binary search!)

// EDGE CASES HANDLED:
// 
// 1. Empty array: []
//   - n=0, i=0, j=-1
//   - Check: i < j? (0 < -1)? No
//   - Loop doesn't execute → return false
// 
// 2. Single element: [5]
//   - n=1, i=0, j=0
//   - Check: i < j? (0 < 0)? No
//   - Loop doesn't execute → return false
// 
// 3. Two elements: [1, 2]
//   - i=0, j=1: check sum → works correctly
// 
// 4. No pair exists: [1, 2, 3], x = 10
//   - Check all pairs, none sum to 10 → return false
// 
// 5. Pair at end: [1, 2, 3, 4, 5], x = 9
//   - Eventually finds 4+5=9 → return true

// WHY THIS IS THE OPTIMAL APPROACH:
// 
// Mathematical Proof:
//   - To find a pair, we must check at least n-1 pairs in worst case
//   - Two-pointer checks exactly n-1 pairs in worst case
//   - Therefore, O(n) is the best possible time complexity
// 
// Intuition:
//   - We can't do better than checking each element once
//   - Two-pointer does exactly that - single pass
//   - No redundant checks, no wasted comparisons
// 
// Conclusion:
//   ✅ Time: O(n) - best possible
//   ✅ Space: O(1) - best possible
//   ✅ Simple: Easy to understand and implement
//   ✅ Efficient: No nested loops, no binary search overhead

// CONCLUSION: This IS the OPTIMAL approach ✅
// 
// ✅ Time: O(n) - best possible (cannot do better)
// ✅ Space: O(1) - best possible
// ✅ Handles all edge cases
// ✅ Efficient and elegant
// ✅ Industry standard solution
// ✅ Much faster than naive O(n²) and binary search O(n log n)

let arr = [2, 3, 8, 11];
let x = 0;
console.log(isPair(arr, x)); // Expected output: false (no pair sums to 0)