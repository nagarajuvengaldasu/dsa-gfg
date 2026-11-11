function longestSubarrayOfEvenOdd(arr){
  let n = arr.length;
  let res = 1;
  let curr = 1;
  for(let i=1;i<n;i++){
    if((arr[i] %2 === 0 && arr[i-1] % 2 !== 0) || (arr[i] % 2 !== 0 && arr[i-1] % 2 === 0)){
      curr++;
      res = Math.max(res , curr);
    }
    else{
      curr = 1;
    }
  }
  return res;
}
let arr = [10, 12, 14, 7, 8];
console.log(longestSubarrayOfEvenOdd(arr));