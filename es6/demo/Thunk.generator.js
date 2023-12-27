function thunk(fn){
  let g = fn();
  next = () => {
    let result = g.next(),
      value = result.value;
    if (result.done) return value;
    g.next(value);
    next();
  }
  next();
}

function* fn(){
  yield console.log("dutao");
  yield console.log("is");
  yield console.log("a good man");
}

thunk(fn);