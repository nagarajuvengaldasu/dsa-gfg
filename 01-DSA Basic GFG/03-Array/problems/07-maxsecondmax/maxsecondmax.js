function maxsecondmax(arr) {
  let n = arr.length;
  let max = -1;
  let secmax = -1;

  if (n < 2) return "the array need two elements";

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      secmax = max;
      max = arr[i];
    } else if (arr[i] > secmax && arr[i] !== max) {
      secmax = arr[i];
    }
  }
  return [secmax, max];
}
let arr = [112, 22, 34, 4, 15];
console.log(maxsecondmax(arr));
