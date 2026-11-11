function linearProbing(arr, n) {
  let hashtable = new Array(n).fill(-1);

  for (let value of arr) {
    let index = value % n;
    let originalIndex = index;

    while (true) {
      if (hashtable[index] === -1) {
        hashtable[index] = value;
        break;
      } else if (hashtable[index] === value) {
        break;
      }
      index = (index + 1) % n;
      if (index === originalIndex) {
        break;
      }
    }
  }
  return hashtable;
}
const arr = [5, 5, 5, 5];
const n = 5;
console.log(linearProbing(arr, n));
