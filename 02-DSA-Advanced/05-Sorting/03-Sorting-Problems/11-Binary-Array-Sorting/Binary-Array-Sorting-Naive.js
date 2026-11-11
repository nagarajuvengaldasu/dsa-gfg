function binaryArraySorting(arr) {
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      result.push(arr[i]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
let arr = [0, 1, 0, 1, 0, 1, 0, 1];
console.log(binaryArraySorting(arr));
