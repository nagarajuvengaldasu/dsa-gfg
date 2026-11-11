function maximumOccurredInteger(left, right){
  let freq = new Array(1000001).fill(0);
  let n = left.length;
  for(let i=0;i<n;i++){
    freq[left[i]]++;
    freq[right[i] + 1]--;
  }
  let res = 0;
  for(let i=1;i<=1000000;i++){
    freq[i] = freq[i] + freq[i-1];
    if(freq[i] > freq[res]){
      res = i;
    }
  }
  return res;
}

let left = [1,4,3,1];
let right = [15,8,5,4];
console.log(maximumOccurredInteger(left, right)); 