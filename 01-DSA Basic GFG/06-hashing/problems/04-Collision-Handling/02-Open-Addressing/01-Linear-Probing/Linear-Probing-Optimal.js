function linearProbing(arr, n) {
  let hashTable = new Array(n).fill(-1);
  let count = 0;
  for (let value of arr) {
    let index = value % n;
    if (count === n) break;
    while (hashTable[index] !== -1 && hashTable[index] !== value) {
      index = (index + 1) % n;
    }
    if (hashTable[index] === -1) {
      hashTable[index] = value;
      count++;
    }
  }
  return hashTable;
}
const arr = [5, 5, 5, 5];
const n = 5;
console.log(linearProbing(arr, n));
