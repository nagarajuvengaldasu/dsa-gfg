function nextGreaterElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let ng = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        ng = arr[j];
        break;
      }
    }
    console.log(ng);
  }
}
let arr = [5, 15, 10, 8, 6, 12, 9, 18];
nextGreaterElement(arr);
