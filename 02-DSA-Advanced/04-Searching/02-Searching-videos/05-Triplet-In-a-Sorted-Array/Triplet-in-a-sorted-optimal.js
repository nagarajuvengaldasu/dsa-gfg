/**
 * TRIPLET IN A SORTED ARRAY - OPTIMAL SOLUTION USING TWO-POINTER TECHNIQUE
 * Problem: Check if there exists a triplet of elements in a sorted array that sum to x
 * 
 * What is the problem?
 * - Given a sorted array and a target sum x
 * - Find if there exists three elements arr[i], arr[j], and arr[k] such that
 *   arr[i] + arr[j] + arr[k] === x
 * - Return true if such triplet exists, false otherwise
 * 
 * Approach: Two-Pointer Technique (Optimal)
 * - Fix the first element arr[i]
 * - Use two-pointer technique to find a pair in remaining array that sums to (x - arr[i])
 * - This reduces the triplet problem to a pair problem
 * 
 * Time Complexity: O(n²) where n is the length of array
 *   - Outer loop: (n-2) iterations
 *   - Two-pointer per iteration: O(n) in worst case
 *   - Total: O(n²)
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS OPTIMAL:
 * 1. Time: O(n²) - much better than O(n³) naive approach
 * 2. Space: O(1) - best possible (no extra arrays needed)
 * 3. Efficient: Uses sorted property to eliminate impossible pairs
 * 4. Elegant: Reduces triplet problem to pair problem
 * 
 * KEY INSIGHT:
 * For triplet arr[i] + arr[j] + arr[k] === x:
 *   We need: arr[j] + arr[k] === x - arr[i]
 *   This is a pair sum problem, which we solve with two-pointer!
 * 
 * NOTE: This solution REQUIRES a sorted array for two-pointer to work correctly.
 * The comment "can be used for sorted and unsorted array" is misleading - 
 * two-pointer technique only works efficiently on sorted arrays.
 */

function triplet(arr, x){
  // Step 1: Get the length of the array
  // This tells us how many elements we need to check
  // Example: arr = [2, 3, 4, 8, 9, 20, 40] → n = 7
  let n = arr.length;
  
  // Step 2: Outer Loop - Fix first element of the triplet
  // Iterate through each element as the first element
  // We only go up to n-2 because we need at least 2 more elements for triplet
  // Example: For arr = [2, 3, 4, 8, 9, 20, 40], we check i = 0, 1, 2, 3, 4
  //   (not 5 or 6, as we need at least 2 more elements)
  for(let i = 0; i < n - 2; i++){
    // Step 2.1: Calculate target sum for remaining pair
    // If arr[i] + arr[j] + arr[k] === x, then arr[j] + arr[k] === x - arr[i]
    // We need to find a pair in the remaining array that sums to (x - arr[i])
    // Example: i=1, arr[1]=3, x=32 → target = 32 - 3 = 29
    //   Need to find pair in [4, 8, 9, 20, 40] that sums to 29
    
    // Step 2.2: Use two-pointer to find pair in remaining array
    // Search in arr[i+1...n-1] for a pair that sums to (x - arr[i])
    // Start index: i+1 (elements after arr[i])
    // Example: i=1 → search in arr[2...6] = [4, 8, 9, 20, 40]
    if(isPair(arr, x - arr[i], i + 1)){
      return true;  // Found triplet! Return true immediately
    }
    // Step 2.3: If no pair found for current arr[i], continue to next element
    // Loop continues to check if arr[i+1] has a pair that completes the triplet
  }
  
  // Step 3: No triplet found
  // If we've checked all possible first elements and none has a matching pair,
  // return false
  // This means no such triplet exists in the array
  // Example: arr = [2, 3, 4, 8, 9, 20, 40], x = 100
  //   Checked all i, none has a pair → return false
  return false;
}

function isPair(arr, x, si){
  // Step 1: Initialize two pointers for pair search
  // i: left pointer starting at si (start index)
  // j: right pointer starting at end of array
  // We search for a pair in arr[si...n-1] that sums to x
  // Example: arr = [2, 3, 4, 8, 9, 20, 40], x = 29, si = 2
  //   Search in arr[2...6] = [4, 8, 9, 20, 40]
  //   i = 2, j = 6
  let i = si;
  let j = arr.length - 1;
  
  // Step 2: Two-Pointer Loop
  // Continue while left pointer is less than right pointer
  // When i >= j, we've checked all possible pairs in this range
  // Example: i=2, j=6 → 2 < 6? Yes, continue
  while(i < j){
    // Step 2.1: Calculate sum of current pair
    // Check if arr[i] + arr[j] equals target x
    // Example: i=2, j=6: arr[2]=4, arr[6]=40, sum = 4+40 = 44
    //   Check: 44 === x? (depends on x value)
    
    // Step 2.2: Check if we found the target sum
    // If sum equals x, we found a pair!
    // Return true immediately
    // Example: i=4, j=5: arr[4]=9, arr[5]=20, sum = 9+20 = 29
    //   If x = 29: 29 === 29? Yes ✅ → return true
    if(arr[i] + arr[j] === x){
      return true;  // Found pair! Return true immediately
    }
    
    // Step 2.3: If sum is greater than target
    // We need to decrease the sum
    // Since array is sorted, moving right pointer left decreases sum
    // (arr[j] decreases, so arr[i] + arr[j] decreases)
    // Example: i=2, j=6: arr[2]=4, arr[6]=40, sum = 44
    //   If x = 29: 44 > 29? Yes
    //   → Move j left: j = 6 - 1 = 5
    //   → New sum: arr[2] + arr[5] = 4 + 20 = 24 (decreased!)
    else if(arr[i] + arr[j] > x){
      j = j - 1;  // Move right pointer left (decrease sum)
    }
    
    // Step 2.4: If sum is less than target
    // We need to increase the sum
    // Since array is sorted, moving left pointer right increases sum
    // (arr[i] increases, so arr[i] + arr[j] increases)
    // Example: i=2, j=5: arr[2]=4, arr[5]=20, sum = 24
    //   If x = 29: 24 < 29? Yes
    //   → Move i right: i = 2 + 1 = 3
    //   → New sum: arr[3] + arr[5] = 8 + 20 = 28 (increased!)
    else{
      i = i + 1;  // Move left pointer right (increase sum)
    }
  }
  
  // Step 3: No pair found
  // If pointers have met (i >= j), we've checked all possible pairs in this range
  // No pair sums to x, so return false
  // Example: After checking all pairs in range, none sum to x → return false
  return false;
}

// Step-by-step execution example 1:
// Input: arr = [2, 3, 4, 8, 9, 20, 40], x = 32
//
// Call: triplet([2, 3, 4, 8, 9, 20, 40], 32)
//   Step 1: n = 7
//   
//   Step 2: Outer Loop (i = 0 to 4, since n-2 = 5)
//     Iteration 1: i = 0
//       arr[i] = arr[0] = 2
//       target = x - arr[i] = 32 - 2 = 30
//       Call: isPair([2, 3, 4, 8, 9, 20, 40], 30, 1)
//       
//       Two-Pointer Search for pair summing to 30 in arr[1...6] = [3, 4, 8, 9, 20, 40]:
//         Iteration 1:
//           i=1, j=6
//           sum = arr[1] + arr[6] = 3 + 40 = 43
//           Check: 43 === 30? No
//           Check: 43 > 30? Yes ✅
//           → Move j left: j = 5
//         
//         Iteration 2:
//           i=1, j=5
//           sum = arr[1] + arr[5] = 3 + 20 = 23
//           Check: 23 === 30? No
//           Check: 23 < 30? Yes ✅
//           → Move i right: i = 2
//         
//         Iteration 3:
//           i=2, j=5
//           sum = arr[2] + arr[5] = 4 + 20 = 24
//           Check: 24 === 30? No
//           Check: 24 < 30? Yes ✅
//           → Move i right: i = 3
//         
//         Iteration 4:
//           i=3, j=5
//           sum = arr[3] + arr[5] = 8 + 20 = 28
//           Check: 28 === 30? No
//           Check: 28 < 30? Yes ✅
//           → Move i right: i = 4
//         
//         Iteration 5:
//           i=4, j=5
//           sum = arr[4] + arr[5] = 9 + 20 = 29
//           Check: 29 === 30? No
//           Check: 29 < 30? Yes ✅
//           → Move i right: i = 5
//         
//         Iteration 6:
//           i=5, j=5
//           Check: i < j? (5 < 5)? No
//           Exit loop
//         Return: false (no pair found)
//       
//       isPair returns false → continue to next iteration
//     
//     Iteration 2: i = 1
//       arr[i] = arr[1] = 3
//       target = x - arr[i] = 32 - 3 = 29
//       Call: isPair([2, 3, 4, 8, 9, 20, 40], 29, 2)
//       
//       Two-Pointer Search for pair summing to 29 in arr[2...6] = [4, 8, 9, 20, 40]:
//         Iteration 1:
//           i=2, j=6
//           sum = arr[2] + arr[6] = 4 + 40 = 44
//           Check: 44 === 29? No
//           Check: 44 > 29? Yes ✅
//           → Move j left: j = 5
//         
//         Iteration 2:
//           i=2, j=5
//           sum = arr[2] + arr[5] = 4 + 20 = 24
//           Check: 24 === 29? No
//           Check: 24 < 29? Yes ✅
//           → Move i right: i = 3
//         
//         Iteration 3:
//           i=3, j=5
//           sum = arr[3] + arr[5] = 8 + 20 = 28
//           Check: 28 === 29? No
//           Check: 28 < 29? Yes ✅
//           → Move i right: i = 4
//         
//         Iteration 4:
//           i=4, j=5
//           sum = arr[4] + arr[5] = 9 + 20 = 29
//           Check: 29 === 29? Yes ✅
//           Return: true
//       
//       isPair returns true ✅
//       Return: true
//   
//   Result: true (Triplet found: arr[1] + arr[4] + arr[5] = 3 + 9 + 20 = 32)

// Step-by-step execution example 2:
// Input: arr = [2, 3, 4, 8, 9, 20, 40], x = 100
//
// Call: triplet([2, 3, 4, 8, 9, 20, 40], 100)
//   Step 1: n = 7
//   
//   Step 2: Outer Loop (i = 0 to 4)
//     Iteration 1: i = 0
//       target = 100 - 2 = 98
//       Search for pair summing to 98 in [3, 4, 8, 9, 20, 40]
//       Two-pointer: not found → return false
//       continue
//     
//     Iteration 2: i = 1
//       target = 100 - 3 = 97
//       Search for pair summing to 97 in [4, 8, 9, 20, 40]
//       Two-pointer: not found → return false
//       continue
//     
//     Iteration 3: i = 2
//       target = 100 - 4 = 96
//       Search for pair summing to 96 in [8, 9, 20, 40]
//       Two-pointer: not found → return false
//       continue
//     
//     Iteration 4: i = 3
//       target = 100 - 8 = 92
//       Search for pair summing to 92 in [9, 20, 40]
//       Two-pointer: not found → return false
//       continue
//     
//     Iteration 5: i = 4
//       target = 100 - 9 = 91
//       Search for pair summing to 91 in [20, 40]
//       Two-pointer:
//         i=5, j=6: 20+40=60 === 91? No
//         60 < 91? Yes → i=6
//         i=6, j=6: exit loop
//       return false
//       continue
//   
//   Step 3: No triplet found
//     Return: false
//   
//   Result: false (No triplet sums to 100)

// Step-by-step execution example 3:
// Input: arr = [1, 2, 3, 4, 5], x = 12
//
// Call: triplet([1, 2, 3, 4, 5], 12)
//   Step 1: n = 5
//   
//   Step 2: Outer Loop (i = 0 to 2)
//     Iteration 1: i = 0
//       target = 12 - 1 = 11
//       Search for pair summing to 11 in [2, 3, 4, 5]
//       Two-pointer: not found → continue
//     
//     Iteration 2: i = 1
//       target = 12 - 2 = 10
//       Search for pair summing to 10 in [3, 4, 5]
//       Two-pointer: not found → continue
//     
//     Iteration 3: i = 2
//       target = 12 - 3 = 9
//       Search for pair summing to 9 in [4, 5]
//       Two-pointer:
//         i=3, j=4: 4+5=9 === 9? Yes ✅
//         Return: true
//       isPair returns true ✅
//       Return: true
//   
//   Result: true (Triplet found: arr[2] + arr[3] + arr[4] = 3 + 4 + 5 = 12)

// Step-by-step execution example 4:
// Input: arr = [1, 2, 3], x = 6
//
// Call: triplet([1, 2, 3], 6)
//   Step 1: n = 3
//   
//   Step 2: Outer Loop (i = 0 to 0, since n-2 = 1)
//     Iteration 1: i = 0
//       target = 6 - 1 = 5
//       Call: isPair([1, 2, 3], 5, 1)
//       
//       Two-Pointer Search for pair summing to 5 in arr[1...2] = [2, 3]:
//         Iteration 1:
//           i=1, j=2
//           sum = arr[1] + arr[2] = 2 + 3 = 5
//           Check: 5 === 5? Yes ✅
//           Return: true
//       
//       isPair returns true ✅
//       Return: true
//   
//   Result: true (Triplet found: arr[0] + arr[1] + arr[2] = 1 + 2 + 3 = 6)

// WHY THIS APPROACH IS OPTIMAL:
// 
// 1. TIME COMPLEXITY: O(n²) ✅
//    - Outer loop: (n-2) iterations
//    - Two-pointer per iteration: O(n) in worst case
//    - Total: O(n²) - much better than O(n³) naive approach
//    - Example: n=100 → ~10,000 comparisons vs ~166,000 for naive
// 
// 2. SPACE COMPLEXITY: O(1) ✅
//    - Only using a few variables: n, i, j, si
//    - No extra arrays or data structures
//    - This is OPTIMAL space complexity
// 
// 3. EFFICIENT DECISION MAKING:
//    - Uses sorted property to eliminate impossible pairs
//    - Two-pointer technique is optimal for pair sum problem
//    - Reduces triplet problem to pair problem
// 
// 4. COMPARISON WITH NAIVE APPROACH:
//    - Naive: O(n³) - checks all triplets with nested loops
//    - This: O(n²) - uses two-pointer for pair search
//    - For n=100: Naive needs ~166,000 comparisons, This needs ~10,000

// TIME COMPLEXITY ANALYSIS:
// 
// Outer Loop:
//   - Iterates (n-2) times (once for each possible first element)
//   - Time: O(n)
// 
// Two-Pointer (per iteration):
//   - Searches in remaining array of size (n-i-1)
//   - In worst case, searches all elements: O(n)
//   - Time: O(n)
// 
// Total:
//   - (n-2) iterations × O(n) per iteration = O(n²)
// 
// Best Case: O(n)
//   - Triplet found at first iteration, two-pointer finds pair quickly
//   - Example: arr = [1, 2, 3], x = 6 → found immediately
// 
// Average Case: O(n²)
//   - Triplet found after checking ~n/2 first elements on average
//   - Each two-pointer search takes O(n)
// 
// Worst Case: O(n²)
//   - Triplet not found or found at last iteration
//   - Need to check all (n-2) first elements, each with O(n) two-pointer search
// 
// Overall: O(n²) - quadratic time complexity (OPTIMAL for this problem!)

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using variables: n, i, j, si
//   - No recursion
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// KEY INSIGHT: Why This Works
// 
// The key is reducing the triplet problem to a pair problem:
// 
// For triplet: arr[i] + arr[j] + arr[k] === x
//   We need: arr[j] + arr[k] === x - arr[i]
// 
// So for each arr[i]:
//   1. Calculate target = x - arr[i]
//   2. Find pair in arr[i+1...n-1] that sums to target
//   3. This is exactly the pair sum problem!
// 
// Since array is sorted, we can use two-pointer technique:
//   - If arr[left] + arr[right] > target → move right left (decrease sum)
//   - If arr[left] + arr[right] < target → move left right (increase sum)
//   - If arr[left] + arr[right] === target → found pair!
// 
// Example: arr = [2, 3, 4, 8, 9, 20, 40], x = 32
//   For arr[1] = 3:
//     target = 32 - 3 = 29
//     Find pair in [4, 8, 9, 20, 40] summing to 29
//     Two-pointer finds: 9 + 20 = 29 ✅
//     → Triplet: 3 + 9 + 20 = 32 ✅

// COMPARISON WITH NAIVE SOLUTION:
// 
// Naive (Three Nested Loops):
//   - Time: O(n³)
//   - Space: O(1)
//   - Checks all triplets: n(n-1)(n-2)/6 triplets
//   - Example: n=100 → ~166,000 comparisons
// 
// Optimal (Two-Pointer - This Solution):
//   - Time: O(n²) ✅
//   - Space: O(1) ✅
//   - Fixes first element, uses two-pointer for pair
//   - Example: n=100 → ~10,000 comparisons
// 
// Speed Improvement:
//   - For n=100: Naive needs ~166,000 comparisons
//   - Optimal needs only ~10,000 comparisons
//   - That's 16.6x faster! 🚀

// IMPORTANT NOTE ABOUT SORTED ARRAY:
// 
// ⚠️ The comment "can be used for sorted and unsorted array" is MISLEADING!
// 
// This solution REQUIRES a sorted array because:
// 1. Two-pointer technique only works on sorted arrays
// 2. The logic "if sum > x, move right pointer left" relies on sorted property
// 3. If array is unsorted, two-pointer will skip valid pairs
// 
// For unsorted arrays:
//   - You would need to sort first: O(n log n)
//   - Then use this approach: O(n²)
//   - Total: O(n²) (if sorting is allowed)
//   - Or use naive O(n³) approach

// EDGE CASES HANDLED:
// 
// 1. Empty array: []
//   - n=0, outer loop doesn't execute → return false
// 
// 2. Less than 3 elements: [1, 2]
//   - n=2, outer loop: i < n-2? (0 < 0)? No
//   - Loop doesn't execute → return false
// 
// 3. Exactly 3 elements: [1, 2, 3]
//   - i=0: search for pair summing to (x-1) in [2, 3]
//   - Two-pointer works correctly
// 
// 4. No triplet exists: [1, 2, 3, 4, 5], x = 100
//   - Check all i, none has a pair → return false
// 
// 5. Triplet at end: [1, 2, 3, 4, 5], x = 12
//   - i=2: finds pair 4+5=9 → triplet 3+4+5=12 → return true

// WHY THIS IS THE OPTIMAL APPROACH:
// 
// Mathematical Proof:
//   - We must check at least (n-2) first elements
//   - For each first element, we need to find a pair
//   - Finding a pair in sorted array requires at least O(n) time
//   - Therefore, O(n²) is the best possible time complexity
// 
// Intuition:
//   - We can't do better than checking each first element once
//   - For each first element, we need O(n) to find the pair
//   - Total: O(n²) - optimal!
// 
// Conclusion:
//   ✅ Time: O(n²) - best possible
//   ✅ Space: O(1) - best possible
//   ✅ Simple: Easy to understand (reduces to pair problem)
//   ✅ Efficient: Uses sorted property effectively

// CONCLUSION: This IS the OPTIMAL approach ✅
// 
// ✅ Time: O(n²) - best possible (cannot do better)
// ✅ Space: O(1) - best possible
// ✅ Handles all edge cases
// ✅ Efficient and elegant
// ✅ Industry standard solution
// ✅ Much faster than naive O(n³) approach
// 
// ⚠️ NOTE: Requires sorted array for two-pointer to work correctly!

let arr = [2, 3, 4, 8, 9, 20, 40];
let x = 32;
console.log(triplet(arr, x)); // Expected output: true (triplet found: 3 + 9 + 20 = 32)