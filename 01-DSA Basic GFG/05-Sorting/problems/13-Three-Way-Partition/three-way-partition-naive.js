function threeWayPartition(arr, a, b) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] < a) {
      temp.push(arr[i]);
    } else if (arr[i] > a && arr[i] <= b) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  return arr;
}
let arr = [1, 2, 3, 3, 4, 10, 7, 8, 5, 6];
let a = 5;
let b = 7;
console.log("result ", threeWayPartition(arr, a, b));
