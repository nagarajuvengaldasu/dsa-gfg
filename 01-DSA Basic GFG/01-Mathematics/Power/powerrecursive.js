function powerrecursive(n,m){
  if(m === 0) return 1;
  let temp = powerrecursive(n, Math.floor(m/2));
  if(m%2 === 0) return temp*temp;
  else return n*temp*temp;
}
let n=3;
let m=2;
console.log(powerrecursive(n,m));
