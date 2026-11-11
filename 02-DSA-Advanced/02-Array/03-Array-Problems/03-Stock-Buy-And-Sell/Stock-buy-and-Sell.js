function stockBuyAndSell(arr){
  let n = arr.length;
  let res =0;
  for(let i=1;i<n;i++){
    if(arr[i] > arr[i-1]){
      res = res + arr[i] - arr[i-1];
    }
  }
  return res;
}
let arr = [100, 180, 260, 310, 40, 535, 695];
console.log(stockBuyAndSell(arr));