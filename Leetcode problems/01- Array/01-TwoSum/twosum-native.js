function twoSum(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}
let arr = [2, 7, 11, 15];
let target = 18;
console.log(twoSum(arr, target));
