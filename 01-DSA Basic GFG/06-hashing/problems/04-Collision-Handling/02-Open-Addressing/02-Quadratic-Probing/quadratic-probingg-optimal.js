function quadraticProbing(arr, n) {
  let hashTable = new Array(n).fill(-1);

  for (let ele of arr) {
    let idx = ele % n;
    let i = 0;
    let found = false;

    for (let i = 0; i < n; i++) {
      let temp = (idx + i * i) % n;
      if (hashTable[temp] === ele) {
        found = true;
        break;
      }
    }
    if (!found) {
      i = 0;
      while (i < n) {
        let temp = (idx + i * i) % n;
        if (hashTable[temp] === -1) {
          hashTable[temp] = ele;
          break;
        }
        i++;
      }
    }
  }
  return hashTable;
}
let arr = [21, 10, 33, 43];
let n = 5;
console.log(quadraticProbing(arr, n));
