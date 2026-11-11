function largestRectangularAreaHistogram(arr) {
  let st = [];
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      let tp = st.pop();
      let curr = arr[tp] * (st.length === 0 ? i : i - st[st.length - 1] - 1);
      res = Math.max(res, curr);
    }
    st.push(i);
  }
  while (st.length > 0) {
    let tp = st.pop();
    let curr =
      arr[tp] *
      (st.length === 0 ? arr.length : arr.length - st[st.length - 1] - 1);
    res = Math.max(res, curr);
  }
  return res;
}
let arr = [60, 20, 50, 40, 30];
console.log(largestRectangularAreaHistogram(arr));
