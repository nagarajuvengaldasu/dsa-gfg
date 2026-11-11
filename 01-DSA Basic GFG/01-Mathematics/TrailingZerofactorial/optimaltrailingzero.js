function optimaltrailing(n) {
  let count = 0;
  for(let i=5;i<=n;i=i*5){
    count = count +Math.floor(n/i)
  }
}
let n = 10;
console.log(optimaltrailing(n));
