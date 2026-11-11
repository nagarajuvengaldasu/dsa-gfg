// ========== Subarray with Given Sum (OPTIMAL - Prefix Sum + Set) ==========
// Goal: Check if there exists a contiguous subarray that sums to 'sum'.
// Idea: If prefix_sum - sum was seen at some index j, then subarray from
//       (j+1) to i has sum = (prefix_sum - prefix_sum_j) = sum. So we store
//       prefix sums in a Set and check (prefix_sum - sum) at each step.
//       Time: O(n), Space: O(n).

function subarraywithsum(arr, sum) {
  // Step 1: Set to store prefix sums seen so far
  let s = new Set();
  let pref_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Step 2: Update prefix sum up to index i
    pref_sum += arr[i];

    // Step 3: If prefix sum equals target, subarray [0..i] has sum 'sum'
    if (pref_sum === sum) {
      return true;
    }
    // Step 4: If (pref_sum - sum) was seen at index j, subarray [j+1..i] has sum 'sum'
    if (s.has(pref_sum - sum)) {
      return true;
    }
    // Step 5: Store current prefix sum for future checks
    s.add(pref_sum);
  }
  return false;
}

// ---------- Example: arr = [5, 3, 2, -1], sum = 4 ----------
// i=0: pref_sum=5, 5!==4, s.has(0)? No → s = {5}
// i=1: pref_sum=8, 8!==4, s.has(4)? No → s = {5, 8}
// i=2: pref_sum=10, s.has(6)? No → s = {5, 8, 10}
// i=3: pref_sum=9, 9!==4, s.has(5)? Yes → return true (subarray [1..3]: 3+2+(-1)=4)

let arr = [5, 3, 2, -1];
let sum = 4;
console.log(subarraywithsum(arr, sum));
