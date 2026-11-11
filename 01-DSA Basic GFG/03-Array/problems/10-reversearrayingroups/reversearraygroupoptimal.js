function reversearraygroups(arr, k) {
  let n = arr.length;
  if (k > n) {
    // return reverse array
    reversearray(arr, 0, n - 1);
    return arr;
  }
  for (let i = 0; i < n; i += k) {
    let start = i;
    let end = Math.min(i + k - 1, n - 1);
    reversearray(arr, start, end);
  }
  return arr;
}
function reversearray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
let arr = [3, 4, 1, 2];
let k = 2;
console.log(reversearraygroups(arr, k));
