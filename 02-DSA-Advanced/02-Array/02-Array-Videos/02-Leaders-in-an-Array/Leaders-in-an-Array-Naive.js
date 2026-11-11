/**
 * Naive Approach - Find Leaders in an Array
 * Time Complexity: O(n²) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: A leader is an element that is greater than all elements to its right.
 * Find all leaders in the array.
 *
 * Algorithm:
 * 1. For each element, check if it is greater than all elements to its right
 * 2. If yes, print it as a leader
 */
function leaders(arr, n) {
  // Step 1: Iterate through each element in the array
  //   Check each element from left to right
  for (let i = 0; i < arr.length; i++) {
    // Step 2: Initialize flag to track if current element is a leader
    //   flag = false means we haven't found any element greater to the right yet
    let flag = false;

    // Step 3: Check all elements to the right of current element
    //   If any element to the right is greater, current element is not a leader
    for (let j = i + 1; j < arr.length; j++) {
      // Step 3a: If any element to the right is greater than current element
      //   Set flag = true and break (no need to check further)
      //   Example: arr[i] = 5, arr[j] = 10
      //   Since 10 > 5, element at index i is not a leader
      if (arr[j] > arr[i]) {
        flag = true;
        break; // Exit inner loop early since we found a greater element
      }
    }

    // Step 4: If flag is still false, current element is a leader
    //   This means no element to the right is greater than current element
    //   Print the leader
    if (flag === false) {
      console.log(arr[i]);
    }
  }
}

// Step-by-step execution for leaders([10, 5, 10, 4], 4):
//   Input: arr = [10, 5, 10, 4], n = 4
//
//   Iteration 1: i = 0, arr[i] = 10
//     flag = false
//     Loop j = 1 to 3:
//       j=1: arr[1]=5 > arr[0]=10? No (5 > 10? false)
//       j=2: arr[2]=10 > arr[0]=10? No (10 > 10? false)
//       j=3: arr[3]=4 > arr[0]=10? No (4 > 10? false)
//     flag = false → Print 10 (leader) ✓
//
//   Iteration 2: i = 1, arr[i] = 5
//     flag = false
//     Loop j = 2 to 3:
//       j=2: arr[2]=10 > arr[1]=5? Yes (10 > 5? true)
//         → flag = true, break
//     flag = true → Skip (not a leader) ✗
//
//   Iteration 3: i = 2, arr[i] = 10
//     flag = false
//     Loop j = 3 to 3:
//       j=3: arr[3]=4 > arr[2]=10? No (4 > 10? false)
//     flag = false → Print 10 (leader) ✓
//
//   Iteration 4: i = 3, arr[i] = 4
//     flag = false
//     No elements to the right
//     flag = false → Print 4 (leader) ✓
//
//   Output: 10, 10, 4

let arr = [10, 5, 10, 4];
let n = arr.length;
leaders(arr, n);
