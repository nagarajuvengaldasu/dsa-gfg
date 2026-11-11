/**
 * TWO POINTER APPROACH - NAIVE SOLUTION
 * Problem: Check if there exists a pair of elements in a sorted array that sum to x
 * 
 * What is the problem?
 * - Given a sorted array and a target sum x
 * - Find if there exists two elements arr[i] and arr[j] such that arr[i] + arr[j] === x
 * - Return true if such pair exists, false otherwise
 * 
 * Approach: Nested Loops (Naive)
 * - Use two nested loops to check all possible pairs
 * - Outer loop: iterate through each element as first element of pair
 * - Inner loop: iterate through remaining elements as second element of pair
 * - Check if sum equals x
 * 
 * Time Complexity: O(n²) where n is the length of array
 *   - Outer loop: n iterations
 *   - Inner loop: (n-1) + (n-2) + ... + 1 = n(n-1)/2 iterations
 *   - Total: O(n²)
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS NAIVE:
 * - We check all possible pairs, even though array is sorted
 * - We can do better with two-pointer technique in O(n) time
 * - But this solution is simple and easy to understand
 */

function isPair(arr, x){
  // Step 1: Get the length of the array
  // This tells us how many elements we need to check
  // Example: arr = [2, 3, 8, 11] → n = 4
  let n = arr.length;
  
  // Step 2: Outer Loop - First element of the pair
  // Iterate through each element as the first element
  // We check each element from index 0 to n-1
  // Example: For arr = [2, 3, 8, 11], we check i = 0, 1, 2, 3
  for(let i = 0; i < n; i++){
    // Step 2.1: Inner Loop - Second element of the pair
    // For each first element arr[i], check all elements after it
    // We start from j = i+1 to avoid checking same pair twice
    // (e.g., we check (2,3) but not (3,2))
    // Example: For i=0, we check j = 1, 2, 3
    //          For i=1, we check j = 2, 3
    //          For i=2, we check j = 3
    for(let j = i + 1; j < n; j++){
      // Step 2.1.1: Check if current pair sums to x
      // If arr[i] + arr[j] === x, we found a pair!
      // Return true immediately
      // Example: i=0, j=1: arr[0]=2, arr[1]=3
      //   2 + 3 = 5 === x? Check if x=5
      if(arr[i] + arr[j] === x){
        return true;  // Found pair! Return true
      }
      // Step 2.1.2: If sum doesn't equal x, continue to next pair
      // Loop continues to check arr[i] + arr[j+1]
    }
    // Step 2.2: After checking all pairs with arr[i] as first element,
    // move to next first element (i+1)
    // Loop continues to check pairs starting with arr[i+1]
  }
  
  // Step 3: No pair found
  // If we've checked all possible pairs and none sum to x, return false
  // This means no such pair exists in the array
  // Example: arr = [2, 3, 8, 11], x = 1
  //   All pairs: (2,3)=5, (2,8)=10, (2,11)=13, (3,8)=11, (3,11)=14, (8,11)=19
  //   None equals 1 → return false
  return false;
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
//       
//       Inner Loop (j = 1 to 3):
//         Iteration 1.1: j = 1
//           Check: arr[0] + arr[1] === x?
//           arr[0] = 2, arr[1] = 3, x = 11
//           2 + 3 = 5 === 11? No
//           Continue
//         
//         Iteration 1.2: j = 2
//           Check: arr[0] + arr[2] === x?
//           arr[0] = 2, arr[2] = 8, x = 11
//           2 + 8 = 10 === 11? No
//           Continue
//         
//         Iteration 1.3: j = 3
//           Check: arr[0] + arr[3] === x?
//           arr[0] = 2, arr[3] = 11, x = 11
//           2 + 11 = 13 === 11? No
//           Continue
//       
//       Inner loop ends (j = 4, which is >= n = 4)
//     
//     Iteration 2: i = 1
//       arr[i] = arr[1] = 3
//       
//       Inner Loop (j = 2 to 3):
//         Iteration 2.1: j = 2
//           Check: arr[1] + arr[2] === x?
//           arr[1] = 3, arr[2] = 8, x = 11
//           3 + 8 = 11 === 11? Yes ✅
//           Return: true
//   
//   Result: true (Pair found: 3 + 8 = 11)

// Step-by-step execution example 2:
// Input: arr = [2, 3, 8, 11], x = 1
//
// Call: isPair([2, 3, 8, 11], 1)
//   Step 1: n = 4
//   
//   Step 2: Outer Loop (i = 0 to 3)
//     Iteration 1: i = 0
//       Inner Loop (j = 1 to 3):
//         j=1: arr[0]+arr[1] = 2+3 = 5 === 1? No
//         j=2: arr[0]+arr[2] = 2+8 = 10 === 1? No
//         j=3: arr[0]+arr[3] = 2+11 = 13 === 1? No
//     
//     Iteration 2: i = 1
//       Inner Loop (j = 2 to 3):
//         j=2: arr[1]+arr[2] = 3+8 = 11 === 1? No
//         j=3: arr[1]+arr[3] = 3+11 = 14 === 1? No
//     
//     Iteration 3: i = 2
//       Inner Loop (j = 3):
//         j=3: arr[2]+arr[3] = 8+11 = 19 === 1? No
//     
//     Iteration 4: i = 3
//       Inner Loop: j starts at 4, which is >= n, so loop doesn't execute
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
//       Inner Loop (j = 1 to 4):
//         j=1: 1+2=3 === 9? No
//         j=2: 1+3=4 === 9? No
//         j=3: 1+4=5 === 9? No
//         j=4: 1+5=6 === 9? No
//     
//     Iteration 2: i = 1
//       Inner Loop (j = 2 to 4):
//         j=2: 2+3=5 === 9? No
//         j=3: 2+4=6 === 9? No
//         j=4: 2+5=7 === 9? No
//     
//     Iteration 3: i = 2
//       Inner Loop (j = 3 to 4):
//         j=3: 3+4=7 === 9? No
//         j=4: 3+5=8 === 9? No
//     
//     Iteration 4: i = 3
//       Inner Loop (j = 4):
//         j=4: 4+5=9 === 9? Yes ✅
//         Return: true
//   
//   Result: true (Pair found: 4 + 5 = 9)

// Step-by-step execution example 4:
// Input: arr = [1, 2], x = 3
//
// Call: isPair([1, 2], 3)
//   Step 1: n = 2
//   
//   Step 2: Outer Loop (i = 0 to 1)
//     Iteration 1: i = 0
//       Inner Loop (j = 1):
//         j=1: arr[0]+arr[1] = 1+2 = 3 === 3? Yes ✅
//         Return: true
//   
//   Result: true (Pair found: 1 + 2 = 3)

// Step-by-step execution example 5:
// Input: arr = [1, 2, 3], x = 10
//
// Call: isPair([1, 2, 3], 10)
//   Step 1: n = 3
//   
//   Step 2: Outer Loop (i = 0 to 2)
//     Iteration 1: i = 0
//       Inner Loop (j = 1 to 2):
//         j=1: 1+2=3 === 10? No
//         j=2: 1+3=4 === 10? No
//     
//     Iteration 2: i = 1
//       Inner Loop (j = 2):
//         j=2: 2+3=5 === 10? No
//     
//     Iteration 3: i = 2
//       Inner Loop: j starts at 3, which is >= n, so loop doesn't execute
//   
//   Step 3: No pair found
//     Return: false
//   
//   Result: false (No pair sums to 10)

// WHY THIS IS NAIVE:
// 
// 1. NESTED LOOPS: O(n²) time complexity
//    - We check all possible pairs
//    - For array of size n, we check n(n-1)/2 pairs
//    - Example: n=1000 → need to check ~500,000 pairs!
// 
// 2. IGNORES SORTED PROPERTY:
//    - Even though array is sorted, we check every pair
//    - We don't take advantage of the sorted order
//    - This is like searching in an unsorted array
// 
// 3. BETTER APPROACH EXISTS:
//    - We can use two-pointer technique
//    - Two-pointer can find pair in O(n) time
//    - Example: n=1000 → only need ~1000 comparisons!
// 
// 4. WHEN TO USE NAIVE APPROACH:
//    - When array is very small (n < 10)
//    - When code simplicity is more important than performance
//    - When you need a quick solution and don't want to handle edge cases
// 
// 5. OPTIMAL APPROACH (Two-Pointer Technique):
//    - Use two pointers: one at start, one at end
//    - If sum < x, move left pointer right (increase sum)
//    - If sum > x, move right pointer left (decrease sum)
//    - Time: O(n) - much faster for large arrays

// TIME COMPLEXITY ANALYSIS:
// 
// Total number of pairs checked:
//   For i=0: check pairs with j=1,2,...,n-1 → (n-1) pairs
//   For i=1: check pairs with j=2,3,...,n-1 → (n-2) pairs
//   For i=2: check pairs with j=3,4,...,n-1 → (n-3) pairs
//   ...
//   For i=n-2: check pairs with j=n-1 → 1 pair
// 
// Total = (n-1) + (n-2) + ... + 1 = n(n-1)/2
// 
// Best Case: O(1)
//   - Pair found at first check (arr[0] + arr[1] === x)
//   - Example: arr = [1, 2, 3], x = 3 → found immediately
// 
// Average Case: O(n²)
//   - Pair found after checking ~n²/2 pairs on average
//   - Example: arr = [1, 2, 3, 4, 5], x = 9 → found at pair (4,5)
// 
// Worst Case: O(n²)
//   - Pair not found or found at last check
//   - Example: arr = [1, 2, 3], x = 10 → check all 3 pairs
//   - Example: arr = [1, 2, 3, 4, 5], x = 9 → check 9 pairs before finding
// 
// Overall: O(n²) - quadratic time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using a few variables: n, i, j
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// COMPARISON WITH OPTIMAL SOLUTION:
// 
// Naive (This Solution):
//   - Time: O(n²)
//   - Space: O(1)
//   - Simple to understand and implement
//   - Checks all pairs sequentially
//   - Example: n=1000 → ~500,000 comparisons
// 
// Optimal (Two-Pointer Technique):
//   - Time: O(n)
//   - Space: O(1)
//   - More complex to implement
//   - Uses sorted property efficiently
//   - Example: n=1000 → only ~1000 comparisons!
// 
// Speed Improvement:
//   - For n=1000: Naive needs ~500,000 comparisons
//   - Optimal needs only ~1000 comparisons
//   - That's 500x faster! 🚀

// HOW TWO-POINTER TECHNIQUE WORKS (Optimal Approach):
// 
// Since array is sorted, we can use two pointers:
// 1. Left pointer at start (i=0)
// 2. Right pointer at end (j=n-1)
// 
// Algorithm:
//   while left < right:
//     sum = arr[left] + arr[right]
//     if sum === x: return true
//     if sum < x: left++ (need larger sum)
//     if sum > x: right-- (need smaller sum)
//   return false
// 
// Why it works:
//   - If sum < x, we need a larger sum
//     Since array is sorted, moving left pointer right increases sum
//   - If sum > x, we need a smaller sum
//     Since array is sorted, moving right pointer left decreases sum
// 
// Example: arr = [2, 3, 8, 11], x = 11
//   left=0, right=3: 2+11=13 > 11 → right=2
//   left=0, right=2: 2+8=10 < 11 → left=1
//   left=1, right=2: 3+8=11 === 11 ✅ → return true
// 
// Time: O(n) - only one pass through array!

// EDGE CASES HANDLED:
// 
// 1. Empty array: []
//   - n=0, outer loop doesn't execute → return false
// 
// 2. Single element: [5]
//   - n=1, outer loop: i=0, inner loop: j starts at 1 >= 1 → doesn't execute
//   - return false (can't form pair with one element)
// 
// 3. Two elements: [1, 2]
//   - i=0, j=1: 1+2=3 → check if equals x
// 
// 4. No pair exists: [1, 2, 3], x = 10
//   - Check all pairs, none sum to 10 → return false
// 
// 5. Pair at end: [1, 2, 3, 4, 5], x = 9
//   - Check all pairs, find 4+5=9 → return true

// CONCLUSION:
// 
// This is a NAIVE solution that works but is inefficient.
// 
// ✅ Correct: Finds pair if it exists
// ✅ Simple: Easy to understand and implement
// ❌ Slow: O(n²) time complexity
// ❌ Doesn't use sorted property
// 
// For better performance, use Two-Pointer Technique: O(n) time!

let arr = [2, 3, 8, 11];
let x = 1;
console.log(isPair(arr, x)); // Expected output: false (no pair sums to 1)