heavy = arr => arr = [...(new Set(arr))];

heavyArrayFrom = arr => Array.from(new Set(arr));

// export default heavy
// test
let arr = [1, 1, 2, 2, 3];
arr = heavyArrayFrom(arr);
console.log(arr);