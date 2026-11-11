/**
 * Naive Approach - Left Rotate Array by D places
 * Time Complexity: O(n * d) where n = array length, d = rotation places
 * Space Complexity: O(1)
 *
 * Algorithm:
 * 1. Call leftrotatebyone() D times
 * 2. Each call rotates the array left by 1 position
 */
function leftrotate(arr, d) {
  // Step 1: Rotate the array left by 1 position, D times
  //   Example: If d = 2, we rotate left by 1 position twice
  //   This effectively rotates the array left by 2 positions
  for (let i = 0; i < d; i++) {
    leftrotatebyone(arr);
  }
}

/**
 * Helper function: Rotate array left by 1 position
 *
 * Algorithm:
 * 1. Store the first element in temp
 * 2. Shift all elements from index 1 to n-1 one position left
 * 3. Place temp at the last position
 */
function leftrotatebyone(arr) {
  // Step 1: Store the first element temporarily
  //   Example: arr = [1, 2, 3, 4, 5]
  //   temp = arr[0] = 1
  let temp = arr[0];

  // Step 2: Shift all elements one position left
  //   Loop from index 1 to length-1
  //   Move each element to the previous position
  //   Example: arr = [1, 2, 3, 4, 5]
  //     i=1: arr[0] = arr[1] → arr = [2, 2, 3, 4, 5]
  //     i=2: arr[1] = arr[2] → arr = [2, 3, 3, 4, 5]
  //     i=3: arr[2] = arr[3] → arr = [2, 3, 4, 4, 5]
  //     i=4: arr[3] = arr[4] → arr = [2, 3, 4, 5, 5]
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  // Step 3: Place the stored first element at the last position
  //   Example: arr[4] = temp = 1
  //   Final arr = [2, 3, 4, 5, 1]
  arr[arr.length - 1] = temp;
}

// Step-by-step execution for leftrotate([1, 2, 3, 4, 5], 2):
//   Input: arr = [1, 2, 3, 4, 5], d = 2
//
//   Call 1: leftrotatebyone([1, 2, 3, 4, 5])
//     - temp = arr[0] = 1
//     - Loop i=1 to 4:
//         i=1: arr[0] = arr[1] = 2 → arr = [2, 2, 3, 4, 5]
//         i=2: arr[1] = arr[2] = 3 → arr = [2, 3, 3, 4, 5]
//         i=3: arr[2] = arr[3] = 4 → arr = [2, 3, 4, 4, 5]
//         i=4: arr[3] = arr[4] = 5 → arr = [2, 3, 4, 5, 5]
//     - arr[4] = temp = 1 → arr = [2, 3, 4, 5, 1]
//
//   Call 2: leftrotatebyone([2, 3, 4, 5, 1])
//     - temp = arr[0] = 2
//     - Loop i=1 to 4:
//         i=1: arr[0] = arr[1] = 3 → arr = [3, 3, 4, 5, 1]
//         i=2: arr[1] = arr[2] = 4 → arr = [3, 4, 4, 5, 1]
//         i=3: arr[2] = arr[3] = 5 → arr = [3, 4, 5, 5, 1]
//         i=4: arr[3] = arr[4] = 1 → arr = [3, 4, 5, 1, 1]
//     - arr[4] = temp = 2 → arr = [3, 4, 5, 1, 2]
//
//   Final result: [3, 4, 5, 1, 2]

let arr = [1, 2, 3, 4, 5];
let d = 2;
leftrotate(arr, d);
console.log(arr);
