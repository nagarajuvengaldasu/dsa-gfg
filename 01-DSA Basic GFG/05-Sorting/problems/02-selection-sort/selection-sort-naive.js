function selectionSort(arr) {
  let n = arr.length;
  // selection sort algorithm
  // outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    // inner loop for comparisons
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      // comparison logic if the current element is greater than the next element then swap
      if (arr[min_idx] > arr[j]) {
        // update the minimum index
        min_idx = j;
      }
    }
    // swap the minimum element with the current element
    [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
  }
  return arr;
}
let arr = [2, 3, 6, 5, 4, 8];
console.log("selection sort ", selectionSort(arr));
