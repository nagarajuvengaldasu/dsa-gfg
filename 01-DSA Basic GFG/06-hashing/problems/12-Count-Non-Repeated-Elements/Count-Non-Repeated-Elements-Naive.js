function countNonRepeated(arr, n) {
  let count;
  let result = 0;
  for (let i = 0; i < n; i++) {
    count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result++;
    }
  }
  return result;
}
let arr = [10, 20, 30, 40, 10];
let n = arr.length;
console.log(countNonRepeated(arr, n));
