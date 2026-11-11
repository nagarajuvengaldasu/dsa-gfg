function lcdnormal(){
  let num = Math.max(a,b);
  while(true){
    if(num%a === 0 && num%b === 0){
      return num;
    }
    num++;
  }
}

let a =2;
let b=10;
console.log(lcdnormal(a,b))