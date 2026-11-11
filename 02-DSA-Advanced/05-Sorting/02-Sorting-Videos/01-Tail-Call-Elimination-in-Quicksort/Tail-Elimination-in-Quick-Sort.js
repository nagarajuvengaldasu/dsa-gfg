// ========== STEP-BY-STEP: Tail Call Elimination in QuickSort ==========
// Goal: Sort the array using QuickSort with Lomuto partition, but avoid deep recursion
//       by always recursing on the SMALLER partition and looping on the larger one.
//       This keeps stack depth O(log n) instead of O(n) in the worst case.

// ---------- lomutoPartition: rearrange arr[low..high] around pivot = arr[high] ----------
// Step 1: Pivot = last element. i = "border" of elements ≤ pivot (starts before low).
// Step 2: For each j from low to high-1, if arr[j] ≤ pivot: advance i, swap arr[i] and arr[j].
// Step 3: Swap pivot (arr[high]) to position i+1; return pivot index i+1.
function lomutoPartition(arr, low, high) {
  let pivot = arr[high];   // Step 1: pivot = last element
  let i = low - 1;         // Step 1: i = border of "≤ pivot" region
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;                          // Step 2: extend "≤ pivot" region
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  // Step 3: place pivot at i+1
  return i + 1;
}

// ---------- quicksort: sort arr[low..high] using while-loop for one side (tail call elimination) ----------
// Step 1: While there is a range to sort (low < high):
//   Step 2: Partition and get pivot index.
//   Step 3: Recurse on the SMALLER partition; turn the LARGER partition into the next loop
//           by updating low/high so the next iteration handles it. This avoids deep recursion.
function quicksort(arr, low, high) {
  while (low < high) {
    let pivotindex = lomutoPartition(arr, low, high);  // Step 2: partition
    if (pivotindex - low < high - pivotindex) {
      quicksort(arr, low, pivotindex - 1);  // Step 3a: recurse on smaller (left)
      low = pivotindex + 1;                 // Step 3b: loop handles larger (right)
    } else {
      quicksort(arr, pivotindex + 1, high); // Step 3a: recurse on smaller (right)
      high = pivotindex - 1;                // Step 3b: loop handles larger (left)
    }
  }
  return arr;
}

// ---------- Example run: arr = [8,4,7,9,3,10,5] ----------
// First call: low=0, high=6. Partition pivot=5 → [4,3,5,9,8,10,7], pivotindex=2.
// Left size 2, right size 4 → recurse left [4,3], then loop with low=3.
// Next: arr[3..6]=[9,8,10,7], partition pivot=7 → ..., and so on until sorted.
let arr = [8, 4, 7, 9, 3, 10, 5];
console.log("original array: ", arr);
quicksort(arr, 0, arr.length - 1);
console.log("sorted array: ", arr);