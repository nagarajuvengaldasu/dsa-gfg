/**
 * Optimal Approach - Find Leaders in an Array
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(n) for result array
 *
 * Problem: A leader is an element that is greater than all elements to its right.
 * Find all leaders in the array.
 *
 * Algorithm (Traverse from right to left):
 * 1. Start from the rightmost element (last element is always a leader)
 * 2. Track the maximum element seen so far (from right to left)
 * 3. If current element >= maximum seen so far, it's a leader
 * 4. Store leaders in result array and print in original order (left to right)
 */
function leaders(arr, n) {
  // Step 1: Initialize result array to store leaders
  //   We'll collect leaders as we traverse from right to left
  let result = [];

  // Step 2: Initialize temp to track maximum element seen so far
  //   Start with the last element (rightmost element is always a leader)
  //   Example: arr = [5, 8, 6, 10, 4, 7], n = 6
  //   temp = arr[5] = 7 (last element)
  let temp = arr[n - 1];

  // Step 3: Add the last element to result (always a leader)
  //   Example: result.push(7) → result = [7]
  result.push(temp);

  // Step 4: Traverse from right to left (from index n-2 to 0)
  //   Check each element to see if it's greater than or equal to
  //   the maximum element seen so far (from the right)
  //   Example: arr = [5, 8, 6, 10, 4, 7]
  for (let i = n - 2; i >= 0; i--) {
    // Step 4a: If current element >= maximum seen so far
    //   Current element is a leader (greater than all elements to its right)
    //   Update temp to current element (new maximum)
    //   Example: i=4, arr[4]=4, temp=7
    //     4 >= 7? No → Skip
    //   Example: i=3, arr[3]=10, temp=7
    //     10 >= 7? Yes → Add 10 to result, temp=10
    if (arr[i] >= temp) {
      // Update temp to current element (new maximum from right)
      temp = arr[i];
      // Add current element to result array
      result.push(temp);
    }
  }

  // Step 5: Print leaders in original order (left to right)
  //   Since we collected leaders from right to left, we need to reverse
  //   the order when printing to maintain left-to-right order
  //   Example: result = [7, 10] (collected from right to left)
  //   Print in reverse: 10, 7 (left to right order)
  for (let i = result.length - 1; i >= 0; i--) {
    console.log(result[i]);
  }
}

// Step-by-step execution for leaders([5, 8, 6, 10, 4, 7], 6):
//   Input: arr = [5, 8, 6, 10, 4, 7], n = 6
//
//   Initialization:
//     result = []
//     temp = arr[5] = 7
//     result.push(7) → result = [7]
//
//   Iteration 1: i = 4, arr[i] = arr[4] = 4
//     Check: arr[4] = 4 >= temp = 7? → 4 >= 7? No
//     Skip (not a leader, 4 < 7 which is to its right)
//     temp = 7 (unchanged)
//     result = [7]
//
//   Iteration 2: i = 3, arr[i] = arr[3] = 10
//     Check: arr[3] = 10 >= temp = 7? → 10 >= 7? Yes ✓
//     temp = arr[3] = 10 (update maximum)
//     result.push(10) → result = [7, 10]
//
//   Iteration 3: i = 2, arr[i] = arr[2] = 6
//     Check: arr[2] = 6 >= temp = 10? → 6 >= 10? No
//     Skip (not a leader, 6 < 10 which is to its right)
//     temp = 10 (unchanged)
//     result = [7, 10]
//
//   Iteration 4: i = 1, arr[i] = arr[1] = 8
//     Check: arr[1] = 8 >= temp = 10? → 8 >= 10? No
//     Skip (not a leader, 8 < 10 which is to its right)
//     temp = 10 (unchanged)
//     result = [7, 10]
//
//   Iteration 5: i = 0, arr[i] = arr[0] = 5
//     Check: arr[0] = 5 >= temp = 10? → 5 >= 10? No
//     Skip (not a leader, 5 < 10 which is to its right)
//     temp = 10 (unchanged)
//     result = [7, 10]
//
//   Print result in reverse order (left to right):
//     i = result.length - 1 = 1
//       console.log(result[1]) → Print 10
//     i = 0
//       console.log(result[0]) → Print 7
//
//   Output: 10, 7
//   Leaders: 10 (greater than 4, 7) and 7 (last element, no elements to right)
//
//   Verification:
//     - Element 10 at index 3: greater than arr[4]=4, arr[5]=7 ✓
//     - Element 7 at index 5: last element, always a leader ✓

let arr = [5, 8, 6, 10, 4, 7];
let n = arr.length;
leaders(arr, n);
