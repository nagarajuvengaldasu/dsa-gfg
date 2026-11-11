// merge function of merge sort
function merge(arr, low, mid, high) {
  let left = [];
  let right = [];
  // because we need to sort the left array separately
  for (let i = low; i <= mid; i++) {
    left.push(arr[i]);
  }
  // because we need to sort the right array separately
  for (let j = mid + 1; j <= high; j++) {
    right.push(arr[j]);
  }
  // because we need to sort the merged array
  let i = 0;
  let j = 0;
  let k = low;
  // because we need to merge the left and right array
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  // because we need to merge the left array
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  // because we need to merge the right array
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
  return arr;
}
// merge sort function
  function mergesort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergesort(arr, low, mid);
    mergesort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
  return arr;
}
let arr = [10, 5, 30, 15, 7];
let low = 0;
let high = arr.length - 1;
console.log(mergesort(arr, low, high));
