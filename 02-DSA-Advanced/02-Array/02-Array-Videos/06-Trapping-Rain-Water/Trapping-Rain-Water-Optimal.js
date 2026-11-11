/**
 * Optimal Approach - Trapping Rain Water Problem
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(n) for lmax and rmax arrays
 *
 * Problem: Given an array representing heights of bars, find the amount of
 * water that can be trapped between the bars after rain.
 *
 * Algorithm (Precompute left and right maximums):
 * 1. Precompute maximum height to the left of each position (lmax array)
 * 2. Precompute maximum height to the right of each position (rmax array)
 * 3. For each position, water trapped = min(lmax[i], rmax[i]) - arr[i]
 *
 * Key Optimization: Instead of finding max for each position (O(n²)),
 * we precompute all maximums in O(n) time using dynamic programming.
 */
function getWater(arr) {
  // Step 1: Initialize result to 0
  //   Track total water trapped
  let res = 0;

  // Step 2: Get array length
  let n = arr.length;

  // Step 3: Create arrays to store maximum heights
  //   lmax[i] = maximum height to the left of position i (including i)
  //   rmax[i] = maximum height to the right of position i (including i)
  let lmax = [];
  let rmax = [];

  // Step 4: Precompute left maximum array (from left to right)
  //   lmax[0] = arr[0] (first element has no left elements)
  //   For each subsequent position, lmax[i] = max(arr[i], lmax[i-1])
  //   This uses the fact that lmax[i] is either the current element
  //   or the maximum seen so far from the left
  lmax[0] = arr[0];

  // Step 4a: Fill lmax array from left to right
  //   Example: arr = [3, 6, 1, 2, 5]
  //   i=1: lmax[1] = max(arr[1]=6, lmax[0]=3) = max(6, 3) = 6
  //   i=2: lmax[2] = max(arr[2]=1, lmax[1]=6) = max(1, 6) = 6
  //   i=3: lmax[3] = max(arr[3]=2, lmax[2]=6) = max(2, 6) = 6
  //   i=4: lmax[4] = max(arr[4]=5, lmax[3]=6) = max(5, 6) = 6
  //   lmax = [3, 6, 6, 6, 6]
  for (let i = 1; i < n; i++) {
    lmax[i] = Math.max(arr[i], lmax[i - 1]);
  }

  // Step 5: Precompute right maximum array (from right to left)
  //   rmax[n-1] = arr[n-1] (last element has no right elements)
  //   For each previous position, rmax[i] = max(arr[i], rmax[i+1])
  //   This uses the fact that rmax[i] is either the current element
  //   or the maximum seen so far from the right
  rmax[n - 1] = arr[n - 1];

  // Step 5a: Fill rmax array from right to left
  //   Example: arr = [3, 6, 1, 2, 5]
  //   i=3: rmax[3] = max(arr[3]=2, rmax[4]=5) = max(2, 5) = 5
  //   i=2: rmax[2] = max(arr[2]=1, rmax[3]=5) = max(1, 5) = 5
  //   i=1: rmax[1] = max(arr[1]=6, rmax[2]=5) = max(6, 5) = 6
  //   i=0: rmax[0] = max(arr[0]=3, rmax[1]=6) = max(3, 6) = 6
  //   rmax = [6, 6, 5, 5, 5]
  for (let i = n - 2; i >= 0; i--) {
    rmax[i] = Math.max(arr[i], rmax[i + 1]);
  }

  // Step 6: Calculate water trapped at each position
  //   Skip first and last positions (they can't trap water)
  //   For each position i: water = min(lmax[i], rmax[i]) - arr[i]
  //   We can only trap water up to the minimum of left and right max
  for (let i = 1; i < n - 1; i++) {
    // Step 6a: Calculate water trapped at position i
    //   Example: i=2, lmax[2]=6, rmax[2]=5, arr[2]=1
    //   Water = min(6, 5) - 1 = 5 - 1 = 4
    res += Math.min(lmax[i], rmax[i]) - arr[i];
  }

  // Step 7: Return total water trapped
  return res;
}

// Step-by-step execution for getWater([3, 6, 1, 2, 5]):
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
//     n = 5
//     lmax = []
//     rmax = []
//
//   Step 1: Precompute lmax array (left to right)
//     lmax[0] = arr[0] = 3
//     Loop i = 1 to 4:
//       i=1: lmax[1] = max(arr[1]=6, lmax[0]=3) = max(6, 3) = 6
//       i=2: lmax[2] = max(arr[2]=1, lmax[1]=6) = max(1, 6) = 6
//       i=3: lmax[3] = max(arr[3]=2, lmax[2]=6) = max(2, 6) = 6
//       i=4: lmax[4] = max(arr[4]=5, lmax[3]=6) = max(5, 6) = 6
//     lmax = [3, 6, 6, 6, 6]
//
//   Step 2: Precompute rmax array (right to left)
//     rmax[4] = arr[4] = 5
//     Loop i = 3 down to 0:
//       i=3: rmax[3] = max(arr[3]=2, rmax[4]=5) = max(2, 5) = 5
//       i=2: rmax[2] = max(arr[2]=1, rmax[3]=5) = max(1, 5) = 5
//       i=1: rmax[1] = max(arr[1]=6, rmax[2]=5) = max(6, 5) = 6
//       i=0: rmax[0] = max(arr[0]=3, rmax[1]=6) = max(3, 6) = 6
//     rmax = [6, 6, 5, 5, 5]
//
//   Step 3: Calculate water trapped (positions 1 to 3)
//     Loop i = 1 to 3:
//       i=1: Water = min(lmax[1]=6, rmax[1]=6) - arr[1] = min(6, 6) - 6 = 6 - 6 = 0
//         res = 0 + 0 = 0
//       i=2: Water = min(lmax[2]=6, rmax[2]=5) - arr[2] = min(6, 5) - 1 = 5 - 1 = 4
//         res = 0 + 4 = 4
//       i=3: Water = min(lmax[3]=6, rmax[3]=5) - arr[3] = min(6, 5) - 2 = 5 - 2 = 3
//         res = 4 + 3 = 7
//
//   Final result: 7
//   Total water trapped = 0 (at position 1) + 4 (at position 2) + 3 (at position 3) = 7 units
//
//   Comparison with Naive Approach:
//     Naive: O(n²) - For each position, finds max in O(n) time
//     Optimal: O(n) - Precomputes all max values in O(n) time, then calculates in O(n)
//     Space: O(1) naive vs O(n) optimal (trade-off)

let arr = [3, 0, 1,0,4,0,2];
console.log(getWater(arr));
