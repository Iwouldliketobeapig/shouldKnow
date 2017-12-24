const Ajv = require('ajv');

const ajv = new Ajv();

const strValidate = {
  validate: '/abc/i'
}
const schema = {
  'format': 'strValidate'
};
ajv.addFormat(name, numValidate);
const data = 'abcdefg';
