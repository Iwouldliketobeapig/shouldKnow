let notSolve = async () => {
  await Promise.reject("bug 1");
  await console.log("do it 1");
}

notSolve().catch(function(e) {
  console.log(e);
});

let solve = async() => {
  try {
    await Promise.reject("bug 2"); 
  } catch(e) {};
  await console.log("do it 2");
}

solve();

let solve2 = async() => {
  await Promise.reject("bug 3")
  .catch(function(e) {
    console.log(e);
  });
  await console.log("do it 3");
}

solve2();