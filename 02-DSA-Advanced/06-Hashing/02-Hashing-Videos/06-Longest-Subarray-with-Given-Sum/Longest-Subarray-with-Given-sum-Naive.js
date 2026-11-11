// ========== Longest Subarray with Given Sum (NAIVE) ==========
// Goal: Find length of the longest contiguous subarray that sums to 'sum'.
// Idea: For each starting index i, try all ending indices j >= i, compute
//       sum of arr[i..j] and update max length when sum matches.
//       Time: O(n²), Space: O(1).

function longestSubarraywithsum(arr, sum) {
  let n = arr.length;
  // Step 1: Result = max length found so far (0 if none)
  let res = 0;

  // Step 2: For each starting index i
  for (let i = 0; i < n; i++) {
    let current_sum = 0;
    // Step 3: For each ending index j from i to n-1
    for (let j = i; j < n; j++) {
      current_sum = current_sum + arr[j];
      // Step 4: If sum of arr[i..j] equals target, update max length
      if (current_sum === sum) {
        res = Math.max(res, j - i + 1);
      }
    }
  }
  return res;
}

// ---------- Example: arr = [5, 2, 3, 4], sum = 5 ----------
// i=0: j=0 → sum=5, res=1; j=1,2,3 → sum grows → res stays 1
// i=1: j=1 → sum=2; j=2 → sum=5, res=max(1,2)=2; ...
// i=2: j=2 → sum=3; j=3 → sum=7
// i=3: j=3 → sum=4 → res = 2

let arr = [5, 2, 3, 4];
let sum = 5;
console.log(longestSubarraywithsum(arr, sum));
