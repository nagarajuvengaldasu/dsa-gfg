/**
 * Naive Approach - Minimum Flips to Make Binary Array Elements Same
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find minimum flips needed to make all elements of a binary array the same.
 * We can flip any contiguous segment. Return the ranges of indices to flip.
 *
 * Algorithm (Two Traversals):
 * 1. Count groups of consecutive 0s
 * 2. Count groups of consecutive 1s
 * 3. Flip whichever has fewer groups (fewer groups = fewer flips needed)
 *
 * Key Insight: If we have fewer groups of 0s, flip all 0 groups to 1s.
 * If we have fewer groups of 1s, flip all 1 groups to 0s.
 */
function minimumFlips(arr) {
  // Step 1: Count groups of 0s and 1s
  //   Traverse array and count how many groups of each type exist
  //   Example: arr = [0, 1, 1, 1, 0, 0, 1, 1, 0]
  //   Groups: [0], [1,1,1], [0,0], [1,1], [0]
  //   Groups of 0s: 3, Groups of 1s: 2
  let count0Groups = 0;
  let count1Groups = 0;

  // Step 1a: Count groups by checking transitions
  //   A new group starts when current element differs from previous
  //   Example: arr = [0, 1, 1, 1, 0, 0, 1, 1, 0]
  //   i=0: First element, arr[0]=0 → count0Groups = 1
  //   i=1: arr[1]=1, arr[0]=0 → Different! New group of 1s → count1Groups = 1
  //   i=2: arr[2]=1, arr[1]=1 → Same, continue
  //   i=4: arr[4]=0, arr[3]=1 → Different! New group of 0s → count0Groups = 2
  for (let i = 0; i < arr.length; i++) {
    // Check if this is the start of a new group
    //   First element always starts a group
    //   Or current element differs from previous element
    if (i === 0 || arr[i] !== arr[i - 1]) {
      if (arr[i] === 0) {
        count0Groups++;
      } else {
        count1Groups++;
      }
    }
  }

  // Step 2: Determine which groups to flip
  //   Flip whichever has fewer groups (minimizes number of flips)
  //   Example: count0Groups = 3, count1Groups = 2
  //   count1Groups < count0Groups → Flip groups of 1s
  let flipValue;
  if (count0Groups < count1Groups) {
    // Fewer groups of 0s, flip all 0 groups to 1s
    flipValue = 0;
  } else if (count1Groups < count0Groups) {
    // Fewer groups of 1s, flip all 1 groups to 0s
    flipValue = 1;
  } else {
    // Equal groups, flip 0s (arbitrary choice, both require same flips)
    flipValue = 0;
  }

  // Step 3: Find and print ranges of groups to flip
  //   Traverse array and identify start and end indices of groups to flip
  //   Example: arr = [0, 1, 1, 1, 0, 0, 1, 1, 0], flipValue = 1
  //   Find groups of 1s: [1,1,1] at indices 1-3, [1,1] at indices 6-7
  let result = [];
  let start = -1;

  for (let i = 0; i < arr.length; i++) {
    // Check if current element is part of a group we need to flip
    if (arr[i] === flipValue) {
      // Start of a new group to flip
      if (i === 0 || arr[i - 1] !== flipValue) {
        start = i;
      }
      // End of current group to flip
      if (i === arr.length - 1 || arr[i + 1] !== flipValue) {
        result.push({ from: start, to: i });
      }
    }
  }

  // Step 4: Print results
  if (result.length === 0) {
    console.log("No flips needed - array already has all same elements");
  } else {
    result.forEach((range) => {
      console.log(`From ${range.from} to ${range.to}`);
    });
  }

  return result;
}

// Step-by-step execution for minimumFlips([0, 1, 1, 1, 0, 0, 1, 1, 0]):
//   Input: arr = [0, 1, 1, 1, 0, 0, 1, 1, 0]
//   Visualization:
//     Index: 0  1  2  3  4  5  6  7  8
//     Value: 0  1  1  1  0  0  1  1  0
//     Groups: [0] [1,1,1] [0,0] [1,1] [0]
//
//   Step 1: Count groups
//     i=0: arr[0]=0, first element → count0Groups = 1
//     i=1: arr[1]=1, arr[0]=0 (different) → count1Groups = 1
//     i=2: arr[2]=1, arr[1]=1 (same) → continue
//     i=3: arr[3]=1, arr[2]=1 (same) → continue
//     i=4: arr[4]=0, arr[3]=1 (different) → count0Groups = 2
//     i=5: arr[5]=0, arr[4]=0 (same) → continue
//     i=6: arr[6]=1, arr[5]=0 (different) → count1Groups = 2
//     i=7: arr[7]=1, arr[6]=1 (same) → continue
//     i=8: arr[8]=0, arr[7]=1 (different) → count0Groups = 3
//     count0Groups = 3, count1Groups = 2
//
//   Step 2: Determine flip value
//     count1Groups (2) < count0Groups (3) → flipValue = 1
//     Flip all groups of 1s
//
//   Step 3: Find ranges to flip
//     Group 1 of 1s: indices 1-3
//       i=1: arr[1]=1, start=1
//       i=2: arr[2]=1, continue
//       i=3: arr[3]=1, arr[4]=0 (end) → range: from 1 to 3
//     Group 2 of 1s: indices 6-7
//       i=6: arr[6]=1, start=6
//       i=7: arr[7]=1, arr[8]=0 (end) → range: from 6 to 7
//
//   Output:
//     From 1 to 3
//     From 6 to 7
//
//   After flipping:
//     Original: [0, 1, 1, 1, 0, 0, 1, 1, 0]
//     After flip: [0, 0, 0, 0, 0, 0, 0, 0, 0] (all 0s)

// Test cases from the problem
console.log("Test Case 1: [0, 1, 1, 1, 0, 0, 1, 1, 0]");
minimumFlips([0, 1, 1, 1, 0, 0, 1, 1, 0]);
