function digitsum(n){
  if(n<10 && n>=1) return 1;
  return 1 + digitsum(Math.floor(n/10))
}
let n=23334;
console.log(digitsum(n));