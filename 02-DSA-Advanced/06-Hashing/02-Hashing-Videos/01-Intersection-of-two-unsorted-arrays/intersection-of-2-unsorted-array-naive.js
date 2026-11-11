// ========== Intersection of Two Unsorted Arrays (NAIVE) ==========
// Goal: Find all elements that appear in BOTH arr1 and arr2.
// Idea: For each element in arr1, check if it exists in arr2 (nested loop).
//       Time: O(n*m), Space: O(1) or O(result size if we store result).

// using the extra space
function intersectionOf2UnsortedArrays(arr1, arr2) {
  // Step 1: Initialize empty result array and get lengths
  let result = [];
  let n = arr1.length;
  let m = arr2.length;

  // Step 2: For each element arr1[i], scan entire arr2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // Step 3: If arr1[i] equals any arr2[j], it's in intersection
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        break; // Step 4: Stop inner loop (avoid duplicates from same element)
      }
    }
  }
  // Step 5: Return collected intersection
  return result;
}

// ---------- Example: arr1 = [4,3,2,1], arr2 = [3,4,5] ----------
// i=0: arr1[0]=4 → j=0: 4≠3, j=1: 4===4 → push 4, break
// i=1: arr1[1]=3 → j=0: 3===3 → push 3, break
// i=2: arr1[2]=2 → no match
// i=3: arr1[3]=1 → no match → result = [4, 3]

let arr1 = [4, 3, 2, 1];
let arr2 = [3, 4, 5];
console.log(intersectionOf2UnsortedArrays(arr1, arr2));

// without using the extra space (print instead of storing)
function intersection(a, b) {
  let n = a.length;
  let m = b.length;
  // Step 1: For each element in first array
  for (let i = 0; i < n; i++) {
    let flag = 0;
    // Step 2: Check if a[i] exists in second array
    for (let j = 0; j < m; j++) {
      if (a[i] === b[j]) {
        flag = 1;
        break;
      }
    }
    // Step 3: If found, print it (no extra array)
    if (flag === 1) {
      console.log(a[i]);
    }
  }
}
let a = [4, 3, 2, 1];
let b = [3, 4, 5];
intersection(a, b);
