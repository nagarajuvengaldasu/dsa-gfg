function firstoccur(arr) {
  let n = arr.length;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // find the middle index
    let mid = Math.floor((low + high) / 2);
    // check if the element is the target
    if (arr[mid] === 1) {
      // check if the element is the first occurrence
      if (mid === 0 || arr[mid - 1] !== 1) {
        return mid;
      }
      // if the element is not the first occurrence, move the high pointer to the left
      else {
        high = mid - 1;
      }
    }
    // if the element is less than the target, move the low pointer to the right
    else if (arr[mid] < 1) {
      low = mid + 1;
    }
    // if the element is greater than the target, move the high pointer to the left
    else {
      high = mid - 1;
    }
  }
  // if the element is not found, return -1
  return -1;
}
function count1(arr) {
  // find the first occurrence of the element
  let first = firstoccur(arr);
  // if the element is not found, return 0
  if (first === -1) {
    return 0;
  } else {
    return arr.length - first;
  }
}
let arr = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
console.log(count1(arr));
