function prime(n) {
  let count=0;
  for(let i=1;i<=n;i++){
    if(n%i === 0){
      count++
    }
  }
  if(count === 2){
    return 'Prime'
  }
  else{
    return 'not prime'
  }
}
let n=31;
console.log(prime(n))