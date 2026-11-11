function maxval(arr, i, j) {
  if (i + 1 === j) {
    return Math.max(arr[i], arr[j]);
  }
  return Math.max(
    Math.min(maxval(arr, i + 1, j - 1), maxval(arr, i + 2, j)) + arr[i],
    Math.min(maxval(arr, i + 1, j - 1), maxval(arr, i, j - 2)) + arr[j],
  );
}
let arr = [20, 5, 4, 6];
console.log(maxval(arr, 0, arr.length - 1));
