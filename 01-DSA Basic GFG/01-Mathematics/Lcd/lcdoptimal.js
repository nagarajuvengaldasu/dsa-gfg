function lcd(x,y){
  let gcdvalue = gcd(x,y);
  let result = (x*y)/gcdvalue
  return result
}

function gcd(a,b){
  while(b!==0){
    a=a%b;
    [a,b]=[b,a]
  }
  return a
}

let x=20;
let y=34;
console.log(lcd(x,y))