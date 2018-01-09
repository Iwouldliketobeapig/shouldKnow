import {
  table
} from 'table';

let data, output, config;

data = [
  ['0a', '0b', '0c'],
  ['1a', '1b', '1c'],
  ['2a', '2b', '2c']
];

config = {
  columns: {
      0: {
          alignment: 'left',
          width: 10
      },
      1: {
          alignment: 'center',
          minWidth: 10
      },
      2: {
          alignment: 'right',
          minWidth: 10
      }
  }
};

output = table(data, config);
console.log(output);