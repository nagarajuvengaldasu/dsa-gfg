function largestRectangularAreaHistogram(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] >= arr[i]) {
        curr += arr[i];
      } else {
        break;
      }
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        curr += arr[i];
      } else {
        break;
      }
    }
    res = Math.max(res, curr);
  }
  return res;
}
let arr = [6, 2, 5, 4, 1, 5, 6];
console.log(largestRectangularAreaHistogram(arr));
