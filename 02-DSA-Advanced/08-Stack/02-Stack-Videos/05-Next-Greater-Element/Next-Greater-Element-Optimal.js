function nextGreaterElement(arr) {
  let st = [];
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (st.length > 0 && st[st.length - 1] <= arr[i]) {
      st.pop();
    }
    let ng = st.length > 0 ? st[st.length - 1] : -1;
    res.push(ng);
    st.push(arr[i]);
  }
  for (let i = res.length - 1; i >= 0; i--) {
    console.log(res[i]);
  }
}
let arr = [5, 15, 10, 8, 6, 12, 9, 18];
nextGreaterElement(arr);
