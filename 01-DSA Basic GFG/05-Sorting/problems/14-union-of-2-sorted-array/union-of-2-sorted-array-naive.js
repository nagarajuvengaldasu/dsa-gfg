function unionOfTwoSortedArray(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let res=[];
  for(let i=0;i<n1;i++){
    res.push(arr1[i]);
  }
  for(let i=0;i<n2;i++){
    if(res.includes(arr2[i])){
      continue;
    }
    else{
      res.push(arr2[i]);
    }
  }
  return res;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
console.log("result ", unionOfTwoSortedArray(arr1, arr2));