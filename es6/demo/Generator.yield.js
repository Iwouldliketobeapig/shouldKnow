function* proxied(){
  yield "a";
  yield "b";
  return "proxied"
}

function* proxing(){
  yield "x";
  let back = yield* proxied();
  console.log(back); // 能够获取被代理函数的返回值
  yield* "du" // 具有Iterator接口的，都可以被yield*遍历
}

let g = proxing();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());