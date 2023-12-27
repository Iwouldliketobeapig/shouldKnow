function SuperClass(a, b) {
  this.a = a;
  this.b = b;
}

SuperClass.prototype.console = function () {
  console.log(this.a + this.b);
}

// let newSuperClass = new SuperClass(1, 2);
// newSuperClass.console();

function MyClass(...arr) {
  SuperClass.call(this, ...arr);
}

MyClass.prototype = Object.create(SuperClass.prototype, {
  c: {
    value: 12,
    writable: true
  }
});
MyClass.prototype.constructor = MyClass;
let newMyClass = new MyClass(2, 3);
newMyClass.console();
newMyClass.c = 13;
console.log(newMyClass.c);