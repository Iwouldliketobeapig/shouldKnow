const curryingAdd = (a: number): any => {
  return (b: number | undefined): any => {
    if (b) {
      return curryingAdd(a + b)
    } else {
      return a
    }
  }
}

console.log(curryingAdd(1)())
console.log(curryingAdd(1)(1)())
console.log(curryingAdd(1)(1)(1)())


