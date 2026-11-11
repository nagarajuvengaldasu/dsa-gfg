function generateSubsets(str, curr="", index =0) {
  if(index == str.length){
    console.log(curr);
    return;
  }
  // exclude the current character
  generateSubsets(str, curr, index + 1);
  // include the current character
  generateSubsets(str, curr + str[index], index + 1);
}
let str = "abc";
generateSubsets(str);