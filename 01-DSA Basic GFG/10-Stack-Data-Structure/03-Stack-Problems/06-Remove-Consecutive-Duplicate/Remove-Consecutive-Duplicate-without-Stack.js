function removeConsecutiveDuplicate(s){
  let str = "";
  let n = s.length;
  for(let i=0;i<n;i++){
    if(s.charAt(i) === s.charAt(i+1)){
      continue;
    }
    else{
      str += s.charAt(i);
    }
  }
  return str;
}
let s = "aaabbaaccd";
console.log(removeConsecutiveDuplicate(s));