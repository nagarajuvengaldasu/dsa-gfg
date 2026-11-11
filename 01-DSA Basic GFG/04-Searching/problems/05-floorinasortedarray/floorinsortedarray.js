function floorinsortedarray(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let res = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // if the middle element is equal to the target, we store the middle element and move the low pointer to the right
    if (arr[mid] === x) {
      // we store the middle element in the result and move the low pointer to the right
      res = mid;
      // we move the low pointer to the right
      low = mid + 1;
    } else if (arr[mid] > x) {
      // we move the high pointer to the left because the middle element is greater than the target
      high = mid - 1;
    } else {
      // we move the low pointer to the right because the middle element is less than the target
      // and we store the middle element in the result and move the low pointer to the right
      res = mid;
      low = mid + 1;
    }
  }
  // we return the result
  return res;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 11;
console.log(floorinsortedarray(arr, x));
