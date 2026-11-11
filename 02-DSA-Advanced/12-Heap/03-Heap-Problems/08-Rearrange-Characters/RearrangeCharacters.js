// Time: O(n log n) | Space: O(n)
// problem statement: Given a string, rearrange the characters of the string so that no two adjacent characters are the same.
// example:
// Input: str = "geeksforgeeks"
// Output: "egeeksforgkees"
// explanation: The rearranged string is "egeeksforgkees"
// approach: Use a max heap to rearrange the characters.
// 1. Count the frequency of each character in the string.
// 2. Push the frequency of each character into the heap.
// 3. Pop the largest frequency character from the heap and add it to the result string.
class Solution {
  // step 1: count the frequency of each character in the string
  rearrangeCharacters(str) {
    // step 2: get the length of the string
    let n = str.length;
    // step 3: create a frequency array
    let freq = new Array(26).fill(0);
    // step 4: count the frequency of each character in the string
    for (let ch of str) {
      freq[ch.charCodeAt(0) - 97]++;
    }
    // step 5: create a heap
    let heap = [];
    // step 6: push the frequency of each character into the heap
    for (let i = 0; i < 26; i++) {
      // step 7: if the frequency of the character is greater than 0, push the frequency of the character into the heap
      if (freq[i] > 0) {
        // step 8: push the frequency of the character into the heap
        heap.push([freq[i], String.fromCharCode(i + 97)]);
        // step 9: heapify the heap
        this.heapifyUp(heap);
      }
    }
    // step 10: create a result string
    let result = "";
    // step 11: create a previous character
    let prev = null;

    // step 12: while the heap is not empty, pop the largest frequency character from the heap
    while (heap.length > 0) {
      // step 13: pop the largest frequency character from the heap
      let top = heap[0];
      // step 14: pop the last element from the heap
      let last = heap.pop();
      // step 15: if the heap is not empty, replace the first element with the last element
      if (heap.length > 0) {
        // step 16: replace the first element with the last element
        heap[0] = last;
        // step 17: heapify the heap
        this.heapifyDown(heap);
      }
      // step 18: get the character and the frequency from the top element
      let [count, ch] = top;
      // step 19: add the character to the result string
      result += ch;
      // step 20: decrement the frequency of the character
      count--;

      // step 21: if the previous character is not null and the frequency of the previous character is greater than 0, push the previous character into the heap
      if (prev && prev[0] > 0) {
        // step 22: push the previous character into the heap
        heap.push(prev);
        // step 23: heapify the heap
        this.heapifyUp(heap);
      }
      // step 24: update the previous character
      prev = [count, ch];
    }
    // step 25: if the length of the result string is not equal to the length of the string, return "0"
    if (result.length !== n) return "0";
    // step 26: return the result string

    return result;
  }

  heapifyUp(heap) {
    // step 1: get the index of the last element
    let index = heap.length - 1;
    // step 2: while the index is greater than 0, heapify the heap
    while (index > 0) {
      // step 3: get the index of the parent element
      let parent = Math.floor((index - 1) / 2);
      // step 4: if the parent element is greater than the current element, break
      if (heap[parent][0] >= heap[index][0]) break;
      // step 5: swap the parent element and the current element
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      // step 6: update the index of the current element
      index = parent;
    }
  }
  heapifyDown(heap) {
    // step 1: get the index of the current element
    let index = 0;
    // step 2: get the length of the heap
    let length = heap.length;
    while (true) {
      // step 3: get the index of the left child element
      let left = 2 * index + 1;
      // step 4: get the index of the right child element
      let right = 2 * index + 2;
      // step 5: Max-heap: find largest of parent and children
      let largest = index;
      // step 6: if the left child element is greater than the largest element, update the largest element
      if (left < length && heap[left][0] > heap[largest][0]) largest = left;
      // step 7: if the right child element is greater than the largest element, update the largest element
      if (right < length && heap[right][0] > heap[largest][0]) largest = right;
      // step 8: if the largest element is the current element, break
      if (largest === index) break;
      // step 9: swap the current element and the largest element
      [heap[index], heap[largest]] = [heap[largest], heap[index]];
      // step 10: update the index of the current element
      index = largest;
    }
  }
}
let solution = new Solution();
let str = "geeksforgeeks";
console.log(solution.rearrangeCharacters(str));
