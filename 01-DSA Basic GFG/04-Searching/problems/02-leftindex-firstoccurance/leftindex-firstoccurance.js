function leftindexFirstOccurance(N, arr, target) {
  let low = 0;
  let high = N - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      if (mid === 0 || arr[mid - 1] !== target) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
let arr = [];
let N = arr.length;
let target = 3;
console.log(leftindexFirstOccurance(N, arr, target));
