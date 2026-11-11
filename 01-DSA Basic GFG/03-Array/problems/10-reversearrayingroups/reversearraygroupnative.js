// Native Approach - Using Extra Space
function reversearraygroupsNative(arr, k) {
  let n = arr.length;
  let result = [];
  
  // Process array in chunks of k
  for (let i = 0; i < n; i += k) {
    let end = Math.min(i + k, n);
    
    // Get the current chunk
    let chunk = arr.slice(i, end);
    
    // Reverse the chunk
    let reversedChunk = chunk.reverse();
    
    // Add reversed chunk to result
    result.push(...reversedChunk);
  }
  
  return result;
}

// Alternative Native Approach - Using for loops
function reversearraygroupsNative2(arr, k) {
  let n = arr.length;
  let result = [];
  
  for (let i = 0; i < n; i += k) {
    let chunk = [];
    
    // Collect elements for this chunk
    for (let j = i; j < Math.min(i + k, n); j++) {
      chunk.push(arr[j]);
    }
    
    // Reverse by pushing from end to start
    for (let j = chunk.length - 1; j >= 0; j--) {
      result.push(chunk[j]);
    }
  }
  
  return result;
}


let arr = [5,6,8,9];
let k = 5;
console.log(reversearraygroupsNative(arr, k));
console.log(reversearraygroupsNative2(arr, k));