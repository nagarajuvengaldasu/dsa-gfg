// we follow the eculidian theorem
function gcdoptimal(a,b){
  if(b === 0){
    return a;
  }
  return gcdoptimal(b,a%b)
}
let a =23;
let b=34;
console.log(gcdoptimal(a,b))