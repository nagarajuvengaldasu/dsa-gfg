function threeWayPartition(arr, a, b) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] < a) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] > b) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      mid++;
    }
  }
  return true;
}
let arr = [1, 2, 3, 1, 3, 4];
let a = 1;
let b = 2;
console.log("result ", threeWayPartition(arr, a, b));
