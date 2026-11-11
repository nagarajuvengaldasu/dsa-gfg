// ========== Longest Subarray with Equal 0s and 1s (OPTIMAL) ==========
// Idea: Replace 0 with -1. Then "equal 0s and 1s" = sum 0. So we need longest
//       subarray with sum 0 in the new array (prefix-sum + hash map).
//       Time: O(n), Space: O(n).

// Step 1 — Replace 0 with -1. Step 2 — Longest subarray with sum 0 = longest with equal 0s and 1s.
function longestSubarrayWithEqual0sAnd1s(arr) {
  let n = arr.length;
  // Step 1: Convert 0 → -1 so that "equal 0s and 1s" becomes "sum = 0"
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      arr[i] = -1;
    }
  }

  // Step 2: Find length of longest subarray with sum 0 (prefix-sum + hash map)
  function longestSubarrayWithZeroSum(arr) {
    // Map: prefixSum -> first index where this sum was seen
    let map = new Map();
    let prefixSum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
      prefixSum += arr[i];
      // Step 2a: If prefix sum is 0, subarray [0..i] has sum 0
      if (prefixSum === 0) {
        maxLen = Math.max(maxLen, i + 1);
      }
      // Step 2b: If prefix sum was seen before at index j, subarray [j+1..i] has sum 0
      if (map.has(prefixSum)) {
        maxLen = Math.max(maxLen, i - map.get(prefixSum));
      } else {
        map.set(prefixSum, i);
      }
    }
    return maxLen;
  }

  return longestSubarrayWithZeroSum(arr);
}

// ---------- Example: arr = [1, 0, 1, 1, 1, 0, 0] → after replace: [1,-1,1,1,1,-1,-1] ----------
// Longest subarray with sum 0 in replaced array = longest with equal 0s and 1s in original.

let arr = [1, 0, 1, 1, 1, 0, 0];
console.log(longestSubarrayWithEqual0sAnd1s(arr));
