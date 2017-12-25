const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  'properties': {
    'age': {
      type: 'number',
      // maximum: 12,
      minimum: 2,
      exclusiveMaximum: 12
      // exclusiveMinimum: 2
    }
  }
};

let valieDate = {
  age: 11
}

let valiedate = ajv.compile(schema);
let valie = valiedate(valieDate);

valieDate.age = "abc";
let valie0 = valiedate(valieDate);

console.log(valie);
console.log(valie0);

