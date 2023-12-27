heavy = arr => arr = [...(new Set(arr))];

heavyArrayFrom = arr => Array.from(new Set(arr));

traversal = arr => {
  let arr1 = [];
  arr.forEach( val => {
    if( !arr1.includes(val) ){
      arr1.push(val);
    } 
  })
  return arr1
}

// export default heavy
// test
let arr = [1, 1, 2, 2, 3];
arr = traversal(arr);
console.log(arr);