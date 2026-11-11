// ========== Union of Two Unsorted Arrays (OPTIMAL - Set) ==========
// Goal: Count (or get) distinct elements that appear in EITHER array.
// Idea: Use a Set — add all elements from first array, then all from second.
//       Set automatically removes duplicates. Size = union count.
//       Time: O(n+m), Space: O(n+m).

function unionsize(a, b) {
  // time complexity: O(n+m)
  // space complexity: O(n+m)

  // Step 1: Create Set from first array — all distinct elements of 'a'
  let s = new Set(a); // o(n) operations

  // Step 2: Add each element of second array to the set (duplicates ignored)
  for (let i = 0; i < b.length; i++) {
    s.add(b[i]); // o(m) operations
  }

  // Step 3: Set size = number of distinct elements in union
  return s.size;
}

// ---------- Example: a = [1,2,3,4,5,6], b = [2,3,4] ----------
// Step 1: s = Set { 1, 2, 3, 4, 5, 6 }
// Step 2: add 2 (already there), add 3, add 4 → s unchanged
// Step 3: return 6

let a = [1, 2, 3, 4, 5, 6];
let b = [2, 3, 4];
console.log(unionsize(a, b));
