function arrayinsertindex(arr, idx) {
  arr.splice(idx, 0, 22);
  return arr;
}
let arr = [1, 2, 3, 4, 5];
let idx = 2;
console.log(arrayinsertindex(arr, idx));
