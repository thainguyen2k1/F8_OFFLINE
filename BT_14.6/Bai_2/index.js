Array.prototype.filter2 = function(callback) {
  var newArray = this;
  var result = [];
  for (var i = 0; i < newArray.length; i++) {
    if (callback(i, newArray[i])) {
      result.push(newArray[i]);
    }
  }
  return result;
};
var a = [1, 2, 3, 4, 5, 6, 7];
var b = a.filter2(function(a, b) {
  return b % 2 == 0;
});
console.log(b);
