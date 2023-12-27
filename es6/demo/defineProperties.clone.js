const clone = (init, obj) => {
  Object.defineProperties(init, Object.getOwnPropertyDescriptors(obj));
  return init;
}

export default clone;

// test
// let obj = {
//   a: 1,
//   set foo(value) {
//     console.log(value);
//   }
// };
// let init = {};
// console.log(clone(init, obj));