let smail = "smail";

class person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  // 方法名之间不能打空格
  consoleName () {
    console.log(this.name);
  }
  consoleSex () {
    console.log(this.sex);
  }
  [smail] () {
    console.log("smail");
  }
}

// 利用Object.assign像类添加方法
Object.assign(person.prototype, {
  hi() {
    console.log(`hi ${this.name}`);
  },
  hiSex() {
    console.log(`hi ${this.sex}`);
  }
});

let dutao = new person("dutao", "man");
dutao.consoleName();
dutao.consoleSex();
dutao.hi();
dutao.hiSex();
dutao.smail();
let personPro = Object.keys(person.prototype);
console.log(personPro);