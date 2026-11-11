function leftrotatebyoneoptimal(arr) {
  let n = arr.length;
  let temp = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;

  console.log(arr);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
leftrotatebyoneoptimal(arr);
