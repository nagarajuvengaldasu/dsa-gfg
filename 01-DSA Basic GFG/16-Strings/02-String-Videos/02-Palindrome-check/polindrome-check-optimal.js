function polinfdromeoptimal(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return "Not Polindrome";
    }
    start++;
    end--;
  }
  return "Polindrome";
}
let str = "kanna";
console.log(polinfdromeoptimal(str));
