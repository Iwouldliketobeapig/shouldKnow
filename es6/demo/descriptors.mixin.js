let mix = (object) => ({
  with: (...mixins) => mixins.reduce(
    (c, mixin) => Object.create(
      c, Object.getOwnPropertyDescriptors(mixin)
    ), object)
});

export default mix

// test
// let a = { a1: 1 };
// let b = { b1: 2 };
// let c = { c1: 3 };
// let d = mix(c).with(a, b);
// console.log(d.c1);