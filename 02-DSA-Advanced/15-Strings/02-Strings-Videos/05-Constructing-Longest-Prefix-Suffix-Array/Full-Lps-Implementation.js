function fillLPS(str, lps){
  lps[0] = 0;
  let i =1;
  let len = 0;
  while(i <str.length){
    if(str[i] === str[len]){
      len++;
      lps[i] = len;
      i++;
    }
    else{
      if(len === 0){
        lps[i] = 0;
        i++;
      }
      else{
        len = lps[len-1];
      }
    }
  }
}
let str = "ababacab";
let lps = new Array(str.length);
fillLPS(str, lps);
console.log(lps);