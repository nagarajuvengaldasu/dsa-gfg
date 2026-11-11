function gcdnormal( a, b){
  let minimum = Math.min(a,b)
  while(minimum>0){
    if(a%minimum === 0 && b%minimum === 0){
      return minimum
    }
    minimum--;
  }
  return minimum;
}
let a =23;
let b=60;
console.log(gcdnormal(a,b))