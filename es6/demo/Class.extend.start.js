class Species {
  constructor(species){
    this.species = species;
  }

  consoleS () {
    console.log(this.species);
  }
}

class Person extends Species {
  constructor(species, name){
    super(species); // 声明
    this.name = name;
  }

  console () {
    super.consoleS(); // 调用
    console.log(`${this.species} name is ${this.name}`);
  }
}

console.log(Object.getPrototypeOf(Person)); // 从子类上获取父类
console.log(Person.__proto__); // __proto__指向父类
console.log(Person.prototype.__proto__ === Species.prototype);

let sExample = new Species("animal");
let dutao = new Person("person", "dutao");

console.log(dutao.__proto__.__proto__ === sExample.__proto__);

dutao.consoleS();
dutao.console();

// 原生构造函数的继承
class _Array extends Array {
  constructor(){
    super();
  }
}

var testA = new _Array();
testA.push("1");
console.log(testA);