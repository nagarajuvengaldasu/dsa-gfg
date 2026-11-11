function minimumDifference(arr){
  let n = arr.length;
  let res = Number.POSITIVE_INFINITY;
  arr.sort((a,b) => a -b);

  for(let i=1;i<n;i++){
    res = Math.min(res , Math.abs(arr[i] - arr[i-1]));
  }
  return res;
}
let arr = [10, 9, 11, 4];
console.log(minimumDifference(arr));