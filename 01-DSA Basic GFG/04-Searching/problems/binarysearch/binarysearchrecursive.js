function binarysearchrecursive(arr, x, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === x) {
    return mid;
  } else if (arr[mid] > x) {
    return binarysearchrecursive(arr, x, low, mid - 1);
  } else {
    return binarysearchrecursive(arr, x, mid + 1, high);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 3;
let n = arr.length;
let low = 0;
let high = n - 1;
console.log(binarysearchrecursive(arr, x, low, high));
