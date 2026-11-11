/**
 * SEARCH IN SORTED ROTATED ARRAY - NAIVE SOLUTION
 * Problem: Search for an element x in a sorted rotated array
 * 
 * What is a sorted rotated array?
 * - A sorted array that has been rotated (shifted) by some positions
 * - Example: [1, 2, 3, 4, 5] rotated by 2 → [3, 4, 5, 1, 2]
 * - Example: [10, 20, 30] rotated by 1 → [20, 30, 10]
 * 
 * Approach: Linear Search (Naive)
 * - Simply iterate through the array from start to end
 * - Check each element to see if it matches x
 * - Return index if found, -1 if not found
 * 
 * Time Complexity: O(n) where n is the length of array
 *   - In worst case, we check all n elements
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS NAIVE:
 * - We ignore the fact that array is sorted (even if rotated)
 * - We can do better with binary search in O(log n) time
 * - But this solution is simple and easy to understand
 */

function searchInSortedRotatedArray(arr, x){
  // Step 1: Get the length of the array
  // This tells us how many elements we need to check
  // Example: arr = [10, 20, 30] → n = 3
  let n = arr.length;
  
  // Step 2: Linear Search - Iterate through each element
  // We check every element from index 0 to n-1
  // This is the naive approach - we don't use the sorted property
  // Example: For arr = [10, 20, 30], we check indices 0, 1, 2
  for(let i = 0; i < n; i++){
    // Step 2.1: Check if current element equals x
    // If found, return the index immediately
    // Example: i=0, arr[0]=10, x=10 → 10 === 10? Yes → return 0
    if(arr[i] === x){
      return i;  // Found! Return the index
    }
    // Step 2.2: If not found, continue to next element
    // Loop continues to check arr[i+1]
  }
  
  // Step 3: Element not found
  // If we've checked all elements and didn't find x, return -1
  // This means x is not in the array
  // Example: arr = [10, 20, 30], x = 50 → not found → return -1
  return -1;
}

// Step-by-step execution example 1:
// Input: arr = [10, 20, 30], x = 10
//
// Call: searchInSortedRotatedArray([10, 20, 30], 10)
//   Step 1: Get array length
//     n = arr.length = 3
//   
//   Step 2: Linear Search Loop
//     Iteration 1: i = 0
//       Check: arr[0] === x?
//       arr[0] = 10, x = 10
//       10 === 10? Yes ✅
//       Return: 0
//   
//   Result: 0 (Element 10 found at index 0)

// Step-by-step execution example 2:
// Input: arr = [10, 20, 30], x = 20
//
// Call: searchInSortedRotatedArray([10, 20, 30], 20)
//   Step 1: n = 3
//   
//   Step 2: Linear Search Loop
//     Iteration 1: i = 0
//       Check: arr[0] === x?
//       arr[0] = 10, x = 20
//       10 === 20? No
//       Continue to next iteration
//     
//     Iteration 2: i = 1
//       Check: arr[1] === x?
//       arr[1] = 20, x = 20
//       20 === 20? Yes ✅
//       Return: 1
//   
//   Result: 1 (Element 20 found at index 1)

// Step-by-step execution example 3:
// Input: arr = [10, 20, 30], x = 30
//
// Call: searchInSortedRotatedArray([10, 20, 30], 30)
//   Step 1: n = 3
//   
//   Step 2: Linear Search Loop
//     Iteration 1: i = 0
//       arr[0] = 10, x = 30
//       10 === 30? No, continue
//     
//     Iteration 2: i = 1
//       arr[1] = 20, x = 30
//       20 === 30? No, continue
//     
//     Iteration 3: i = 2
//       arr[2] = 30, x = 30
//       30 === 30? Yes ✅
//       Return: 2
//   
//   Result: 2 (Element 30 found at index 2)

// Step-by-step execution example 4:
// Input: arr = [10, 20, 30], x = 50 (not in array)
//
// Call: searchInSortedRotatedArray([10, 20, 30], 50)
//   Step 1: n = 3
//   
//   Step 2: Linear Search Loop
//     Iteration 1: i = 0
//       arr[0] = 10, x = 50
//       10 === 50? No, continue
//     
//     Iteration 2: i = 1
//       arr[1] = 20, x = 50
//       20 === 50? No, continue
//     
//     Iteration 3: i = 2
//       arr[2] = 30, x = 50
//       30 === 50? No, continue
//     
//     Loop ends (i = 3, which is >= n = 3)
//   
//   Step 3: Element not found
//     Return: -1
//   
//   Result: -1 (Element 50 not found in array)

// Step-by-step execution example 5 (Rotated Array):
// Input: arr = [30, 10, 20] (sorted array [10, 20, 30] rotated by 1), x = 10
//
// Call: searchInSortedRotatedArray([30, 10, 20], 10)
//   Step 1: n = 3
//   
//   Step 2: Linear Search Loop
//     Iteration 1: i = 0
//       arr[0] = 30, x = 10
//       30 === 10? No, continue
//     
//     Iteration 2: i = 1
//       arr[1] = 10, x = 10
//       10 === 10? Yes ✅
//       Return: 1
//   
//   Result: 1 (Element 10 found at index 1, even though array is rotated)

// WHY THIS IS NAIVE:
// 
// 1. IGNORES SORTED PROPERTY:
//    - Even though the array is sorted (just rotated), we check every element
//    - We don't take advantage of the sorted structure
//    - This is like searching in an unsorted array
// 
// 2. TIME COMPLEXITY: O(n)
//    - In worst case, we check all n elements
//    - For large arrays, this is inefficient
//    - Example: Array of 1 million elements → need to check up to 1 million times
// 
// 3. BETTER APPROACH EXISTS:
//    - We can use binary search with modifications
//    - Binary search can find element in O(log n) time
//    - Example: Array of 1 million elements → only need ~20 comparisons!
// 
// 4. WHEN TO USE NAIVE APPROACH:
//    - When array is very small (n < 10)
//    - When code simplicity is more important than performance
//    - When you need a quick solution and don't want to handle edge cases
// 
// 5. OPTIMAL APPROACH:
//    - Use modified binary search
//    - Time: O(log n) - much faster for large arrays
//    - Identifies which half is sorted and searches accordingly

// TIME COMPLEXITY ANALYSIS:
// 
// Best Case: O(1)
//   - Element found at index 0
//   - Example: arr = [10, 20, 30], x = 10 → found immediately
// 
// Average Case: O(n/2) ≈ O(n)
//   - Element found in the middle on average
//   - Example: arr = [10, 20, 30, 40, 50], x = 30 → found at index 2
// 
// Worst Case: O(n)
//   - Element found at last index or not found
//   - Example: arr = [10, 20, 30], x = 30 → check all 3 elements
//   - Example: arr = [10, 20, 30], x = 50 → check all 3 elements, then return -1
// 
// Overall: O(n) - linear time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using a few variables: n, i
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// COMPARISON WITH OPTIMAL SOLUTION:
// 
// Naive (This Solution):
//   - Time: O(n)
//   - Space: O(1)
//   - Simple to understand and implement
//   - Works for any array (sorted or not)
// 
// Optimal (Binary Search):
//   - Time: O(log n)
//   - Space: O(1)
//   - More complex to implement
//   - Requires understanding of rotated array structure
//   - Much faster for large arrays

let arr = [10, 20, 30];
let x = 10;
console.log(searchInSortedRotatedArray(arr, x)); // Expected output: 0