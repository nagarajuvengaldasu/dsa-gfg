function number1ton(n){
  if(n<1) return 
  number1ton(n-1);
  console.log(n)
}
let n=12;
number1ton(n);