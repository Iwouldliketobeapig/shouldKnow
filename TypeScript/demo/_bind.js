Function.prototype._bind = function (context) {
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    self.apply(context, [...args, ...arguments])
  }
} 

var obj = {
  name: 'dutao',
  print: function (test, test1) {
    console.log(this.name, test, test1 )
  }
}

var obj2 = {
  name: 'chenshuai'
}

obj.print();
var test = obj.print._bind(obj2, 1);
test(3);