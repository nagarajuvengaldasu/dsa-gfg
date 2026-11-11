function leftrotatebyonenative(arr) {
  let n = arr.length;
  let temp = [];
  for (let i = 1; i < n; i++) {
    temp.push(arr[i]);
  }
  temp.push(arr[0]);

  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
leftrotatebyonenative(arr);
