// ========== Intersection of Two Unsorted Arrays (OPTIMAL - Hashing) ==========
// Goal: Find all elements that appear in BOTH arrays.
// Idea: Put all elements of second array in a Set (or object). Then for each
//       element in first array, check if it exists in the set. O(1) lookup.
//       Time: O(n+m), Space: O(m).

function intersection(a, b) {
  // time complexity: O(n+m)
  // space complexity: O(m)
  let n = a.length;
  let m = b.length;

  // Step 1: Build a hash of second array — every element in b is "present"
  let result = {};
  for (let i = 0; i < m; i++) {
    // o(m) operations — mark b[i] as seen
    result[b[i]] = 1;
  }

  // Step 2: For each element in first array, check if it's in the hash
  for (let i = 0; i < n; i++) {
    // o(n) operations — O(1) lookup
    if (result[a[i]] === 1) {
      console.log(a[i]); // Step 3: Found in both → print
    }
  }
}

// ---------- Example: a = [4,3,2,1], b = [3,4,5] ----------
// Step 1: result = { 3:1, 4:1, 5:1 }
// Step 2: a[0]=4 → result[4]===1 → print 4
//         a[1]=3 → result[3]===1 → print 3
//         a[2]=2 → result[2] undefined → skip
//         a[3]=1 → result[1] undefined → skip

let a = [4, 3, 2, 1];
let b = [3, 4, 5];
intersection(a, b);
