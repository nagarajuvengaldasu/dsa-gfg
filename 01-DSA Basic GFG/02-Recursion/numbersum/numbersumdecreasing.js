function numbersum(n){
  if(n<1) return 0
  return n + numbersum(n-1);
}
let n=3;
console.log(numbersum(n));