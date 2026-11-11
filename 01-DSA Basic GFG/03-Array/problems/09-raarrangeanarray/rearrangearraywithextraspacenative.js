//this is the native solution to rearrange an array with extra space.
function rearrangearraywithextraspacenative(arr) {
  let n = arr.length;
  let temp = new Array(n);
  //what is meant by arr[arr[i]]?
  //it is the element at the index of the element at the index i
  //for example if arr[i] is 4, then temp[i] will be arr[arr[4]] which is arr[3]
  //so temp[i] will be arr[3]
  //so temp[i] will be 3
  //so temp[i] will be 3
  for (let i = 0; i < n; i++) {
    temp[i] = arr[arr[i]];
  }
  return temp;
}
let arr = [4, 0, 2, 1, 3];
console.log(rearrangearraywithextraspacenative(arr));
