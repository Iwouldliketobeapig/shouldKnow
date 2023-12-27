function* fun () {
  yield 1;
  yield 2;
  try {
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}

var g = fun();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.return(4));
console.log(g.next());
console.log(g.next());
console.log(g.next());