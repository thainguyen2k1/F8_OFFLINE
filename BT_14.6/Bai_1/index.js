Array.prototype.push2 = function(a) {
  this[this.length] = a;
};
var a = [1, 2, 3, 4];
var b = [2, 4];
a.push2(b);
console.log(a);
