function* gen() {
  this.name = "dutao";
  yield this.sex = "man";
  yield this.weight = "65kg";
}

gen.prototype.test = "test";

// 不能返回this
let g = gen();
console.log(g.test);
console.log(g.name);

// 利用call返回this
let obj = {};
let g1 = gen.call(obj);
g1.next();
g1.next();
g1.next();
console.log(obj.test);
console.log(obj.name);
console.log(obj.sex);
console.log(obj.weight);

// 利用prototype
let g2 = gen.call(gen.prototype);
g2.next();
g2.next();
g2.next();
console.log(g2.test);
console.log(g2.name);
console.log(g2.sex);
console.log(g2.weight);