```text
/*
* index is valid in array
* Math.floor(): take integer down
* isFinite(): number is finite or not
*/
function isValidArrayIndex(index) {
  let i = parseFloat(index);
  return i >= 0 && Math.floor(i) === i && isFinite();
}
```