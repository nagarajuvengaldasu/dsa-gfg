function count1(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      count++;
    }
  }
  return count;
}
let arr = [0, 0, 0, 1, 1, 1, 1];
console.log(count1(arr));
