// ========== Count Distinct Elements in Every Window (OPTIMAL - Sliding Window + Map) ==========
// Goal: For each window of size k, output count of distinct elements.
// Idea: Use a Map (element -> frequency). Build map for first window. Then slide:
//       remove leftmost element (decrement/delete if 0), add new right element.
//       Distinct count = map.size. Time: O(n), Space: O(k).

function countDistinctElementsInWindow(arr, k) {
  let m = new Map();

  // Step 1: Build frequency map for first window [0..k-1]
  for (let i = 0; i < k; i++) {
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }
  console.log(m.size); // Step 2: Distinct count for first window

  // Step 3: Slide window: for each new position i (from k to n-1)
  for (let i = k; i < arr.length; i++) {
    // Step 4: Remove element that leaves the window (leftmost: arr[i-k])
    m.set(arr[i - k], m.get(arr[i - k]) - 1);
    if (m.get(arr[i - k]) === 0) {
      m.delete(arr[i - k]);
    }
    // Step 5: Add new element entering from right (arr[i])
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
    console.log(m.size); // Step 6: Distinct count for this window
  }
}

// ---------- Example: arr = [1,2,1,3,4,2,3], k = 4 ----------
// First window: {1:2, 2:1, 3:1} → 3. Slide: remove 1 → add 4 → {1:1,2:1,3:1,4:1} → 4. Remove 2, add 2 → 4. Remove 1, add 3 → {2:1,3:2,4:1} → 3.

let arr = [1, 2, 1, 3, 4, 2, 3];
let k = 4;
countDistinctElementsInWindow(arr, k);
