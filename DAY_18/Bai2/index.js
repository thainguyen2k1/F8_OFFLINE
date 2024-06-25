var n = 123456;
var a = n;
var i = 0;
var s = 0;
while (n > 1) {
  n /= 10;
  i++;
}
while (a > 0) {
  var y = a % 10;
  a = (a - y) / 10;
  s += y * 10 ** (i - 1);
  i--;
}
console.log(s);
