function meanandmedian(arr) {
  let n = arr.length;
  let sum = 0;
  let mean;
  let median;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
  }

  mean = sum / arr.length;

  arr.sort((a, b) => a - b);

  if (n % 2 === 0) {
    median = (arr[Math.floor(n / 2)] + arr[Math.floor(n / 2 - 1)]) / 2;
  } else {
    median = arr[Math.floor(n / 2)];
  }
  return [mean.toFixed(2), median.toFixed(2)];
}
let arr = [1, 12, 13, 14, 15, 6];
console.log(meanandmedian(arr));
