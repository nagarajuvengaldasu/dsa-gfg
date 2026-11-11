function firstoccurance(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    // find the middle index
    let mid = Math.floor((low + high) / 2);
    // check if the element is the target
    if (arr[mid] === x) {
      // check if the element is the first occurrence
      if (mid === 0 || arr[mid - 1] !== x) {
        // if the element is the first occurrence, return the index
        return mid;
      } else {
        // if the element is not the first occurrence, move the high pointer to the left
        high = mid - 1;
      }
    } else if (arr[mid] > x) {
      // if the element is greater than the target, move the high pointer to the left
      high = mid - 1;
    } else {
      // if the element is less than the target, move the low pointer to the right
      low = mid + 1;
    }
  }
  // if the element is not found, return -1
  return -1;
}

function lastoccurance(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    // find the middle index
    let mid = Math.floor((low + high) / 2);
    // check if the element is the target
    if (arr[mid] === x) {
      // check if the element is the last occurrence
      if (mid === n - 1 || arr[mid + 1] !== x) {
        // if the element is the last occurrence, return the index
        return mid;
      } else {
        // if the element is not the last occurrence, move the low pointer to the right
        low = mid + 1;
      }
    } else if (arr[mid] > x) {
      // if the element is greater than the target, move the high pointer to the left
      high = mid - 1;
    } else {
      // if the element is less than the target, move the low pointer to the right
      low = mid + 1;
    }
  }
  // if the element is not found, return -1
  return -1;
}

function countoccurance(arr, x) {
  let first = firstoccurance(arr, x);
  if (first === -1) {
    // if the element is not found, return 0
    return 0;
  } else {
    // if the element is found, return the count
    return lastoccurance(arr, x) - first + 1;
  }
}
let arr = [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4];
let x = 3;
console.log(countoccurance(arr, x));
