/**
 * PAIR ELEMENT - BETTER APPROACH USING BINARY SEARCH
 * Problem: Check if there exists a pair of elements in a sorted array that sum to x
 * 
 * What is the problem?
 * - Given a sorted array and a target sum x
 * - Find if there exists two elements arr[i] and arr[j] such that arr[i] + arr[j] === x
 * - Return true if such pair exists, false otherwise
 * 
 * Approach: Binary Search for Each Element
 * - For each element arr[i], search for its complement (x - arr[i]) in the remaining array
 * - Use binary search to find the complement efficiently
 * - Since array is sorted, binary search works perfectly
 * 
 * Time Complexity: O(n log n) where n is the length of array
 *   - Outer loop: n iterations
 *   - Binary search per iteration: O(log n)
 *   - Total: O(n log n)
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS BETTER THAN NAIVE:
 * - Naive: O(n²) - checks all pairs with nested loops
 * - This: O(n log n) - uses binary search to find complement
 * - Much faster for large arrays!
 * 
 * COMPARISON:
 * - Naive: O(n²) - slow
 * - Binary Search (This): O(n log n) - better
 * - Two-Pointer: O(n) - optimal (best)
 */

function isPair(arr, x){
  // Step 1: Get the length of the array
  // This tells us how many elements we need to check
  // Example: arr = [2, 3, 8, 11] → n = 4
  let n = arr.length;
  
  // Step 2: Iterate through each element as first element of pair
  // For each element arr[i], we need to find if there exists arr[j] such that
  // arr[i] + arr[j] === x, which means arr[j] === x - arr[i]
  // We search for the complement (x - arr[i]) in the remaining array
  // Example: For arr = [2, 3, 8, 11], x = 11
  //   i=0: arr[0]=2, need to find 11-2=9 in [3, 8, 11]
  //   i=1: arr[1]=3, need to find 11-3=8 in [8, 11]
  for(let i = 0; i < n; i++){
    // Step 2.1: Calculate the complement we need to find
    // If arr[i] + arr[j] === x, then arr[j] === x - arr[i]
    // We search for this complement in the remaining sorted array
    // Example: i=0, arr[0]=2, x=11 → complement = 11-2 = 9
    //   Search for 9 in arr[1...n-1] = [3, 8, 11]
    
    // Step 2.2: Binary search for complement in remaining array
    // Search range: [i+1, n-1] (elements after arr[i])
    // We start from i+1 to avoid checking same pair twice
    // Example: i=0 → search in [1, 3] (indices 1 to 3)
    //          i=1 → search in [2, 3] (indices 2 to 3)
    let j = binarySearch(arr, i + 1, n - 1, x - arr[i]);
    
    // Step 2.3: Check if complement was found
    // If binarySearch returns a valid index (not -1), we found a pair!
    // Example: i=1, arr[1]=3, complement=8
    //   binarySearch finds 8 at index 2
    //   → arr[1] + arr[2] = 3 + 8 = 11 === x ✅
    if(j !== -1){
      return true;  // Found pair! Return true immediately
    }
    // Step 2.4: If complement not found, continue to next element
    // Loop continues to check if arr[i+1] has a complement
  }
  
  // Step 3: No pair found
  // If we've checked all elements and none has a complement, return false
  // This means no such pair exists in the array
  // Example: arr = [2, 3, 8, 11], x = 1
  //   i=0: search for 1-2=-1 in [3,8,11] → not found
  //   i=1: search for 1-3=-2 in [8,11] → not found
  //   i=2: search for 1-8=-7 in [11] → not found
  //   i=3: search for 1-11=-10 in [] → not found
  //   → return false
  return false;
}

function binarySearch(arr, low, high, x){
  // Step 1: Binary Search Loop
  // Continue while we have a valid search range
  // Each iteration eliminates half of the remaining elements
  // Example: low=1, high=3, x=8
  //   Search in arr[1...3] = [3, 8, 11]
  while(low <= high){
    // Step 1.1: Calculate middle index
    // This splits the current search range in half
    // Example: low=1, high=3 → mid = (1+3)/2 = 2
    let mid = Math.floor((low + high) / 2);
    
    // Step 1.2: Check if middle element equals target
    // If found, return the index immediately
    // Example: arr[2] = 8, x = 8 → 8 === 8? Yes → return 2
    if(arr[mid] === x){
      return mid;  // Found! Return index
    }
    
    // Step 1.3: If middle element is greater than target
    // Since array is sorted, target must be in left half
    // Eliminate right half: high = mid - 1
    // Example: arr[2] = 8, x = 3 → 8 > 3? Yes
    //   → Search left: high = 2 - 1 = 1
    else if(arr[mid] > x){
      high = mid - 1;  // Search left half
    }
    
    // Step 1.4: If middle element is less than target
    // Since array is sorted, target must be in right half
    // Eliminate left half: low = mid + 1
    // Example: arr[1] = 3, x = 8 → 3 < 8? Yes
    //   → Search right: low = 1 + 1 = 2
    else{
      low = mid + 1;  // Search right half
    }
  }
  
  // Step 2: Target not found
  // If we've exhausted the search space (low > high), target is not in array
  // Return -1 to indicate not found
  // Example: Searched entire range but didn't find x → return -1
  return -1;
}

// Step-by-step execution example 1:
// Input: arr = [2, 3, 8, 11], x = 11
//
// Call: isPair([2, 3, 8, 11], 11)
//   Step 1: n = 4
//   
//   Step 2: Outer Loop (i = 0 to 3)
//     Iteration 1: i = 0
//       arr[i] = arr[0] = 2
//       Complement = x - arr[i] = 11 - 2 = 9
//       Search range: [i+1, n-1] = [1, 3]
//       Call: binarySearch([2, 3, 8, 11], 1, 3, 9)
//       
//       Binary Search for 9 in arr[1...3] = [3, 8, 11]:
//         Iteration 1:
//           low=1, high=3, mid = (1+3)/2 = 2
//           arr[mid] = arr[2] = 8
//           Check: 8 === 9? No
//           Check: 8 > 9? No
//           Check: 8 < 9? Yes
//           → Search right: low = 2 + 1 = 3
//         
//         Iteration 2:
//           low=3, high=3, mid = (3+3)/2 = 3
//           arr[mid] = arr[3] = 11
//           Check: 11 === 9? No
//           Check: 11 > 9? Yes
//           → Search left: high = 3 - 1 = 2
//         
//         Iteration 3:
//           low=3, high=2
//           Check: low <= high? (3 <= 2)? No
//           Exit loop
//         Return: -1 (not found)
//       
//       j = -1
//       Check: j !== -1? (-1 !== -1)? No
//       Continue to next iteration
//     
//     Iteration 2: i = 1
//       arr[i] = arr[1] = 3
//       Complement = x - arr[i] = 11 - 3 = 8
//       Search range: [i+1, n-1] = [2, 3]
//       Call: binarySearch([2, 3, 8, 11], 2, 3, 8)
//       
//       Binary Search for 8 in arr[2...3] = [8, 11]:
//         Iteration 1:
//           low=2, high=3, mid = (2+3)/2 = 2
//           arr[mid] = arr[2] = 8
//           Check: 8 === 8? Yes ✅
//           Return: 2
//       
//       j = 2
//       Check: j !== -1? (2 !== -1)? Yes ✅
//       Return: true
//   
//   Result: true (Pair found: arr[1] + arr[2] = 3 + 8 = 11)

// Step-by-step execution example 2:
// Input: arr = [2, 3, 8, 11], x = 1
//
// Call: isPair([2, 3, 8, 11], 1)
//   Step 1: n = 4
//   
//   Step 2: Outer Loop (i = 0 to 3)
//     Iteration 1: i = 0
//       arr[0] = 2, complement = 1 - 2 = -1
//       Search for -1 in [3, 8, 11]
//       Binary search: not found → return -1
//       j = -1, continue
//     
//     Iteration 2: i = 1
//       arr[1] = 3, complement = 1 - 3 = -2
//       Search for -2 in [8, 11]
//       Binary search: not found → return -1
//       j = -1, continue
//     
//     Iteration 3: i = 2
//       arr[2] = 8, complement = 1 - 8 = -7
//       Search for -7 in [11]
//       Binary search: not found → return -1
//       j = -1, continue
//     
//     Iteration 4: i = 3
//       arr[3] = 11, complement = 1 - 11 = -10
//       Search range: [4, 3] (invalid, low > high)
//       Binary search: immediately returns -1
//       j = -1, continue
//   
//   Step 3: No pair found
//     Return: false
//   
//   Result: false (No pair sums to 1)

// Step-by-step execution example 3:
// Input: arr = [1, 2, 3, 4, 5], x = 9
//
// Call: isPair([1, 2, 3, 4, 5], 9)
//   Step 1: n = 5
//   
//   Step 2: Outer Loop (i = 0 to 4)
//     Iteration 1: i = 0
//       arr[0] = 1, complement = 9 - 1 = 8
//       Search for 8 in [2, 3, 4, 5]
//       Binary search: not found → return -1
//       continue
//     
//     Iteration 2: i = 1
//       arr[1] = 2, complement = 9 - 2 = 7
//       Search for 7 in [3, 4, 5]
//       Binary search: not found → return -1
//       continue
//     
//     Iteration 3: i = 2
//       arr[2] = 3, complement = 9 - 3 = 6
//       Search for 6 in [4, 5]
//       Binary search: not found → return -1
//       continue
//     
//     Iteration 4: i = 3
//       arr[3] = 4, complement = 9 - 4 = 5
//       Search for 5 in [5]
//       Binary search:
//         low=4, high=4, mid=4
//         arr[4] = 5 === 5? Yes ✅
//         Return: 4
//       j = 4
//       Check: j !== -1? Yes ✅
//       Return: true
//   
//   Result: true (Pair found: arr[3] + arr[4] = 4 + 5 = 9)

// Step-by-step execution example 4:
// Input: arr = [1, 2], x = 3
//
// Call: isPair([1, 2], 3)
//   Step 1: n = 2
//   
//   Step 2: Outer Loop (i = 0 to 1)
//     Iteration 1: i = 0
//       arr[0] = 1, complement = 3 - 1 = 2
//       Search range: [1, 1]
//       Call: binarySearch([1, 2], 1, 1, 2)
//         low=1, high=1, mid=1
//         arr[1] = 2 === 2? Yes ✅
//         Return: 1
//       j = 1
//       Check: j !== -1? Yes ✅
//       Return: true
//   
//   Result: true (Pair found: arr[0] + arr[1] = 1 + 2 = 3)

// WHY THIS APPROACH IS BETTER:
// 
// 1. TIME COMPLEXITY: O(n log n) vs O(n²)
//    - Naive: O(n²) - checks all pairs with nested loops
//    - This: O(n log n) - uses binary search for each element
//    - Example: n=1000
//      Naive: ~500,000 comparisons
//      This: ~10,000 comparisons (1000 × log₂(1000) ≈ 1000 × 10)
//      That's 50x faster!
// 
// 2. USES SORTED PROPERTY:
//    - Takes advantage of sorted array
//    - Binary search only works because array is sorted
//    - Efficiently finds complement in O(log n) time
// 
// 3. STILL NOT OPTIMAL:
//    - Two-pointer technique: O(n) - even better!
//    - But this is a good middle ground
//    - Easier to understand than two-pointer for some

// TIME COMPLEXITY ANALYSIS:
// 
// Outer Loop:
//   - Iterates n times (once for each element)
//   - Time: O(n)
// 
// Binary Search (per iteration):
//   - Searches in remaining array of size (n-i-1)
//   - In worst case, searches ~log₂(n) elements
//   - Time: O(log n)
// 
// Total:
//   - n iterations × O(log n) per iteration = O(n log n)
// 
// Best Case: O(log n)
//   - Pair found at first element
//   - Example: arr = [1, 2, 3], x = 3 → found immediately
// 
// Average Case: O(n log n)
//   - Pair found after checking ~n/2 elements on average
//   - Each binary search takes O(log n)
// 
// Worst Case: O(n log n)
//   - Pair not found or found at last element
//   - Need to check all n elements, each with O(log n) search
// 
// Overall: O(n log n) - linearithmic time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using variables: n, i, j, low, high, mid
//   - No recursion (iterative binary search)
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// COMPARISON OF ALL APPROACHES:
// 
// 1. Naive (Nested Loops):
//    - Time: O(n²)
//    - Space: O(1)
//    - Simple but slow
//    - Example: n=1000 → ~500,000 comparisons
// 
// 2. Binary Search (This Solution):
//    - Time: O(n log n)
//    - Space: O(1)
//    - Better than naive
//    - Example: n=1000 → ~10,000 comparisons
// 
// 3. Two-Pointer (Optimal):
//    - Time: O(n)
//    - Space: O(1)
//    - Best possible
//    - Example: n=1000 → ~1,000 comparisons
// 
// Speed Comparison (n=1000):
//   - Naive: 500,000 comparisons
//   - Binary Search: 10,000 comparisons (50x faster)
//   - Two-Pointer: 1,000 comparisons (500x faster than naive, 10x faster than binary search)

// KEY INSIGHT: Why Binary Search Works
// 
// The key is that for each element arr[i], we need to find arr[j] such that:
//   arr[i] + arr[j] === x
// 
// This means:
//   arr[j] === x - arr[i]
// 
// So we're searching for the value (x - arr[i]) in the sorted array.
// Since the array is sorted, we can use binary search to find it efficiently!
// 
// Example: arr = [2, 3, 8, 11], x = 11
//   For arr[1] = 3:
//     Need to find: 11 - 3 = 8
//     Search for 8 in sorted array [8, 11]
//     Binary search finds it at index 2 ✅
//     → Pair: arr[1] + arr[2] = 3 + 8 = 11

// EDGE CASES HANDLED:
// 
// 1. Empty array: []
//   - n=0, outer loop doesn't execute → return false
// 
// 2. Single element: [5]
//   - n=1, i=0: search range [1, 0] (invalid)
//   - binarySearch immediately returns -1 → return false
// 
// 3. Two elements: [1, 2]
//   - i=0: search for (x-1) in [2]
//   - Binary search works correctly
// 
// 4. No pair exists: [1, 2, 3], x = 10
//   - Check all elements, none has complement → return false
// 
// 5. Pair at end: [1, 2, 3, 4, 5], x = 9
//   - i=3: search for 5 in [5] → found → return true

// POTENTIAL ISSUES AND FIXES:
// 
// ✅ No issues found! The code is correct.
// 
// The implementation correctly:
// 1. Iterates through each element
// 2. Searches for complement using binary search
// 3. Handles edge cases (empty array, single element, etc.)
// 4. Returns correct results
// 
// The only "issue" is that it's not the most optimal (O(n log n) vs O(n)),
// but that's by design - it's the "better" approach, not the "optimal" approach.

// CONCLUSION:
// 
// This is a BETTER solution than naive, but not optimal.
// 
// ✅ Correct: Finds pair if it exists
// ✅ Efficient: O(n log n) - much better than O(n²)
// ✅ Uses sorted property: Binary search works because array is sorted
// ⚠️ Not optimal: Two-pointer technique is O(n) - even better
// 
// For best performance, use Two-Pointer Technique: O(n) time!

let arr = [2, 3, 8, 11];
let x = 1;
console.log(isPair(arr, x)); // Expected output: false (no pair sums to 1)