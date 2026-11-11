function firstocureancenative(arr, x){
  let n = arr.length;
  // iterate through the array
  for(let i=0;i<n;i++){
    // check if the element is the target
    if(arr[i] === x){
      // if the element is the target, return the index
      return i;
    }
  }
  // if the element is not found, return -1
  return -1;
}
let arr =[1,2,2,2,3,4,5,6,7,8,9];
let x=2;
console.log(firstocureancenative(arr, x));