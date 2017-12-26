const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  'properties': {
    'age': {
      type: 'number',
      // maximum: 12,
      minimum: 2,
      exclusiveMaximum: 12, // 不包含边缘值
      // exclusiveMinimum: 2,
      multipleOf: 2.5 // 倍数
    }
  }
};

let valieDate = {
  age: 10
}

let valiedate = ajv.compile(schema);
let valie = valiedate(valieDate);

valieDate.age = "abc";
let valie0 = valiedate(valieDate);

console.log(valie);
console.log(valie0);

