/**
 * Naive Approach - Maximum Consecutive 1's in Binary Array
 * Time Complexity: O(n²) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the maximum number of consecutive 1's in a binary array.
 *
 * Algorithm:
 * 1. For each position i, count consecutive 1's starting from that position
 * 2. Break when encountering a 0 (not consecutive anymore)
 * 3. Track the maximum count found
 */
function maxConsecutive1s(arr) {
  // Step 1: Initialize result to 0
  //   Track the maximum consecutive 1's found
  let res = 0;

  // Step 2: Try each position as a starting point
  //   For each position i, count consecutive 1's starting from i
  //   Example: arr = [0, 1, 1, 0, 1, 1, 1]
  for (let i = 0; i < arr.length; i++) {
    // Step 2a: Initialize count to 0 for current starting position
    //   Count consecutive 1's starting from position i
    let count = 0;

    // Step 2b: Count consecutive 1's from position i
    //   Start from position i and count until we encounter a 0
    //   Example: i = 4, arr = [0, 1, 1, 0, 1, 1, 1]
    //   j=4: arr[4]=1 → count=1, continue
    //   j=5: arr[5]=1 → count=2, continue
    //   j=6: arr[6]=1 → count=3, continue
    //   j=7: j < arr.length? No → exit loop
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === 1) {
        // Current element is 1, increment count
        count++;
      } else {
        // Encountered 0, break (not consecutive anymore)
        //   We can't have consecutive 1's across a 0
        break;
      }
    }

    // Step 2c: Update result with maximum count found so far
    //   Compare current count with previous maximum
    //   Example: res = 2, count = 3
    //   res = Math.max(2, 3) = 3
    res = Math.max(res, count);
  }

  // Step 3: Return the maximum consecutive 1's found
  return res;
}

// Step-by-step execution for maxConsecutive1s([0, 1, 1, 0, 1, 1, 1]):
//   Input: arr = [0, 1, 1, 0, 1, 1, 1]
//   Visualization:
//     Index: 0  1  2  3  4  5  6
//     Value: 0  1  1  0  1  1  1
//
//   Initialization:
//     res = 0
//
//   Iteration 1: i = 0, arr[i] = 0
//     count = 0
//     Inner loop: j = 0
//       j=0: arr[0] = 0 === 1? No → break immediately
//     count = 0
//     res = Math.max(0, 0) = 0
//
//   Iteration 2: i = 1, arr[i] = 1
//     count = 0
//     Inner loop: j = 1 to 6
//       j=1: arr[1] = 1 === 1? Yes → count = 1
//       j=2: arr[2] = 1 === 1? Yes → count = 2
//       j=3: arr[3] = 0 === 1? No → break
//     count = 2 (consecutive 1's: positions 1, 2)
//     res = Math.max(0, 2) = 2
//
//   Iteration 3: i = 2, arr[i] = 1
//     count = 0
//     Inner loop: j = 2 to 6
//       j=2: arr[2] = 1 === 1? Yes → count = 1
//       j=3: arr[3] = 0 === 1? No → break
//     count = 1 (consecutive 1's: position 2 only)
//     res = Math.max(2, 1) = 2
//
//   Iteration 4: i = 3, arr[i] = 0
//     count = 0
//     Inner loop: j = 3
//       j=3: arr[3] = 0 === 1? No → break immediately
//     count = 0
//     res = Math.max(2, 0) = 2
//
//   Iteration 5: i = 4, arr[i] = 1
//     count = 0
//     Inner loop: j = 4 to 6
//       j=4: arr[4] = 1 === 1? Yes → count = 1
//       j=5: arr[5] = 1 === 1? Yes → count = 2
//       j=6: arr[6] = 1 === 1? Yes → count = 3
//       j=7: j < arr.length? No → exit loop
//     count = 3 (consecutive 1's: positions 4, 5, 6)
//     res = Math.max(2, 3) = 3
//
//   Iteration 6: i = 5, arr[i] = 1
//     count = 0
//     Inner loop: j = 5 to 6
//       j=5: arr[5] = 1 === 1? Yes → count = 1
//       j=6: arr[6] = 1 === 1? Yes → count = 2
//       j=7: j < arr.length? No → exit loop
//     count = 2 (consecutive 1's: positions 5, 6)
//     res = Math.max(3, 2) = 3
//
//   Iteration 7: i = 6, arr[i] = 1
//     count = 0
//     Inner loop: j = 6
//       j=6: arr[6] = 1 === 1? Yes → count = 1
//       j=7: j < arr.length? No → exit loop
//     count = 1 (consecutive 1's: position 6 only)
//     res = Math.max(3, 1) = 3
//
//   Final result: 3
//   Maximum consecutive 1's are at positions 4, 5, 6 (three consecutive 1's)

let arr = [0, 1, 1, 0, 1, 1, 1];
console.log(maxConsecutive1s(arr));
