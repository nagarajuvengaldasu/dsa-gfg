function countTriangles(arr){
  let n = arr.length;
  let count =0;
  for(let i =0;i<n-2;i++){
    for(let j=i+1;j<n-1;j++){
      for(let k=j+1;k<n;k++){
        if(arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]){
          count++;
        }
      }
    }
  }
  return count;
}
let arr = [10,21,22,100,101,200,300];
console.log(countTriangles(arr));