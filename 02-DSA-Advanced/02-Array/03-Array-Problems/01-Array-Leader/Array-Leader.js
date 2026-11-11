// ARRAY LEADER: Find all leaders in an array
// A leader is an element that is greater than or equal to all elements to its right
// OPTIMAL APPROACH: Traverse from right to left, tracking maximum seen so far
// Time Complexity: O(n) - single pass through the array
// Space Complexity: O(n) for result array (in worst case, all elements are leaders)

function arrayLeader(arr){
  // Step 1: Get the length of the array
  let n = arr.length;
  
  // Step 2: Initialize result array to store leaders
  // Leaders will be collected in reverse order (right to left)
  let result = [];
  
  // Step 3: The last element is always a leader (no elements to its right)
  // Initialize temp with the last element
  // Example: arr = [7,10,4,3,6,5,2]
  //   arr[n-1] = arr[6] = 2
  //   temp = 2
  let temp = arr[n-1];
  
  // Step 4: Add the last element as the first leader
  // result = [2]
  result.push(temp);

  // Step 5: Traverse from right to left (from second last to first element)
  // For each element, check if it's >= the maximum seen so far (temp)
  // If yes, it's a leader - update temp and add to result
  // Example: arr = [7,10,4,3,6,5,2]
  // i=5: arr[5] = 5, temp = 2
  //   5 >= 2? Yes, temp = 5, result.push(5) -> result = [2, 5]
  // i=4: arr[4] = 6, temp = 5
  //   6 >= 5? Yes, temp = 6, result.push(6) -> result = [2, 5, 6]
  // i=3: arr[3] = 3, temp = 6
  //   3 >= 6? No, skip
  // i=2: arr[2] = 4, temp = 6
  //   4 >= 6? No, skip
  // i=1: arr[1] = 10, temp = 6
  //   10 >= 6? Yes, temp = 10, result.push(10) -> result = [2, 5, 6, 10]
  // i=0: arr[0] = 7, temp = 10
  //   7 >= 10? No, skip
  // Final result = [2, 5, 6, 10]
  for(let i = n-2; i >= 0; i--){
    // Step 5.1: Check if current element is >= maximum seen so far
    // If yes, it's a leader (greater than or equal to all elements to its right)
    if(arr[i] >= temp){
      // Step 5.2: Update temp to current element (new maximum)
      temp = arr[i];
      // Step 5.3: Add current element to result (it's a leader)
      result.push(temp);
    }
  }
  
  // Step 6: Print leaders in left-to-right order
  // Since we collected them from right to left, we need to reverse the output
  // Example: result = [2, 5, 6, 10]
  // i=3: console.log(result[3]) = console.log(10)
  // i=2: console.log(result[2]) = console.log(6)
  // i=1: console.log(result[1]) = console.log(5)
  // i=0: console.log(result[0]) = console.log(2)
  // Output: 10, 6, 5, 2 (leaders from left to right)
  for(let i = result.length-1; i >= 0; i--){
    console.log(result[i]);
  }
}

// Step-by-step execution example:
// arr = [7, 10, 4, 3, 6, 5, 2]
// n = 7
//
// Step 1: Initialize
//   result = []
//   temp = arr[6] = 2
//   result.push(2) -> result = [2]
//
// Step 2: Traverse from right to left (i from 5 to 0)
//   i=5: arr[5] = 5
//     Check: 5 >= temp (2)? Yes
//     temp = 5
//     result.push(5) -> result = [2, 5]
//
//   i=4: arr[4] = 6
//     Check: 6 >= temp (5)? Yes
//     temp = 6
//     result.push(6) -> result = [2, 5, 6]
//
//   i=3: arr[3] = 3
//     Check: 3 >= temp (6)? No
//     Skip (not a leader)
//
//   i=2: arr[2] = 4
//     Check: 4 >= temp (6)? No
//     Skip (not a leader)
//
//   i=1: arr[1] = 10
//     Check: 10 >= temp (6)? Yes
//     temp = 10
//     result.push(10) -> result = [2, 5, 6, 10]
//
//   i=0: arr[0] = 7
//     Check: 7 >= temp (10)? No
//     Skip (not a leader)
//
// Step 3: Print leaders in left-to-right order
//   result = [2, 5, 6, 10] (collected from right to left)
//   Print in reverse: 10, 6, 5, 2
//
// Verification:
//   Element 10 (index 1): 10 >= all elements to its right [4,3,6,5,2]? Yes ✓
//   Element 6 (index 4): 6 >= all elements to its right [5,2]? Yes ✓
//   Element 5 (index 5): 5 >= all elements to its right [2]? Yes ✓
//   Element 2 (index 6): 2 >= all elements to its right []? Yes (always leader) ✓
//
// Leaders: 10, 6, 5, 2

let arr = [7,10,4,3,6,5,2];
arrayLeader(arr); // Output: 10, 6, 5, 2