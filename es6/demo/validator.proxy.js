let validator = {
  set (target, propKey, value) {
    if ( propKey === "age" ) {
      if (!Number.isInteger(value)) {
        throw new TypeError(`the ${value} is not integer`);
      } 
      if (value < 0 || value > 150) {
        throw new RangeError(`the ${value} should a reasonable`);
      }
    }

    Reflect.set(target, propKey, value);
    //target[propKey] = value;
  }
}

let person = new Proxy({}, validator);

// test
// person.age = "dutao";
// person.age = 160;
person.age = 54;
person.name = "dutao"
console.log(person);