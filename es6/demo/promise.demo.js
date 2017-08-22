let test = new Promise((resolve, reject) => {
  console.log("hello dutao");
});
test.then(() => {
  console.log("hello");
})

console.log("hello world");