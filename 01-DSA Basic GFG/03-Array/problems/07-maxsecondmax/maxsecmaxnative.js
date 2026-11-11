function maxsecmaxnative(arr) {
  let n = arr.length;

  if (n < 2) return "the array need two elements";

  arr.sort((a, b) => a - b);

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] !== arr[i]) {
      return `secmax is ${arr[i - 1]} and max is ${arr[i]} `;
    }
  }
  return "the array is not valid";
}
let arr = [112, 22, 34, 4, 15];
console.log(maxsecmaxnative(arr));
