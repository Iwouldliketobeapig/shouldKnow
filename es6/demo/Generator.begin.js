function* generator() {
  yield "dutao";
  yield "is";
  yield "handsome";
  return "ending";
}

var g = generator();
// 每次next返回下一个状态{value: "val", done: false}
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next()); // 到return后{value: "val", done: true}
console.log(g.next()); // 之后再调用next{value: "underfined", done: true}