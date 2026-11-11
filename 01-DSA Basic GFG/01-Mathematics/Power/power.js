function power( n , m){
  let pow=1;
  for(let i=0;i<m;i++){
    pow=pow*n;
  }
  console.log(pow);
}
let n=2;
let m=3;
power(n,m)