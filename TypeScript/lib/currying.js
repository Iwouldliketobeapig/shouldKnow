var curryingAdd = function (a) {
    return function (b) {
        if (b) {
            return curryingAdd(a + b);
        }
        else {
            return a;
        }
    };
};
console.log(curryingAdd(1)());
console.log(curryingAdd(1)(1)());
console.log(curryingAdd(1)(1)(1)());
