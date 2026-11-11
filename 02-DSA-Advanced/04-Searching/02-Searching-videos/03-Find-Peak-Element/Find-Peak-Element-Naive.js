/**
 * FIND PEAK ELEMENT - NAIVE SOLUTION
 * Problem: Find a peak element in an array
 * 
 * What is a peak element?
 * - A peak element is greater than or equal to its neighbors
 * - For edge elements, they only need to be >= their one neighbor
 * - Example: In [1, 7, 8, 20, 12], 20 is a peak (20 >= 8 && 20 >= 12)
 * - Example: In [5, 3], 5 is a peak (5 >= 3, no left neighbor)
 * 
 * Approach: Linear Search (Naive)
 * - Check edge cases first (single element, first element, last element)
 * - Then check all middle elements one by one
 * - Return first peak found
 * 
 * Time Complexity: O(n) where n is the length of array
 *   - In worst case, we check all n elements
 * Space Complexity: O(1) - only using constant extra space
 * 
 * WHY THIS IS NAIVE:
 * - We check every element sequentially
 * - We can do better with binary search in O(log n) time
 * - But this solution is simple and easy to understand
 */

function findPeakElement(arr){
  // Step 1: Get the length of the array
  // This tells us how many elements we need to check
  // Example: arr = [1, 7, 8, 20, 12] → n = 5
  let n = arr.length;
  
  // Step 2: Handle single element case
  // If array has only one element, that element is automatically a peak
  // (It has no neighbors, so it's trivially a peak)
  // Example: arr = [5] → return 5
  if(n === 1){
    return arr[0];
  }
  
  // Step 3: Check if first element is a peak
  // First element only needs to be >= second element to be a peak
  // (It has no left neighbor, so we only check right neighbor)
  // Example: arr = [5, 3, 2] → arr[0]=5 >= arr[1]=3? Yes → return 5
  if(arr[0] >= arr[1]){
    return arr[0];
  }
  
  // Step 4: Check if last element is a peak
  // Last element only needs to be >= second last element to be a peak
  // (It has no right neighbor, so we only check left neighbor)
  // Example: arr = [1, 2, 5] → arr[2]=5 >= arr[1]=2? Yes → return 5
  if(arr[n - 1] >= arr[n - 2]){
    return arr[n - 1];
  }
  
  // Step 5: Check all middle elements
  // For elements at indices 1 to n-2, we need to check both neighbors
  // A peak element must be >= both left and right neighbors
  // Example: arr = [1, 7, 8, 20, 12]
  //   We check indices 1, 2, 3 (not 0 or 4, already checked)
  for(let i = 1; i < n - 1; i++){
    // Step 5.1: Check if current element is a peak
    // Peak condition: arr[i] >= arr[i-1] AND arr[i] >= arr[i+1]
    // Example: i=3, arr[3]=20, arr[2]=8, arr[4]=12
    //   20 >= 8 && 20 >= 12? Yes → return 20
    if(arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]){
      return arr[i];  // Found peak! Return it immediately
    }
    // Step 5.2: If not a peak, continue to next element
    // Loop continues to check arr[i+1]
  }
  
  // Step 6: No peak found (shouldn't happen in valid input)
  // In a valid array, there should always be at least one peak
  // But we return -1 as a safety check
  // Example: This case is rare and usually indicates invalid input
  return -1;
}

// Step-by-step execution example 1:
// Input: arr = [1, 7, 8, 20, 12]
//
// Call: findPeakElement([1, 7, 8, 20, 12])
//   Step 1: Get array length
//     n = arr.length = 5
//   
//   Step 2: Check single element case
//     n === 1? (5 === 1)? No
//     Continue
//   
//   Step 3: Check first element
//     arr[0] >= arr[1]?
//     arr[0] = 1, arr[1] = 7
//     1 >= 7? No
//     Continue
//   
//   Step 4: Check last element
//     arr[n-1] >= arr[n-2]?
//     arr[4] = 12, arr[3] = 20
//     12 >= 20? No
//     Continue
//   
//   Step 5: Check middle elements
//     Loop: i = 1 to 3 (i < n-1, so i < 4)
//     
//     Iteration 1: i = 1
//       Check: arr[1] >= arr[0] && arr[1] >= arr[2]?
//       arr[1] = 7, arr[0] = 1, arr[2] = 8
//       7 >= 1 && 7 >= 8? (Yes && No) = No
//       Continue
//     
//     Iteration 2: i = 2
//       Check: arr[2] >= arr[1] && arr[2] >= arr[3]?
//       arr[2] = 8, arr[1] = 7, arr[3] = 20
//       8 >= 7 && 8 >= 20? (Yes && No) = No
//       Continue
//     
//     Iteration 3: i = 3
//       Check: arr[3] >= arr[2] && arr[3] >= arr[4]?
//       arr[3] = 20, arr[2] = 8, arr[4] = 12
//       20 >= 8 && 20 >= 12? (Yes && Yes) = Yes ✅
//       Return: 20
//   
//   Result: 20 (Peak element found at index 3)

// Step-by-step execution example 2:
// Input: arr = [5, 3, 2]
//
// Call: findPeakElement([5, 3, 2])
//   Step 1: n = 3
//   
//   Step 2: n === 1? No
//   
//   Step 3: Check first element
//     arr[0] >= arr[1]?
//     arr[0] = 5, arr[1] = 3
//     5 >= 3? Yes ✅
//     Return: 5
//   
//   Result: 5 (First element is a peak)

// Step-by-step execution example 3:
// Input: arr = [1, 2, 5]
//
// Call: findPeakElement([1, 2, 5])
//   Step 1: n = 3
//   
//   Step 2: n === 1? No
//   
//   Step 3: Check first element
//     arr[0] = 1, arr[1] = 2
//     1 >= 2? No
//     Continue
//   
//   Step 4: Check last element
//     arr[2] = 5, arr[1] = 2
//     5 >= 2? Yes ✅
//     Return: 5
//   
//   Result: 5 (Last element is a peak)

// Step-by-step execution example 4:
// Input: arr = [1, 3, 2, 4, 1]
//
// Call: findPeakElement([1, 3, 2, 4, 1])
//   Step 1: n = 5
//   
//   Step 2: n === 1? No
//   
//   Step 3: Check first element
//     arr[0] = 1, arr[1] = 3
//     1 >= 3? No
//     Continue
//   
//   Step 4: Check last element
//     arr[4] = 1, arr[3] = 4
//     1 >= 4? No
//     Continue
//   
//   Step 5: Check middle elements
//     Iteration 1: i = 1
//       arr[1] = 3, arr[0] = 1, arr[2] = 2
//       3 >= 1 && 3 >= 2? (Yes && Yes) = Yes ✅
//       Return: 3
//   
//   Result: 3 (Peak element found at index 1)
//   Note: There's another peak at index 3 (value 4), but we return the first one found

// Step-by-step execution example 5:
// Input: arr = [5] (single element)
//
// Call: findPeakElement([5])
//   Step 1: n = 1
//   
//   Step 2: Check single element case
//     n === 1? Yes ✅
//     Return: arr[0] = 5
//   
//   Result: 5 (Single element is automatically a peak)

// Step-by-step execution example 6:
// Input: arr = [1, 2, 3, 4, 5] (strictly increasing)
//
// Call: findPeakElement([1, 2, 3, 4, 5])
//   Step 1: n = 5
//   
//   Step 2: n === 1? No
//   
//   Step 3: Check first element
//     arr[0] = 1, arr[1] = 2
//     1 >= 2? No
//     Continue
//   
//   Step 4: Check last element
//     arr[4] = 5, arr[3] = 4
//     5 >= 4? Yes ✅
//     Return: 5
//   
//   Result: 5 (Last element is a peak in strictly increasing array)

// WHY THIS IS NAIVE:
// 
// 1. LINEAR SEARCH: O(n) time complexity
//    - We check every element sequentially
//    - In worst case, we check all n elements
//    - Example: Array of 1 million elements → need to check up to 1 million times
// 
// 2. DOESN'T USE SORTED PROPERTY:
//    - Even if array has some structure, we ignore it
//    - We don't take advantage of the fact that we can eliminate half the search space
// 
// 3. BETTER APPROACH EXISTS:
//    - We can use binary search
//    - Binary search can find peak in O(log n) time
//    - Example: Array of 1 million elements → only need ~20 comparisons!
// 
// 4. WHEN TO USE NAIVE APPROACH:
//    - When array is very small (n < 10)
//    - When code simplicity is more important than performance
//    - When you need a quick solution and don't want to handle edge cases
// 
// 5. OPTIMAL APPROACH:
//    - Use binary search
//    - Time: O(log n) - much faster for large arrays
//    - Uses the property: "If arr[mid] < arr[mid+1], peak is in right half"

// TIME COMPLEXITY ANALYSIS:
// 
// Best Case: O(1)
//   - Peak found at first element (arr[0] >= arr[1])
//   - Example: arr = [5, 3, 2] → found immediately
// 
// Average Case: O(n/2) ≈ O(n)
//   - Peak found in the middle on average
//   - Example: arr = [1, 7, 8, 20, 12] → found at index 3 (middle)
// 
// Worst Case: O(n)
//   - Peak found at last middle element or last element
//   - Example: arr = [1, 2, 3, 4, 5] → check all elements, find at last
//   - Example: arr = [1, 2, 3, 4, 3] → check all middle elements
// 
// Overall: O(n) - linear time complexity

// SPACE COMPLEXITY ANALYSIS:
// 
// Space: O(1) - Constant space
//   - Only using a few variables: n, i
//   - No extra arrays or data structures
//   - Space doesn't grow with input size

// WHAT IS A PEAK ELEMENT?
// 
// A peak element is an element that is greater than or equal to its neighbors.
// 
// For edge elements:
// - First element: Only needs to be >= second element
//   Example: [5, 3] → 5 is a peak (5 >= 3)
// 
// - Last element: Only needs to be >= second last element
//   Example: [1, 5] → 5 is a peak (5 >= 1)
// 
// For middle elements:
// - Must be >= both left and right neighbors
//   Example: [1, 7, 8, 20, 12] → 20 is a peak (20 >= 8 && 20 >= 12)
// 
// Important Notes:
// - An array can have multiple peaks
// - We only need to find ONE peak (not all peaks)
// - In a valid array, there's always at least one peak

// COMPARISON WITH OPTIMAL SOLUTION:
// 
// Naive (This Solution):
//   - Time: O(n)
//   - Space: O(1)
//   - Simple to understand and implement
//   - Checks elements sequentially
// 
// Optimal (Binary Search):
//   - Time: O(log n)
//   - Space: O(1)
//   - More complex to implement
//   - Uses property: "If arr[mid] < arr[mid+1], peak is in right half"
//   - Much faster for large arrays

let arr = [1, 7, 8, 20, 12];
console.log(findPeakElement(arr)); // Expected output: 20 (peak element)