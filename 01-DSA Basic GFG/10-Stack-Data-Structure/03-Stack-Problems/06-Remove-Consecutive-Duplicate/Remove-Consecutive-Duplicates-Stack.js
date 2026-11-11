function removeConsecutiveDuplicate(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (stack.length === 0) {
      stack.push(char);
    } else {
      if (char !== stack[stack.length - 1]) {
        stack.push(char);
      }
    }
  }
  return stack.join("");
}
let s = "aaabbaaccd";
console.log(removeConsecutiveDuplicate(s));
