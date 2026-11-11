// ========== STEP-BY-STEP: kthSmallest ==========
// Goal: Find the kth smallest element (1-based).
// Idea: Use partition like QuickSort. If pivot lands at index k-1, it's the answer.
//       Otherwise, recurse on left (if pivot index > k-1) or right (if < k-1).

function kthSmallest(arr, k) {
  // Step 1: Initialize search range = full array
  let l = 0;
  let h = arr.length - 1;

  while (l <= h) {
    // Step 2: Partition arr[l..h] around last element (pivot)
    //         Returns index p where pivot is now; all smaller elements are left of p.
    let p = partition(arr, l, h);

    // Step 3: Compare pivot index with target index k-1
    if (p === k - 1) {
      // Step 3a: Pivot is exactly at sorted position k-1 → this is the kth smallest
      return arr[p];
    } else if (p > k - 1) {
      // Step 3b: Pivot is to the right of k-1 → kth smallest is in the LEFT part
      h = p - 1;
    } else {
      // Step 3c: Pivot is to the left of k-1 → kth smallest is in the RIGHT part
      l = p + 1;
    }
  }
  return -1;
}

// ========== STEP-BY-STEP: partition (Lomuto, pivot = last element) ==========
// Rearranges arr[l..h] so that elements < pivot are on the left, pivot at final position.
// Returns the final index of the pivot.

function partition(arr, l, h) {
  // Step 1: Choose pivot = last element of range
  let pivot = arr[h];
  // Step 2: i = "border" of smaller elements; everything at indices l..i is < pivot
  let i = l - 1;

  // Step 3: Scan j from l to h-1
  for (let j = l; j < h; j++) {
    if (arr[j] < pivot) {
      i++;
      // Swap arr[i] and arr[j] so this smaller element joins the "left" part
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // Step 4: Place pivot at i+1 (everything at l..i is < pivot, so pivot belongs at i+1)
  [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
  return i + 1;
}

// ---------- Example run ----------
// arr = [13, 12, 11, 5, 4], k = 3 (we want 3rd smallest)
//
// Iteration 1: l=0, h=4. Partition with pivot=4 → p=0, arr = [4, 12, 11, 5, 13].
//              p(0) < k-1(2) → search right, l=1.
// Iteration 2: l=1, h=4. Partition with pivot=13 → p=4, arr unchanged.
//              p(4) > k-1(2) → search left, h=3.
// Iteration 3: l=1, h=3. Partition with pivot=5 → p=1, arr = [4, 5, 11, 12, 13].
//              p(1) < k-1(2) → search right, l=2.
// Iteration 4: l=2, h=3. Partition with pivot=12 → p=3.
//              p(3) > k-1(2) → search left, h=2.
// Iteration 5: l=2, h=2. Partition [11] → p=2. p === k-1 → return arr[2] = 11.

let arr = [3, 5, 4, 2, 9];
let k = 3;
console.log(kthSmallest(arr, k));
