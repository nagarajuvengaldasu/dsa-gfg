function lastoccurancenative(arr, x){
  let n = arr.length;
  for(let i=n-1;i>=0;i--){
    if(arr[i] === x){
      return i;
    }
  }
  return -1;
}
let arr = [1,2,2,2,3,4,5,6,7,8,9];
let x = 2;
console.log(lastoccurancenative(arr, x));