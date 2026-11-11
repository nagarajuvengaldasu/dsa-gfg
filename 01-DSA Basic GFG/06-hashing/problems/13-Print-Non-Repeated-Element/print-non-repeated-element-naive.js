function printNonRepeated(arr, n) {
  let result = [];
  let count;
  for (let i = 0; i < n; i++) {
    count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
let arr = [1, 1, 2,2, 3, 3, 4, 5, 6, 7];
let n = 10;
console.log(printNonRepeated(arr, n));
