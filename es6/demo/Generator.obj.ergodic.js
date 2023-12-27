let obj = { name: "dutao", sex: "man" };
function*　ergodic(){
  let keys = Reflect.ownKeys(this);

  for(let key of keys) {
    yield [key, this[key]];
  }
}

// Object.defineProperty(obj, [Symbol.iteratir], ergodic)
obj[Symbol.iterator] = ergodic;

// objErgodic = ergodic();
// for(let [key, value] of ergodic(obj)){
//   console.log(`${key}: ${value}`);
// }
for(var [key, value] of obj) {
  console.log(key);
  console.log(value);
  //console.log(`${key}: ${value}`);
}