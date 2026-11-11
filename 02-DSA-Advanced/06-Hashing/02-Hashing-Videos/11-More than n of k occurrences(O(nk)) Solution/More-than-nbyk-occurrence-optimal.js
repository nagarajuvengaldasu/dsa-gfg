// ========== More than n/k Occurrences (OPTIMAL - Frequency Map) ==========
// Goal: Find all elements that appear more than n/k times in the array.
// Idea: 1) Build a map of each element -> its frequency (one pass, Θ(n)).
//       2) Traverse the map and print (or return) keys whose frequency > n/k.
//       Time: Θ(n), Space: O(n) for the map.

function moreThanNKOccurrence(arr, k) {
  let n = arr.length;
  // Threshold: element must appear strictly more than n/k times
  let threshold = n / k;

  // Step 1: Build a map to store each item and its frequency
  let m = new Map();
  for (let i = 0; i < n; i++) {
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }

  // Step 2: Traverse the map and print keys with frequency > n/k
  let result = [];
  for (let [key, count] of m) {
    if (count > threshold) {
      result.push(key);
      console.log(key); // or collect and return
    }
  }
  return result;
}

// ---------- Example: arr = [10, 20, 30, 10, 10, 20, 10], K = 3 ----------
// n = 7, n/k = 7/3 ≈ 2.33
// Step 1: m = { 10 → 4, 20 → 2, 30 → 1 }
// Step 2: 10 (4 > 2.33) → print 10; 20 (2 > 2.33? No); 30 (1 > 2.33? No)
// Output: 10

let arr = [10, 20, 30, 10, 10, 20, 10];
let k = 3;
console.log("Elements appearing more than n/k times:");
moreThanNKOccurrence(arr, k);
