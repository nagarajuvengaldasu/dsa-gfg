function count1(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let lastone = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === 1) {
      lastone = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return lastone + 1;
}
let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
console.log(count1(arr));
