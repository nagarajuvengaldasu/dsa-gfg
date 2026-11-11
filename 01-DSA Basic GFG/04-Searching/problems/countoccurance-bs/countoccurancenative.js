function countoccurancenative(arr, x){
  let n = arr.length;
  let count = 0;
  // iterate through the array
  for(let i=0;i<n;i++){
    // check if the element is the target
    if(arr[i] === x){
      // if the element is the target, increment the count
      count++;
    }
  }
  // return the count
  return count;
}
let arr = [1,1,2,2,2,2,3,3,3,3,3];
let x = 3;
console.log(countoccurancenative(arr, x));