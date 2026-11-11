function bubbleSort(arr) {
  let n = arr.length;
  // bubble sort algorithm
  // outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    // inner loop for comparisons
    for (let j = 0; j < n - i - 1; j++) {
      // comparison logic if the current element is greater than the next element then swap
      if (arr[j] > arr[j + 1]) {
        // swap logic
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let arr = [2, 3, 6, 5, 4, 8];
console.log("bubble sort ", bubbleSort(arr));
