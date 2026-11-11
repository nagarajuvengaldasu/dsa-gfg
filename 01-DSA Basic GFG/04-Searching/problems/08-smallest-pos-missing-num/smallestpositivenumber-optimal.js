function smallestPositiveMissingNumber(arr, n) {
  for (let i = 0; i < n; i++) {
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}
let arr = [0, -10, 1, 3, -20];
let n = arr.length;
console.log(smallestPositiveMissingNumber(arr, n));
