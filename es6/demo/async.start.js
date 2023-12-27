function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

let asyncFn = async (word, time) => {
  await delay(time);
  console.log(word);
  return "async return is Promise"
}

asyncFn("hi dutao", 2000).then(
  (s) => {
    console.log(s);
  }
);

console.log("hi world");