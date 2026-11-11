function trailingzero(n){
  let fact =1;
  let count =0;
  for(let i=1;i<=n;i++){
    fact = fact * i;
  }
  while(fact>0){
    if(fact%10 === 0){
      count++;
    }
    fact = Math.floor(fact/10);
  }
  return count
}

let n = 10;
console.log(trailingzero(n))