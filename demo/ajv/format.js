const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  'properties': {
    'underFormat': {
      'format': 'underFormat'
    }
  }
};

let test = {
  underFormat: "123"
};

const validata = ajv.compile(schema);
const boolean = validata(test);

console.log(boolean); // 报未知的format

