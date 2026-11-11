function countWords(str) {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count;
}
let str = "Hello World";
let wordCount = countWords(str);
console.log(wordCount);
