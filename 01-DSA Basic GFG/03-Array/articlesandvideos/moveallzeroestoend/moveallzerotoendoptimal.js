function moveAllZeroesToEnd(arr) {
  let n = arr.length;
  // we are using two pointer approach to move all zeroes to end
  let count =0;
  for(let i=0;i<n;i++){
    // if the current element is not zero, we swap it with the element at the count index
    if(arr[i] !== 0){
      // we swap the current element with the element at the count index
      [arr[i] , arr[count]] = [arr[count] , arr[i]] ;
      // we increment the count index
      count++;
    }
  }
  // we return the modified array
  return arr;
}
let arr = [0,1,0,3,12];
console.log(moveAllZeroesToEnd(arr));