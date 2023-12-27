keys = (o) => Reflect.ownKeys ? Reflect.ownKeys(o) : Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
export default keys;

// test
// const obj = {
//   a: 1,
//   b: 2
// };

// console.log(keys(obj));