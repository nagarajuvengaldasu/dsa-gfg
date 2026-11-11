function previousGreaterElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        console.log(arr[j]);
        break;
      }
    }
    if (j === -1) {
      console.log(-1);
    }
  }
}
let arr = [20, 30, 10, 5, 15];
previousGreaterElement(arr);
