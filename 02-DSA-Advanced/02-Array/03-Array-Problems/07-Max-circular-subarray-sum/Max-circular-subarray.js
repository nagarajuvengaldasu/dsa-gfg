function maxCircularSubarraySum(arr){
  let n = arr.length;
  let sum = 0;
  arr.forEach((x) => {
    sum += x;
  });
  let maxend = arr[0];
  let minend = arr[0];
  let maxnormal = arr[0];
  let minnormal = arr[0];

  for(let i=1;i<n;i++){
    maxend = Math.max(maxend + arr[i] , arr[i]);
    maxnormal = Math.max(maxnormal , maxend);

    minend = Math.min(minend + arr[i] , arr[i]);
    minnormal = Math.min(minnormal , minend);
  }
  if(maxnormal < 0){
    return maxnormal;
  }
  return Math.max(maxnormal , sum - minnormal);
}
let arr = [8,-8,9,-9,10,-11,12];
console.log(maxCircularSubarraySum(arr));