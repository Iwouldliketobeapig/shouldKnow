function* demo(x) {
  console.log(x, y, z);
  var y = 2 * (yield (x + 1));
  console.log(x, y, z);
  var z = (yield (y*2));
  console.log(x, y, z);
  yield(x + y + z);
}

n = demo(1);
console.log(n.next());
console.log(n.next(3));
console.log(n.next(6));