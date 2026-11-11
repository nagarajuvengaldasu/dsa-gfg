function sumincreasing(i,n){
  if(i === n ){
    return n;
  }
  return i + sumincreasing(i+1,n);
}
let n=5;
let i=1;
console.log(sumincreasing(i,n));