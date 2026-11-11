function countdigits(n){
  let count =0;
  let sum=0;
  while(n>0){
    let rem = n%10;
    sum= sum + rem;
    n=Math.floor(n/10);
    count++
  }
  return [ sum , count]
}
let n=345
console.log(countdigits(n))