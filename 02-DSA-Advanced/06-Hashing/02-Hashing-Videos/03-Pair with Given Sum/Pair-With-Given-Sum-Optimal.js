// ========== Pair with Given Sum (OPTIMAL - Hashing) ==========
// Goal: Check if there exist two elements in array that add up to 'sum'.
// Idea: For each element arr[i], we need (sum - arr[i]) to have been seen.
//       Use a Set to store elements seen so far; for current element check
//       if (sum - arr[i]) is in the set before adding arr[i].
//       Time: O(n), Space: O(n).

function pairWithGivenSum(arr, sum) {
  // Step 1: Set to store elements we've seen so far
  let s = new Set();

  for (let i = 0; i < arr.length; i++) {
    // Step 2: If (sum - arr[i]) was seen earlier, we have a pair (that element, arr[i])
    if (s.has(sum - arr[i])) {
      return true;
    }
    // Step 3: Add current element for future lookups
    s.add(arr[i]);
  }
  // Step 4: No pair found
  return false;
}

// ---------- Example: arr = [1,2,3,4], sum = 5 ----------
// i=0: arr[0]=1, need 4 → s.has(4)? No → s = {1}
// i=1: arr[1]=2, need 3 → s.has(3)? No → s = {1,2}
// i=2: arr[2]=3, need 2 → s.has(2)? Yes → return true (pair is 2, 3)

let arr = [1, 2, 3, 4];
let sum = 5;
console.log(pairWithGivenSum(arr, sum));
