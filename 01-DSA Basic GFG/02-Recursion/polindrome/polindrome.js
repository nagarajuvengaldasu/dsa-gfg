function polindrome(str , start ,end){
  if(start >= end){
    return true
  }
  return ((str[start] == str[end]) && polindrome(str, start+1 , end-1));
}
let str ='ammmma';
let start = 0;
let end = str.length - 1;
console.log(polindrome(str , start ,end));