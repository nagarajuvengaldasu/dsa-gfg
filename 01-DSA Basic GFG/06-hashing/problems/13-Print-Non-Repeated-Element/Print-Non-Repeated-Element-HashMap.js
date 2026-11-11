function printNonRepeated(arr, n) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      result.push(key);
    }
  }
  return result;
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7];
let n = 10;
console.log(printNonRepeated(arr, n));
