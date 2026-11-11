function primefactor(n){
  if(n<= 1) return
  for(let i=2;i*i<=n;i++){
    while(n%i === 0){
      console.log(i);
      n=n/i;
    }
  }
  if(n>1){
    console.log(n);
  }
}
let n=12;
primefactor(n)