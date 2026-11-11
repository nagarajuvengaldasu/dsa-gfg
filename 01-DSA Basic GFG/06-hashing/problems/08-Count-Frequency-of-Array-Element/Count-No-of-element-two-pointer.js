function countFrequency(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < n) {
    while (j < n && arr[i] === arr[j]) {
      j++;
    }
    let count = j - i;
    console.log(arr[i] + " --> " + count);
    i = j;
  }
}
let arr = [10, 5, 10, 20, 20, 10, 20, 20];
countFrequency(arr);
