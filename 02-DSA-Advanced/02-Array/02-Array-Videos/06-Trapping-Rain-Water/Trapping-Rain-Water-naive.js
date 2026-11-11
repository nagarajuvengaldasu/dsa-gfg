/**
 * Naive Approach - Trapping Rain Water Problem
 * Time Complexity: O(n²) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Given an array representing heights of bars, find the amount of
 * water that can be trapped between the bars after rain.
 *
 * Algorithm:
 * For each position i:
 * 1. Find the maximum height to the left (lmax)
 * 2. Find the maximum height to the right (rmax)
 * 3. Water trapped at position i = min(lmax, rmax) - arr[i]
 *    (We can only trap water up to the minimum of left and right max)
 */
function trappingrainWater(arr) {
  // Step 1: Initialize result to 0
  //   Track total water trapped
  let res = 0;

  // Step 2: Process each position (skip first and last as they can't trap water)
  //   For each position i, calculate how much water can be trapped
  //   Example: arr = [3, 6, 1, 2, 5]
  for (let i = 1; i < arr.length; i++) {
    // Step 2a: Find maximum height to the left of current position
    //   Initialize lmax to current element's height
    //   Then find the maximum height in the range [0, i-1]
    //   Example: i = 2, arr[2] = 1
    //   lmax = arr[2] = 1 (initial)
    let lmax = arr[i];

    // Step 2b: Loop through all elements to the left to find maximum
    //   Example: i = 2, check indices 0, 1
    //   j=0: arr[0]=3 > lmax=1? Yes → lmax = 3
    //   j=1: arr[1]=6 > lmax=3? Yes → lmax = 6
    //   Final lmax = 6 (maximum height to the left of index 2)
    for (let j = 0; j < i; j++) {
      lmax = Math.max(lmax, arr[j]);
    }

    // Step 2c: Find maximum height to the right of current position
    //   Initialize rmax to current element's height
    //   Then find the maximum height in the range [i+1, n-1]
    //   Example: i = 2, arr[2] = 1
    //   rmax = arr[2] = 1 (initial)
    let rmax = arr[i];

    // Step 2d: Loop through all elements to the right to find maximum
    //   Example: i = 2, check indices 3, 4
    //   j=3: arr[3]=2 > rmax=1? Yes → rmax = 2
    //   j=4: arr[4]=5 > rmax=2? Yes → rmax = 5
    //   Final rmax = 5 (maximum height to the right of index 2)
    for (let j = i + 1; j < arr.length; j++) {
      rmax = Math.max(rmax, arr[j]);
    }

    // Step 2e: Calculate water trapped at current position
    //   Water trapped = min(lmax, rmax) - arr[i]
    //   We can only trap water up to the minimum of left and right max
    //   Example: i = 2, lmax = 6, rmax = 5, arr[2] = 1
    //   Water = min(6, 5) - 1 = 5 - 1 = 4
    //   This means at position 2, we can trap 4 units of water
    res += Math.min(lmax, rmax) - arr[i];
  }

  // Step 3: Return total water trapped
  //   Sum of water trapped at all positions
  return res;
}

// Step-by-step execution for trappingrainWater([3, 6, 1, 2, 5]):
//   Input: arr = [3, 6, 1, 2, 5]
//   Visualization:
//         __
//        |  |     __
//     __|  |____|  |__
//    |  |  |    |  |  |
//     3  6  1  2  5
//     ↑  ↑  ↑  ↑  ↑
//     0  1  2  3  4
//
//   Initialization:
//     res = 0
//
//   Iteration 1: i = 1 (position 1, height = 6)
//     Step 1: Find lmax
//       lmax = arr[1] = 6
//       Loop j = 0 to 0:
//         j=0: lmax = max(6, arr[0]=3) = max(6, 3) = 6
//       lmax = 6
//
//     Step 2: Find rmax
//       rmax = arr[1] = 6
//       Loop j = 2 to 4:
//         j=2: rmax = max(6, arr[2]=1) = max(6, 1) = 6
//         j=3: rmax = max(6, arr[3]=2) = max(6, 2) = 6
//         j=4: rmax = max(6, arr[4]=5) = max(6, 5) = 6
//       rmax = 6
//
//     Step 3: Calculate water
//       Water = min(lmax=6, rmax=6) - arr[1] = min(6, 6) - 6 = 6 - 6 = 0
//       res = 0 + 0 = 0
//
//   Iteration 2: i = 2 (position 2, height = 1)
//     Step 1: Find lmax
//       lmax = arr[2] = 1
//       Loop j = 0 to 1:
//         j=0: lmax = max(1, arr[0]=3) = max(1, 3) = 3
//         j=1: lmax = max(3, arr[1]=6) = max(3, 6) = 6
//       lmax = 6
//
//     Step 2: Find rmax
//       rmax = arr[2] = 1
//       Loop j = 3 to 4:
//         j=3: rmax = max(1, arr[3]=2) = max(1, 2) = 2
//         j=4: rmax = max(2, arr[4]=5) = max(2, 5) = 5
//       rmax = 5
//
//     Step 3: Calculate water
//       Water = min(lmax=6, rmax=5) - arr[2] = min(6, 5) - 1 = 5 - 1 = 4
//       res = 0 + 4 = 4
//       At position 2, 4 units of water can be trapped
//
//   Iteration 3: i = 3 (position 3, height = 2)
//     Step 1: Find lmax
//       lmax = arr[3] = 2
//       Loop j = 0 to 2:
//         j=0: lmax = max(2, arr[0]=3) = max(2, 3) = 3
//         j=1: lmax = max(3, arr[1]=6) = max(3, 6) = 6
//         j=2: lmax = max(6, arr[2]=1) = max(6, 1) = 6
//       lmax = 6
//
//     Step 2: Find rmax
//       rmax = arr[3] = 2
//       Loop j = 4 to 4:
//         j=4: rmax = max(2, arr[4]=5) = max(2, 5) = 5
//       rmax = 5
//
//     Step 3: Calculate water
//       Water = min(lmax=6, rmax=5) - arr[3] = min(6, 5) - 2 = 5 - 2 = 3
//       res = 4 + 3 = 7
//       At position 3, 3 units of water can be trapped
//
//   Iteration 4: i = 4 (position 4, height = 5)
//     Step 1: Find lmax
//       lmax = arr[4] = 5
//       Loop j = 0 to 3:
//         j=0: lmax = max(5, arr[0]=3) = max(5, 3) = 5
//         j=1: lmax = max(5, arr[1]=6) = max(5, 6) = 6
//         j=2: lmax = max(6, arr[2]=1) = max(6, 1) = 6
//         j=3: lmax = max(6, arr[3]=2) = max(6, 2) = 6
//       lmax = 6
//
//     Step 2: Find rmax
//       rmax = arr[4] = 5
//       No elements to the right
//       rmax = 5
//
//     Step 3: Calculate water
//       Water = min(lmax=6, rmax=5) - arr[4] = min(6, 5) - 5 = 5 - 5 = 0
//       res = 7 + 0 = 7
//
//   Final result: 7
//   Total water trapped = 4 (at position 2) + 3 (at position 3) = 7 units

let arr = [3, 6, 1, 2, 5];
console.log(trappingrainWater(arr));
