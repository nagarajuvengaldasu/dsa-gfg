// ========== Longest Subarray with Equal 0s and 1s (NAIVE) ==========
// Goal: Find length of longest contiguous subarray with equal count of 0s and 1s.
// Idea: For each start i and end j, count 0s and 1s in arr[i..j]. When they're equal,
//       update max length = count0 + count1 (or j - i + 1).
//       Time: O(n²), Space: O(1).

function longestSubarrayWithEqual0sAnd1s(arr) {
  let n = arr.length;
  let res = 0;

  // Step 1: For each starting index i
  for (let i = 0; i < n; i++) {
    let count0 = 0;
    let count1 = 0;
    // Step 2: For each ending index j from i, extend subarray and count 0s and 1s
    for (let j = i; j < n; j++) {
      if (arr[j] === 0) {
        count0++;
      }
      if (arr[j] === 1) {
        count1++;
      }
      // Step 3: When 0s and 1s are equal, update max length
      if (count0 === count1) {
        res = Math.max(res, count0 + count1);
      }
    }
  }
  return res;
}

// ---------- Example: arr = [1, 0, 1, 1, 1, 0, 0] ----------
// Longest such subarray: [1,0,1,1,1,0,0] from index 1 to 6 → 3 zeros, 3 ones, length 6

let arr = [1, 0, 1, 1, 1, 0, 0];
console.log(longestSubarrayWithEqual0sAnd1s(arr));
