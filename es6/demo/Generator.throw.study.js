function* throwS() {
  try {
    yield 1;
  } catch(err) {
    console.log("说出来你不信1",err); // 内部捕获第一个
  } // 如果内部没有部署try...catch，将会被外部获取
  yield 2; 
}

function doG(g) {
  console.log(g.next());
  // g.throw(new Error("错啦1")); // 如果内部外部都没有try...catch
  try {
    g.throw(new Error("错啦1"));
    g.throw(new Error("错啦2"));
    console.log("没毛病");
  } catch(err) {
    console.log("说出来你不信2",err); // 外部捕获第二个
  }
  console.log(g.next()); // 内部捕获一次throw以后，done->true，value->undefined
  console.log(g.next());
}

doG(throwS());

function* throwS1() {
  yield console.log("1");
  try {
    yield console.log("2");
  } catch (err) {
    // console.log(err);
  }
  yield console.log("3");
}

function doG1(g) {
  g.next();
  g.next();
  g.throw(); // throw附带执行下一条yield表达式
}
doG1(throwS1());