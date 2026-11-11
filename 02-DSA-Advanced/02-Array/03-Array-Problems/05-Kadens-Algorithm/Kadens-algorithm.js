function kadensAlgorithm(arr){
  let n = arr.length;
  let res = arr[0];
  let maxsum = arr[0];
  for(let i=1;i<n;i++){
    maxsum = Math.max(maxsum+arr[i] , arr[i]);

    res = Math.max(res , maxsum);
  }
  return res;
}

let arr = [2,3,-8,7,-1,2,3];
console.log(kadensAlgorithm(arr));