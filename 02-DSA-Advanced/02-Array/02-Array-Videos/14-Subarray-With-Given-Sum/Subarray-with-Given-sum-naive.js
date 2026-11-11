/**
 * NAIVE APPROACH: Check if there exists a contiguous subarray with given sum
 *
 * LOGIC ANALYSIS:
 * ===============
 * The code checks ALL possible contiguous subarrays:
 * - Outer loop (i): starting position of the subarray
 * - Inner loop (j): ending position of the subarray
 * - For each starting position i, it extends the subarray by adding elements
 *
 * ALGORITHM:
 * 1. For each starting index i (0 to n-1)
 * 2.   For each ending index j (i to n-1)
 * 3.     Calculate sum of subarray from i to j
 * 4.     If sum equals target, return true
 * 5. If no subarray found, return false
 *
 * TIME COMPLEXITY: O(n²)
 * SPACE COMPLEXITY: O(1)
 */

function subarrayWithGivenSum(arr, sum) {
  let n = arr.length;

  // STEP 1: Outer loop - try each possible starting position
  // i represents the starting index of the subarray
  for (let i = 0; i < n; i++) {
    // STEP 2: Initialize sum for subarray starting at index i
    let res = 0;

    // STEP 3: Inner loop - extend the subarray from position i
    // j represents the ending index of the subarray
    // We start from j=i and extend to j=n-1
    for (let j = i; j < n; j++) {
      // STEP 4: Add current element to the running sum
      // This extends the subarray by one element each iteration
      res = res + arr[j];

      // STEP 5: Check if current subarray sum equals target
      if (res === sum) {
        return true; // Found a subarray with the given sum
      }
    }
  }

  // STEP 6: No subarray found with the given sum
  return false;
}

/**
 * EXECUTION TRACE with arr = [1, 4, 20, 3, 1, 5], sum = 33:
 * ===========================================================
 *
 * i=0 (starting at index 0):
 *   j=0: res = 0 + arr[0] = 0 + 1 = 1, check: 1 === 33? No
 *   j=1: res = 1 + arr[1] = 1 + 4 = 5, check: 5 === 33? No
 *   j=2: res = 5 + arr[2] = 5 + 20 = 25, check: 25 === 33? No
 *   j=3: res = 25 + arr[3] = 25 + 3 = 28, check: 28 === 33? No
 *   j=4: res = 28 + arr[4] = 28 + 1 = 29, check: 29 === 33? No
 *   j=5: res = 29 + arr[5] = 29 + 5 = 34, check: 34 === 33? No
 *   Subarrays checked: [1], [1,4], [1,4,20], [1,4,20,3], [1,4,20,3,1], [1,4,20,3,1,5]
 *
 * i=1 (starting at index 1):
 *   j=1: res = 0 + arr[1] = 0 + 4 = 4, check: 4 === 33? No
 *   j=2: res = 4 + arr[2] = 4 + 20 = 24, check: 24 === 33? No
 *   j=3: res = 24 + arr[3] = 24 + 3 = 27, check: 27 === 33? No
 *   j=4: res = 27 + arr[4] = 27 + 1 = 28, check: 28 === 33? No
 *   j=5: res = 28 + arr[5] = 28 + 5 = 33, check: 33 === 33? YES! ✓
 *   Subarray found: [4, 20, 3, 1, 5] with sum = 33
 *   Returns: true
 *
 * Final Result: true
 */

/**
 * LOGIC VERIFICATION:
 * ===================
 *
 * ✅ LOGIC IS CORRECT - The algorithm correctly finds contiguous subarrays
 *
 * POTENTIAL CONSIDERATIONS (not bugs, but things to be aware of):
 *
 * 1. EDGE CASES:
 *    - Empty array: Returns false (correct behavior)
 *    - sum = 0: Will find subarray only if there's a zero element or sum of some subarray = 0
 *    - Single element: Works correctly
 *
 * 2. NEGATIVE NUMBERS:
 *    - Works correctly with negative numbers
 *    - Example: arr = [1, -1, 2], sum = 0 → finds [1, -1] ✓
 *
 * 3. PERFORMANCE:
 *    - O(n²) time complexity (expected for naive approach)
 *    - Could be optimized to O(n) using prefix sum or sliding window
 *
 * 4. MULTIPLE SUBARRAYS:
 *    - Returns true on first match (doesn't find all subarrays)
 *    - If you need all subarrays, you'd need to collect results instead of returning
 *
 * 5. NO EARLY TERMINATION FOR IMPOSSIBLE CASES:
 *    - Continues checking even if remaining elements can't reach the sum
 *    - Could add optimization: if res > sum and all remaining are positive, break
 *    - But this optimization is complex and may not always help
 */

let arr = [3,2,0,4,7];
let sum = 89;
console.log(subarrayWithGivenSum(arr, sum)); // Expected output: false
