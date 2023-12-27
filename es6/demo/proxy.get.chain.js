// 链式操作
let chain = (function(){
  return val => {
    let arrFun = [];
    let proCha = new Proxy({}, {
      get (target, propKey) {
        if (propKey === "chain") {
          return arrFun.reduce((value, fn) => {
            return fn(value);
          }, val)
        }
        arrFun.push(globalM[propKey]);
        return proCha;
      }
    });
    return proCha;
  }
}());

// test
var globalM = {}
globalM.include = str => {
  if (String(str).includes("str")) {
    return str;
  }
}
globalM.reverse = str => String(str).split("");
const data = chain("string").include.reverse.chain;
console.log(data);