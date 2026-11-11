// ========== Longest Common Span with Same Sum (OPTIMAL) ==========
// Idea: diff[i] = arr1[i] - arr2[i]. Then sum(arr1[i..j]) = sum(arr2[i..j])  <=>
//       sum(diff[i..j]) = 0. So longest common span = longest subarray in diff with sum 0.
//       Use prefix-sum + Map for longest subarray with sum 0. Time O(n), Space O(n).

// Step 1 — diff[i] = arr1[i] - arr2[i]. Step 2 — Longest subarray with sum 0 in diff = longest common span.

function longestSubarrayWithZeroSum(arr) {
  // Map: prefixSum -> first index where this sum was seen
  let map = new Map();
  let prefixSum = 0;
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    // Step 1: If prefix sum is 0, subarray [0..i] has sum 0
    if (prefixSum === 0) {
      maxLen = Math.max(maxLen, i + 1);
    }
    // Step 2: If prefix sum was seen at index j, subarray [j+1..i] has sum 0
    if (map.has(prefixSum)) {
      maxLen = Math.max(maxLen, i - map.get(prefixSum));
    } else {
      map.set(prefixSum, i);
    }
  }
  return maxLen;
}

function longestCommonSpanWithSameSum(arr1, arr2) {
  let n = Math.min(arr1.length, arr2.length);
  // Step 1: Build diff array — diff[i] = arr1[i] - arr2[i]
  let diff = [];
  for (let i = 0; i < n; i++) {
    diff.push(arr1[i] - arr2[i]);
  }
  // Step 2: Longest subarray in diff with sum 0 = longest common span with same sum
  return longestSubarrayWithZeroSum(diff);
}

// ---------- Example: arr1 = [0,1,0,0,0,0], arr2 = [1,1,1,0,1,1] ----------
// diff = [-1, 0, -1, 0, -1, -1]. Longest subarray with sum 0 in diff gives answer.

let arr1 = [0, 1, 0, 0, 0, 0];
let arr2 = [1, 1, 1, 0, 1, 1];
console.log(longestCommonSpanWithSameSum(arr1, arr2));
