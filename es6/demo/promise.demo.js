let test = new Promise((resolve, reject) => {
  console.log("hello dutao");
  reject("reject");
});
test.then(() => {
  console.log("hello");
},(res) => {
  console.log(res);
})

console.log("hello world");