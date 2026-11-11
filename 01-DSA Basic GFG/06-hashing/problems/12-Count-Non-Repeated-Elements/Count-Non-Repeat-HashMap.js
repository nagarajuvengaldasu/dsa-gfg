function countNonRepeated(arr, n) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      count++;
    }
  }
  return count;
}
let arr = [10, 20, 30, 40, 10];
let n = arr.length;
console.log(countNonRepeated(arr, n));























