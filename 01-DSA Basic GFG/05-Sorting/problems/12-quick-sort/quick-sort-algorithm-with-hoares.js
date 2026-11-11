function hoarsePartition(arr, low, high) {
  let i = low - 1;
  let j = high + 1;
  let pivot = arr[low];
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function quicksort(arr, low, high) {
  if (low < high) {
    let partition = hoarsePartition(arr, low, high);
    quicksort(arr, low, partition);
    quicksort(arr, partition + 1, high);
  }
  return arr;
}
let arr = [8, 4, 7, 9, 3, 10, 5];
console.log("unsorted array is : ", arr);
let low = 0;
let high = arr.length - 1;
console.log('sorted array is : ',quicksort(arr, low, high));
