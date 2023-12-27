function* generator() {
  let a = null
  a++;
  yield a;
  a++;
  yield a;
  a++;
  yield a;
  a++;
  return a;
}

var g = generator();
// 每次next返回下一个状态{value: "val", done: false}
// 惰性求值
console.log(g.next());
console.log(g.next(12));
console.log(g.next());
console.log(g.next()); // 到return后{value: "val", done: true}
console.log(g.next()); // 之后再调用next{value: "underfined", done: true}