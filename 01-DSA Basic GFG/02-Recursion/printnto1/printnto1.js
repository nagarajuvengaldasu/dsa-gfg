function numbernto1(n){
  if(n<1) return 
  console.log(n);
  numbernto1(n-1);
}
let n=23;
numbernto1(n)