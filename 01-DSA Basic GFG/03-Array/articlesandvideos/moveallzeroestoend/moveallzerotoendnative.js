function moveAllZeroesToEnd(arr) {
  let n = arr.length;
  let temp = [];
  for(let i=0; i<n ; i++) {
    if(arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  for(let i=0; i<n ; i++) {
    if(arr[i] === 0) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
let arr = [0,1,0,3,12]
console.log(moveAllZeroesToEnd(arr));