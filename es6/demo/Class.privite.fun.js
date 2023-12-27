let fn = Symbol("dutao");
class Person {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  };

  _sayHi() {
    console.log(`hi ${this.name}`);
  }
  sayHello() {
    outHello.call(this);
  }
  [fn]() {
    console.log(`${this.name} is a ${this.sex}`);
  }
}

function outHello() {
  console.log(`hello ${this.name}`);
}

let person = new Person("dutao", "man")

person._sayHi();
person.sayHello();
person[fn]();

console.log(Object.keys(person));
console.log(Object.keys(Person.prototype));