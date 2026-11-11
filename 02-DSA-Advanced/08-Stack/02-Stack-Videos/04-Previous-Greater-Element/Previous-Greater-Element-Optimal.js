function previousGreaterElement(arr) {
  let st = [];
  for (let i = 0; i < arr.length; i++) {
    while (st.length > 0 && st[st.length - 1] <= arr[i]) {
      st.pop();
    }
    let pg = st.length > 0 ? st[st.length - 1] : -1;

    console.log(pg);
    st.push(arr[i]);
  }
}
let arr = [20, 30, 10, 5, 15];
previousGreaterElement(arr);
