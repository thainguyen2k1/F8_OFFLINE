var x = 100;
var sum;
if (x <= 50) {
  sum = 1678 * x;
}
if (50 < x <= 100) {
  sum = 1678 * 50 + (x - 50) * 1734;
}
if (100 < x <= 200) {
  sum = 1678 * 50 + 50 * 1734 + (x - 100) * 2014;
}
if (200 < x <= 300) {
  sum = 1678 * 50 + 50 * 1734 + 100 * 2014 + (x - 200) * 2536;
}
if (300 < x <= 400) {
  sum = 1678 * 50 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (x - 300) * 2834;
}
if (x > 400) {
  sum =
    1678 * 50 +
    50 * 1734 +
    100 * 2014 +
    100 * 2536 +
    100 * 2834 +
    (x - 400) * 2927;
}
document.write(`${sum}`);
