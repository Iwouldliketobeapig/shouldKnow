function Test(name) {
  if(new.target) {
    this.name = name;
  } else {
    throw new SyntaxError("you must use new");
  }
}

let test = new Test("dutao");
console.log(test.name);
// Test();

class TestClass {
  constructor(name) {
    console.log(new.target === TestClass);
    this.name = name;
  }
}

let testClass = new TestClass("dutao");