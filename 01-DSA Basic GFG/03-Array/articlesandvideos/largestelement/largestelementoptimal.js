function largestelementoptimal(arr) {
  let max = arr[0];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
let arr = [231, 12, 3, 4, 15, 6, 7, 8, 59, 10];
largestelementoptimal(arr);
