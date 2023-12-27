// 获取不到then中的错误
let p1 = new Promise((resolve,reject) => {
  resolve("s1");
}).then((res) => {
  console.log(res);
  throw new Error("error1");
}, (res) => {
  console.log(res);
});

process.on("unhandledRejection", function(err, p) {
  console.error(err.stack);
}) // node用来监听未铺货的reject错误

// 写成catch可以获取到then中返回的错误
let p2 = new Promise((resolve,reject) => {
  resolve("s2");
}).then((res) => {
  console.log(res);
  throw new Error("error");
}).catch((res) => {
  console.log(res);
});

let p3 = new Promise((resolve,reject) => {
  resolve("s3");
}).then((res) => {
  console.log(res);
  throw new Error("error");
});

let p4 = new Promise((resolve,reject) => {
  resolve("s4");
}).then((res) => {
  console.log(res);
  throw new Error("error");
}).catch((res) => {
  console.log(res);
});

Promise.all([p1, p3])
.then(res => {
  console.log("it is me", res);
})
.catch(res => {
  console.log("it is all catch",res);
})

Promise.all([p2, p2])
.then(res => {
  console.log("it is me", res);
})
.catch(res => {
  console.log("it is all catch",res);
})