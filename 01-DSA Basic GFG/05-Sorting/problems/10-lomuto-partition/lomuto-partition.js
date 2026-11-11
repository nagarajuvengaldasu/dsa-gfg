function lomutoPartition(arr, low, high) {
  let i = low - 1;
  // pivot is the last element in the array
  let pivot = arr[high];
  // iterate through the array and swap the elements less than the pivot with the current element
  for (let j = low; j < high; j++) {
    // if the current element is less than the pivot
    if (arr[j] < pivot) {
      // increment the index of the smaller element
      i++;
      // swap the elements
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // swap the pivot with the next element of the smaller element
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  // return the index of the pivot
  return i + 1;
}
let arr = [10, 80, 30, 90, 70, 50, 40, 20];
console.log("unsorted array is : ", arr);
let low = 0;
let high = arr.length - 1;
console.log("pivot index is : ", lomutoPartition(arr, low, high));
