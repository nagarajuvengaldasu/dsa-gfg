function tappingRainWater(arr){
  let n = arr.length;
  let res = 0;
  let lmax = [];
  let rmax = [];
  lmax[0] = arr[0];
  for(let i=1;i<n;i++){
    lmax[i] = Math.max(arr[i] , lmax[i-1]);
  }
  rmax[n-1] = arr[n-1];
  for(let i = n-2 ; i>=0;i--){
    rmax[i] = Math.max(arr[i] , rmax[i+1]);
  }
  for(let i =1;i<n;i++){
    res = res + Math.min(lmax[i] ,rmax[i]) - arr[i];
  }
  return res;
}

let arr = [3, 0, 1,0,4,0,2];
console.log(tappingRainWater(arr));