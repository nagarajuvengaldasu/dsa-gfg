function reversearray(arr) {
  let n = arr.length;
  let temp = [];
  for (let i = n - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  return temp;
}
let arr = [1, 12, 13, 14, 15];
console.log(reversearray(arr));
