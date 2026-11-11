function binarysearch(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 2;
console.log(binarysearch(arr, target));
