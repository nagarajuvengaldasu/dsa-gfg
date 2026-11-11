// ========== Longest Subarray with Given Sum (OPTIMAL - Prefix Sum + Map) ==========
// Goal: Find length of the longest contiguous subarray that sums to 'sum'.
// Idea: prefix[i] - prefix[j] = sum  =>  subarray [j+1..i] has sum 'sum', length = i - j.
//       Store first occurrence of each prefix sum in a Map. For current prefix_sum,
//       if (prefix_sum - sum) exists at index j, length = i - j; also handle prefix_sum === sum.
//       Time: O(n), Space: O(n).

function longestSubarraywithsum(arr, sum) {
  // Step 1: Map: prefix_sum -> first index where this sum was seen
  let m = new Map();
  let pre_sum = 0;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    // Step 2: Update prefix sum
    pre_sum += arr[i];

    // Step 3: If prefix sum equals target, subarray [0..i] has length i+1
    if (pre_sum === sum) {
      res = i + 1;
    }
    // Step 4: Store first occurrence only (so we get longest span)
    if (m.has(pre_sum) === false) {
      m.set(pre_sum, i);
    }
    // Step 5: If (pre_sum - sum) was seen at index j, subarray [j+1..i] has sum 'sum', length = i - j
    if (m.has(pre_sum - sum)) {
      res = Math.max(res, i - m.get(pre_sum - sum));
    }
  }
  return res;
}

// ---------- Example: arr = [5, 2, 3, -3, -2, 1, 4], sum = 5 ----------
// pre_sum: 5→res=1, 7→m, 10→m, 7→len=2, 5→len=5 (max), 6→m, 10→len=2 → res = 5

let arr = [5, 2, 3, -3, -2, 1, 4];
let sum = 5;
console.log(longestSubarraywithsum(arr, sum));
