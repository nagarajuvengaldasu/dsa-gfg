function hashingpair(arr, n, sum) {
  for (let i = 0; i < n; i++) {
    count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] + arr[j] === sum) {
        return 1;
      }
    }
    return 0;
  }
}
let arr = [2, 5];
let n = arr.length;
let sum = 17;
console.log(hashingpair(arr, n, sum));
