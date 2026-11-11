function removeduplicate(arr) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] !== arr[i + 1]) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
let arr = [1, 1, 1, 1, 1, 1, 1];
// let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5];
// let arr = [1, 2, 3, 4, 5, 6,4,454,454,,44,56,43];
// let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5];
console.log(removeduplicate(arr));
