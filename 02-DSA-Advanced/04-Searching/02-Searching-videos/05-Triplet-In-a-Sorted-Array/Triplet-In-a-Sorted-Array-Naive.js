/**
 * TRIPLET IN A SORTED ARRAY - NAIVE SOLUTION
 * Problem: Check if there exists a triplet of elements in a sorted array that sum to x
 * 
 * What is the problem?
 * - Given a sorted array and a target sum x
 * - Find if there exists three elements arr[i], arr[j], and arr[k] such that
 *   arr[i] + arr[j] + arr[k] === x
 * - Return true if such triplet exists, false otherwise
 * 
 * Approach: Three Nested Loops (Naive)
 * - Use three nested loops to check all possible triplets
 * - Outer loop: iterate through each element as first element of triplet
 * - Middle loop: iterate through remaining elements as second element
 * - Inner loop: iterate through remaining elements as third element
 * - Check if sum equals x
 * 
 * Time Complexity: O(n³) where n is the length of array
 *   - Outer loop: (n-2) iterations
 *   - Middle loop: (n-1) + (n-2) + ... + 1 iterations
 *   - Inner loop: (n-2) + (n-3) + ... + 1 iterations
 *   - Total: O(n³)
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS NAIVE:
 * - We check all possible triplets, even though array is sorted
 * - We can do better with two-pointer technique in O(n²) time
 * - But this solution is simple and easy to understand
 */

function triplet(arr, x){
  // Step 1: Get the length of the array
  // This tells us how many elements we need to check
  // Example: arr = [2, 3, 4, 8, 9, 20, 40] → n = 7
  let n = arr.length;
  
  // Step 2: Outer Loop - First element of the triplet
  // Iterate through each element as the first element
  // We only go up to n-2 because we need at least 2 more elements for triplet
  // Example: For arr = [2, 3, 4, 8, 9, 20, 40], we check i = 0, 1, 2, 3, 4
  //   (not 5 or 6, as we need at least 2 more elements)
  for(let i = 0; i < n - 2; i++){
    // Step 2.1: Middle Loop - Second element of the triplet
    // For each first element arr[i], iterate through remaining elements as second element
    // We start from j = i+1 to avoid checking same triplet multiple times
    // We only go up to n-1 because we need at least 1 more element for third element
    // Example: For i=0, we check j = 1, 2, 3, 4, 5
    //          For i=1, we check j = 2, 3, 4, 5
    for(let j = i + 1; j < n - 1; j++){
      // Step 2.1.1: Inner Loop - Third element of the triplet
      // For each pair (arr[i], arr[j]), iterate through remaining elements as third element
      // We start from k = j+1 to avoid checking same triplet multiple times
      // Example: For i=0, j=1, we check k = 2, 3, 4, 5, 6
      //          For i=0, j=2, we check k = 3, 4, 5, 6
      for(let k = j + 1; k < n; k++){
        // Step 2.1.1.1: Check if current triplet sums to x
        // If arr[i] + arr[j] + arr[k] === x, we found a triplet!
        // Return true immediately
        // Example: i=0, j=1, k=2: arr[0]=2, arr[1]=3, arr[2]=4
        //   2 + 3 + 4 = 9 === x? Check if x=9
        if(arr[i] + arr[j] + arr[k] === x){
          return true;  // Found triplet! Return true immediately
        }
        // Step 2.1.1.2: If sum doesn't equal x, continue to next triplet
        // Loop continues to check arr[i] + arr[j] + arr[k+1]
      }
      // Step 2.1.2: After checking all triplets with (arr[i], arr[j]),
      // move to next second element (j+1)
      // Loop continues to check triplets starting with (arr[i], arr[j+1])
    }
    // Step 2.2: After checking all triplets with arr[i] as first element,
    // move to next first element (i+1)
    // Loop continues to check triplets starting with arr[i+1]
  }
  
  // Step 3: No triplet found
  // If we've checked all possible triplets and none sum to x, return false
  // This means no such triplet exists in the array
  // Example: arr = [2, 3, 4, 8, 9, 20, 40], x = 100
  //   Checked all triplets, none sum to 100 → return false
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
//       
//       Middle Loop (j = 1 to 5, since n-1 = 6):
//         Iteration 1.1: j = 1
//           arr[j] = arr[1] = 3
//           
//           Inner Loop (k = 2 to 6):
//             Iteration 1.1.1: k = 2
//               Check: arr[0] + arr[1] + arr[2] === x?
//               arr[0] = 2, arr[1] = 3, arr[2] = 4, x = 32
//               2 + 3 + 4 = 9 === 32? No
//               Continue
//             
//             Iteration 1.1.2: k = 3
//               Check: arr[0] + arr[1] + arr[3] === x?
//               2 + 3 + 8 = 13 === 32? No
//               Continue
//             
//             Iteration 1.1.3: k = 4
//               Check: arr[0] + arr[1] + arr[4] === x?
//               2 + 3 + 9 = 14 === 32? No
//               Continue
//             
//             Iteration 1.1.4: k = 5
//               Check: arr[0] + arr[1] + arr[5] === x?
//               2 + 3 + 20 = 25 === 32? No
//               Continue
//             
//             Iteration 1.1.5: k = 6
//               Check: arr[0] + arr[1] + arr[6] === x?
//               2 + 3 + 40 = 45 === 32? No
//               Continue
//           
//           Inner loop ends (k = 7, which is >= n = 7)
//         
//         Iteration 1.2: j = 2
//           arr[j] = arr[2] = 4
//           
//           Inner Loop (k = 3 to 6):
//             Iteration 1.2.1: k = 3
//               Check: arr[0] + arr[2] + arr[3] === x?
//               2 + 4 + 8 = 14 === 32? No
//               Continue
//             
//             Iteration 1.2.2: k = 4
//               Check: arr[0] + arr[2] + arr[4] === x?
//               2 + 4 + 9 = 15 === 32? No
//               Continue
//             
//             Iteration 1.2.3: k = 5
//               Check: arr[0] + arr[2] + arr[5] === x?
//               2 + 4 + 20 = 26 === 32? No
//               Continue
//             
//             Iteration 1.2.4: k = 6
//               Check: arr[0] + arr[2] + arr[6] === x?
//               2 + 4 + 40 = 46 === 32? No
//               Continue
//           
//           Inner loop ends
//         
//         Iteration 1.3: j = 3
//           arr[j] = arr[3] = 8
//           
//           Inner Loop (k = 4 to 6):
//             Iteration 1.3.1: k = 4
//               Check: arr[0] + arr[3] + arr[4] === x?
//               2 + 8 + 9 = 19 === 32? No
//               Continue
//             
//             Iteration 1.3.2: k = 5
//               Check: arr[0] + arr[3] + arr[5] === x?
//               2 + 8 + 20 = 30 === 32? No
//               Continue
//             
//             Iteration 1.3.3: k = 6
//               Check: arr[0] + arr[3] + arr[6] === x?
//               2 + 8 + 40 = 50 === 32? No
//               Continue
//           
//           Inner loop ends
//         
//         Iteration 1.4: j = 4
//           arr[j] = arr[4] = 9
//           
//           Inner Loop (k = 5 to 6):
//             Iteration 1.4.1: k = 5
//               Check: arr[0] + arr[4] + arr[5] === x?
//               2 + 9 + 20 = 31 === 32? No
//               Continue
//             
//             Iteration 1.4.2: k = 6
//               Check: arr[0] + arr[4] + arr[6] === x?
//               2 + 9 + 40 = 51 === 32? No
//               Continue
//           
//           Inner loop ends
//         
//         Iteration 1.5: j = 5
//           arr[j] = arr[5] = 20
//           
//           Inner Loop (k = 6):
//             Iteration 1.5.1: k = 6
//               Check: arr[0] + arr[5] + arr[6] === x?
//               2 + 20 + 40 = 62 === 32? No
//               Continue
//           
//           Inner loop ends
//       
//       Middle loop ends (j = 6, which is >= n-1 = 6)
//     
//     Iteration 2: i = 1
//       arr[i] = arr[1] = 3
//       
//       Middle Loop (j = 2 to 5):
//         Iteration 2.1: j = 2
//           arr[j] = arr[2] = 4
//           
//           Inner Loop (k = 3 to 6):
//             Iteration 2.1.1: k = 3
//               Check: arr[1] + arr[2] + arr[3] === x?
//               3 + 4 + 8 = 15 === 32? No
//               Continue
//             
//             Iteration 2.1.2: k = 4
//               Check: arr[1] + arr[2] + arr[4] === x?
//               3 + 4 + 9 = 16 === 32? No
//               Continue
//             
//             Iteration 2.1.3: k = 5
//               Check: arr[1] + arr[2] + arr[5] === x?
//               3 + 4 + 20 = 27 === 32? No
//               Continue
//             
//             Iteration 2.1.4: k = 6
//               Check: arr[1] + arr[2] + arr[6] === x?
//               3 + 4 + 40 = 47 === 32? No
//               Continue
//           
//           Inner loop ends
//         
//         Iteration 2.2: j = 3
//           arr[j] = arr[3] = 8
//           
//           Inner Loop (k = 4 to 6):
//             Iteration 2.2.1: k = 4
//               Check: arr[1] + arr[3] + arr[4] === x?
//               3 + 8 + 9 = 20 === 32? No
//               Continue
//             
//             Iteration 2.2.2: k = 5
//               Check: arr[1] + arr[3] + arr[5] === x?
//               3 + 8 + 20 = 31 === 32? No
//               Continue
//             
//             Iteration 2.2.3: k = 6
//               Check: arr[1] + arr[3] + arr[6] === x?
//               3 + 8 + 40 = 51 === 32? No
//               Continue
//           
//           Inner loop ends
//         
//         Iteration 2.3: j = 4
//           arr[j] = arr[4] = 9
//           
//           Inner Loop (k = 5 to 6):
//             Iteration 2.3.1: k = 5
//               Check: arr[1] + arr[4] + arr[5] === x?
//               3 + 9 + 20 = 32 === 32? Yes ✅
//               Return: true
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
//       Middle Loop (j = 1 to 5):
//         Inner Loop checks all triplets starting with arr[0]=2
//         None sum to 100
//     
//     Iteration 2: i = 1
//       Middle Loop (j = 2 to 5):
//         Inner Loop checks all triplets starting with arr[1]=3
//         None sum to 100
//     
//     Iteration 3: i = 2
//       Middle Loop (j = 3 to 5):
//         Inner Loop checks all triplets starting with arr[2]=4
//         None sum to 100
//     
//     Iteration 4: i = 3
//       Middle Loop (j = 4 to 5):
//         Inner Loop checks all triplets starting with arr[3]=8
//         None sum to 100
//     
//     Iteration 5: i = 4
//       Middle Loop (j = 5):
//         Inner Loop (k = 6):
//           Check: arr[4] + arr[5] + arr[6] = 9 + 20 + 40 = 69 === 100? No
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
//   Step 2: Outer Loop (i = 0 to 2, since n-2 = 3)
//     Iteration 1: i = 0
//       Middle Loop (j = 1 to 3):
//         Inner Loop checks triplets starting with arr[0]=1
//         None sum to 12
//     
//     Iteration 2: i = 1
//       Middle Loop (j = 2 to 3):
//         Inner Loop checks triplets starting with arr[1]=2
//         None sum to 12
//     
//     Iteration 3: i = 2
//       Middle Loop (j = 3):
//         Inner Loop (k = 4):
//           Check: arr[2] + arr[3] + arr[4] = 3 + 4 + 5 = 12 === 12? Yes ✅
//           Return: true
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
//       Middle Loop (j = 1, since n-1 = 2):
//         Iteration 1.1: j = 1
//           Inner Loop (k = 2):
//             Iteration 1.1.1: k = 2
//               Check: arr[0] + arr[1] + arr[2] = 1 + 2 + 3 = 6 === 6? Yes ✅
//               Return: true
//   
//   Result: true (Triplet found: arr[0] + arr[1] + arr[2] = 1 + 2 + 3 = 6)

// WHY THIS IS NAIVE:
// 
// 1. THREE NESTED LOOPS: O(n³) time complexity
//    - We check all possible triplets
//    - For array of size n, we check approximately n³/6 triplets
//    - Example: n=100 → need to check ~166,000 triplets!
// 
// 2. IGNORES SORTED PROPERTY:
//    - Even though array is sorted, we check every triplet
//    - We don't take advantage of the sorted order
//    - This is like searching in an unsorted array
// 
// 3. BETTER APPROACH EXISTS:
//    - We can use two-pointer technique
//    - Two-pointer can find triplet in O(n²) time
//    - Example: n=100 → only need ~10,000 comparisons!
// 
// 4. WHEN TO USE NAIVE APPROACH:
//    - When array is very small (n < 10)
//    - When code simplicity is more important than performance
//    - When you need a quick solution and don't want to handle edge cases
// 
// 5. OPTIMAL APPROACH (Two-Pointer Technique):
//    - Fix first element, use two-pointer for remaining two
//    - Time: O(n²) - much faster for large arrays
//    - For each arr[i], find pair in arr[i+1...n-1] that sums to (x - arr[i])

// TIME COMPLEXITY ANALYSIS:
// 
// Total number of triplets checked:
//   For i=0: check triplets with j=1,2,...,n-2 and k=j+1,...,n-1
//   For i=1: check triplets with j=2,3,...,n-2 and k=j+1,...,n-1
//   ...
//   For i=n-3: check triplets with j=n-2 and k=n-1
// 
// Total = C(n,3) = n(n-1)(n-2)/6
// 
// Best Case: O(1)
//   - Triplet found at first check (arr[0] + arr[1] + arr[2] === x)
//   - Example: arr = [1, 2, 3], x = 6 → found immediately
// 
// Average Case: O(n³)
//   - Triplet found after checking ~n³/2 triplets on average
//   - Example: arr = [2, 3, 4, 8, 9, 20, 40], x = 32 → found at iteration 2.3.1
// 
// Worst Case: O(n³)
//   - Triplet not found or found at last check
//   - Need to check all n(n-1)(n-2)/6 triplets
//   - Example: arr = [1, 2, 3, 4, 5], x = 100 → check all triplets
// 
// Overall: O(n³) - cubic time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using a few variables: n, i, j, k
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// COMPARISON WITH OPTIMAL SOLUTION:
// 
// Naive (This Solution):
//   - Time: O(n³)
//   - Space: O(1)
//   - Simple to understand and implement
//   - Checks all triplets sequentially
//   - Example: n=100 → ~166,000 comparisons
// 
// Optimal (Two-Pointer Technique):
//   - Time: O(n²)
//   - Space: O(1)
//   - More complex to implement
//   - Uses sorted property efficiently
//   - Example: n=100 → only ~10,000 comparisons!
// 
// Speed Improvement:
//   - For n=100: Naive needs ~166,000 comparisons
//   - Optimal needs only ~10,000 comparisons
//   - That's 16.6x faster! 🚀

// HOW TWO-POINTER TECHNIQUE WORKS (Optimal Approach):
// 
// Since array is sorted, we can use two-pointer for the last two elements:
// 1. Fix first element arr[i]
// 2. Use two-pointer technique to find pair in arr[i+1...n-1] that sums to (x - arr[i])
// 
// Algorithm:
//   for i = 0 to n-3:
//     target = x - arr[i]
//     left = i+1, right = n-1
//     while left < right:
//       sum = arr[left] + arr[right]
//       if sum === target: return true
//       if sum > target: right--
//       if sum < target: left++
//   return false
// 
// Why it works:
//   - For each arr[i], we need to find arr[j] + arr[k] = x - arr[i]
//   - This is the pair sum problem, which we solve with two-pointer
//   - Since array is sorted, two-pointer works perfectly
// 
// Example: arr = [2, 3, 4, 8, 9, 20, 40], x = 32
//   i=0: target = 32-2 = 30, search for pair summing to 30 in [3,4,8,9,20,40]
//   i=1: target = 32-3 = 29, search for pair summing to 29 in [4,8,9,20,40]
//     left=2, right=6: 4+40=44 > 29 → right=5
//     left=2, right=5: 4+20=24 < 29 → left=3
//     left=3, right=5: 8+20=28 < 29 → left=4
//     left=4, right=5: 9+20=29 === 29 ✅ → return true
// 
// Time: O(n²) - much better than O(n³)!

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
//   - i=0, j=1, k=2: check 1+2+3 → works correctly
// 
// 4. No triplet exists: [1, 2, 3, 4, 5], x = 100
//   - Check all triplets, none sum to 100 → return false
// 
// 5. Triplet at end: [1, 2, 3, 4, 5], x = 12
//   - Eventually finds 3+4+5=12 → return true

// CONCLUSION:
// 
// This is a NAIVE solution that works but is inefficient.
// 
// ✅ Correct: Finds triplet if it exists
// ✅ Simple: Easy to understand and implement
// ❌ Slow: O(n³) time complexity
// ❌ Doesn't use sorted property
// 
// For better performance, use Two-Pointer Technique: O(n²) time!

let arr = [2, 3, 4, 8, 9, 20, 40];
let x = 32;
console.log(triplet(arr, x)); // Expected output: true (triplet found: 3 + 9 + 20 = 32)