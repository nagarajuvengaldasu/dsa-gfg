/**
 * REPEATING ELEMENT - SUPER NAIVE SOLUTION
 * Problem: Find a repeating element in an array
 * 
 * What is the problem?
 * - Given an array, find any element that appears more than once
 * - Return the first repeating element found
 * - Return -1 if no repeating element exists
 * 
 * Approach 1: Nested Loops (Super Naive) - O(n²)
 * - Use two nested loops to compare each element with all others
 * - Outer loop: iterate through each element
 * - Inner loop: compare with all remaining elements
 * - Return first duplicate found
 * 
 * Time Complexity: O(n²) where n is the length of array
 *   - Outer loop: (n-1) iterations
 *   - Inner loop: (n-1) + (n-2) + ... + 1 = n(n-1)/2 iterations
 *   - Total: O(n²)
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS SUPER NAIVE:
 * - We check all possible pairs, even though we could use better approaches
 * - We can do better with sorting in O(n log n) time
 * - We can do even better with hash set in O(n) time
 */

// SUPER NAIVE APPROACH: O(n²) - Nested Loops
function repeatingElement(arr){
  // Step 1: Get the length of the array
  // This tells us how many elements we need to check
  // Example: arr = [0, 2, 1, 3, 2, 2] → n = 6
  let n = arr.length;
  
  // Step 2: Outer Loop - First element to compare
  // Iterate through each element as the first element to check
  // We only go up to n-1 because we compare with remaining elements
  // Example: For arr = [0, 2, 1, 3, 2, 2], we check i = 0, 1, 2, 3, 4
  //   (not 5, as there are no elements after index 5 to compare)
  for(let i = 0; i < n - 1; i++){
    // Step 2.1: Inner Loop - Second element to compare
    // For each element arr[i], compare with all elements after it
    // We start from j = i+1 to avoid comparing with itself and avoid duplicate comparisons
    // Example: For i=0, we check j = 1, 2, 3, 4, 5
    //          For i=1, we check j = 2, 3, 4, 5
    for(let j = i + 1; j < n; j++){
      // Step 2.1.1: Check if current pair has duplicate
      // If arr[i] === arr[j], we found a repeating element!
      // Return it immediately (first repeating element found)
      // Example: i=1, j=4: arr[1]=2, arr[4]=2
      //   2 === 2? Yes ✅ → return 2
      if(arr[i] === arr[j]){
        return arr[i];  // Found repeating element! Return it immediately
      }
      // Step 2.1.2: If not equal, continue to next comparison
      // Loop continues to check arr[i] with arr[j+1]
    }
    // Step 2.2: After checking all elements after arr[i],
    // move to next element (i+1)
    // Loop continues to check if arr[i+1] has duplicates
  }
  
  // Step 3: No repeating element found
  // If we've checked all possible pairs and found no duplicates, return -1
  // This means all elements are unique
  // Example: arr = [0, 1, 2, 3, 4, 5] → no duplicates → return -1
  return -1;
}

// Step-by-step execution example 1 (Super Naive):
// Input: arr = [0, 2, 1, 3, 2, 2]
//
// Call: repeatingElement([0, 2, 1, 3, 2, 2])
//   Step 1: n = 6
//   
//   Step 2: Outer Loop (i = 0 to 4, since n-1 = 5)
//     Iteration 1: i = 0
//       arr[i] = arr[0] = 0
//       
//       Inner Loop (j = 1 to 5):
//         Iteration 1.1: j = 1
//           Check: arr[0] === arr[1]?
//           arr[0] = 0, arr[1] = 2
//           0 === 2? No
//           Continue
//         
//         Iteration 1.2: j = 2
//           Check: arr[0] === arr[2]?
//           0 === 1? No
//           Continue
//         
//         Iteration 1.3: j = 3
//           Check: arr[0] === arr[3]?
//           0 === 3? No
//           Continue
//         
//         Iteration 1.4: j = 4
//           Check: arr[0] === arr[4]?
//           0 === 2? No
//           Continue
//         
//         Iteration 1.5: j = 5
//           Check: arr[0] === arr[5]?
//           0 === 2? No
//           Continue
//       
//       Inner loop ends (j = 6, which is >= n = 6)
//     
//     Iteration 2: i = 1
//       arr[i] = arr[1] = 2
//       
//       Inner Loop (j = 2 to 5):
//         Iteration 2.1: j = 2
//           Check: arr[1] === arr[2]?
//           arr[1] = 2, arr[2] = 1
//           2 === 1? No
//           Continue
//         
//         Iteration 2.2: j = 3
//           Check: arr[1] === arr[3]?
//           2 === 3? No
//           Continue
//         
//         Iteration 2.3: j = 4
//           Check: arr[1] === arr[4]?
//           arr[1] = 2, arr[4] = 2
//           2 === 2? Yes ✅
//           Return: 2
//   
//   Result: 2 (Repeating element found: arr[1] and arr[4] both equal 2)

// Step-by-step execution example 2 (Super Naive):
// Input: arr = [1, 2, 3, 4, 5] (no duplicates)
//
// Call: repeatingElement([1, 2, 3, 4, 5])
//   Step 1: n = 5
//   
//   Step 2: Outer Loop (i = 0 to 3)
//     Iteration 1: i = 0
//       Inner Loop (j = 1 to 4):
//         Check all pairs with arr[0]=1
//         None equal → continue
//     
//     Iteration 2: i = 1
//       Inner Loop (j = 2 to 4):
//         Check all pairs with arr[1]=2
//         None equal → continue
//     
//     Iteration 3: i = 2
//       Inner Loop (j = 3 to 4):
//         Check all pairs with arr[2]=3
//         None equal → continue
//     
//     Iteration 4: i = 3
//       Inner Loop (j = 4):
//         Check: arr[3] === arr[4]?
//         4 === 5? No
//         Continue
//   
//   Step 3: No repeating element found
//     Return: -1
//   
//   Result: -1 (No repeating element)

/**
 * REPEATING ELEMENT - NAIVE SOLUTION (SORTING)
 * Problem: Find a repeating element in an array
 * 
 * Approach 2: Sorting (Naive) - O(n log n)
 * - Sort the array first
 * - After sorting, duplicates will be adjacent
 * - Check adjacent elements to find duplicates
 * 
 * Time Complexity: O(n log n) where n is the length of array
 *   - Sorting: O(n log n)
 *   - Linear scan: O(n)
 *   - Total: O(n log n)
 * Space Complexity: O(1) - sorting modifies array in-place (or O(n) if creates new array)
 * 
 * WHY THIS IS NAIVE:
 * - Modifies the original array (or creates a copy)
 * - Sorting takes O(n log n) time
 * - We can do better with hash set in O(n) time
 * 
 * NOTE: This approach MODIFIES the original array!
 */

// NAIVE APPROACH: O(n log n) - Sorting
function repeatingElement1(arr1){
  // Step 1: Sort the array
  // After sorting, all duplicate elements will be adjacent to each other
  // Example: arr1 = [0, 2, 1, 3, 2, 2]
  //   After sorting: [0, 1, 2, 2, 2, 3]
  //   Duplicates (2, 2, 2) are now adjacent!
  // 
  // Note: sort() modifies the original array!
  // If you need to preserve original array, use: arr1.slice().sort(...)
  let result = arr1.sort((a, b) => a - b);
  
  // Step 2: Linear Scan - Check adjacent elements
  // After sorting, we only need to check adjacent elements
  // If arr[i] === arr[i+1], we found a duplicate!
  // Example: result = [0, 1, 2, 2, 2, 3]
  //   Check: result[2] === result[3]? 2 === 2? Yes ✅
  // We only go up to result.length-1 to avoid index out of bounds
  for(let i = 0; i < result.length - 1; i++){
    // Step 2.1: Check if current element equals next element
    // If they're equal, we found a repeating element!
    // Return it immediately
    // Example: i=2, result[2]=2, result[3]=2
    //   2 === 2? Yes ✅ → return 2
    if(result[i] === result[i + 1]){
      return result[i];  // Found repeating element! Return it immediately
    }
    // Step 2.2: If not equal, continue to next pair
    // Loop continues to check result[i+1] with result[i+2]
  }
  
  // Step 3: No repeating element found
  // If we've checked all adjacent pairs and found no duplicates, return -1
  // This means all elements are unique
  // Example: result = [0, 1, 2, 3, 4, 5] → no adjacent duplicates → return -1
  return -1;
}

// Step-by-step execution example 1 (Naive - Sorting):
// Input: arr1 = [0, 2, 1, 3, 2, 2]
//
// Call: repeatingElement1([0, 2, 1, 3, 2, 2])
//   Step 1: Sort the array
//     arr1.sort((a, b) => a - b)
//     Original: [0, 2, 1, 3, 2, 2]
//     Sorted: [0, 1, 2, 2, 2, 3]
//     result = [0, 1, 2, 2, 2, 3]
//   
//   Step 2: Linear Scan (i = 0 to 4, since length-1 = 5)
//     Iteration 1: i = 0
//       Check: result[0] === result[1]?
//       result[0] = 0, result[1] = 1
//       0 === 1? No
//       Continue
//     
//     Iteration 2: i = 1
//       Check: result[1] === result[2]?
//       result[1] = 1, result[2] = 2
//       1 === 2? No
//       Continue
//     
//     Iteration 3: i = 2
//       Check: result[2] === result[3]?
//       result[2] = 2, result[3] = 2
//       2 === 2? Yes ✅
//       Return: 2
//   
//   Result: 2 (Repeating element found: 2 appears multiple times)

// Step-by-step execution example 2 (Naive - Sorting):
// Input: arr1 = [1, 2, 3, 4, 5] (no duplicates)
//
// Call: repeatingElement1([1, 2, 3, 4, 5])
//   Step 1: Sort the array
//     Already sorted: [1, 2, 3, 4, 5]
//     result = [1, 2, 3, 4, 5]
//   
//   Step 2: Linear Scan (i = 0 to 3)
//     Iteration 1: i = 0
//       Check: result[0] === result[1]? 1 === 2? No
//       Continue
//     
//     Iteration 2: i = 1
//       Check: result[1] === result[2]? 2 === 3? No
//       Continue
//     
//     Iteration 3: i = 2
//       Check: result[2] === result[3]? 3 === 4? No
//       Continue
//     
//     Iteration 4: i = 3
//       Check: result[3] === result[4]? 4 === 5? No
//       Continue
//   
//   Step 3: No repeating element found
//     Return: -1
//   
//   Result: -1 (No repeating element)

// WHY THESE APPROACHES ARE NAIVE:
// 
// SUPER NAIVE (Nested Loops - O(n²)):
// 1. TIME COMPLEXITY: O(n²)
//    - Checks all possible pairs
//    - For array of size n, we check n(n-1)/2 pairs
//    - Example: n=1000 → need to check ~500,000 pairs!
// 
// 2. IGNORES EFFICIENT DATA STRUCTURES:
//    - Doesn't use hash set or hash map
//    - Could use Set to find duplicates in O(n) time
// 
// 3. BETTER APPROACH EXISTS:
//    - Hash Set: O(n) time - much faster!
//    - Example: n=1000 → only need 1000 operations
// 
// NAIVE (Sorting - O(n log n)):
// 1. TIME COMPLEXITY: O(n log n)
//    - Sorting takes O(n log n) time
//    - Linear scan takes O(n) time
//    - Total: O(n log n) - better than O(n²) but not optimal
// 
// 2. MODIFIES ARRAY:
//    - sort() modifies the original array
//    - If you need original array, must create a copy first
//    - Extra space needed for copy: O(n)
// 
// 3. BETTER APPROACH EXISTS:
//    - Hash Set: O(n) time - even faster!
//    - Doesn't modify array
//    - Example: n=1000 → only need 1000 operations vs ~10,000 for sorting

// TIME COMPLEXITY ANALYSIS:
// 
// SUPER NAIVE (Nested Loops):
//   Total pairs checked: n(n-1)/2
//   Best Case: O(1) - duplicate found at first comparison
//   Average Case: O(n²) - duplicate found after checking ~n²/2 pairs
//   Worst Case: O(n²) - no duplicate or found at last check
//   Overall: O(n²) - quadratic time complexity
// 
// NAIVE (Sorting):
//   Sorting: O(n log n)
//   Linear scan: O(n)
//   Best Case: O(n log n) - sorting always takes O(n log n)
//   Average Case: O(n log n)
//   Worst Case: O(n log n)
//   Overall: O(n log n) - linearithmic time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// SUPER NAIVE:
//   Space: O(1) - Constant space
//   - Only using variables: n, i, j
//   - No extra arrays or data structures
// 
// NAIVE (Sorting):
//   Space: O(1) if sort modifies in-place, O(n) if creates copy
//   - sort() in JavaScript typically modifies array in-place
//   - But if you need to preserve original: O(n) for copy

// COMPARISON OF ALL APPROACHES:
// 
// 1. Super Naive (Nested Loops - This Solution):
//    - Time: O(n²)
//    - Space: O(1)
//    - Simple but very slow
//    - Example: n=1000 → ~500,000 comparisons
// 
// 2. Naive (Sorting - This Solution):
//    - Time: O(n log n)
//    - Space: O(1) or O(n)
//    - Better than super naive
//    - Modifies array
//    - Example: n=1000 → ~10,000 operations
// 
// 3. Optimal (Hash Set):
//    - Time: O(n)
//    - Space: O(n)
//    - Best possible time complexity
//    - Doesn't modify array
//    - Example: n=1000 → ~1,000 operations
// 
// Speed Comparison (n=1000):
//   - Super Naive: 500,000 comparisons
//   - Naive (Sorting): 10,000 operations
//   - Optimal (Hash Set): 1,000 operations
//   - Hash Set is 500x faster than super naive, 10x faster than sorting!

// HOW HASH SET APPROACH WORKS (Optimal - O(n)):
// 
// Algorithm:
//   let seen = new Set();
//   for(let i = 0; i < arr.length; i++){
//     if(seen.has(arr[i])){
//       return arr[i];  // Found duplicate!
//     }
//     seen.add(arr[i]);
//   }
//   return -1;
// 
// Why it works:
//   - Use Set to track seen elements
//   - If element already in Set → it's a duplicate
//   - Set operations (has, add) are O(1) on average
//   - Total: O(n) - optimal!
// 
// Example: arr = [0, 2, 1, 3, 2, 2]
//   i=0: seen={}, add 0 → seen={0}
//   i=1: seen={0}, add 2 → seen={0,2}
//   i=2: seen={0,2}, add 1 → seen={0,2,1}
//   i=3: seen={0,2,1}, add 3 → seen={0,2,1,3}
//   i=4: seen={0,2,1,3}, 2 already in seen? Yes ✅ → return 2
// 
// Time: O(n) - much better than O(n²) or O(n log n)!

// EDGE CASES HANDLED:
// 
// 1. Empty array: []
//   - Super Naive: n=0, outer loop doesn't execute → return -1
//   - Naive: sorted=[], loop doesn't execute → return -1
// 
// 2. Single element: [5]
//   - Super Naive: n=1, outer loop: i < n-1? (0 < 0)? No → return -1
//   - Naive: sorted=[5], loop: i < length-1? (0 < 0)? No → return -1
// 
// 3. Two elements: [1, 1]
//   - Super Naive: i=0, j=1: 1 === 1? Yes → return 1
//   - Naive: sorted=[1,1], i=0: 1 === 1? Yes → return 1
// 
// 4. No duplicates: [1, 2, 3, 4, 5]
//   - Super Naive: Check all pairs, none equal → return -1
//   - Naive: Check all adjacent pairs, none equal → return -1
// 
// 5. Multiple duplicates: [0, 2, 1, 3, 2, 2]
//   - Super Naive: Finds first duplicate (2 at indices 1 and 4) → return 2
//   - Naive: Finds first duplicate after sorting (2 at indices 2 and 3) → return 2

// CONCLUSION:
// 
// SUPER NAIVE (Nested Loops):
//   ✅ Correct: Finds repeating element if it exists
//   ✅ Simple: Easy to understand
//   ❌ Slow: O(n²) time complexity
//   ❌ Inefficient: Checks all pairs
// 
// NAIVE (Sorting):
//   ✅ Correct: Finds repeating element if it exists
//   ✅ Better: O(n log n) - faster than super naive
//   ⚠️ Modifies array: Original array is changed
//   ❌ Not optimal: Hash Set is O(n) - even faster
// 
// For best performance, use Hash Set: O(n) time!

let arr = [0, 2, 1, 3, 2, 2];
console.log(repeatingElement(arr)); // Expected output: 2 (first repeating element found)

let arr1 = [0, 2, 1, 3, 2, 2];
console.log(repeatingElement1(arr1)); // Expected output: 2 (first repeating element found after sorting)