/**
 * Naive Approach - Majority Element
 * Time Complexity: O(n²) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the majority element in an array.
 * A majority element is an element that appears more than n/2 times,
 * where n is the size of the array.
 *
 * Algorithm:
 * 1. For each element, count its occurrences from current position to end
 * 2. If count > n/2, return that element as majority element
 * 3. If no majority element found, return null
 */
function majorityelement(arr) {
  // Step 1: Get array length
  //   Used to check if count > n/2
  //   Example: arr = [20, 30, 40, 50, 50, 50, 50]
  //   n = 7
  let n = arr.length;

  // Step 2: Check each element for majority
  //   For each element, count how many times it appears
  //   Example: arr = [20, 30, 40, 50, 50, 50, 50]
  for (let i = 0; i < n; i++) {
    // Step 2a: Initialize count to 0
    //   Count occurrences of arr[i] from position i onwards
    //   Example: i = 0, arr[i] = 20
    //   count = 0
    let count = 1;

    // Step 2b: Count occurrences of current element
    //   Start from position i and count all occurrences of arr[i]
    //   Example: i = 0, arr[i] = 20
    //   j=0: arr[0]=20 === arr[0]=20? Yes → count = 1
    //   j=1: arr[1]=30 === arr[0]=20? No
    //   j=2: arr[2]=40 === arr[0]=20? No
    //   j=3: arr[3]=50 === arr[0]=20? No
    //   ... (continue until end)
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        // Current element matches, increment count
        count++;
      }
      // If arr[i] !== arr[j], continue (don't increment count)
    }

    // Step 2c: Check if current element is majority
    //   Majority condition: count > n/2
    //   Example: n = 7, n/2 = 3.5, floor(n/2) = 3
    //   count > 3 means count >= 4
    //   Example: count = 4, floor(7/2) = 3
    //   4 > 3? Yes → arr[i] is majority element
    if (count > Math.floor(n / 2)) {
      // Found majority element, return it
      return arr[i];
    }
    // If count <= n/2, continue checking next element
  }

  // Step 3: No majority element found
  //   If we've checked all elements and none have count > n/2
  //   Return null (no majority element exists)
  return null;
}

// Step-by-step execution for majorityelement([20, 30, 40, 50, 50, 50, 50]):
//   Input: arr = [20, 30, 40, 50, 50, 50, 50]
//   Visualization:
//     Index: 0   1   2   3   4   5   6
//     Value: 20  30  40  50  50  50  50
//     n = 7, floor(n/2) = floor(7/2) = 3
//     Majority condition: count > 3 (i.e., count >= 4)
//
//   Iteration 1: i = 0, arr[i] = 20
//     count = 0
//     Inner loop: j = 0 to 6
//       j=0: arr[0]=20 === arr[0]=20? Yes → count = 1
//       j=1: arr[1]=30 === arr[0]=20? No
//       j=2: arr[2]=40 === arr[0]=20? No
//       j=3: arr[3]=50 === arr[0]=20? No
//       j=4: arr[4]=50 === arr[0]=20? No
//       j=5: arr[5]=50 === arr[0]=20? No
//       j=6: arr[6]=50 === arr[0]=20? No
//     count = 1
//     Check: count > floor(n/2)? 1 > 3? No → Continue
//
//   Iteration 2: i = 1, arr[i] = 30
//     count = 0
//     Inner loop: j = 1 to 6
//       j=1: arr[1]=30 === arr[1]=30? Yes → count = 1
//       j=2: arr[2]=40 === arr[1]=30? No
//       j=3: arr[3]=50 === arr[1]=30? No
//       j=4: arr[4]=50 === arr[1]=30? No
//       j=5: arr[5]=50 === arr[1]=30? No
//       j=6: arr[6]=50 === arr[1]=30? No
//     count = 1
//     Check: count > floor(n/2)? 1 > 3? No → Continue
//
//   Iteration 3: i = 2, arr[i] = 40
//     count = 0
//     Inner loop: j = 2 to 6
//       j=2: arr[2]=40 === arr[2]=40? Yes → count = 1
//       j=3: arr[3]=50 === arr[2]=40? No
//       j=4: arr[4]=50 === arr[2]=40? No
//       j=5: arr[5]=50 === arr[2]=40? No
//       j=6: arr[6]=50 === arr[2]=40? No
//     count = 1
//     Check: count > floor(n/2)? 1 > 3? No → Continue
//
//   Iteration 4: i = 3, arr[i] = 50
//     count = 0
//     Inner loop: j = 3 to 6
//       j=3: arr[3]=50 === arr[3]=50? Yes → count = 1
//       j=4: arr[4]=50 === arr[3]=50? Yes → count = 2
//       j=5: arr[5]=50 === arr[3]=50? Yes → count = 3
//       j=6: arr[6]=50 === arr[3]=50? Yes → count = 4
//     count = 4
//     Check: count > floor(n/2)? 4 > 3? Yes ✓
//     Return arr[3] = 50 (majority element found)
//
//   Final result: 50
//   Majority element: 50 appears 4 times out of 7 elements (4 > 3.5 = 7/2)
//
//   Summary:
//     - Element 20: count = 1 (not majority)
//     - Element 30: count = 1 (not majority)
//     - Element 40: count = 1 (not majority)
//     - Element 50: count = 4 (majority: 4 > 3) ✓
//
//   Note: Once we find an element with count > n/2, we return immediately.
//   We don't need to check remaining elements.

let arr = [20, 30, 40, 50, 50, 50, 50];
console.log(majorityelement(arr));
