function moreThanNKOccurrence(arr, k) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > Math.floor(n / k)) {
      console.log(arr[i]);
    }
  }
}
let arr = [30, 10, 20, 20, 20, 10, 40, 30, 30];
let k = 4;
moreThanNKOccurrence(arr, k);
