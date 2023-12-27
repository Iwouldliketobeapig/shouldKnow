function newClass (generate, ...arg) {
  const obj = Object.create(generate.prototype);
  // obj.__proto__ = generate.prototype
  generate.apply(obj, arg);
  return obj;
}

function Generate (a, b) {
  this.a = a;
  this.b = b;
}

Generate.prototype.sum = function () {
  return this.a + this.b;
}

const testA = new Generate(1, 2);
const testB = newClass(Generate, 1, 2);