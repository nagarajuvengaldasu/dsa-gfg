/**
 * Optimal Approach - Majority Element (Boyer-Moore Voting Algorithm)
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the majority element in an array.
 * A majority element is an element that appears more than n/2 times,
 * where n is the size of the array.
 *
 * Algorithm (Boyer-Moore Voting Algorithm):
 * Phase 1: Find a candidate for majority element
 *   - Maintain a candidate and vote count
 *   - If vote count becomes 0, change candidate to current element
 *   - If current element matches candidate, increment votes
 *   - If current element differs, decrement votes
 *
 * Phase 2: Verify if candidate is actually majority
 *   - Count occurrences of candidate
 *   - If count > n/2, return candidate
 *   - Otherwise, return null
 *
 * Key Insight: If a majority element exists, it will survive the voting process
 * because it appears more than half the time.
 */
function findMajority(arr) {
  // Phase 1: Find candidate for majority element using voting algorithm
  // Step 1: Initialize candidate to first element
  //   Start with first element as potential majority candidate
  //   Example: arr = [20, 30, 40, 50, 50, 50, 50]
  //   res = arr[0] = 20
  let res = arr[0];

  // Step 2: Initialize vote count to 1
  //   First element gets 1 vote (itself)
  //   Example: votes = 1 (for candidate 20)
  let votes = 1;

  // Step 3: Process remaining elements using voting algorithm
  //   For each element, either support current candidate or change candidate
  for (let i = 1; i < arr.length; i++) {
    // Step 3a: If vote count is 0, change candidate
    //   When votes reach 0, current candidate is not majority
    //   Start fresh with current element as new candidate
    //   Example: votes = 0, arr[i] = 30
    //   res = 30, votes = 1 (new candidate with 1 vote)
    if (votes === 0) {
      res = arr[i];
      votes = 1;
    } else if (arr[i] === res) {
      // Step 3b: Current element matches candidate
      //   Increment vote count (support for current candidate)
      //   Example: res = 50, arr[i] = 50
      //   votes = 2 + 1 = 3 (more support for candidate 50)
      votes++;
    } else {
      // Step 3c: Current element differs from candidate
      //   Decrement vote count (opposition to current candidate)
      //   Example: res = 20, arr[i] = 30
      //   votes = 1 - 1 = 0 (cancel out one vote)
      votes--;
    }
  }

  // Phase 2: Verify if candidate is actually majority element
  // Step 4: Count occurrences of candidate
  //   The voting algorithm gives us a candidate, but we need to verify
  //   it actually appears more than n/2 times
  //   Example: res = 50, need to count how many times 50 appears
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === res) {
      // Current element matches candidate, increment count
      count++;
    }

    // Step 4a: Early return if we've confirmed majority
    //   If count > n/2, we've found majority element, return immediately
    //   Example: arr.length = 7, floor(7/2) = 3
    //   count = 4 > 3? Yes → Return res
    if (count > Math.floor(arr.length / 2)) {
      return res;
    }
  }

  // Step 5: No majority element found
  //   Candidate didn't appear more than n/2 times
  //   Return null (no majority element exists)
  return null;
}

// Step-by-step execution for findMajority([20, 30, 40, 50, 50, 50, 50]):
//   Input: arr = [20, 30, 40, 50, 50, 50, 50]
//   Visualization:
//     Index: 0   1   2   3   4   5   6
//     Value: 20  30  40  50  50  50  50
//     n = 7, floor(n/2) = 3
//     Majority condition: count > 3 (i.e., count >= 4)
//
//   Phase 1: Find candidate using voting algorithm
//     Initialization:
//       res = arr[0] = 20
//       votes = 1
//
//     Iteration 1: i = 1, arr[i] = 30
//       votes = 1 (not 0)
//       arr[1] = 30 === res = 20? No
//       votes = 1 - 1 = 0 (decrement, cancel out)
//       res = 20, votes = 0
//
//     Iteration 2: i = 2, arr[i] = 40
//       votes = 0? Yes
//       res = arr[2] = 40 (change candidate)
//       votes = 1 (reset to 1)
//       res = 40, votes = 1
//
//     Iteration 3: i = 3, arr[i] = 50
//       votes = 1 (not 0)
//       arr[3] = 50 === res = 40? No
//       votes = 1 - 1 = 0 (decrement, cancel out)
//       res = 40, votes = 0
//
//     Iteration 4: i = 4, arr[i] = 50
//       votes = 0? Yes
//       res = arr[4] = 50 (change candidate)
//       votes = 1 (reset to 1)
//       res = 50, votes = 1
//
//     Iteration 5: i = 5, arr[i] = 50
//       votes = 1 (not 0)
//       arr[5] = 50 === res = 50? Yes
//       votes = 1 + 1 = 2 (increment, support candidate)
//       res = 50, votes = 2
//
//     Iteration 6: i = 6, arr[i] = 50
//       votes = 2 (not 0)
//       arr[6] = 50 === res = 50? Yes
//       votes = 2 + 1 = 3 (increment, support candidate)
//       res = 50, votes = 3
//
//     After Phase 1: Candidate = 50, votes = 3
//
//   Phase 2: Verify candidate is majority
//     count = 0
//     Loop through array to count occurrences of 50:
//       i=0: arr[0]=20 === 50? No → count = 0
//       i=1: arr[1]=30 === 50? No → count = 0
//       i=2: arr[2]=40 === 50? No → count = 0
//       i=3: arr[3]=50 === 50? Yes → count = 1
//       i=4: arr[4]=50 === 50? Yes → count = 2
//       i=5: arr[5]=50 === 50? Yes → count = 3
//       i=6: arr[6]=50 === 50? Yes → count = 4
//         Check: count > floor(7/2)? 4 > 3? Yes ✓
//         Return res = 50 (majority element confirmed)
//
//   Final result: 50
//   Majority element: 50 appears 4 times out of 7 elements (4 > 3.5 = 7/2)
//
//   Summary of voting process:
//     - Start with candidate 20, vote = 1
//     - Element 30 cancels vote → votes = 0, candidate still 20
//     - Element 40 changes candidate to 40, vote = 1
//     - Element 50 cancels vote → votes = 0, candidate still 40
//     - Element 50 changes candidate to 50, vote = 1
//     - Element 50 supports → votes = 2
//     - Element 50 supports → votes = 3
//     - Final candidate: 50 (verified to appear 4 times)
//
//   Key Insight: The voting algorithm works because:
//     - If majority element exists, it appears > n/2 times
//     - Even if other elements cancel its votes, it will have leftover votes
//     - The candidate that survives is likely the majority element
//     - We verify in Phase 2 to ensure it's actually majority
//
//   Comparison with Naive Approach:
//     Naive: O(n²) - For each element, counts occurrences (O(n) each)
//     Optimal: O(n) - Two passes: voting (O(n)) + verification (O(n))
//     Both have O(1) space complexity

let arr = [20, 30, 40, 50, 50, 50, 50];
console.log(findMajority(arr));
