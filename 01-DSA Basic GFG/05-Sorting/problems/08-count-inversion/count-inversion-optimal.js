function countmerge(arr, low, mid, high) {
  let left = [];
  let right = [];
  for (let i = low; i <= mid; i++) {
    left.push(arr[i]);
  }
  for (let i = mid + 1; i <= high; i++) {
    right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = low,
    res = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      k++;
      i++;
    } else {
      arr[k] = right[j];
      k++;
      j++;
      // count the number of pairs (i, j) such that i < j and arr[i] > arr[j]
      res = res + (left.length - i); // (left.length - i) is the number of elements in left array that are greater than the current element in right array
    }
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
  return res;
}
function countinversion(arr, low, high) {
  let res = 0;
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    // count the number of inversions in the left subarray
    res += countinversion(arr, low, mid);
    // count the number of inversions in the right subarray
    res += countinversion(arr, mid + 1, high);
    // count the number of inversions in the merged array
    res += countmerge(arr, low, mid, high);
  }
  return res;
}
let arr = [4,1,3,9,7];
let low = 0;
let high = arr.length - 1;
console.log(countinversion(arr, low, high));
