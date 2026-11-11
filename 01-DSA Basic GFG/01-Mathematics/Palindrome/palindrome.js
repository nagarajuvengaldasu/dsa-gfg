function polindrome(n){
  let rev =n;
  let sum = 0;
  while(n>0){
    let rem = n%10;
    sum = sum*10 + rem;
    n= Math.floor(n/10);
  }
  console.log(sum)
  if(rev === sum){
    return 'Polindrome'
  }
  else{
    return 'Not Polindrome'
  }
}
let n=232;
console.log(polindrome(n))