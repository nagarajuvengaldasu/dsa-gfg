function numbersum(n){
  if(n <= 9) return n 
  return ( n % 10 ) + numbersum(Math.floor(n/10));
}
let n=12345;
console.log(numbersum(n));