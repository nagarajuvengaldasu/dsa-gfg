function kthSmallestElement(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
let arr = [3, 5, 4, 2, 9];
let k = 3;
console.log(kthSmallestElement(arr, k));
