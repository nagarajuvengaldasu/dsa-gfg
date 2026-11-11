function squareroot(n) {
  let k = Math.floor(n / 2);
  for (let i = 0; i < k; i++) {
    if (i * i <= n && (i + 1) * (i + 1) > n) {
      return i;
    }
  }
  // let i = 1;
  // while(i*i <= n){
  //   i++;
  // }
  // return i-1;
  // }
}
let n = 14;
console.log(squareroot(n));
