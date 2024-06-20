var x = 5;
var sumX = 0;
var n = 1;
for (var i = 1; i <= x; i++) {
  sumX += i;
}
for (i = 1; i <= x; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(` ${n} `);
    n++;
  }
  document.write("<br>");
}
