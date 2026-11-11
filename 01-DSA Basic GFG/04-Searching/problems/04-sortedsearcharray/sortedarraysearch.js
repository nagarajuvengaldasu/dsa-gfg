function sortedarraysearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // we calculate the middle index
    let mid = Math.floor((low + high) / 2);
    // if the middle element is equal to the target, we return true
    if (arr[mid] === target) {
      // we return true
      return true;
    } else if (arr[mid] > target) {
      // we move the high pointer to the left because the middle element is greater than the target
      high = mid - 1;
    } else {
      // we move the low pointer to the right because the middle element is less than the target
      low = mid + 1;
    }
  }
  // we return false if the target is not found
  return false;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 11;
console.log(sortedarraysearch(arr, target));
