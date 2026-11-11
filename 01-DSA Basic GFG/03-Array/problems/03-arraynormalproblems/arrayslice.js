function arrayslice(arr) {
  //slice the array
  //slice(start, end)
  //start is inclusive and end is exclusive
  let slicedArray = arr.slice(2, 5);
  return slicedArray;
}
let arr = [1, 2, 3, 4, 5];
console.log(arrayslice(arr));
