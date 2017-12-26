const Ajv = require('ajv');
var schema = {
  '$id': './schema/uri.json',
  'properties': {
    'test': {
      '$ref': { 'type': '' }
    }
  }
};
const data = {
  test: '12314'
};
const ajv = new Ajv({schemas: [schema]});
const validate = ajv.getSchema('./schema/uri.json');
console.log(validate(data));