function seperateChainingHashing(hashSize, arr) {
  // create a hash table with size hashSize and initialize it with empty arrays
  let hashTable = Array.from({ length: hashSize }, () => []);
  // iterate through the array and insert the elements into the hash table
  for (let num of arr) {
    // calculate the index for the element
    let index = num % hashSize;
    // insert the element into the hash table
    hashTable[index].push(num);
  }
  // return the hash table
  return hashTable;
}
let arr = [12,45,36,86,10];
let hashSize = 3;
console.log(seperateChainingHashing(hashSize, arr));
