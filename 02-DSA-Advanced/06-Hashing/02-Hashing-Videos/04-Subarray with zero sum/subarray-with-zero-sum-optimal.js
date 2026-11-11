// ========== Subarray with ZERO Sum (OPTIMAL - Prefix Sum + Set) ==========
// Goal: Check if there exists a contiguous subarray whose sum is 0.
// Idea: If prefix_sum[0..i] = prefix_sum[0..j] for i < j, then subarray
//       from index (i+1) to j has sum 0. So we track prefix sums in a Set;
//       if current prefix sum was seen before, we have a zero-sum subarray.
//       Time: O(n), Space: O(n).

function sunarraysum(arr) {
  // Step 1: Set to store prefix sums we've seen
  let s = new Set();
  let pref_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Step 2: Add current element to prefix sum
    pref_sum += arr[i];

    // Step 3: If this prefix sum was seen before, subarray from (first occurrence + 1) to i has sum 0
    if (s.has(pref_sum)) {
      return true;
    }
    // Step 4: If prefix sum itself is 0, subarray [0..i] has sum 0
    if (pref_sum === 0) {
      return true;
    }
    // Step 5: Record this prefix sum for future checks
    s.add(pref_sum);
  }
  return false;
}

// ---------- Example: arr = [3, -1, -2, 4] ----------
// i=0: pref_sum=3, s.has(3)? No, pref_sum!==0 → s = {3}
// i=1: pref_sum=2, s.has(2)? No → s = {3, 2}
// i=2: pref_sum=0 → return true (subarray [0..2] sums to 0: 3 + (-1) + (-2) = 0)

let arr = [3, -1, -2, 4];
console.log(sunarraysum(arr));
