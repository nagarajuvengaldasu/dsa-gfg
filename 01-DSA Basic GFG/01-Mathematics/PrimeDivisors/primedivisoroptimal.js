function primedivisor(n){
  for(let i=1;i*i<=n;i++){
    if(n%i === 0){
      console.log(i)
      if(i !== n/i){
        console.log(n/i);
      }
    }
  }
}
let n=25;
primedivisor(n)
