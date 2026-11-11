/**
 * SEARCH IN INFINITE SIZED ARRAY
 * Problem: Search for an element x in a sorted infinite-sized array
 * We cannot use arr.length because the array is infinite (or very large)
 * 
 * Approach: Exponential Search + Binary Search
 * 1. Use exponential search to find a range where x might be
 * 2. Use binary search in that range to find x
 * 
 * Time Complexity: O(log n) where n is the position of x
 *   - Exponential search: O(log n) to find range
 *   - Binary search: O(log n) to find x in range
 * Space Complexity: O(log n) for recursion stack
 * 
 * KEY INSIGHT: Since array is sorted and infinite, we can:
 * - Start from index 1, then check 2, 4, 8, 16, ... (exponential growth)
 * - Once we find arr[i] >= x, we know x is between i/2 and i
 * - Use binary search in that range
 */

function searchInInfiniteSizedArray(arr, x){
  // Step 1: Check if element is at index 0
  // This is a quick check before starting exponential search
  // Example: arr[0] = 1, x = 1 → return 0 immediately
  if(arr[0] === x){
    return 0;
  }
  
  // Step 2: Exponential Search - Find the range where x might be
  // Start from index 1 and double the index each time
  // We keep doubling until arr[i] >= x
  // This finds an upper bound for binary search
  // Example: i = 1, 2, 4, 8, 16, ... (exponential growth)
  let i = 1;
  
  // Step 2.1: Keep doubling i while arr[i] < x
  // This finds the first index where arr[i] >= x
  // Example: arr = [1, 10, 15, 20, 40, 80, 90, 100, ...], x = 100
  //   i=1: arr[1]=10 < 100? Yes, continue
  //   i=2: arr[2]=15 < 100? Yes, continue
  //   i=4: arr[4]=40 < 100? Yes, continue
  //   i=8: arr[8]=100 < 100? No, stop (arr[8] >= x)
  while(arr[i] < x){
    i = i * 2;  // Double the index (exponential growth)
  }
  
  // Step 3: Check if we found x exactly at index i
  // If arr[i] === x, we're done!
  // Example: arr[8] = 100, x = 100 → return 8
  if(arr[i] === x){
    return i;
  }
  
  // Step 4: Binary Search in the range [i/2 + 1, i - 1]
  // We know:
  //   - arr[i/2] < x (because we stopped when arr[i] >= x)
  //   - arr[i] >= x (we just checked)
  // So x must be between i/2 and i
  // We search in range [i/2 + 1, i - 1] to find x
  // Example: i = 8, so search in [4 + 1, 8 - 1] = [5, 7]
  return binarySearch(arr, x, Math.floor(i/2) + 1, i - 1);
}

function binarySearch(arr, x, low, high){
  // Step 1: Base Case - If low > high, element not found
  // This means we've searched the entire range and didn't find x
  // Example: low=6, high=5 → return -1 (not found)
  if(low > high){
    return -1;
  }
  
  // Step 2: Calculate middle index
  // This splits the search range in half
  // Example: low=5, high=7 → mid = (5+7)/2 = 6
  let mid = Math.floor((low + high) / 2);
  
  // Step 3: Check if element is at middle index
  // If found, return the index
  // Example: arr[6] = 90, x = 100 → not equal, continue
  if(arr[mid] === x){
    return mid;
  }
  
  // Step 4: If arr[mid] < x, search in right half
  // Since array is sorted, if middle element is smaller,
  // x must be in the right half (if it exists)
  // Example: arr[6] = 90 < 100 → search in [7, 7]
  if(arr[mid] < x){
    return binarySearch(arr, x, mid + 1, high);
  }
  
  // Step 5: If arr[mid] > x, search in left half
  // Since array is sorted, if middle element is larger,
  // x must be in the left half (if it exists)
  // Example: arr[7] = 100 > 90 → search in [5, 6]
  return binarySearch(arr, x, low, mid - 1);
}

// Step-by-step execution example:
// Input: arr = [1, 10, 15, 20, 40, 80, 90, 100, 120, 500, ...], x = 100
//
// Call: searchInInfiniteSizedArray(arr, 100)
//   Step 1: Check arr[0]
//     arr[0] = 1, x = 100
//     Check: 1 === 100? No
//   
//   Step 2: Exponential Search
//     i = 1
//     
//     Iteration 1:
//       Check: arr[1] < x?
//       arr[1] = 10, x = 100
//       10 < 100? Yes
//       i = 1 * 2 = 2
//     
//     Iteration 2:
//       Check: arr[2] < x?
//       arr[2] = 15, x = 100
//       15 < 100? Yes
//       i = 2 * 2 = 4
//     
//     Iteration 3:
//       Check: arr[4] < x?
//       arr[4] = 40, x = 100
//       40 < 100? Yes
//       i = 4 * 2 = 8
//     
//     Iteration 4:
//       Check: arr[8] < x?
//       arr[8] = 120, x = 100
//       120 < 100? No (120 >= 100)
//       Exit loop
//     After loop: i = 8
//   
//   Step 3: Check if arr[8] === x
//     arr[8] = 120, x = 100
//     Check: 120 === 100? No
//   
//   Step 4: Binary Search in range [i/2 + 1, i - 1]
//     low = Math.floor(8/2) + 1 = 4 + 1 = 5
//     high = 8 - 1 = 7
//     Search range: [5, 7]
//     Call: binarySearch(arr, 100, 5, 7)
//     
//     Call: binarySearch(arr, 100, 5, 7)
//       low=5, high=7
//       Check: low > high? (5 > 7)? No
//       mid = Math.floor((5 + 7) / 2) = 6
//       Check: arr[6] === 100?
//         arr[6] = 90, x = 100
//         90 === 100? No
//       Check: arr[6] < 100?
//         90 < 100? Yes
//       Search right: binarySearch(arr, 100, 7, 7)
//         low=7, high=7
//         mid = Math.floor((7 + 7) / 2) = 7
//         Check: arr[7] === 100?
//           arr[7] = 100, x = 100
//           100 === 100? Yes ✅
//           Return: 7
//       Return: 7
//   
//   Return: 7
//
// Result: 7 (Element 100 found at index 7)

// Step-by-step execution example 2:
// Input: arr = [1, 10, 15, 20, 40, 80, 90, 100, 120, ...], x = 90
//
// Call: searchInInfiniteSizedArray(arr, 90)
//   Step 1: Check arr[0]
//     arr[0] = 1, x = 90
//     Check: 1 === 90? No
//   
//   Step 2: Exponential Search
//     i = 1
//     Iteration 1: arr[1]=10 < 90? Yes, i = 2
//     Iteration 2: arr[2]=15 < 90? Yes, i = 4
//     Iteration 3: arr[4]=40 < 90? Yes, i = 8
//     Iteration 4: arr[8]=100 < 90? No, exit loop
//     After loop: i = 8
//   
//   Step 3: Check if arr[8] === x
//     arr[8] = 100, x = 90
//     Check: 100 === 90? No
//   
//   Step 4: Binary Search in range [i/2 + 1, i - 1]
//     i = 8
//     low = Math.floor(8/2) + 1 = 4 + 1 = 5
//     high = 8 - 1 = 7
//     Search range: [5, 7]
//     Call: binarySearch(arr, 90, 5, 7)
//     
//     Call: binarySearch(arr, 90, 5, 7)
//       low=5, high=7
//       Check: low > high? (5 > 7)? No
//       mid = Math.floor((5 + 7) / 2) = 6
//       Check: arr[6] === 90?
//         arr[6] = 90, x = 90
//         90 === 90? Yes ✅
//         Return: 6
//     
//     Return: 6
//
// Result: 6 (Element 90 found at index 6)

// Step-by-step execution example 3:
// Input: arr = [1, 10, 15, 20, 40, 80, 90, 100, ...], x = 80
//
// Call: searchInInfiniteSizedArray(arr, 80)
//   Step 1: arr[0] = 1 !== 80
//   Step 2: Exponential Search
//     i=1: arr[1]=10 < 80? Yes, i=2
//     i=2: arr[2]=15 < 80? Yes, i=4
//     i=4: arr[4]=40 < 80? Yes, i=8
//     i=8: arr[8]=100 < 80? No, stop
//     i = 8
//   Step 3: arr[8] = 100 !== 80
//   Step 4: Binary Search in [5, 7]
//     Call: binarySearch(arr, 80, 5, 7)
//       low=5, high=7
//       mid = (5+7)/2 = 6
//       arr[6] = 90
//       Check: 90 === 80? No
//       Check: 90 < 80? No
//       Check: 90 > 80? Yes
//       Search left: binarySearch(arr, 80, 5, 5)
//         low=5, high=5
//         mid = (5+5)/2 = 5
//         arr[5] = 80
//         Check: 80 === 80? Yes ✅
//         Return: 5
//     Return: 5
//
// Result: 5 (Element 80 found at index 5)

// WHY EXPONENTIAL SEARCH WORKS:
// 
// The key insight is that we don't know the array size, but we know:
// 1. Array is sorted
// 2. Array is infinite (or very large)
// 
// Exponential search strategy:
// - Check indices: 1, 2, 4, 8, 16, 32, ...
// - This grows exponentially, so we quickly find a range
// - If x is at position n, we find it in O(log n) steps
// 
// Example: If x is at position 1000
//   We check: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
//   We find range in ~10 steps (log₂(1000) ≈ 10)
//   Then binary search in range [512, 1024] takes ~9 more steps
//   Total: ~19 steps (much better than checking all 1000 elements!)

// WHY BINARY SEARCH IN RANGE [i/2 + 1, i - 1]:
// 
// After exponential search, we know:
// - arr[i/2] < x (we stopped when arr[i] >= x)
// - arr[i] >= x (we just checked)
// 
// So x must be in range [i/2, i]
// But we already checked:
// - arr[i/2] < x (so x is not at i/2)
// - arr[i] >= x (might be equal, but we checked and it wasn't)
// 
// Therefore, x must be in range [i/2 + 1, i - 1]
// We use binary search in this range to find x efficiently

// TIME COMPLEXITY ANALYSIS:
// 
// Exponential Search Phase:
//   - We check indices: 1, 2, 4, 8, 16, ..., 2^k
//   - If x is at position n, we need k steps where 2^k >= n
//   - k = log₂(n) → O(log n)
// 
// Binary Search Phase:
//   - Range size: i - (i/2 + 1) = i/2 - 1 ≈ i/2
//   - Since i ≈ 2^k where 2^k >= n, range size ≈ n
//   - Binary search in range of size n: O(log n)
// 
// Total: O(log n) + O(log n) = O(log n)

let arr = [1 , 10 , 15, 20 , 40 , 80 , 90 , 100 , 120 , 500 , 3000 , 9000 , 10000];
let x = 100;
console.log(searchInInfiniteSizedArray(arr, x)); // Expected output: 7 (element 100 is at index 7)