function whohasmajority(arr) {
  let n = arr.length;
  let xcount = 0;
  let ycount = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      xcount++;
    }
    if (arr[i] === y) {
      ycount++;
    }
  }
  if (xcount === ycount) {
    return Math.min(xcount, ycount);
  }
  return Math.max(xcount, ycount);
}
let arr = [
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
];
let x = 2;
let y = 3;
console.log(whohasmajority(arr, x, y));
