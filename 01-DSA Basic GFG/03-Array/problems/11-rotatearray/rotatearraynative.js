function rotateArray(arr, k) {
  let n = arr.length;
  let temp = new Array(n);
  for (let i = k; i <= n; i++) {
    temp[i - k] = arr[i];
  }
  for (let i = 0; i < k; i++) {
    temp[n - k + i] = arr[i];
  }
  return temp;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 3;
console.log(rotateArray(arr, k));
