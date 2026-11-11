function lomutoPartition(arr, low, high) {
  // pivot is the last element in the array
  let pivot = arr[high];
  let i = low - 1; // pointer for the smaller element
  for (let j = low; j < high; j++) {
    // if the current element is smaller than the pivot, swap it with the element at the i pointer
    if (arr[j] < pivot) {
      i++; // increment the i pointer
      // swap the current element with the element at the i pointer
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // place the pivot at the correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  // return the index of the pivot
  return i + 1;
}
function quicksort(arr, low, high) {
  // if the array is not sorted, partition the array and sort the subarrays
  if (low < high) {
    // partition the array and get the index of the pivot
    let pivotpartition = lomutoPartition(arr, low, high);
    // sort the subarray before the pivot
    quicksort(arr, low, pivotpartition - 1);
    // sort the subarray after the pivot
    quicksort(arr, pivotpartition + 1, high);
  }
  // return the sorted array
  return arr;
}

let arr = [8, 4, 7, 9, 3, 10, 5];
console.log("unsorted array is : ", arr);
let low = 0;
let high = arr.length - 1;
console.log("sorted array is : ", quicksort(arr, low, high));
