var a;

let test = new Promise((resolve, reject) => {
  console.log("hello dutao");
  reject("reject");
});
let atest = test.then(() => {
  console.log("hello");
  a = "12312";
},(res) => {
  console.log(res, "+++");
})

console.log(a);
console.log("hello world");