function rearrangearrayoptimal(arr){
  let n = arr.length;
  for(let i=0;i<n;i++){
    arr[i] = arr[i] + (arr[arr[i]]%n)*n;
  }
  for(let i=0;i<n;i++){
    arr[i] = Math.floor(arr[i]/n);
  }
  return arr;
}
let arr = [4,0,2,1,3];
console.log(rearrangearrayoptimal(arr));